// ==========================================
// RESTAURANT INFORMATION
// ==========================================
export const restaurantInfo = {
  name: "Madame Monsieur",
  tagline: {
    fr: "L'art de la table à Budapest",
    en: "The art of the table in Budapest",
    hu: "Az asztal művészete Budapesten",
  },
  description: {
    fr: "Bienvenue chez Madame Monsieur, où la tradition française rencontre l'élégance contemporaine au cœur de Budapest. Notre restaurant vous invite à découvrir une cuisine raffinée, préparée avec passion.",
    en: "Welcome to Madame Monsieur, where French tradition meets contemporary elegance in the heart of Budapest. Our restaurant invites you to discover refined cuisine prepared with passion.",
    hu: "Üdvözöljük a Madame Monsieur-ben, ahol a francia hagyomány és a kortárs elegancia találkozik Budapest szívében. Éttermünk szenvedéllyel készült, finom ételek felfedezésére invitálja Önt.",
  },
  address: "Budapest, Hajós u. 27, 1065",
  phone: "06703067833",
  reservationLink: "https://reservours.com/madamemonsieur/tablereservation",
  socialMedia: {
    facebook: "https://www.facebook.com/p/Madame-Monsieur-61567543133032/",
    instagram: "https://www.instagram.com/madamemonsieur.hu/?hl=fr",
  },
  hours: {
    weekday: {
      fr: "Mardi - Vendredi: 12h00 - 23h00",
      en: "Tuesday - Friday: 12:00 PM - 11:00 PM",
      hu: "Kedd - Péntek: 12:00 - 23:00",
    },
    weekend: {
      fr: "Samedi - Dimanche: 11h00 - 00h00",
      en: "Saturday - Sunday: 11:00 AM - 12:00 AM",
      hu: "Szombat - Vasárnap: 11:00 - 00:00",
    },
    closed: {
      fr: "Fermé le lundi",
      en: "Closed on Monday",
      hu: "Hétfőn zárva",
    },
  },
};

