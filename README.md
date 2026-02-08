"# 🍷 Madame Monsieur - Site Vitrine Restaurant

Site vitrine moderne et élégant pour le restaurant **Madame Monsieur** situé à Budapest. Une expérience culinaire raffinée où tradition française et élégance contemporaine se rencontrent.

![Madame Monsieur Hero](https://customer-assets.emergentagent.com/job_budapest-bistrot/artifacts/ttlnjusw_boisson2.jpg)

## ✨ Fonctionnalités

- 🎨 **Design élégant** - Palette de couleurs chic (beige, crème, noir, doré)
- 📱 **Responsive** - Optimisé pour mobile, tablette et desktop
- 🖼️ **Galerie photos** - Cocktails, plats gastronomiques et intérieur du restaurant
- 📋 **Menu interactif** - Navigation par catégories avec onglets élégants
- ⭐ **Avis clients** - Système de témoignages avec pagination
- 📍 **Carte Google Maps** - Localisation intégrée
- 🔗 **Réservation en ligne** - Lien direct vers le système Reservours
- 🌐 **Réseaux sociaux** - Facebook et Instagram intégrés
- 🎭 **Animations fluides** - Transitions douces et effets au survol

## 🛠️ Technologies Utilisées

### Frontend
- **React** 19.0.0 avec Hooks
- **Tailwind CSS** - Framework CSS utility-first
- **Shadcn/UI** - Composants UI modernes et accessibles
- **Lucide React** - Bibliothèque d'icônes élégantes
- **React Router DOM** 7.5.1 - Navigation
- **Axios** 1.8.4 - Requêtes HTTP

### Backend
- **FastAPI** 0.110.1 - Framework Python moderne et performant
- **MongoDB** avec Motor 3.3.1 - Base de données NoSQL
- **Python** 3.x
- **Uvicorn** - Serveur ASGI

### Design & UX
- **Typographie** : 
  - Playfair Display (serif) pour les titres
  - Inter (sans-serif) pour le corps de texte
- **Palette de couleurs** : Beige, Crème, Noir, Doré (#d97706)
- **Animations** : Transitions CSS personnalisées

## 📁 Structure du Projet

```
madame-monsieur/
├── frontend/                    # Application React
│   ├── public/
│   │   └── images/             # Images du restaurant
│   ├── src/
│   │   ├── components/         # Composants React
│   │   │   ├── ui/            # Composants Shadcn/UI (Button, Card, etc.)
│   │   │   ├── Header.jsx     # Navigation et logo
│   │   │   ├── Hero.jsx       # Section hero plein écran
│   │   │   ├── About.jsx      # Histoire du restaurant
│   │   │   ├── MenuSection.jsx # Menu gastronomique
│   │   │   ├── Gallery.jsx    # Galerie photos
│   │   │   ├── Testimonials.jsx # Avis clients
│   │   │   ├── Contact.jsx    # Coordonnées et réservation
│   │   │   └── Footer.jsx     # Pied de page
│   │   ├── data/
│   │   │   └── mockData.js    # Données du restaurant
│   │   ├── hooks/
│   │   │   └── use-toast.js   # Hook pour notifications
│   │   ├── App.js             # Composant principal
│   │   ├── App.css            # Styles globaux et animations
│   │   └── index.css          # Configuration Tailwind
│   ├── package.json
│   ├── tailwind.config.js
│   └── craco.config.js
│
├── backend/                     # API FastAPI
│   ├── server.py               # Serveur principal avec routes
│   ├── requirements.txt        # Dépendances Python
│   └── .env                    # Variables d'environnement
│
├── memory/
│   └── PRD.md                  # Product Requirements Document
│
├── .gitignore                  # Fichiers à ignorer par Git
├── README.md                   # Ce fichier
└── GITHUB_SETUP.md            # Guide d'initialisation GitHub
```

## 🚀 Installation et Démarrage

### Prérequis
- Node.js v16+ ([Télécharger](https://nodejs.org/))
- Python 3.8+ ([Télécharger](https://www.python.org/))
- MongoDB ([Installation](https://www.mongodb.com/try/download/community))
- Yarn (recommandé) : `npm install -g yarn`

### 1. Cloner le repository

```bash
git clone https://github.com/votre-username/madame-monsieur-restaurant.git
cd madame-monsieur-restaurant
```

### 2. Installation et démarrage Frontend

```bash
cd frontend

# Installer les dépendances
yarn install

# Créer le fichier .env
cat > .env << EOF
REACT_APP_BACKEND_URL=http://localhost:8001
EOF

# Démarrer le serveur de développement
yarn start
```

✅ Le site sera accessible sur **http://localhost:3000**

### 3. Installation et démarrage Backend

```bash
cd backend

# Créer un environnement virtuel Python (recommandé)
python -m venv venv
source venv/bin/activate  # Sur Windows : venv\Scripts\activate

# Installer les dépendances
pip install -r requirements.txt

# Créer le fichier .env
cat > .env << EOF
MONGO_URL=mongodb://localhost:27017
DB_NAME=madame_monsieur
EOF

# Démarrer le serveur
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

✅ L'API sera accessible sur **http://localhost:8001**

## 📸 Aperçu des Sections

### 🏠 Page d'accueil (Hero)
Section immersive plein écran avec image de cocktail signature et appel à l'action pour réserver

### 📖 À propos
Présentation de l'histoire et de la philosophie du restaurant avec photos d'ambiance

### 🍽️ Menu Gastronomique
Menu interactif organisé par catégories :
- Entrées raffinées
- Plats signature
- Desserts gourmands
- Carte des vins & cocktails

### 🖼️ Galerie
- **Cocktails & Boissons** : 11 photos de cocktails signatures
- **Notre Intérieur** : 5 photos de l'ambiance élégante
- **Nos Plats** : Photos des créations culinaires

### ⭐ Avis Clients
6 témoignages authentiques avec système de notation 5 étoiles et pagination

### 📍 Contact & Réservation
- Coordonnées complètes
- Carte Google Maps interactive
- Lien direct vers le système de réservation
- Réseaux sociaux

## 🌐 Déploiement en Production

### Frontend avec Vercel (Recommandé)

```bash
# 1. Installer Vercel CLI
npm i -g vercel

# 2. Build de production
cd frontend
yarn build

# 3. Déployer
vercel --prod
```

Configuration Vercel :
- **Framework** : Create React App
- **Root Directory** : `frontend`
- **Build Command** : `yarn build`
- **Output Directory** : `build`
- **Environment Variable** : `REACT_APP_BACKEND_URL`

### Backend avec Render

1. Connectez votre repository GitHub à Render
2. Créez un nouveau **Web Service**
3. Configuration :
   - **Root Directory** : `backend`
   - **Runtime** : Python 3
   - **Build Command** : `pip install -r requirements.txt`
   - **Start Command** : `uvicorn server:app --host 0.0.0.0 --port $PORT`
4. Ajoutez les variables d'environnement

## 📝 Variables d'Environnement

### Frontend (`.env` dans `/frontend`)
```env
REACT_APP_BACKEND_URL=https://votre-api.com
```

### Backend (`.env` dans `/backend`)
```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=madame_monsieur
```

## 🎨 Personnalisation

### Modifier les couleurs
Éditez `frontend/tailwind.config.js` :
```javascript
colors: {
  primary: '#d97706',    // Amber-600
  secondary: '#111827',  // Gray-900
  // Ajoutez vos couleurs personnalisées
}
```

### Modifier le contenu
Éditez `frontend/src/data/mockData.js` :
- Informations du restaurant
- Menu et plats
- Témoignages clients
- URLs des images

### Ajouter de nouvelles pages
1. Créez un composant dans `frontend/src/components/`
2. Ajoutez la route dans `App.js`
3. Mettez à jour la navigation dans `Header.jsx`

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créez une branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m '✨ Add AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📱 Informations Restaurant

**Madame Monsieur**  
📍 Budapest, Hajós u. 27, 1065 Hongrie  
📞 +36 70 306 7833  
🌐 [Réserver une table](https://reservours.com/madamemonsieur/tablereservation)  
📘 [Facebook](https://www.facebook.com/p/Madame-Monsieur-61567543133032/)  
📷 [Instagram](https://www.instagram.com/madamemonsieur.hu/?hl=fr)

**Horaires** :
- Mardi - Vendredi : 12h00 - 23h00
- Samedi - Dimanche : 11h00 - 00h00
- Fermé le lundi

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👨‍💻 Développement

Développé avec ❤️ pour **Madame Monsieur Restaurant**

### Scripts disponibles

Frontend :
```bash
yarn start       # Démarrage en mode développement
yarn build       # Build de production
yarn test        # Lancer les tests
```

Backend :
```bash
uvicorn server:app --reload    # Mode développement
uvicorn server:app --host 0.0.0.0 --port 8001  # Production
```

---

**Note** : Ce site est un site vitrine statique. Pour ajouter un système de gestion de contenu (CMS), considérez l'intégration de Strapi, Contentful ou Sanity.io.

Pour toute question, consultez le fichier [GITHUB_SETUP.md](./GITHUB_SETUP.md) pour le guide d'initialisation complet.
"