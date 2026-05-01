# Entrega GPT — Ajustes concluídos na landing

Arquivos alterados:

- `index.html`
- `src/scripts/main.js`

## O que foi feito

1. Removidas as 6 imagens em base64 do `index.html`.
2. Substituídas pelas imagens já existentes em `/assets/images/`:
   - `/assets/images/casamento-senhores.jpeg`
   - `/assets/images/autoridade-marilia-mendonca.jpeg`
   - `/assets/images/autoridade-wesley-safadao.jpeg`
   - `/assets/images/autoridade-henrique-juliano.jpeg`
   - `/assets/images/autoridade-guilherme-benuto.jpeg`
   - `/assets/images/autoridade-cleyton-romario.jpeg`
3. Adicionada a classe `btn-whatsapp` aos 9 links reais de WhatsApp.
4. Adicionado `data-pacote` aos 9 links reais de WhatsApp:
   - `header`
   - `menu-mobile`
   - `geral`
   - `pocket`
   - `banda-completa`
   - `premium`
   - `cta-final`
   - `cta-final`
   - `flutuante`
5. Adicionado push para `dataLayer` no clique de WhatsApp em `src/scripts/main.js`:
   - evento: `clique_whatsapp`
   - parâmetros: `pacote`, `link_text`, `link_url`
6. Adicionado link de Política de Privacidade no rodapé.
7. Adicionado Schema.org em JSON-LD no `index.html`.
8. Inseridos comentários `GTM_TODO_GABRIEL` no `head` e logo após `<body>` para marcar onde inserir o GTM real depois.

## Validação técnica

- Base64 restante no `index.html`: 0
- Links WhatsApp encontrados: 9
- Links com `btn-whatsapp`: 9
- Links com `data-pacote`: 9
- Schema JSON-LD: 1
- Link para política: 1
- Evento `clique_whatsapp` no JS: sim
- Tamanho do `index.html`: caiu de aproximadamente 994 KB para aproximadamente 50 KB

## Próximo passo antes de anunciar

1. Subir estes arquivos no GitHub.
2. Aguardar deploy da Cloudflare Pages.
3. Abrir o site no celular e testar todos os botões de WhatsApp.
4. Criar GTM/GA4/Google Ads.
5. Substituir os comentários `GTM_TODO_GABRIEL` pelo código real do Google Tag Manager.
6. Testar no modo Preview do GTM se o evento `clique_whatsapp` aparece com o parâmetro `pacote` correto.

## Atualização GTM

- ID instalado: `GTM-5Z8QFW5B`
- Domínio canônico atualizado: `https://gabrielgadelhacantor.com/`
- Código inserido no `<head>` e o `noscript` inserido logo após a abertura do `<body>`.
