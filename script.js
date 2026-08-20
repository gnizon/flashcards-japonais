const decks = {
    simple: {
        label: 'Simples (2-3)',
        cards: [
            { text: 'ねこ', romaji: 'neko', meaning: 'chat' },
            { text: 'いぬ', romaji: 'inu', meaning: 'chien' },
            { text: 'ほん', romaji: 'hon', meaning: 'livre' },
            { text: 'め', romaji: 'me', meaning: 'oeil' },
            { text: 'て', romaji: 'te', meaning: 'main' },
            { text: 'みみ', romaji: 'mimi', meaning: 'oreille' },
            { text: 'はな', romaji: 'hana', meaning: 'nez' },
            { text: 'あし', romaji: 'ashi', meaning: 'pied' },
            { text: 'くち', romaji: 'kuchi', meaning: 'bouche' }
        ]
    },
    quotidien: {
        label: 'Quotidien (3-4)',
        cards: [
            { text: 'みず', romaji: 'mizu', meaning: 'eau' },
            { text: 'ひ', romaji: 'hi', meaning: 'feu' },
            { text: 'そら', romaji: 'sora', meaning: 'ciel' },
            { text: 'つき', romaji: 'tsuki', meaning: 'lune' },
            { text: 'ほし', romaji: 'hoshi', meaning: 'étoile' },
            { text: 'あめ', romaji: 'ame', meaning: 'pluie' },
            { text: 'かぜ', romaji: 'kaze', meaning: 'vent' },
            { text: 'ゆき', romaji: 'yuki', meaning: 'neige' },
            { text: 'ねむい', romaji: 'nemui', meaning: 'fatigue' }
        ]
    },
    verbes: {
        label: 'Verbes (3-4)',
        cards: [
            { text: 'たべる', romaji: 'taberu', meaning: 'manger' },
            { text: 'のむ', romaji: 'nomu', meaning: 'boire' },
            { text: 'あるく', romaji: 'aruku', meaning: 'marcher' },
            { text: 'ねる', romaji: 'neru', meaning: 'dormir' },
            { text: 'おきる', romaji: 'okiru', meaning: 'se réveiller' },
            { text: 'よむ', romaji: 'yomu', meaning: 'lire' },
            { text: 'かく', romaji: 'kaku', meaning: 'écrire' },
            { text: 'みる', romaji: 'miru', meaning: 'regarder' },
            { text: 'きく', romaji: 'kiku', meaning: 'écouter' }
        ]
    },
    nombres: {
        label: 'Nombres N5',
        cards: [
            { text: 'ゼロ', romaji: 'zero', meaning: '0' },
            { text: 'いち', romaji: 'ichi', meaning: '1' },
            { text: 'に', romaji: 'ni', meaning: '2' },
            { text: 'さん', romaji: 'san', meaning: '3' },
            { text: 'し', romaji: 'shi', meaning: '4' },
            { text: 'ご', romaji: 'go', meaning: '5' },
            { text: 'ろく', romaji: 'roku', meaning: '6' },
            { text: 'しち', romaji: 'shichi', meaning: '7' },
            { text: 'はち', romaji: 'hachi', meaning: '8' },
            { text: 'きゅう', romaji: 'kyuu', meaning: '9' },
            { text: 'じゅう', romaji: 'juu', meaning: '10' },
            { text: 'ひゃく', romaji: 'hyaku', meaning: '100' },
            { text: 'せん', romaji: 'sen', meaning: '1000' },
            { text: 'まん', romaji: 'man', meaning: '10000' }
        ]
    },
    temps: {
        label: 'Temps N5',
        cards: [
            { text: 'ぐぜん', romaji: 'gozen', meaning: 'matin' },
            { text: 'ごご', romaji: 'gogo', meaning: 'après-midi' },
            { text: 'よる', romaji: 'yoru', meaning: 'soir/nuit' },
            { text: 'あした', romaji: 'ashita', meaning: 'demain' },
            { text: 'きょう', romaji: 'kyou', meaning: 'aujourd\'hui' },
            { text: 'きのう', romaji: 'kinou', meaning: 'hier' },
            { text: 'げつようび', romaji: 'getsuyoubi', meaning: 'lundi' },
            { text: 'かようび', romaji: 'kayoubi', meaning: 'mardi' },
            { text: 'すいようび', romaji: 'suiyoubi', meaning: 'mercredi' },
            { text: 'もくようび', romaji: 'mokuyoubi', meaning: 'jeudi' },
            { text: 'きんようび', romaji: 'kinyoubi', meaning: 'vendredi' },
            { text: 'どようび', romaji: 'doyoubi', meaning: 'samedi' },
            { text: 'にちようび', romaji: 'nichiyoubi', meaning: 'dimanche' },
            { text: 'しゅうかん', romaji: 'shuukan', meaning: 'semaine' },
            { text: 'せんしゅう', romaji: 'senshu', meaning: 'semaine dernière' },
            { text: 'らいしゅう', romaji: 'raishu', meaning: 'semaine prochaine' },
            { text: 'せんげつ', romaji: 'sengetsu', meaning: 'mois dernier' },
            { text: 'らいげつ', romaji: 'raigetsu', meaning: 'mois prochain' }
        ]
    },
    famille: {
        label: 'Famille N5',
        cards: [
            { text: 'おとうさん', romaji: 'otousan', meaning: 'père' },
            { text: 'おかあさん', romaji: 'okaasan', meaning: 'mère' },
            { text: 'あにい', romaji: 'onii', meaning: 'grand frère' },
            { text: 'あねえ', romaji: 'onee', meaning: 'grande sœur' },
            { text: 'おとうと', romaji: 'otouto', meaning: 'petit frère' },
            { text: 'いもうと', romaji: 'imouto', meaning: 'petite sœur' },
            { text: 'おじいさん', romaji: 'ojiisan', meaning: 'grand-père' },
            { text: 'おばあさん', romaji: 'obaasan', meaning: 'grand-mère' },
            { text: 'おじ', romaji: 'oji', meaning: 'oncle' },
            { text: 'おば', romaji: 'oba', meaning: 'tante' },
            { text: 'いとこ', romaji: 'itoko', meaning: 'cousin(e)' },
            { text: 'かぞく', romaji: 'kazoku', meaning: 'famille' }
        ]
    },
    corps: {
        label: 'Corps N5',
        cards: [
            { text: 'あたま', romaji: 'atama', meaning: 'tête' },
            { text: 'かお', romaji: 'kao', meaning: 'visage' },
            { text: 'ひたい', romaji: 'hitai', meaning: 'front' },
            { text: 'まゆ', romaji: 'mayu', meaning: 'sourcil' },
            { text: 'め', romaji: 'me', meaning: 'oeil' },
            { text: 'はな', romaji: 'hana', meaning: 'nez' },
            { text: 'ほお', romaji: 'hoo', meaning: 'joue' },
            { text: 'みみ', romaji: 'mimi', meaning: 'oreille' },
            { text: 'くち', romaji: 'kuchi', meaning: 'bouche' },
            { text: 'した', romaji: 'shita', meaning: 'langue' },
            { text: 'は', romaji: 'ha', meaning: 'dent' },
            { text: 'くび', romaji: 'kubi', meaning: 'cou' },
            { text: 'かた', romaji: 'kata', meaning: 'épaule' },
            { text: 'むね', romaji: 'mune', meaning: 'poitrine' },
            { text: 'て', romaji: 'te', meaning: 'main' },
            { text: 'ゆび', romaji: 'yubi', meaning: 'doigt' },
            { text: 'つめ', romaji: 'tsume', meaning: 'ongle' },
            { text: 'おなか', romaji: 'onaka', meaning: 'ventre' },
            { text: 'あし', romaji: 'ashi', meaning: 'pied/jambe' },
            { text: 'ひざ', romaji: 'hiza', meaning: 'genou' },
            { text: 'かかと', romaji: 'kakato', meaning: 'talon' }
        ]
    },
    nourriture: {
        label: 'Nourriture N5',
        cards: [
            { text: 'ごはん', romaji: 'gohan', meaning: 'riz/repas' },
            { text: 'しょくじ', romaji: 'shokuji', meaning: 'repas' },
            { text: 'あさごはん', romaji: 'asagohan', meaning: 'petit-déjeuner' },
            { text: 'ひるごはん', romaji: 'hirugohan', meaning: 'déjeuner' },
            { text: 'ばんごはん', romaji: 'bangohan', meaning: 'dîner' },
            { text: 'たべもの', romaji: 'tabemono', meaning: 'aliment' },
            { text: 'さかな', romaji: 'sakana', meaning: 'poisson' },
            { text: 'にく', romaji: 'niku', meaning: 'viande' },
            { text: 'とり', romaji: 'tori', meaning: 'poulet' },
            { text: 'ぎゅうにゅう', romaji: 'gyuunyuu', meaning: 'lait' },
            { text: 'たまご', romaji: 'tamago', meaning: 'œuf' },
            { text: 'チーズ', romaji: 'chiizu', meaning: 'fromage' },
            { text: 'パン', romaji: 'pan', meaning: 'pain' },
            { text: 'こめ', romaji: 'kome', meaning: 'riz' },
            { text: 'めん', romaji: 'men', meaning: 'nouilles' },
            { text: 'うどん', romaji: 'udon', meaning: 'udon' },
            { text: 'そば', romaji: 'soba', meaning: 'sarrasin' },
            { text: 'ラーメン', romaji: 'raamen', meaning: 'ramen' },
            { text: 'すし', romaji: 'sushi', meaning: 'sushi' },
            { text: 'てんぷら', romaji: 'tenpura', meaning: 'tempura' },
            { text: 'カレー', romaji: 'karee', meaning: 'curry' },
            { text: 'やさい', romaji: 'yasai', meaning: 'légume' },
            { text: 'キャベツ', romaji: 'kyabetsu', meaning: 'chou' },
            { text: 'トマト', romaji: 'tomato', meaning: 'tomate' },
            { text: 'ニンジン', romaji: 'ninjin', meaning: 'carotte' },
            { text: 'ジャガイモ', romaji: 'jagaimo', meaning: 'pomme de terre' },
            { text: 'タマネギ', romaji: 'tamanegi', meaning: 'oignon' },
            { text: 'きのこ', romaji: 'kinoko', meaning: 'champignon' },
            { text: 'くだもの', romaji: 'kudamono', meaning: 'fruit' },
            { text: 'リンゴ', romaji: 'ringo', meaning: 'pomme' },
            { text: 'みかん', romaji: 'mikan', meaning: 'mandarine' },
            { text: 'バナナ', romaji: 'banana', meaning: 'banane' },
            { text: 'いちご', romaji: 'ichigo', meaning: 'fraise' },
            { text: 'ぶどう', romaji: 'budou', meaning: 'raisin' },
            { text: 'スイカ', romaji: 'suika', meaning: 'pastèque' },
            { text: 'のみもの', romaji: 'nomimono', meaning: 'boisson' },
            { text: 'みず', romaji: 'mizu', meaning: 'eau' },
            { text: 'さけ', romaji: 'sake', meaning: 'alcool/saké' },
            { text: 'ビール', romaji: 'biiru', meaning: 'bière' },
            { text: 'ワイン', romaji: 'wain', meaning: 'vin' },
            { text: 'こうちゃ', romaji: 'koucha', meaning: 'thé noir' },
            { text: 'こーひー', romaji: 'koohii', meaning: 'café' },
            { text: 'ジュース', romaji: 'juusu', meaning: 'jus' },
            { text: 'ココア', romaji: 'kokoa', meaning: 'cacao' }
        ]
    },
    verbesN5: {
        label: 'Verbes N5',
        cards: [
            { text: 'ある', romaji: 'aru', meaning: 'être/exister' },
            { text: 'いる', romaji: 'iru', meaning: 'être/exister (animé)' },
            { text: 'する', romaji: 'suru', meaning: 'faire' },
            { text: 'なる', romaji: 'naru', meaning: 'devenir' },
            { text: 'いく', romaji: 'iku', meaning: 'aller' },
            { text: 'くる', romaji: 'kuru', meaning: 'venir' },
            { text: 'かえる', romaji: 'kaeru', meaning: 'retourner' },
            { text: 'でかける', romaji: 'dekakeru', meaning: 'partir' },
            { text: 'かう', romaji: 'kau', meaning: 'acheter' },
            { text: 'もつ', romaji: 'motsu', meaning: 'tenir' },
            { text: 'もらう', romaji: 'morau', meaning: 'recevoir' },
            { text: 'あげる', romaji: 'ageru', meaning: 'donner' },
            { text: 'あう', romaji: 'au', meaning: 'rencontrer' },
            { text: 'しぬ', romaji: 'shinu', meaning: 'mourir' },
            { text: 'うまれる', romaji: 'umareru', meaning: 'naître' },
            { text: 'すむ', romaji: 'sumu', meaning: 'vivre/habiter' },
            { text: 'はたらく', romaji: 'hataraku', meaning: 'travailler' },
            { text: 'まなぶ', romaji: 'manabu', meaning: 'apprendre' },
            { text: 'おしえる', romaji: 'oshieru', meaning: 'enseigner' },
            { text: 'ふります', romaji: 'furimasu', meaning: 'pleuvoir' },
            { text: 'てります', romaji: 'terimasu', meaning: 'briller' },
            { text: 'さきます', romaji: 'sakimasu', meaning: 'fleurir' },
            { text: 'ふえる', romaji: 'fueru', meaning: 'augmenter' },
            { text: 'へる', romaji: 'heru', meaning: 'diminuer' },
            { text: 'かわる', romaji: 'kawaru', meaning: 'changer' },
            { text: 'かかる', romaji: 'kakaru', meaning: 'prendre (du temps)' },
            { text: 'わかる', romaji: 'wakaru', meaning: 'comprendre' },
            { text: 'おぼえる', romaji: 'oboeru', meaning: 'mémoriser' },
            { text: 'わすれる', romaji: 'wasureru', meaning: 'oublier' },
            { text: 'まちがえる', romaji: 'machigaeru', meaning: 'se tromper' }
        ]
    },
    adjectifs: {
        label: 'Adjectifs N5',
        cards: [
            { text: 'あたたかい', romaji: 'atataka', meaning: 'chaud' },
            { text: 'さむい', romaji: 'samui', meaning: 'froid' },
            { text: 'あつい', romaji: 'atsui', meaning: 'chaud (objet)' },
            { text: 'ひえたい', romaji: 'hieru', meaning: 'refroidi' },
            { text: 'あかい', romaji: 'akai', meaning: 'rouge' },
            { text: 'あおい', romaji: 'aoi', meaning: 'bleu' },
            { text: 'きいろい', romaji: 'kiiroi', meaning: 'jaune' },
            { text: 'くろい', romaji: 'kuroi', meaning: 'noir' },
            { text: 'しろい', romaji: 'shiroi', meaning: 'blanc' },
            { text: 'みどり', romaji: 'midori', meaning: 'vert' },
            { text: 'おおきい', romaji: 'ookii', meaning: 'grand' },
            { text: 'ちいさい', romaji: 'chiisai', meaning: 'petit' },
            { text: 'ながい', romaji: 'nagai', meaning: 'long' },
            { text: 'みじかい', romaji: 'mijikai', meaning: 'court' },
            { text: 'たかい', romaji: 'takai', meaning: 'haut/cher' },
            { text: 'ひくい', romaji: 'hikui', meaning: 'bas' },
            { text: 'ふとい', romaji: 'futoi', meaning: 'épais' },
            { text: 'ほそい', romaji: 'hosoi', meaning: 'mince' },
            { text: 'かたい', romaji: 'katai', meaning: 'dur' },
            { text: 'やわらかい', romaji: 'yawarakai', meaning: 'mou' },
            { text: 'あまい', romaji: 'amai', meaning: 'sucré' },
            { text: 'からい', romaji: 'karai', meaning: 'épicé' },
            { text: 'すっぱい', romaji: 'suppai', meaning: 'acide' },
            { text: 'にがい', romaji: 'nigai', meaning: 'amer' },
            { text: 'うま', romaji: 'uma', meaning: 'délicieux' },
            { text: 'おいしい', romaji: 'oishii', meaning: 'savoureux' },
            { text: 'まずい', romaji: 'mazui', meaning: 'mauvais goût' },
            { text: 'きれい', romaji: 'kirei', meaning: 'beau' },
            { text: 'きたない', romaji: 'kitanai', meaning: 'sale' },
            { text: 'あたらしい', romaji: 'atarashii', meaning: 'nouveau' },
            { text: 'ふるい', romaji: 'furui', meaning: 'ancien' },
            { text: 'よい', romaji: 'yoi', meaning: 'bon' },
            { text: 'わるい', romaji: 'warui', meaning: 'mauvais' },
            { text: 'つよい', romaji: 'tsuyoi', meaning: 'fort' },
            { text: 'よわい', romaji: 'yowai', meaning: 'faible' },
            { text: 'はやい', romaji: 'hayai', meaning: 'rapide' },
            { text: 'おそい', romaji: 'osoi', meaning: 'lent' },
            { text: 'げんき', romaji: 'genki', meaning: 'énergique' },
            { text: 'ねむい', romaji: 'nemui', meaning: 'somnolent' },
            { text: 'かなしい', romaji: 'kanashii', meaning: 'triste' },
            { text: 'うれしい', romaji: 'ureshii', meaning: 'heureux' },
            { text: 'こわい', romaji: 'kowai', meaning: 'effrayant' }
        ]
    },
    vetements: {
        label: 'Vêtements N5',
        cards: [
            { text: 'ようふく', romaji: 'youfuku', meaning: 'vêtement' },
            { text: 'しゃつ', romaji: 'shatsu', meaning: 'chemise' },
            { text: 'ブラウス', romaji: 'buraausu', meaning: 'blouse' },
            { text: 'スカート', romaji: 'sukaato', meaning: 'jupe' },
            { text: 'ズボン', romaji: 'zubon', meaning: 'pantalon' },
            { text: 'ワンピース', romaji: 'wanpiisu', meaning: 'robe' },
            { text: 'セーター', romaji: 'seetaa', meaning: 'pull' },
            { text: 'ジャケット', romaji: 'jaketto', meaning: 'veste' },
            { text: 'コート', romaji: 'kooto', meaning: 'manteau' },
            { text: 'パジャマ', romaji: 'pajama', meaning: 'pyjama' },
            { text: 'くつ', romaji: 'kutsu', meaning: 'chaussure' },
            { text: 'ぐつ', romaji: 'gutu', meaning: 'botte' },
            { text: 'スリッパ', romaji: 'surippa', meaning: 'pantoufle' },
            { text: 'くつした', romaji: 'kutsushita', meaning: 'chaussette' },
            { text: 'けし', romaji: 'keshi', meaning: 'ruban/cravate' },
            { text: 'ネクタイ', romaji: 'nekutai', meaning: 'cravate' },
            { text: 'ぼうし', romaji: 'boushi', meaning: 'chapeau' },
            { text: 'ぐんて', romaji: 'gunte', meaning: 'gant' },
            { text: 'マフラー', romaji: 'mafuraa', meaning: 'écharpe' },
            { text: 'ハンカチ', romaji: 'hankachi', meaning: 'mouchoir' },
            { text: 'バッグ', romaji: 'baggu', meaning: 'sac' },
            { text: 'かばん', romaji: 'kaban', meaning: 'serviette' },
            { text: 'アクセサリー', romaji: 'akusesarii', meaning: 'accessoire' },
            { text: 'ネックレス', romaji: 'nakkuresu', meaning: 'collier' },
            { text: 'ブレスレット', romaji: 'buresuretto', meaning: 'bracelet' }
        ]
    },
    maison: {
        label: 'Maison N5',
        cards: [
            { text: 'いえ', romaji: 'ie', meaning: 'maison' },
            { text: 'おうち', romaji: 'ouchi', meaning: 'maison (poli)' },
            { text: 'やち', romaji: 'yachi', meaning: 'terrain' },
            { text: 'せがわ', romaji: 'segawa', meaning: 'façade' },
            { text: 'へや', romaji: 'heya', meaning: 'chambre' },
            { text: 'リビング', romaji: 'ribingu', meaning: 'séjour' },
            { text: 'だいどころ', romaji: 'daidokoro', meaning: 'cuisine' },
            { text: 'ふろば', romaji: 'furoba', meaning: 'salle de bain' },
            { text: 'トイレ', romaji: 'toiré', meaning: 'toilettes' },
            { text: 'し', romaji: 'i', meaning: 'étage' },
            { text: 'や', romaji: 'ya', meaning: 'toit' },
            { text: 'かべ', romaji: 'kabe', meaning: 'mur' },
            { text: 'まど', romaji: 'mado', meaning: 'fenêtre' },
            { text: 'ドア', romaji: 'doa', meaning: 'porte' },
            { text: 'げんかん', romaji: 'genkan', meaning: 'entrée' },
            { text: 'かいだん', romaji: 'kaidan', meaning: 'escalier' },
            { text: 'ゆか', romaji: 'yuka', meaning: 'sol' },
            { text: 'てんじょう', romaji: 'tenjou', meaning: 'plafond' },
            { text: 'あかり', romaji: 'akari', meaning: 'lumière' },
            { text: 'でんき', romaji: 'denki', meaning: 'électricité' },
            { text: 'ガス', romaji: 'gasu', meaning: 'gaz' },
            { text: 'きゅうしゅつ', romaji: 'kyuushutsu', meaning: 'eau chaude' }
        ]
    },
    ecole: {
        label: 'École N5',
        cards: [
            { text: 'がっこう', romaji: 'gakkō', meaning: 'école' },
            { text: 'ようちえん', romaji: 'yochien', meaning: 'maternelle' },
            { text: 'しょうがっこう', romaji: 'shōgakkō', meaning: 'primaire' },
            { text: 'ちゅうがっこう', romaji: 'chūgakkō', meaning: 'collège' },
            { text: 'こうこう', romaji: 'kōkō', meaning: 'lycée' },
            { text: 'だいがく', romaji: 'daigaku', meaning: 'université' },
            { text: 'せんせい', romaji: 'sensei', meaning: 'professeur' },
            { text: 'がくせい', romaji: 'gakusei', meaning: 'étudiant' },
            { text: 'きょうしつ', romaji: 'kyōshitsu', meaning: 'classe' },
            { text: 'ほうほんしょ', romaji: 'hōhonsho', meaning: 'bibliothèque' },
            { text: 'ぐちか', romaji: 'guchika', meaning: 'laboratoire' },
            { text: 'たいいくかん', romaji: 'taiikukan', meaning: 'gymnase' },
            { text: 'グラウンド', romaji: 'guraundo', meaning: 'terrain' },
            { text: 'ほうほん', romaji: 'hōhon', meaning: 'livre' },
            { text: 'ノート', romaji: 'nōto', meaning: 'cahier' },
            { text: 'えんぴつ', romaji: 'enpitsu', meaning: 'crayon' },
            { text: 'ペン', romaji: 'pen', meaning: 'stylo' },
            { text: 'けしゴム', romaji: 'keshigom', meaning: 'gomme' },
            { text: 'ものさし', romaji: 'monosashi', meaning: 'règle' },
            { text: 'じゅぎょう', romaji: 'jugyō', meaning: 'classe/leçon' },
            { text: 'かてい', romaji: 'katei', meaning: 'domicile' },
            { text: 'しゅくだい', romaji: 'shukudai', meaning: 'devoir' },
            { text: 'しけん', romaji: 'shiken', meaning: 'examen' },
            { text: 'せいせき', romaji: 'seiseki', meaning: 'résultat' },
            { text: 'がっき', romaji: 'gakki', meaning: 'trimestre' }
        ]
    }
};

