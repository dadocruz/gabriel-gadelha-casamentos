# Otimização PageSpeed — 01/05/2026

Correções aplicadas para reduzir os alertas do PageSpeed:

- Renderização bloqueante: Google Fonts e CSS da galeria do YouTube passam a carregar como preload assíncrono.
- Imagens: removidas imagens antigas JPEG/PNG e mantidas versões WebP compactadas.
- Hero/LCP: preload corrigido para a imagem realmente usada no hero (`casamento-palco-correto.webp`).
- Cache: adicionadas regras de cache longo para `/src/*`, CSS e JS no `_headers` do Cloudflare.
- JS não usado: GTM agora carrega de forma otimizada após o carregamento inicial; clique no WhatsApp empurra evento para o `dataLayer` e força o carregamento do GTM se necessário.
- Acessibilidade: adicionado `<main id="conteudo-principal">`.

GTM mantido: `GTM-5Z8QFW5B`.
Evento mantido: `clique_whatsapp`.
