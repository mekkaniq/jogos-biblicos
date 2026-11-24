"""Prepara um desenho de colorir para o app (24/11/2026).
Entrada: PNG de traço preto em fundo branco (qualquer tamanho, idealmente quadrado).
Saída (na pasta indicada): colorir-N.lines.png (traço, paleta de 6 cinzas), colorir-N.map.png
(regiões pintáveis: id = R*256 + G; 0 = traço/borda) e colorir-N.th.webp (miniatura com 320 px de largura).
Desenho quadrado sai em 1200x1200; os demais em 1200x900.
Imprime o número de regiões (campo "r" de dados-colorir.js).
Uso: python3 preparar_desenho.py <entrada.png> <N> <pasta_saida> [<pasta_saida2> ...]"""
import sys, os
import numpy as np
from PIL import Image
from scipy import ndimage

PALETA = [255, 204, 153, 102, 51, 0]


def preparar(entrada, n, saidas):
    im = Image.open(entrada).convert('L')
    # desenho quadrado vira 1200x1200 (o app aceita); outros formatos cabem em 1200x900
    W, H = (1200, 1200) if abs(im.width - im.height) < 20 else (1200, 900)
    esc = min(W / im.width, H / im.height)
    nw, nh = round(im.width * esc), round(im.height * esc)
    im = im.resize((nw, nh), Image.LANCZOS)
    x0, y0 = (W - nw) // 2, (H - nh) // 2
    g = np.full((H, W), 255, np.uint8)
    g[y0:y0 + nh, x0:x0 + nw] = np.asarray(im)

    # traço com 6 tons (0 = branco ... 5 = preto)
    idx = np.clip(np.rint((255 - g.astype(float)) / 51), 0, 5).astype(np.uint8)
    lines = Image.fromarray(idx, 'P')
    pal = []
    for v in PALETA:
        pal += [v, v, v]
    lines.putpalette(pal + [0] * (768 - len(pal)))

    # regiões: área clara, separada pelo traço (engrossado 1 px para fechar frestas)
    traco = g < 160
    traco = ndimage.binary_dilation(traco, iterations=1)
    dentro = np.zeros((H, W), bool)
    dentro[y0:y0 + nh, x0:x0 + nw] = True
    livre = (~traco) & dentro
    rot, total = ndimage.label(livre)  # vizinhança 4
    tam = np.bincount(rot.ravel())
    ok = np.zeros(total + 1, bool)
    ok[1:] = tam[1:] >= 60  # manchas minúsculas não viram região
    novo = np.zeros(total + 1, np.int32)
    novo[ok] = np.arange(1, ok.sum() + 1)
    reg = novo[rot]
    # o traço "engordado" volta para a região vizinha, para a pintura encostar no traço
    for _ in range(2):
        cheio = ndimage.grey_dilation(reg, size=3)
        reg = np.where((reg == 0) & dentro & (g >= 60), cheio, reg)
    R = int(reg.max())
    mapa = np.zeros((H, W, 4), np.uint8)
    mapa[..., 0] = (reg >> 8) & 255
    mapa[..., 1] = reg & 255
    mapa[..., 3] = 255

    th = Image.fromarray(g).convert('RGB').resize((320, round(320 * H / W)), Image.LANCZOS)
    for pasta in saidas:
        lines.save(os.path.join(pasta, f'colorir-{n}.lines.png'), optimize=True)
        Image.fromarray(mapa, 'RGBA').save(os.path.join(pasta, f'colorir-{n}.map.png'), optimize=True)
        th.save(os.path.join(pasta, f'colorir-{n}.th.webp'), quality=82)
    return R


if __name__ == '__main__':
    R = preparar(sys.argv[1], int(sys.argv[2]), sys.argv[3:])
    print(R)