// ==========================================
// MENU CATEGORIES
// ==========================================
// ==========================================
// MENU CATEGORIES - VERSION COMPLÈTE RESTAURÉE
// ==========================================
export const menuCategories = [
  {
    id: 1,
    category: { fr: "Crêpes Sucrées", en: "Sweet Crepes", hu: "Édes Palacsinták" },
    subtitle: "CLASSICS",
    items: [
      { name: "Sugar", description: { fr: "Sucre", en: "Sugar", hu: "Cukor" }, price: "1500 huf" },
      { name: "Butter / Sugar", description: { fr: "Beurre et sucre", en: "Butter and sugar", hu: "Vaj és cukor" }, price: "1700 huf" },
      { name: "Nutella", description: { fr: "Nutella généreux", en: "Generous Nutella", hu: "Nutella" }, price: "2000 huf" },
      { name: "Homemade salted caramel", description: { fr: "Caramel au beurre salé maison", en: "Homemade salted caramel", hu: "Házi sós karamell" }, price: "2000 huf" },
      { name: "Jam", description: { fr: "Confiture au choix : fraise, abricot ou framboise", en: "Choice of jam: strawberry, apricot or raspberry", hu: "Választható lekvár: eper, sárgabarack vagy málna" }, price: "2000 huf" },
      { name: "Honey", description: { fr: "Miel de fleurs local naturel", en: "Natural local flower honey", hu: "Természetes helyi virágméz" }, price: "2000 huf" }
    ]
  },
  {
    id: 2,
    category: { fr: "Crêpes Créations", en: "Signature Crepes", hu: "Különleges Palacsinták" },
    subtitle: "MADAME MONSIEUR CREATIONS",
    items: [
      { name: "Rennaise", description: { fr: "Caramel au beurre salé maison, pomme et cannelle", en: "Homemade salted caramel, apple and cinnamon", hu: "Házi sós karamell, alma és fahéj" }, price: "3190 huf" },
      { name: "Marseillaise", description: { fr: "Confiture de fraise, KitKat chocolat blanc et fruits de saison", en: "Strawberry jam, white chocolate KitKat and seasonal fruit", hu: "Eperlekvár, fehér csokis KitKat és szezonális gyümölcsök" }, price: "3190 huf" },
      { name: "Toulousaine", description: { fr: "Nutella, banane et noix de coco", en: "Nutella, banana and coconut", hu: "Nutella, banán és kókusz" }, price: "3190 huf" },
      { name: "Parisienne", description: { fr: "Nutella, Oreo et chocolat blanc", en: "Nutella, Oreo and white chocolate", hu: "Nutella, Oreo és fehér csokoládé" }, price: "3190 huf" },
      { name: "Lilloise", description: { fr: "Chocolat noir, poire et noix de coco", en: "Dark chocolate, pear and coconut", hu: "Étcsokoládé, körte és kókusz" }, price: "3190 huf" },
      { name: "Brestoise", description: { fr: "Nutella, Snickers et chocolat blanc", en: "Nutella, Snickers and white chocolate", hu: "Nutella, Snickers és fehér csokoládé" }, price: "3190 huf" },
      { name: "Lyonnaise", description: { fr: "Nutella, Kinder Bueno et banane", en: "Nutella, Kinder Bueno and banana", hu: "Nutella, Kinder Bueno és banán" }, price: "3190 huf" },
      { name: "Suzette", description: { fr: "Réduction orange et citron, beurre, Cointreau flambé", en: "Orange and lemon reduction, butter, flambéed Cointreau", hu: "Narancs és citrom redukció, vaj, flambírozott Cointreau" }, price: "4200 huf" },
      { name: "Dubai Chocolate", description: { fr: "Crème de pistache, cheveux d'ange (kadayıf), Nutella", en: "Pistachio cream, angel hair (kadayıf), Nutella", hu: "Pisztácia krém, kadayıf tészta, Nutella" }, price: "4750 huf" }
    ]
  },
  {
    id: 3,
    category: { fr: "Galettes Sarrasin", en: "Buckwheat Galettes", hu: "Hajdina Galette" },
    subtitle: "GLUTEN FREE",
    items: [
      { name: "Classic", description: { fr: "Emmental, jambon", en: "Emmental, ham", hu: "Emmentáli, sonka" }, price: "3450 huf" },
      { name: "Complete", description: { fr: "Emmental, jambon, champignons, œuf, sauce crème", en: "Emmental, ham, mushrooms, egg, cream sauce", hu: "Emmentáli, sonka, gomba, tojás, tejszínes szósz" }, price: "4200 huf" },
      { name: "Vegetarian", description: { fr: "Emmental, tomates séchées, poivrons, œuf, oignons rouges, sauce tomate", en: "Emmental, dried tomatoes, bell peppers, egg, red onions, tomato sauce", hu: "Emmentáli, aszalt paradicsom, paprika, tojás, lila hagyma, paradicsomszósz" }, price: "4400 huf" },
      { name: "Raclette", description: { fr: "Emmental, jambon, fromage raclette, pommes de terre, oignons rouges, sauce crème", en: "Emmental, ham, raclette cheese, potatoes, red onions, cream sauce", hu: "Emmentáli, sonka, raklett sajt, burgonya, lila hagyma, tejszínes szósz" }, price: "4800 huf" },
      { name: "Spicy", description: { fr: "Emmental, poulet pané, poivrons, sauce épicée", en: "Emmental, breaded chicken, bell peppers, spicy sauce", hu: "Emmentáli, rántott csirke, paprika, csípős szósz" }, price: "4500 huf" },
      { name: "Hungarian", description: { fr: "Emmental, saucisse, oignons rouges, moutarde", en: "Emmental, sausage, red onions, mustard", hu: "Emmentáli, kolbász, lila hagyma, mustár" }, price: "4400 huf" },
      { name: "Burger", description: { fr: "Emmental, bœuf haché, cheddar, oignons rouges, cornichons, sauce burger", en: "Emmental, minced beef, cheddar, red onions, pickles, burger sauce", hu: "Emmentáli, darált marhahús, cheddar, lila hagyma, csemegeuborka, burgerszósz" }, price: "4500 huf" },
      { name: "4 Cheese", description: { fr: "Emmental, chèvre, cheddar, fromage raclette, sauce tomate", en: "Emmental, goat cheese, cheddar, raclette cheese, tomato sauce", hu: "Emmentáli, kecskesajt, cheddar, raklett sajt, paradicsomszósz" }, price: "4600 huf" },
      { name: "Gyros", description: { fr: "Emmental, viande gyros (poulet), oignons rouges, fromage raclette, pommes de terre, sauce crème", en: "Emmental, gyros meat (chicken), red onions, raclette cheese, potatoes, cream sauce", hu: "Emmentáli, gyros hús (csirke), lila hagyma, raklett sajt, burgonya, tejszínes szósz" }, price: "4800 huf" },
      { name: "Salmon", description: { fr: "Fromage frais, avocat, saumon gravlax, tomates cerises, citron, salade", en: "Fresh cheese, avocado, gravlax salmon, cherry tomatoes, lemon, salad", hu: "Friss sajt, avokádó, gravlax lazac, koktélparadicsom, citrom, saláta" }, price: "5200 huf" },
      { name: "Barback", description: { fr: "Emmental, cheddar, bœuf haché, poulet, viande gyros, sauce barbecue", en: "Emmental, cheddar, minced beef, chicken, gyros meat, barbecue sauce", hu: "Emmentáli, cheddar, darált marhahús, csirke, gyros hús, barbecue szósz" }, price: "5200 huf" }
    ]
  },
  {
    id: 4,
    category: { fr: "Salades & Plats", en: "Salads & Main Dishes", hu: "Saláták és Ételek" },
    subtitle: "SALADS, CROQUE, QUICHE & BURGER",
    items: [
      { name: "Warm goat cheese salad", description: { fr: "Mélange de salades, tomates cerises, figues, noix, toast au chèvre chaud", en: "Mixed greens, cherry tomatoes, figs, walnuts, warm goat cheese toast", hu: "Vegyes saláta, koktélparadicsom, füge, dió, meleg kecskesajtos pirítós" }, price: "4550 huf" },
      { name: "Chicken salad", description: { fr: "Mélange de salades, tomates cerises, poulet pané, œuf, comté, croutons", en: "Mixed greens, cherry tomatoes, breaded chicken, egg, comté cheese, croutons", hu: "Vegyes saláta, koktélparadicsom, rántott csirke, tojás, comté sajt, kruton" }, price: "4550 huf" },
      { name: "Salmon gravlax salad", description: { fr: "Mélange de salades, tomates cerises, saumon gravlax, œuf, comté, croutons, avocat", en: "Mixed greens, cherry tomatoes, gravlax salmon, egg, comté cheese, croutons, avocado", hu: "Vegyes saláta, koktélparadicsom, gravlax lazac, tojás, comté sajt, kruton, avokádó" }, price: "4950 huf" },
      { name: "Homemade croque monsieur", description: { fr: "Pain de mie, jambon, béchamel, fromage fondu, servi avec salade", en: "Classic French toasted ham and cheese sandwich, served with salad", hu: "Házi croque monsieur salátával" }, price: "4200 huf" },
      { name: "Homemade quiche", description: { fr: "Quiche du jour maison, servie avec salade", en: "Homemade quiche of the day, served with salad", hu: "Házi quiche salátával" }, price: "4300 huf" },
      { name: "Chicken burger", description: { fr: "Steak de poulet pané, sauce épicée, oignons, cheddar, tomates, salade, frites", en: "Breaded chicken steak, spicy sauce, onions, cheddar cheese, tomatoes, salad, fries", hu: "Csirke burger: rántott csirke, csípős szósz, hagyma, cheddar, paradicsom, saláta, sült krumpli" }, price: "5450 huf" },
      { name: "Portion of fries", description: { fr: "Frites croustillantes servies avec sauce épicée", en: "Crispy fries served with spicy sauce", hu: "Sült krumpli csípős szósszal" }, price: "1600 huf" }
    ]
  }
];

