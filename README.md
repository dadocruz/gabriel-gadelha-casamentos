# Gabriel Gadelha — Landing Page para Casamentos

Landing page premium focada em conversão de pedidos de orçamento via WhatsApp para shows de casamento do cantor **Gabriel Gadelha**.

> 100% estática (HTML + CSS + JS puros), sem build step. Publica em segundos no Cloudflare Pages.

---

## ✨ Visão geral

- **Público-alvo**: noivos, cerimonialistas, assessorias e contratantes de casamento
- **Objetivo**: gerar conversas qualificadas no WhatsApp (+55 19 99394-1536)
- **Estilo**: editorial, cinematográfico, sertanejo sofisticado (preto profundo + champagne/dourado)
- **Performance**: sem frameworks, sem dependências, ~0 JS crítico. Pronto para 100 no Lighthouse.

---

## 📁 Estrutura do projeto

```
gabriel-gadelha-casamentos/
├── index.html                  # Página principal (todo o conteúdo editável aqui)
├── assets/
│   ├── images/                 # Fotos do Gabriel (estúdio, shows, autoridade)
│   └── videos/                 # (Opcional) vídeos locais, caso queira hospedar direto
├── src/
│   ├── styles/
│   │   └── main.css            # Estilos — tokens via CSS variables no topo
│   └── scripts/
│       └── main.js             # Interações (menu, reveal, vídeo placeholder, etc.)
├── _headers                    # Headers HTTP (cache + segurança) p/ Cloudflare Pages
├── _redirects                  # Redirecionamentos (opcional)
├── robots.txt
├── sitemap.xml
├── README.md
└── .gitignore
```

---

## 🚀 Como rodar localmente

Como é HTML puro, basta abrir o `index.html` no navegador. Mas para servir assets corretamente, use um servidor local:

### Opção 1 — Python (recomendada, já vem instalado)

```bash
python3 -m http.server 8080
```

Abra: [http://localhost:8080](http://localhost:8080)

### Opção 2 — Node.js (npx)

```bash
npx serve .
```

### Opção 3 — VS Code

Instale a extensão **Live Server** e clique em "Go Live".

---

## ☁️ Deploy no Cloudflare Pages (com GitHub)

O fluxo completo para deploy automático via push no GitHub:

### 1. Criar repositório no GitHub

```bash
# Dentro da pasta do projeto:
git init
git add .
git commit -m "feat: landing page Gabriel Gadelha — casamentos"
git branch -M main
git remote add origin git@github.com:SEU_USUARIO/gabriel-gadelha-casamentos.git
git push -u origin main
```

### 2. Conectar ao Cloudflare Pages

1. Acesse [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
2. Autorize o Cloudflare a acessar seu GitHub
3. Selecione o repositório `gabriel-gadelha-casamentos`
4. Nas configurações de build:
   - **Framework preset**: `None`
   - **Build command**: *(deixe vazio)*
   - **Build output directory**: `/` (raiz)
   - **Root directory**: `/`
5. Clique em **Save and Deploy**

Pronto! Em menos de 60s o site estará no ar em `https://SEU-PROJETO.pages.dev`.

### 3. Conectar domínio próprio

No painel do projeto em Pages → **Custom domains** → **Set up a custom domain** → digite seu domínio → siga as instruções (se o domínio já está no Cloudflare, é automático).

### 4. Fluxo de atualização contínua

Agora é só:

```bash
# Fazer alterações nos arquivos...
git add .
git commit -m "feat: atualizar headline"
git push
```

O Cloudflare publica automaticamente em ~30s. ✨

---

## ✏️ Guia rápido de edição

Todo o conteúdo textual está no **`index.html`**. Partes mais editadas:

### Alterar a headline do hero

Localize `<!-- ============== HERO ============== -->` e edite `.hero-title`.

### Trocar o número do WhatsApp

Faça find & replace por `5519993941536` em todos os arquivos.

### Atualizar os pacotes de show

Localize `<!-- ============== PACOTES ============== -->` — cada pacote é um `<article class="pack">`. Edite:
- `.pack-name` (nome)
- `.pack-sub` (descrição)
- `.pack-list` (itens inclusos)

### Adicionar os vídeos do YouTube

Abra `src/scripts/main.js` e preencha o objeto `VIDEOS`:

```js
const VIDEOS = {
  'wedding-1': 'https://www.youtube.com/embed/ID_DO_ARTHUR_E_CAROL?autoplay=1',
  'wedding-2': 'https://www.youtube.com/embed/ID_DO_VANIR_E_IVONE?autoplay=1',
};
```

O ID do vídeo é a string depois de `?v=` na URL do YouTube.

### Trocar fotos

Substitua arquivos em `assets/images/` mantendo o mesmo nome, ou edite os `src` no HTML.

### Mudar paleta de cores

Todas as cores estão em CSS variables no topo de `src/styles/main.css`. Edite `--gold-1`, `--gold-2`, `--bg-0` etc. e todo o site se atualiza.

---

## 🛠️ Stack técnica

| Camada | Ferramenta |
|--------|-----------|
| Markup | HTML5 semântico |
| Estilo | CSS puro com Custom Properties |
| JS | Vanilla (IntersectionObserver, sem libs) |
| Fontes | Google Fonts (Cormorant Garamond + Inter) |
| Hospedagem | Cloudflare Pages |
| CI/CD | GitHub → Cloudflare (automático) |

---

## 📱 Links oficiais do artista

- **WhatsApp**: [+55 19 99394-1536](https://wa.me/5519993941536?text=Quero%20or%C3%A7amento%20para%20casamento)
- **Instagram**: [@gabrielgadelhacantor](https://www.instagram.com/gabrielgadelhacantor)
- **TikTok**: [@gabrielgadelhacantor](https://www.tiktok.com/@gabrielgadelhacantor)
- **Spotify**: [Gabriel Gadelha](https://open.spotify.com/intl-pt/artist/7rn7EcrpdAvTnVqFlOXaBS)
- **YouTube**: [canal oficial](https://www.youtube.com/channel/UCoLNV7pVR89EvqqOMdClcWg)

---

## 📝 Licença

© Gabriel Gadelha — Uso exclusivo para divulgação oficial do artista.
