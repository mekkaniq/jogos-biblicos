/* Resolvedor do Solitaire Bíblico — usa exatamente as mesmas regras do toque no jogo.
   Usado na geração das partidas (para garantir que todas têm solução) e nas dicas. */
(function (root) {
  // st: { cols: [[[id, up]]], pool: [ids], slots: [{g, n} | null], done: n }
  // meta: { G(id) -> grupo, T(id) -> é carta-tema, need: cartas por história, total: histórias }
  function solve(start, meta, limit = 40000) {
    const { G, T, need, total } = meta;
    const key = s => s.cols.map(c => c.map(x => (x[1] ? '' : '_') + x[0]).join('.')).join('|') + '#' + s.pool.slice().sort().join('.') + '#' + s.slots.map(x => x ? x.g + x.n : '-').sort().join('.');
    const clone = s => ({ cols: s.cols.map(c => c.map(x => x.slice())), pool: s.pool.slice(), slots: s.slots.map(x => x && { ...x }), done: s.done });
    // todos os destinos válidos (o jogador pode tocar ou arrastar para qualquer um)
    function dests(s, ids, from) {
      const a = ids[0], out = [];
      if (T(a)) { const e = s.slots.indexOf(null); if (e >= 0) out.push({ to: 's', si: e }); }
      else { const si = s.slots.findIndex(x => x && x.g === G(a)); if (si >= 0) out.push({ to: 's', si }); }
      const useful = from.k === 's' || from.j > 0;
      let emptyDone = false;
      s.cols.forEach((col, ci) => {
        if (from.k === 'c' && from.ci === ci) return;
        if (!col.length) { if (useful && !emptyDone) { out.push({ to: 'c', ci2: ci }); emptyDone = true; } }
        else if (!T(a) && G(col[col.length - 1][0]) === G(a)) out.push({ to: 'c', ci2: ci });
      });
      return out;
    }
    function moves(s) {
      const out = [];
      const seenPool = new Set();
      for (const id of s.pool) { if (seenPool.has(id)) continue; seenPool.add(id); for (const d of dests(s, [id], { k: 's' })) out.push({ k: 's', id, ids: [id], ...d }); }
      s.cols.forEach((col, ci) => col.forEach((x, j) => {
        if (!x[1]) return; const ids = col.slice(j).map(y => y[0]);
        if (ids.length > 1 && ids.slice(1).some(id => T(id) || G(id) !== G(ids[0]))) return;
        for (const d of dests(s, ids, { k: 'c', ci, j })) out.push({ k: 'c', ci, j, ids, ...d });
      }));
      const pr = m => (m.to === 's' ? (T(m.ids[0]) ? 4 : 5) : (m.k === 'c' && m.j > 0 && !s.cols[m.ci][m.j - 1][1]) ? 3 : (s.cols[m.ci2].length ? 1 : 0.5)) + (m.k === 's' && meta.near ? meta.near(m.id) : 0);
      return out.map(m => ({ ...m, pr: pr(m) })).sort((a, b) => b.pr - a.pr);
    }
    function apply(s, m) {
      const n = clone(s);
      if (m.k === 's') n.pool.splice(n.pool.indexOf(m.id), 1);
      else { n.cols[m.ci].splice(m.j); const c = n.cols[m.ci]; if (c.length) c[c.length - 1][1] = true; }
      if (m.to === 's') {
        if (T(m.ids[0])) n.slots[m.si] = { g: G(m.ids[0]), n: m.ids.length - 1 }; else n.slots[m.si].n += m.ids.length;
        if (n.slots[m.si].n === need) { n.slots[m.si] = null; n.done++; }
      } else n.cols[m.ci2].push(...m.ids.map(id => [id, true]));
      return n;
    }
    const seen = new Set([key(start)]);
    const stack = [{ s: start, parent: null, move: null }]; let nodes = 0;
    while (stack.length) {
      const node = stack.pop();
      if (node.s.done === total) {
        const path = []; for (let n = node; n.parent; n = n.parent) path.unshift({ move: n.move, before: key(n.parent.s) });
        return { ok: true, nodes, path };
      }
      if (++nodes > limit) return { ok: null, nodes };
      const ms = moves(node.s);
      for (let i = ms.length - 1; i >= 0; i--) { const n = apply(node.s, ms[i]); const k = key(n); if (seen.has(k)) continue; seen.add(k); stack.push({ s: n, parent: node, move: ms[i] }); }
    }
    return { ok: false, nodes };
  }
  function cost(path, stockTopLast) {
    let stock = stockTopLast.slice(), waste = [], moves = 0;
    for (const p of path) {
      const m = p.move;
      if (m.k === 's') {
        let guard = 0;
        while (waste[waste.length - 1] !== m.id && guard++ < 400) {
          if (stock.length) { waste.push(stock.pop()); moves++; } else { stock = waste.reverse(); waste = []; }
        }
        waste.pop();
      }
      moves++;
    }
    return moves;
  }
  // Joga respeitando a ordem real do baralho (uma carta por vez), para estimar uma meta de movimentos justa
  function solveOrdered(start, stockTopLast, meta, limit = 60000) {
    const { G, T, need, total } = meta;
    const st0 = { cols: start.cols.map(c => c.map(x => x.slice())), stock: stockTopLast.slice(), waste: [], slots: start.slots.map(x => x && { ...x }), done: start.done, recyc: 0 };
    const key = s => s.cols.map(c => c.map(x => (x[1] ? '' : '_') + x[0]).join('.')).join('|') + '#' + s.stock.join('.') + '#' + s.waste.join('.') + '#' + s.slots.map(x => x ? x.g + x.n : '-').sort().join('.');
    const clone = s => ({ cols: s.cols.map(c => c.map(x => x.slice())), stock: s.stock.slice(), waste: s.waste.slice(), slots: s.slots.map(x => x && { ...x }), done: s.done, recyc: s.recyc });
    function dests(s, ids, from) {
      const a = ids[0], out = [];
      if (T(a)) { const e = s.slots.indexOf(null); if (e >= 0) out.push({ to: 's', si: e }); }
      else { const si = s.slots.findIndex(x => x && x.g === G(a)); if (si >= 0) out.push({ to: 's', si }); }
      const useful = from.k === 'w' || from.j > 0; let emptyDone = false;
      s.cols.forEach((col, ci) => {
        if (from.k === 'c' && from.ci === ci) return;
        if (!col.length) { if (useful && !emptyDone) { out.push({ to: 'c', ci2: ci }); emptyDone = true; } }
        else if (!T(a) && G(col[col.length - 1][0]) === G(a)) out.push({ to: 'c', ci2: ci });
      });
      return out;
    }
    function moves(s) {
      const out = [];
      if (s.waste.length) { const id = s.waste[s.waste.length - 1]; for (const d of dests(s, [id], { k: 'w' })) out.push({ k: 'w', ids: [id], ...d }); }
      s.cols.forEach((col, ci) => col.forEach((x, j) => {
        if (!x[1]) return; const ids = col.slice(j).map(y => y[0]);
        if (ids.length > 1 && ids.slice(1).some(id => T(id) || G(id) !== G(ids[0]))) return;
        for (const d of dests(s, ids, { k: 'c', ci, j })) out.push({ k: 'c', ci, j, ids, ...d });
      }));
      if (s.stock.length) out.push({ k: 'draw' }); else if (s.waste.length && s.recyc < 6) out.push({ k: 'recycle' });
      const pr = m => m.k === 'draw' ? 0.2 : m.k === 'recycle' ? 0.1 : m.to === 's' ? (T(m.ids[0]) ? 4 : 5) : (m.k === 'c' && m.j > 0 && !s.cols[m.ci][m.j - 1][1]) ? 3 : m.k === 'w' ? 2 : (s.cols[m.ci2].length ? 1 : 0.5);
      return out.map(m => ({ ...m, pr: pr(m) })).sort((a, b) => b.pr - a.pr);
    }
    function apply(s, m) {
      const n = clone(s);
      if (m.k === 'draw') { n.waste.push(n.stock.pop()); return n; }
      if (m.k === 'recycle') { n.stock = n.waste.reverse(); n.waste = []; n.recyc++; return n; }
      if (m.k === 'w') n.waste.pop();
      else { n.cols[m.ci].splice(m.j); const c = n.cols[m.ci]; if (c.length) c[c.length - 1][1] = true; }
      if (m.to === 's') {
        if (T(m.ids[0])) n.slots[m.si] = { g: G(m.ids[0]), n: m.ids.length - 1 }; else n.slots[m.si].n += m.ids.length;
        if (n.slots[m.si].n === need) { n.slots[m.si] = null; n.done++; }
      } else n.cols[m.ci2].push(...m.ids.map(id => [id, true]));
      return n;
    }
    const seen = new Set([key(st0)]); const stack = [{ s: st0, d: 0 }]; let nodes = 0;
    while (stack.length) {
      const node = stack.pop();
      if (node.s.done === total) return { ok: true, moves: node.d, nodes };
      if (++nodes > limit) return { ok: null, nodes };
      const ms = moves(node.s);
      for (let i = ms.length - 1; i >= 0; i--) { const n = apply(node.s, ms[i]); const k = key(n); if (seen.has(k)) continue; seen.add(k); stack.push({ s: n, d: node.d + (ms[i].k === 'recycle' ? 0 : 1) }); }
    }
    return { ok: false, nodes };
  }
  const api = { solve, solveOrdered, cost, key: s => s.cols.map(c => c.map(x => (x[1] ? '' : '_') + x[0]).join('.')).join('|') + '#' + s.pool.slice().sort().join('.') + '#' + s.slots.map(x => x ? x.g + x.n : '-').sort().join('.') };
  if (typeof module !== 'undefined') module.exports = api; else root.SolitaireSolver = api;
})(typeof window !== 'undefined' ? window : globalThis);