// ==========================================
// IMAGES - LOCAL PATHS (public/images/...)
// ==========================================

export const drinks = [
  {
    id: 1,
    name: "Cocktail Blue Lagoon",
    image: "/images/boisson/boisson1.jpg",
    category: "cocktails",
  },
  {
    id: 2,
    name: "Espresso Martini",
    image: "/images/boisson/boisson2.jpg",
    category: "cocktails",
  },
  {
    id: 3,
    name: "Vin Blanc",
    image: "/images/boisson/boisson3.jpg",
    category: "vins",
  },
  {
    id: 4,
    name: "Cocktail aux Fraises",
    image: "/images/boisson/boisson4.jpg",
    category: "cocktails",
  },
  {
    id: 5,
    name: "Cocktail Sunrise",
    image: "/images/boisson/boisson5.jpg",
    category: "cocktails",
  },
  {
    id: 6,
    name: "Cocktail Sunrise",
    image: "/images/boisson/boisson6.jpg",
    category: "cocktails",
  },
  {
    id: 7,
    name: "Cocktail punch",
    image: "/images/boisson/boisson7.jpg",
    category: "cocktails",
  },
  {
    id: 8,
    name: "Cocktail punch",
    image: "/images/boisson/boisson8.jpg",
    category: "cocktails",
  },
  {
    id: 9,
    name: "Vin",
    image: "/images/boisson/boisson9.jpg",
    category: "cocktails",
  },
  {
    id: 10,
    name: "Chocolat chaud",
    image: "/images/boisson/boisson10.jpg",
    category: "cocktails",
  },
];

