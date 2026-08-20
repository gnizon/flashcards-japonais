# Flashcards Japonais N5

Application de flashcards interactive pour apprendre et pratiquer la lecture en hiragana et katakana avec le vocabulaire du niveau N5 du JLPT.

## Caractéristiques

- **13 décks thématiques** : vocabulaire organisé par catégorie (famille, nourriture, école, etc.)
- **280+ cartes** couvrant le niveau N5
- **Romaji caché** : le romaji ne s'affiche que quand vous retournez la carte
- **Navigation au clavier** : espace pour retourner, flèches pour naviguer
- **Design responsif** : fonctionne sur desktop et mobile
- **Interface légère** : pas de dépendances externes

## Décks disponibles

1. **Simples (2-3 caractères)** - Base pour débloquer la fluidité
2. **Quotidien** - Mots courants
3. **Verbes** - Actions basiques
4. **Nombres N5** - De 0 à 万
5. **Temps N5** - Jours, mois, semaines
6. **Famille N5** - Relations familiales
7. **Corps N5** - Parties du corps
8. **Nourriture N5** - Aliments et boissons
9. **Verbes N5** - 30 verbes courants
10. **Adjectifs N5** - 42 adjectifs courants
11. **Vêtements N5** - Habits et accessoires
12. **Maison N5** - Pièces et éléments d'habitation
13. **École N5** - Vocabulaire scolaire

## Installation rapide

### Option 1 : GitHub Pages (Gratuit, automatique)

1. Forkez ce dépôt
2. Allez à **Settings** → **Pages**
3. Sélectionnez **Deploy from a branch** → **main**
4. Attendez 1-2 minutes
5. Votre app est en ligne à `https://votre-username.github.io/flashcards-japonais`

### Option 2 : Installation locale

```bash
# Clonez le dépôt
git clone https://github.com/votre-username/flashcards-japonais.git
cd flashcards-japonais

# Aucune dépendance à installer — il suffit d'ouvrir index.html dans votre navigateur
open index.html
# ou avec un serveur local (optionnel)
python -m http.server 8000
# puis accédez à http://localhost:8000
```

## Comment utiliser

1. **Sélectionnez un deck** en haut de l'écran
2. **Lisez le mot japonais** en hiragana/katakana sans regarder le romaji
3. **Cliquez sur la carte** (ou appuyez sur Espace) pour révéler la réponse
4. **Naviguez** avec les boutons ou les flèches du clavier

### Raccourcis clavier

| Touche | Action |
|--------|--------|
| **Espace** | Retourner la carte |
| **Flèche droite** | Carte suivante |
| **Flèche gauche** | Carte précédente |

## Structure du projet

```
flashcards-japonais/
├── index.html          # Page principale
├── css/
│   └── style.css       # Styles (couleurs Clair Obscur)
├── js/
│   └── script.js       # Logique et données
├── README.md           # Ce fichier
└── .gitignore          # Fichiers à ignorer
```

## Couleurs Clair Obscur

- **Bleu marine** (#0F2138) - Arrière-plan
- **Teal** (#1F9E92) - Accent principal, carte avant
- **Or** (#D9A526) - Accent secondaire, carte arrière
- **Blanc/gris clair** (#E8E8E8) - Texte

## Ajouter de nouveaux mots

Éditez `js/script.js` et ajoutez des cartes dans l'objet `decks` :

```javascript
nomdeck: {
    label: 'Nom d\'affichage',
    cards: [
        { text: 'ひらがな', romaji: 'hiragana', meaning: 'signification' },
        // ... plus de cartes
    ]
}
```

Puis ajoutez le lien dans le sélecteur (aucune modification supplémentaire nécessaire — il se génère automatiquement).

## Pour les développeurs

### Tech stack
- **HTML5** - Sémantique simple
- **CSS3** - Flexbox, Gradients, 3D transforms
- **Vanilla JavaScript** - Aucun framework

### Fonctionnalités JavaScript
- Gestion de l'état des cartes
- Animation 3D au clic
- Navigation au clavier
- Génération dynamique des boutons de sélection

### Améliorations futures possibles
- Sauvegarde de la progression (localStorage)
- Mode quiz avec scoring
- Support des katakana uniquement
- Ajout des kanji en option
- Export/import de décks personnalisés

## Licence

MIT - Libre d'utilisation et de modification

## Retours et contributions

Si vous avez des suggestions, corrections ou voulez ajouter des mots, n'hésitez pas à créer une issue ou une pull request !

---

**Crée pour pratiquer la fluidité de lecture en hiragana et katakana avant de passer au kanji.**

Bon apprentissage ! 頑張ってください！
