#!/usr/bin/env bash
# Troca o conjunto de poses da Nine no app (raiz e app-ios/www).
#   ./trocar-nine.sh padrao   -> volta ao conjunto de sempre (nine-padrao/)
#   ./trocar-nine.sh natal    -> usa o conjunto de Natal (nine-natal/), quando existir
# O conjunto padrão está guardado em nine-padrao/, versionado no git.
# Para voltar depois do Natal: ./trocar-nine.sh padrao && git commit -am "Nine: volta ao padrão"
set -euo pipefail
cd "$(dirname "$0")"
conjunto="${1:-}"
case "$conjunto" in
  padrao|natal) ;;
  *) echo "uso: $0 padrao|natal" >&2; exit 1 ;;
esac
origem="nine-$conjunto"
[ -d "$origem" ] || { echo "faltando a pasta $origem/" >&2; exit 1; }
n=0
for f in "$origem"/nine-*.webp; do
  base="$(basename "$f")"
  cp "$f" "$base"
  cp "$f" "app-ios/www/$base"
  n=$((n+1))
done
echo "Nine: $n poses trocadas para o conjunto '$conjunto'."
