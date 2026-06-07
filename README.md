# TontineBénin — Site vitrine (Next.js)

Site vitrine de l'application TontineBénin, prêt à déployer sur **Vercel**.
Construit avec **Next.js 14 (App Router) + TypeScript**.

## Développement local

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Build de production

```bash
npm run build
npm start
```

## Déploiement sur Vercel

### Option A — via le site vercel.com (le plus simple)
1. Pousse ce dossier sur un dépôt GitHub.
2. Va sur https://vercel.com → **Add New… → Project**.
3. Importe le dépôt. Vercel détecte Next.js automatiquement.
4. Clique **Deploy**. Tu obtiens un lien `https://tontinebenin-xxx.vercel.app`.

### Option B — via la CLI
```bash
npm i -g vercel
vercel        # déploiement de prévisualisation
vercel --prod # déploiement de production (lien à soumettre)
```

## ⚠️ À personnaliser avant de soumettre

- **Lien de l'APK** : dans `app/page.tsx`, remplace la constante
  `APK_URL = "REMPLACER_PAR_LIEN_APK"` par ton lien Google Drive / Firebase
  de l'APK `app-arm64-v8a-release.apk`.

## Faire évoluer le site

- Le contenu des sections est dans des tableaux en haut de `app/page.tsx`
  (features, steps, stats, segments, team) — facile à éditer.
- Les styles sont dans `app/globals.css` (couleurs officielles de l'app en haut,
  variables `--primary`, etc.).
- Header/Footer : `components/`.

## Structure

```
app/
  layout.tsx     métadonnées + police Poppins
  page.tsx       page d'accueil (toutes les sections)
  globals.css    styles + thème
components/
  Header.tsx     navigation (menu mobile)
  Footer.tsx     pied de page
```
# tontinebenin-web
