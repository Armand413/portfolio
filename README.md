# Portfolio personnel

React + Vite + Tailwind CSS + Lucide React. Identité éditoriale ivoire / encre, accent terre cuite, illustrations CSS, sans police ni service distant.

## Installation

Node.js 22.12+ ou 24 LTS et npm.

```sh
npm ci
npm run dev
```

Ouvrir l’adresse affichée. Pour contrôler et compiler :

```sh
npm run lint
npm run build
npm run preview
```

Le dossier `dist/` est prêt pour un hébergement statique.

## Arborescence

```text
public/favicon.svg             Icône personnalisable
src/data/portfolio.js          Informations, projets, compétences et SEO
src/components/Navigation.jsx Navigation, thème et menu mobile
src/components/ProjectCard.jsx Études de cas et liens externes
src/App.jsx                    Sections et vérification du CV
src/index.css                  Tailwind et identité responsive
src/main.jsx                   Point d’entrée React
index.html                     HTML et initialisation du thème
vite.config.js                 React, Tailwind et métadonnées statiques
eslint.config.js               Contrôles de qualité
```

## Personnalisation

Modifier `src/data/portfolio.js`. Remplacer tous les champs entre crochets. Aucun diplôme, employeur ou projet réel n’est inventé.

- Identité : `name`, `monogram`, `profession`, `headline`, `introduction`, `location`, `about`, `approach`. Remplacer le titre éditorial par une proposition de valeur adaptée à votre métier.
- Compétences : catégories `skills` et listes `items`.
- Contact : renseigner `email` pour activer un vrai lien `mailto:` ouvrant la messagerie du visiteur. Sans adresse fournie, l’état indique explicitement que le contact reste à renseigner. Aucun formulaire ou envoi simulé.
- Réseaux : renseigner les URL HTTPS dans `socials`. Les liens vides sont masqués.
- Projets : compléter les deux emplacements puis mettre `placeholder: false`, ou les retirer. Renseigner rôle, problème, solution, choix et résultats uniquement s’ils existent. `demo` et `source` restent masqués lorsqu’ils sont vides. Les études de cas se déplient au clavier. Pas de filtre inutile pour une petite sélection.
- Images : ajouter des WebP/AVIF compressés dans `public/images/`, puis utiliser `images/nom.webp` et un `imageAlt` descriptif. Viser environ 1000 pixels de large pour les projets. Les visuels secondaires sont chargés à la demande. `portrait` et `portraitAlt` sont facultatifs.
- CV : placer le PDF dans `public/cv.pdf`, puis définir `cv: 'cv.pdf'`. Le lien s’affiche seulement après vérification de la signature PDF. Une URL distante doit autoriser CORS ; préférer un fichier local. Aucun faux CV fourni.
- Parcours : ajouter des objets `{ period, title, organization, description }` dans `experiences` et `education`. Les listes vides et leur navigation sont masquées.
- SEO : renseigner `seo.title`, `seo.description`, `seo.url` et `seo.image` (URL absolue de l’image de partage). Les métadonnées sont injectées à la compilation dans le HTML pour les robots sans JavaScript. Recompiler après modification.
- Favicon : personnaliser `public/favicon.svg`, indépendamment du monogramme des données.
- Style : variables au début de `src/index.css`. Le bouton de thème parcourt système → clair → sombre → système. Le mode système suit les préférences de l’appareil ; le choix est mémorisé.

## Déploiement

Exécuter `npm ci` puis `npm run build`. Publier `dist/` sur Netlify, Vercel, Cloudflare Pages ou un serveur statique. Paramètres : commande `npm run build`, sortie `dist`. Aucun backend ou secret requis. La base relative permet un sous-dossier ; servir son URL avec un slash final. Aucun routage à réécrire et aucun déploiement public automatique.

Avant publication : remplacer les champs, ajouter une vraie adresse, vérifier chaque destination, les images et le CV, personnaliser le SEO. Utiliser `npm run preview` pour voir la compilation ; ne pas ouvrir directement le HTML depuis le disque.

## Accessibilité

