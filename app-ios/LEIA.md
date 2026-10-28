# App iOS · Lumi - Jogos Bíblicos

- `www/` é o app completo (jogos, Cantinho Kids e A Grande História), já montado. Não editar à mão: é gerado a partir do código-fonte (`build/flat.py VERSAO --app`).
- O envio ao TestFlight é feito pelo GitHub: aba **Actions → App iOS → TestFlight → Run workflow**.
- Identificador do app (Bundle ID): `br.com.lumi.jogosbiblicos`.
- Segredos necessários no repositório: `APPLE_TEAM_ID`, `ASC_KEY_ID`, `ASC_ISSUER_ID`, `ASC_KEY_P8`.