export const dishPhotos = [
  {
    id: 1,
    src: "/images/plat/plat1.jpg",
    alt: "Galettes aux oignons rouges",
  },
  {
    id: 2,
    src: "/images/plat/plat2.jpg",
    alt: "Crêpe salée garnie",
  },
  {
    id: 3,
    src: "/images/plat/plat3.jpg",
    alt: "Croissant garni et salade",
  },
  {
    id: 4,
    src: "/images/plat/plat4.jpg",
    alt: "Assiette de fromages et charcuterie",
  },
  {
    id: 5,
    src: "/images/plat/plat5.jpg",
    alt: "Quiche maison avec salade",
  },
  {
    id: 6,
    src: "/images/plat/plat6.jpg",
    alt: "Galette classic",
  },
  {
    id: 7,
    src: "/images/plat/plat7.jpg",
    alt: "Galette Vertes",
  },
  {
    id: 8,
    src: "/images/plat/plat8.jpg",
    alt: "Planche de charcuterie",
  },
  {
    id: 9,
    src: "/images/plat/plat9.jpg",
    alt: "Galette classic",
  },
  {
    id: 10,
    src: "/images/plat/plat10.jpg",
    alt: "Dessert gourmand",
  },
];

export const menuPhotos = [
  { id: 1, src: "/images/menu/menu1.jpg", alt: "Menu Crêpes" },
  { id: 2, src: "/images/menu/menu2.jpg", alt: "Menu Galettes Sarrasin" },
  { id: 3, src: "/images/menu/menu3.jpg", alt: "Menu Salades et Plats" },
  { id: 4, src: "/images/menu/menu4.jpg", alt: "Menu Galettes (détails)" },
  { id: 5, src: "/images/menu/menu5.jpg", alt: "Menu Crêpes (détails)" },
    { id: 6, src: "/images/menu/menu6.jpg", alt: "Dessert" },

];

export const interiorPhotos = [
  {
    id: 1,
    src: "/images/interieur/interieur1.jpg",
    alt: "Bar et espace principal",
  },
  {
    id: 2,
    src: "/images/interieur/interieur2.jpg",
    alt: "Salle avec banquettes rouges",
  },
  { id: 3, src: "/images/interieur/interieur3.jpg", alt: "Tables élégantes" },
  {
    id: 4,
    src: "/images/interieur/interieur4.jpg",
    alt: "Ambiance chaleureuse",
  },
  { id: 5, src: "/images/interieur/interieur5.jpg", alt: "Espace terrasse" },
  { id: 6, src: "/images/interieur/interieur6.jpg", alt: "Espace terrasse" },
  { id: 7, src: "/images/interieur/interieur7.jpg", alt: "Espace terrasse" },
{ id: 8, src: "/images/interieur/interieur8.jpg", alt: "Espace terrasse" },
];

// ==========================================
// LABELS & TRANSLATIONS
// ==========================================

