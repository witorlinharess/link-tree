# Linktree clone (Next.js + TypeScript + React 19)

Pagina Linktree baseada na imagem de referência.

## Como rodar localmente

1. Instale dependências:

```bash
npm install
```

2. Rode em modo desenvolvimento:

```bash
npm run dev
```

3. Abra http://localhost:3000

> Substitua `public/witor-linhares.webp` pela sua foto real (mesmo nome) para o avatar.

## Deploy & CI

Workflow de CI/CD utiliza GitHub Actions + Vercel (deploy automático em `main`).

### Cloudflare (opcional)

Se você usa Cloudflare como DNS/proxy para o domínio, recomendo adicionar um step para limpar o cache automaticamente após o deploy.

Para configurar:

1. No Cloudflare -> `My Profile` -> `API Tokens` -> `Create Token` → Scopes: `Zone.Zone(read)` and `Zone.Cache Purge(write)` para o token (ou usar um token com `All zones` se preferir).
2. Copie o `Zone ID` do painel do site (na visão geral do domínio).
3. No GitHub repo → `Settings` → `Secrets & variables` → `Actions` adicione:
   - `CF_API_TOKEN` = o token criado
   - `CF_ZONE_ID` = o zone id do domínio

O workflow `.github/workflows/deploy.yml` já contem um step que purga o cache do Cloudflare após o deploy para `main`.
