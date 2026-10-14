/* Resolvedor do Solitaire Bíblico — usa exatamente as mesmas regras do toque no jogo.
   Usado na geração das partidas (para garantir que todas têm solução) e nas dicas. */
(function (root) {
  // st: { cols: [[[id, up]]], pool: [ids], slots: [{g, n} | null], done: n }
  // meta: { G(id) -> grupo, T(id) -> é carta-tema, need: cartas por história, total: histórias }
  function solve(start, meta, limit = 40000) {
    const { G, T, need, total } = meta;
    const key = s => s.cols.map(c => c.map(x => (x[1] ? '' : '_') + x[0]).join('.')).join('|') + '#' + s.pool.slice().sort().join('.') + '#' + s.slots.map(x => x ? x.g + x.n : '-').sort().join('.');
    const clone = s => ({ cols: s.cols.map(c => c.map(x => x.slice())), pool: s.pool.slice(), slots: s.slots.map(x => x && { ...x }), done: s.done });
    // destino único, igual ao que o toque escolhe
    function dest(s, ids, from) {
      const a = ids[0];
      if (T(a)) {
        const e = s.slots.indexOf(null); if (e >= 0) return { to: 's', si: e };
        if (ids.length > 1) return null;
      } else {
        const si = s.slots.findIndex(x => x && x.g === G(a)); if (si >= 0) return { to: 's', si };
        for (let ci = 0; ci < s.cols.length; ci++) {
          if (from.k === 'c' && from.ci === ci) continue; const col = s.cols[ci];
          if (col.length && G(col[col.length - 1][0]) === G(a)) return { to: 'c', ci2: ci };
        }
      }
      const useful = from.k === 's' || from.j > 0;
      if (useful) { const e = s.cols.findIndex((c, ci) => !c.length && !(from.k === 'c' && from.ci === ci)); if (e >= 0) return { to: 'c', ci2: e }; }
      return null;
    }
    function moves(s) {
      const out = [];
      const seenPool = new Set();
      for (const id of s.pool) { if (seenPool.has(id)) continue; seenPool.add(id); const d = dest(s, [id], { k: 's' }); if (d) out.push({ k: 's', id, ids: [id], ...d }); }
      s.cols.forEach((col, ci) => col.forEach((x, j) => {
        if (!x[1]) return; const ids = col.slice(j).map(y => y[0]);
        if (ids.length > 1 && ids.slice(1).some(id => T(id) || G(id) !== G(ids[0]))) return;
        const d = dest(s, ids, { k: 'c', ci, j }); if (d) out.push({ k: 'c', ci, j, ids, ...d });
      }));
      const pr = m => m.to === 's' ? (T(m.ids[0]) ? 4 : 5) : (m.k === 'c' && m.j > 0 && !s.cols[m.ci][m.j - 1][1]) ? 3 : (s.cols[m.ci2].length ? 1 : 0.5);
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
  const api = { solve, key: s => s.cols.map(c => c.map(x => (x[1] ? '' : '_') + x[0]).join('.')).join('|') + '#' + s.pool.slice().sort().join('.') + '#' + s.slots.map(x => x ? x.g + x.n : '-').sort().join('.') };
  if (typeof module !== 'undefined') module.exports = api; else root.SolitaireSolver = api;
})(typeof window !== 'undefined' ? window : globalThis);
