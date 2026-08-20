# Guide de mise en place sur GitHub

## Étape 1 : Créer le dépôt

1. Allez sur [GitHub.com](https://github.com/new)
2. **Repository name** : `flashcards-japonais`
3. **Description** (optionnel) : `Application de flashcards interactives pour apprendre l'hiragana/katakana N5`
4. Sélectionnez **Public** (pour utiliser GitHub Pages gratuitement)
5. **Cochez** "Initialize this repository with a README" (non, nous en avons un)
6. Cliquez **Create repository**

## Étape 2 : Uploader les fichiers

### Option A : Via la ligne de commande (Recommandé)

```bash
# Clonez le repo que vous venez de créer
git clone https://github.com/votre-username/flashcards-japonais.git
cd flashcards-japonais

# Copiez tous les fichiers du projet ici
# (index.html, css/, js/, README.md, .gitignore, LICENSE)

# Ajoutez les fichiers
git add .

# Créez le commit initial
git commit -m "Initial commit: flashcards japonais avec 13 décks N5"

# Poussez vers GitHub
git push origin main
```

### Option B : Via l'interface GitHub

1. Allez à votre nouveau dépôt
2. Cliquez **Add file** → **Upload files**
3. Faites glisser/déposer tous vos fichiers :
   - `index.html`
   - `css/style.css`
   - `js/script.js`
   - `README.md`
   - `.gitignore`
   - `LICENSE`
4. Écrivez le message : `Initial commit: flashcards japonais avec 13 décks N5`
5. Cliquez **Commit changes**

## Étape 3 : Activer GitHub Pages

1. Allez à **Settings** (en haut du dépôt)
2. Cliquez **Pages** dans le menu de gauche
3. Sous "Build and deployment" :
   - **Source** : Select branch → **main**
   - **Folder** : **/ (root)**
4. Cliquez **Save**
5. Attendez 1-2 minutes

Vous verrez un message vert : "Your site is published at `https://votre-username.github.io/flashcards-japonais`"

## Étape 4 : Ajouter une description et un lien

1. Retournez à l'accueil du dépôt (Code tab)
2. Sur la droite, cliquez l'icône ⚙️ (About)
3. **Description** : `Application de flashcards interactives pour apprendre l'hiragana/katakana avec le vocabulaire N5`
4. **Website** : Collez votre URL GitHub Pages
5. **Topics** (optionnel) : Ajoutez `japanese`, `learning`, `flashcards`, `n5`
6. Cliquez **Save changes**

## Résultat

Votre app sera accessible à :
```
https://votre-username.github.io/flashcards-japonais
```

Elle se mettra à jour automatiquement quand vous poussez du code.

## Optionnel : Domaine personnalisé

Si vous avez un domaine personnel, vous pouvez l'utiliser :

1. **Settings** → **Pages**
2. **Custom domain** : Entrez votre domaine (ex: flashcards.votresite.com)
3. Suivez les instructions DNS chez votre registraire

## Ajouter des collaborateurs

Si vous voulez que d'autres contributent :

1. **Settings** → **Collaborators**
2. Cliquez **Add people**
3. Entrez le username GitHub
4. Sélectionnez les permissions

## Aller plus loin

### Créer une branche de développement
```bash
git checkout -b develop
# ... faites vos changements
git add .
git commit -m "Votre message"
git push origin develop
```

### Créer une Pull Request pour merger
1. GitHub détectera le push sur `develop`
2. Cliquez **Compare & pull request**
3. Ajoutez une description
4. Cliquez **Create pull request**
5. Mergez quand vous êtes satisfait

### Protéger la branche main
1. **Settings** → **Branches**
2. Cliquez **Add rule**
3. Branche pattern : `main`
4. Cochez **Require pull request reviews before merging**
5. Cochez **Require branches to be up to date before merging**

---

**C'est prêt ! Partagez votre URL avec n'importe qui — ils peuvent l'utiliser directement dans le navigateur.**
