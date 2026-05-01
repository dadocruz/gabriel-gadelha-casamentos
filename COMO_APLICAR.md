# 🚀 LANDING PRONTA PARA DEPLOY

## ✅ O que foi feito (preservou tudo do GPT + adicionou performance)

### Mantido do trabalho anterior do GPT:
```
✅ GTM-5Z8QFW5B instalado no <head> e <body>
✅ 9 botões com class="btn-whatsapp" e data-pacote
✅ Tracking dataLayer (clique_whatsapp) no main.js
✅ Schema.org JSON-LD
✅ Link Política de Privacidade no rodapé
✅ Foto correta da seção sobre (casamento-palco-correto)
✅ Toda estrutura, CSS, JS intactos
```

### Adicionado nesta etapa (performance):
```
✅ 28 imagens convertidas para WebP (9.86 MB → 1.5 MB, -84%)
✅ casamento-palco-correto.png (5.9 MB) → .webp (163 KB) ⭐ VILÃO PRINCIPAL
✅ Hero com fetchpriority="high" + decoding="async"
✅ <link rel="preload"> da imagem hero (LCP otimizado)
✅ 11 imagens com loading="lazy"
✅ 5 preconnects (fonts, GTM, YouTube)
✅ 2 dns-prefetch (Google Analytics)
✅ Todas referências de imagem trocadas para .webp
```

## 📊 Resultado esperado no PageSpeed

| Métrica       | Antes    | Esperado depois |
|---------------|----------|-----------------|
| Mobile        | 38       | **75-90**       |
| LCP           | 41,0s    | **2,5-4s**      |
| FCP           | 7,4s     | **1,5-2,5s**    |
| TBT           | 780ms    | **200-400ms**   |
| Payload       | 7,6 MB   | **1-1,5 MB**    |

---

## 🔧 COMO APLICAR NO REPO (3 opções)

### Opção A — Substituir tudo (mais fácil)

1. Baixe o arquivo `landing-pronta-deploy.zip`
2. Extraia em uma pasta no seu computador
3. **APAGUE TUDO** do seu repositório local (exceto `.git`)
4. **COPIE TUDO** do ZIP extraído para a pasta do repo
5. Commit e push:

```bash
cd seu-repositorio
git add -A
git commit -m "perf: otimização imagens WebP, preload hero, lazy loading

- Converte 28 imagens JPEG/PNG para WebP (-84% peso)
- casamento-palco-correto.png (5.9MB) → .webp (163KB)
- Adiciona fetchpriority/preload no hero
- Lazy loading em imagens abaixo da dobra
- Preconnects para YouTube, GTM, Google Fonts
- Atualiza todas referências para .webp"
git push
```

### Opção B — Substituir manualmente (mais seguro)

Se quiser controle total, faça por etapas:

**Etapa 1 — Adicionar imagens WebP:**
```bash
# Copiar TODOS os .webp da pasta extraída
cp landing-pronta-deploy/assets/images/*.webp seu-repo/assets/images/
```

**Etapa 2 — Apagar imagens antigas:**
```bash
cd seu-repo/assets/images/
rm *.jpeg *.jpg *.png  # Apaga só as antigas, .webp ficam
```

**Etapa 3 — Substituir index.html:**
```bash
cp landing-pronta-deploy/index.html seu-repo/index.html
```

**Etapa 4 — Commit:**
```bash
git add -A
git commit -m "perf: WebP + preload + lazy loading"
git push
```

### Opção C — Só pelo navegador (sem Git CLI)

Se você está editando no GitHub Web direto:

1. Vá no repo no GitHub
2. **Apague** as imagens antigas em `/assets/images/` (uma por vez no GitHub Web é trabalhoso, considere Opção A)
3. **Suba** as imagens .webp da pasta extraída
4. **Edite** o `index.html` colando o conteúdo do novo

⚠️ Esta opção é tediosa pelo GitHub Web. Recomendo **Opção A**.

---

## ✅ VALIDAÇÃO PÓS-DEPLOY

Após Cloudflare deploy (~2 minutos):

### 1. Visualmente
- [ ] Abra https://gabrielgadelhacantor.com no celular
- [ ] Hero (foto do casal) carrega rápido
- [ ] Imagens de Marília, Wesley, Henrique, etc carregam ao rolar
- [ ] Botões de WhatsApp funcionam
- [ ] Layout não quebrou

### 2. PageSpeed
- [ ] Acessar https://pagespeed.web.dev/
- [ ] Colar https://gabrielgadelhacantor.com/
- [ ] Score Mobile deve estar entre 70-90
- [ ] LCP abaixo de 4s

### 3. Tracking
- [ ] Abrir o site em aba anônima
- [ ] Em outra aba, abrir GA4 → Tempo Real
- [ ] Clicar em qualquer botão WhatsApp
- [ ] Confirmar evento `clique_whatsapp` no GA4 Tempo Real

---

## 🎯 PRÓXIMOS PASSOS (após validar performance)

```
1. ✅ Performance otimizada (esta etapa)
2. ⏳ Conversão clique_whatsapp aparecer no Google Ads (24-48h após ativar import)
3. ⏳ Importar como "Lead WhatsApp" - Primária - R$100
4. ⏳ Limpar 7 negativas duplicadas (de 79 → 72)
5. ⏳ Ativar campanha
6. ⏳ Monitorar diariamente nos primeiros 7 dias
```

---

## 🆘 SE ALGO DER ERRADO

### Imagens não aparecem
- Verificar se nomes batem (case-sensitive!)
- Confirmar que a pasta `/assets/images/` tem todos os `.webp`
- Limpar cache do navegador (Ctrl+Shift+Del)

### PageSpeed ainda baixo (<60)
- Me passa o relatório novo
- Os próximos gargalos serão JS/CSS não usado
- Posso te ajudar com defer/async de scripts

### Layout quebrou
- Restaurar backup do `index.html`:
```bash
git checkout HEAD~1 index.html
```

### Tracking parou de funcionar
- Confirmar que o `main.js` não foi alterado
- Confirmar que GTM-5Z8QFW5B está nas duas posições do HTML
- Testar em modo anônimo (cookies de terceiros)
