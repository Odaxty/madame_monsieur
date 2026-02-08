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
│   │   ├── App.js             # Composant principal
│   │   ├── App.css            # Styles globaux et animations
│   │   └── index.css          # Configuration Tailwind
│   ├── package.json
│   ├── tailwind.config.js
│
│
├── .gitignore                  # Fichiers à ignorer par Git
├── README.md                   # Ce fichier
```

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

## 🎨 Personnalisation

### Modifier les couleurs
Éditez `frontend/tailwind.config.js` :
```javascript
colors: {
  primary: '#d97706',    // Amber-600
  secondary: '#111827',  // Gray-900
}
```

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