export const aboutContent = {
  title: { fr: "Notre Histoire", en: "Our Story", hu: "Történetünk" },
  subtitle: {
    fr: "Une passion pour l'excellence",
    en: "A passion for excellence",
    hu: "A kiválóság iránti szenvedély",
  },
  paragraphs: {
    fr: [
      "Madame Monsieur est né d'une passion pour la gastronomie française au cœur de Budapest.",
      "Chaque plat est préparé avec soin et des produits de qualité exceptionnelle.",
    ],
    en: [
      "Madame Monsieur was born from a passion for French gastronomy in the heart of Budapest.",
      "Each dish is carefully prepared with exceptional quality products.",
    ],
    hu: [
      "A Madame Monsieur a francia gasztronómia iránti szenvedélyből született Budapest szívében.",
      "Minden étel gondosan, kivételes minőségű alapanyagokból készül.",
    ],
  },
  highlights: [
    {
      icon: "chef-hat",
      text: {
        fr: "Cuisine raffinée",
        en: "Refined cuisine",
        hu: "Finom konyha",
      },
    },
    {
      icon: "wine",
      text: { fr: "Carte des vins", en: "Wine list", hu: "Borlap" },
    },
  ],
};

export const contactLabels = {
  badge: { fr: "Réservation", en: "Reservation", hu: "Foglalás" },
  title: { fr: "Nous Trouver", en: "Find Us", hu: "Találjon ránk" },
  cardTitle: {
    fr: "Réservez votre table",
    en: "Book your table",
    hu: "Foglaljon asztalt",
  },
  cardText: {
    fr: "Vivez une expérience gastronomique inoubliable. Réservez dès maintenant votre table pour profiter de notre cuisine raffinée.",
    en: "Experience an unforgettable culinary journey. Book your table now to enjoy our refined cuisine.",
    hu: "Éljen át egy felejthetetlen kulináris élményt. Foglaljon asztalt most, és élvezze kifinomult konyhánkat.",
  },
  cta: { fr: "Réserver maintenant", en: "Book now", hu: "Foglalás most" },
  address: { fr: "Adresse", en: "Address", hu: "Cím" },
  phoneLabel: { fr: "Téléphone", en: "Phone", hu: "Telefon" },
  hours: { fr: "Horaires", en: "Hours", hu: "Nyitvatartás" },
  social: {
    fr: "Suivez-nous sur les réseaux sociaux",
    en: "Follow us on social media",
    hu: "Kövessen minket a közösségi médiában",
  },
};

export const footerLabels = {
  tagline: {
    fr: "L'art de la table à Budapest. Une expérience culinaire raffinée dans une ambiance élégante.",
    en: "The art of the table in Budapest. A refined culinary experience in an elegant atmosphere.",
    hu: "Az asztali művészet Budapesten. Kifinomult kulináris élmény elegáns környezetben.",
  },
  nav: { fr: "Navigation", en: "Navigation", hu: "Navigáció" },
  contact: { fr: "Contact", en: "Contact", hu: "Kapcsolat" },
  hours: { fr: "Horaires", en: "Hours", hu: "Nyitvatartás" },
  social: { fr: "Suivez-nous", en: "Follow us", hu: "Kövess minket" },
  rights: {
    fr: "Tous droits réservés.",
    en: "All rights reserved.",
    hu: "Minden jog fenntartva.",
  },
  madeWith: { fr: "Fait avec", en: "Made with", hu: "Készült" },
  legal: { fr: "Mentions légales", en: "Legal notice", hu: "Jogi nyilatkozat" },
  privacy: {
    fr: "Politique de confidentialité",
    en: "Privacy policy",
    hu: "Adatvédelmi irányelvek",
  },
  navLinks: {
    accueil: { fr: "Accueil", en: "Home", hu: "Kezdőlap" },
    "a-propos": { fr: "À propos", en: "About", hu: "Rólunk" },
    menu: { fr: "Menu", en: "Menu", hu: "Étlap" },
    galerie: { fr: "Galéria", en: "Gallery", hu: "Galéria" },
    avis: { fr: "Avis", en: "Reviews", hu: "Vélemények" },
    contact: { fr: "Contact", en: "Contact", hu: "Kapcsolat" },
  },
};

