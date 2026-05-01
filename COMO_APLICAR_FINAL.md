# Landing otimizada FINAL — Gabriel Gadelha

## O que foi aplicado

- Removido o iframe/autoplay do YouTube no carregamento inicial do hero.
- O hero agora abre com uma imagem WebP leve (`casamento-senhores.webp`).
- O YouTube só carrega quando a pessoa clicar em **ASSISTIR COM ÁUDIO**.
- Mantido o impacto visual do vídeo, mas sem travar o carregamento mobile.
- Imagem principal com `preload` + `fetchpriority="high"`.
- Imagens abaixo da dobra com `loading="lazy"`.
- Botão principal do hero recebeu `btn-whatsapp` e `data-pacote="hero"`.
- GTM `GTM-5Z8QFW5B` mantido.

## Como aplicar

1. Faça backup do seu `index.html` atual.
2. Substitua o `index.html` do repositório pelo arquivo desta pasta.
3. Garanta que estes arquivos existam em `/assets/images/`:

```txt
casamento-senhores.webp
gabriel-hero.webp
autoridade-marilia-mendonca.webp
autoridade-wesley-safadao.webp
autoridade-henrique-juliano.webp
autoridade-guilherme-benuto.webp
autoridade-cleyton-romario.webp
```

4. Remova as imagens antigas que não são mais usadas:

```bash
rm assets/images/*.jpeg assets/images/*.jpg assets/images/*.png
```

5. Commit e push:

```bash
git add .
git commit -m "perf: remove iframe inicial do YouTube e otimiza hero mobile"
git push
```

6. Aguarde o deploy do Cloudflare Pages.
7. Rode o PageSpeed novamente em modo mobile.

## Meta para liberar Google Ads

- Mobile Performance: 60+
- FCP: abaixo de 3s
- LCP: abaixo de 5s
- Payload: aproximadamente até 2 MB

Se continuar baixo, o próximo gargalo deve ser CSS/JS não usado, não mais o iframe inicial.