HTML sémantique, lien d’évitement, focus visible, menu avec état annoncé et fermeture par Échap, navigation active, titres décalés sous la barre fixe, respect de `prefers-reduced-motion`. Vérifier à nouveau après ajout de vos contenus, au clavier et avec zoom à 200 %.

Tailwind utilise son [plugin Vite officiel](https://tailwindcss.com/docs/installation/using-vite).

## Vérifications effectuées

- Compilation de production et ESLint : réussis.
- Navigateur Edge automatisé : 320, 375, 768, 1024 et 1440 pixels, sans débordement horizontal.
- Études de cas, menu mobile, fermeture par Échap et après navigation : vérifiés.
- Mémorisation du thème après rechargement, mouvement réduit, masquage des liens absents et des parcours vides : vérifiés.
- Aucune erreur JavaScript observée ; captures des vues mobile, bureau et sombre examinées.
- Non vérifiés : lecteur d’écran réel, Safari/Firefox, envoi via un logiciel de messagerie, PDF personnel et hébergement public (ces données/services ne sont pas fournis).

Sur cet ordinateur, le raccourci global `npm` est défectueux. Si nécessaire, utiliser en PowerShell :

```powershell
& 'C:\Program Files\nodejs\node.exe' 'C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js' run dev
```

Les commandes npm standard ci-dessus restent valables sur une installation Node/npm fonctionnelle.

## Ajouter vos certificats

Dans `src/data/portfolio.js`, compléter le tableau `certificates`. Un emplacement explicite est fourni, sans certification inventée. Pour chaque certificat réel :

- Renseigner `title` (nom), `issuer` (organisme), `date` (date obtenue) et `description` (sujets couverts).
- Passer `placeholder` à `false` et choisir un `id` unique.
- Facultatif : `credentialId` pour le numéro du justificatif.
- Facultatif : placer un PDF dans `public/certificats/` et indiquer `document: "certificats/mon-certificat.pdf"`.
- Facultatif : `verificationUrl` pour la page officielle de vérification.
- Facultatif : `image` pour un aperçu WebP/PNG/JPEG et `imageAlt` pour sa description. Le document complet reste accessible via son lien.

Dupliquer l’objet pour ajouter un certificat. Les liens vides sont masqués ; un tableau vide masque la section et son entrée de navigation. Vérifier les fichiers et les URL ajoutés avant publication.

## Design actuel et publication des contenus

Le design reprend une direction minimaliste : fond clair, accent vert profond, typographie sans empattement et illustration de terminal. Le mode sombre est conservé. Le terminal est une illustration et ne se connecte à aucun service.

Les projets et certificats portant `placeholder: true` restent des modèles dans le fichier de données et ne sont plus affichés sur le site. Après avoir renseigné un élément réel, passer `placeholder` à `false` pour le publier. Sans élément publié, les sections restent accessibles avec un message indiquant leur absence (ce comportement remplace le masquage décrit précédemment).

Pour ajouter votre portrait, placer le fichier dans `public/images/portrait.webp` puis renseigner `portrait: "images/portrait.webp"` et `portraitAlt`. En son absence, le monogramme est affiché. Le contact fonctionne par e-mail, sans formulaire ni espace administrateur.

## Publication automatique sur GitHub Pages

Le workflow `.github/workflows/deploy.yml` compile et publie `dist/` à chaque push sur `main`. Il utilise Node.js 24 et la base `/portfolio/`. La configuration locale conserve sa base relative.

Activation initiale : ouvrir https://github.com/Armand413/portfolio/settings/pages puis choisir **GitHub Actions** comme source dans **Build and deployment**. Dans l’onglet **Actions**, ouvrir **Publier le portfolio sur GitHub Pages**, puis **Run workflow** si nécessaire.

Adresse attendue après un déploiement réussi : https://armand413.github.io/portfolio/

Pour les mises à jour, enregistrer et pousser les fichiers modifiés sur `main`. Ne pas publier le code source brut depuis la branche `main` avec « Deploy from a branch » : le workflow publie les fichiers compilés. La dépendance `gh-pages` n’est pas nécessaire à ce workflow.