export const galleryLabels = {
  badge: { fr: "Galerie", en: "Gallery", hu: "Galéria" },
  title: { fr: "Nos Créations", en: "Our Creations", hu: "Alkotásaink" },
  description: {
    fr: "Un aperçu visuel de notre univers : plats raffinés, cocktails signatures et ambiance élégante",
    en: "A visual glimpse of our world: refined dishes, signature cocktails, and elegant atmosphere",
    hu: "Vizuális betekintés világunkba: finom ételek, koktélkülönlegességek és elegáns környezet",
  },
  drinks: {
    fr: "Cocktails & Boissons",
    en: "Cocktails & Drinks",
    hu: "Koktélok és Italok",
  },
  dishes: { fr: "Nos Plats", en: "Our Dishes", hu: "Ételeink" },
  menu: {
    fr: "Notre Carte Complète",
    en: "Our Full Menu",
    hu: "Teljes Étlapunk",
  },
};

export const headerLabels = {
  navLinks: {
    accueil: { fr: "Accueil", en: "Home", hu: "Kezdőlap" },
    about: { fr: "À Propos", en: "About", hu: "Rólunk" },
avis: { fr: "Avis", en: "Reviews", hu: "Vélemények" },
    menu: { fr: "Menu", en: "Menu", hu: "Étlap" },
    galerie: { fr: "Galerie", en: "Gallery", hu: "Galéria" },
    contact: { fr: "Contact", en: "Contact", hu: "Kapcsolat" },
  },
  reservation: { fr: "Réservation", en: "Reservation", hu: "Foglalás" },
};

export const heroLabels = {
  badge: {
    fr: "Cuisine raffinée à Budapest",
    en: "Fine dining in Budapest",
    hu: "Finom ételek Budapesten",
  },
  ctaBook: {
    fr: "Réserver une table",
    en: "Book a table",
    hu: "Asztalfoglalás",
  },
  ctaMenu: {
    fr: "Découvrir le menu",
    en: "Discover the menu",
    hu: "Étlap felfedezése",
  },
};

export const menuLabels = {
  badge: { fr: "Notre carte", en: "Our Menu", hu: "Étlapunk" },
  title: { fr: "Menu", en: "Menu", hu: "Menu" },
  description: {
    fr: "Crêpes sucrées, galettes de sarrasin sans gluten, salades fraîches et plats faits maison",
    en: "Sweet crepes, gluten-free buckwheat galettes, fresh salads and homemade dishes",
    hu: "Édes palacsinták, gluténmentes hajdina galette-ek, friss saláták és házi készítésű ételek",
  },
  glutenTitle: {
    fr: "Galettes sans gluten :",
    en: "Gluten-free galettes:",
    hu: "Gluténmentes galette:",
  },
  glutenText: {
    fr: "Toutes nos galettes de sarrasin sont préparées sans gluten.",
    en: "All our buckwheat galettes are prepared gluten-free.",
    hu: "Minden hajdina galette-ünk gluténmentesen készül.",
  },
  extrasTitle: {
    fr: "Extras disponibles :",
    en: "Available extras:",
    hu: "Választható extrák:",
  },
  extrasSweet: {
    fr: "Crème chantilly (400 huf), Boule de glace (800-1000 huf)",
    en: "Whipped cream (400 huf), Scoop of ice cream (800-1000 huf)",
    hu: "Tejszínhab (400 huf), Gombóc fagylalt (800-1000 huf)",
  },
  extrasSavory: {
    fr: "Viande supplémentaire (800 huf), Saumon gravlax (1200 huf)",
    en: "Extra meat (800 huf), Gravlax salmon (1200 huf)",
    hu: "Extra hús (800 huf), Gravlax lazac (1200 huf)",
  },
  galleryCTA: {
    fr: "Vous souhaitez voir notre menu complet avec photos ?",
    en: "Would you like to see our full menu with photos?",
    hu: "Szeretné látni a teljes étlapunkat fotókkal?",
  },
  galleryBtn: {
    fr: "Voir la galerie photos",
    en: "View photo gallery",
    hu: "Fotógaléria megtekintése",
  },
};

