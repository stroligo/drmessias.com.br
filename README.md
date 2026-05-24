# drmessias.com.br

Landing page do **Dr. José Messias** — cirurgião geral e bariátrica em Brasília.

**Stack:** [Nuxt 4](https://nuxt.com/) + [Vue 3](https://vuejs.org/) + [Tailwind CSS 4](https://tailwindcss.com/)

**Domínio:** [drmessias.com.br](https://drmessias.com.br)  
**Repositório:** [github.com/stroligo/drmessias.com.br](https://github.com/stroligo/drmessias.com.br)

Documentação do cliente: [`Cliente.md`](./Cliente.md)

---

## Desenvolvimento

```bash
npm install
cp .env.example .env   # configure NUXT_PUBLIC_WHATSAPP
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

### Variáveis de ambiente

| Variável | Descrição |
|----------|-----------|
| `NUXT_PUBLIC_WHATSAPP` | Número WhatsApp (DDI+DDD+número, só dígitos). Se vazio, CTAs apontam para Doctoralia. |

---

## Scripts

| Comando | Uso |
|---------|-----|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run generate` | Site estático (SSG) |
| `npm run preview` | Preview do build |

**UI Kit (identidade):** [http://localhost:3000/uikit](http://localhost:3000/uikit)

---

## Estrutura

```
app/
├── assets/css/main.css    # Tailwind + tokens de marca
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Seções da landing (padrão OLLIV)
│   └── ui/
├── composables/useWhatsApp.ts
├── data/site.ts           # Textos e serviços
└── pages/index.vue
Arquivos/                  # Referências de marca (não versionar em produção se pesado)
public/images/             # logo.png, dr-messias.jpg
Arquivos/                  # identidade.png (guia), logo.png (fonte)
```

A landing segue a mesma lógica do [OLLIV](https://ollivpericias.com.br/): **página única**, navegação por âncoras, bloco de **serviços** em destaque, processo, sobre, FAQ e CTA final.

---

## Identidade visual

Tokens em `app/assets/css/tokens.css` (ver [`designsystem.md`](./designsystem.md)).

Azul petróleo `#06263B` · dourado `#C8A35D` · off-white `#F7F5F2` · Montserrat + Cormorant Garamond.

---

## Licença e uso

Conteúdo e imagens de uso exclusivo do **Dr. José Messias**. Não reutilizar sem autorização.