let currentDeck = 'simple';
let currentIndex = 0;
let isFlipped = false;

const card = document.getElementById('card');
const cardText = document.getElementById('cardText');
const romaji = document.getElementById('romaji');
const meaning = document.getElementById('meaning');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const statsEl = document.getElementById('stats');
const progressContainer = document.getElementById('progressContainer');
const deckSelector = document.getElementById('deckSelector');
const deckLabel = document.getElementById('deckLabel');

// Initialize deck selector
Object.entries(decks).forEach(([key, deck]) => {
    const btn = document.createElement('button');
    btn.className = 'deck-button' + (key === 'simple' ? ' active' : '');
    btn.textContent = deck.label;
    btn.onclick = () => selectDeck(key);
    deckSelector.appendChild(btn);
});

function selectDeck(deckKey) {
    currentDeck = deckKey;
    currentIndex = 0;
    isFlipped = false;
    
    document.querySelectorAll('.deck-button').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    updateCard();
}

function updateCard() {
    const deck = decks[currentDeck];
    const currentCard = deck.cards[currentIndex];
    
    cardText.textContent = currentCard.text;
    romaji.textContent = currentCard.romaji;
    meaning.textContent = currentCard.meaning;
    deckLabel.textContent = deck.label;
    
    card.classList.remove('flipped');
    isFlipped = false;
    
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === deck.cards.length - 1;
    
    statsEl.textContent = `Carte ${currentIndex + 1} / ${deck.cards.length}`;
    
    updateProgress();
}

function updateProgress() {
    const deck = decks[currentDeck];
    progressContainer.innerHTML = '';
    
    for (let i = 0; i < deck.cards.length; i++) {
        const dot = document.createElement('div');
        dot.className = 'progress-dot';
        if (i === currentIndex) dot.classList.add('active');
        if (i < currentIndex) dot.classList.add('completed');
        progressContainer.appendChild(dot);
    }
}

card.addEventListener('click', () => {
    card.classList.toggle('flipped');
    isFlipped = !isFlipped;
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCard();
    }
});

nextBtn.addEventListener('click', () => {
    const deck = decks[currentDeck];
    if (currentIndex < deck.cards.length - 1) {
        currentIndex++;
        updateCard();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
        e.preventDefault();
        card.click();
    }
    if (e.key === 'ArrowLeft') prevBtn.click();
    if (e.key === 'ArrowRight') nextBtn.click();
});

updateCard();