export const testimonialLabels = {
  badge: { fr: "Témoignages", en: "Testimonials", hu: "Vélemények" },
  title: {
    fr: "Avis de nos Clients",
    en: "Guest Reviews",
    hu: "Vendégeink véleménye",
  },
  description: {
    fr: "Découvrez ce que nos clients pensent de leur expérience chez Madame Monsieur",
    en: "Discover what our guests think about their experience at Madame Monsieur",
    hu: "Fedezze fel, mit gondolnak vendégeink a Madame Monsieur-nél szerzett élményeikről",
  },
  averageNote: {
    fr: "Note moyenne",
    en: "Average rating",
    hu: "Átlagos értékelés",
  },
};

// ==========================================
// TESTIMONIALS - VERSION COMPLÈTE RESTAURÉE
// ==========================================
export const testimonials = [
  {
    id: 1,
    name: "Sophie Laurent",
    location: "Paris, France",
    rating: 5,
    comment: {
      fr: "Une expérience culinaire exceptionnelle ! Les plats sont raffinés, le service impeccable et l'ambiance est tout simplement magique.",
      en: "An exceptional culinary experience! The dishes are refined, the service is impeccable and the atmosphere is simply magical.",
      hu: "Kivételes kulináris élmény! Az ételek kifinomultak, a kiszolgálás kifogástalan, a hangulat pedig egyszerűen varázslatos."
    },
    date: "Janvier 2026"
  },
  {
    id: 2,
    name: "Thomas Dubois",
    location: "Lyon, France",
    rating: 5,
    comment: {
      fr: "Madame Monsieur est devenu mon restaurant préféré à Budapest. La qualité des produits et l'élégance du cadre en font une adresse incontournable.",
      en: "Madame Monsieur has become my favorite restaurant in Budapest. The quality of the products and the elegance of the setting make it a must-visit.",
      hu: "A Madame Monsieur lett a kedvenc éttermem Budapesten. A termékek minősége és a környezet eleganciája megkerülhetetlen címmé teszi."
    },
    date: "Décembre 2025"
  },
  {
    id: 3,
    name: "Marie Leclerc",
    location: "Budapest, Hongrie",
    rating: 5,
    comment: {
      fr: "Un lieu d'exception où tradition française et modernité se rencontrent parfaitement. Les cocktails sont divins !",
      en: "An exceptional place where French tradition and modernity meet perfectly. The cocktails are divine!",
      hu: "Kivételes hely, ahol a francia hagyomány és a modernitás tökéletesen találkozik. A koktélok isteniek!"
    },
    date: "Janvier 2026"
  },
  {
    id: 4,
    name: "Antoine Bernard",
    location: "Genève, Suisse",
    rating: 5,
    comment: {
      fr: "Service attentionné et cuisine remarquable. Parfait pour un dîner en amoureux ou un repas d'affaires.",
      en: "Attentive service and remarkable cuisine. Perfect for a romantic dinner or a business meal.",
      hu: "Figyelmes kiszolgálás és figyelemre méltó konyha. Tökéletes egy romantikus vacsorához vagy egy üzleti étkezéshez."
    },
    date: "Novembre 2025"
  },
  {
    id: 5,
    name: "Claire Martin",
    location: "Bruxelles, Belgique",
    rating: 5,
    comment: {
      fr: "Chaque visite est un enchantement. La présentation des plats est artistique et l'équipe est aux petits soins.",
      en: "Each visit is an enchantment. The presentation of the dishes is artistic and the team is very attentive.",
      hu: "Minden látogatás egy varázslat. Az ételek tálalása művészi, a csapat pedig mindenre odafigyel."
    },
    date: "Décembre 2025"
  },
  {
    id: 6,
    name: "Lucas Petit",
    location: "Nice, France",
    rating: 5,
    comment: {
      fr: "Une adresse exceptionnelle que je recommande à tous mes amis. Le rapport qualité-prix est excellent.",
      en: "An exceptional address that I recommend to all my friends. The value for money is excellent.",
      hu: "Kivételes hely, amelyet minden barátomnak ajánlok. Az ár-érték arány kiváló."
    },
    date: "Octobre 2025"
  }
];
