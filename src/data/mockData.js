// ==========================================
// RESTAURANT INFORMATION
// ==========================================
export const restaurantInfo = {
  name: "Madame Monsieur",
  tagline: {
    fr: "L'authentique bistrot français à Budapest",
    en: "The authentic French bistro in Budapest",
    hu: "Autentikus francia bisztró Budapesten",
  },
  description: {
    fr: "Bienvenue chez Madame Monsieur, votre bistrot et crêperie au cœur de Budapest. Nous vous invitons à partager un moment convivial et à découvrir une cuisine française authentique, généreuse et faite maison.",
    en: "Welcome to Madame Monsieur, your bistro and creperie in the heart of Budapest. We invite you to share a convivial moment and discover authentic, generous, and homemade French cuisine.",
    hu: "Üdvözöljük a Madame Monsieur-ben, az Ön bisztrójában és palacsintázójában Budapest szívében. Meghívjuk Önt egy barátságos pillanatra, hogy felfedezze az autentikus, bőséges és házi készítésű francia konyhát.",
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
    fr: "Mercredi - Vendredi : 11h00 - 22h00",
    en: "Wednesday - Friday: 11:00 AM - 10:00 PM",
    hu: "Szerda - Péntek: 11:00 - 22:00",
  },
  weekend: {
    fr: "Samedi - Dimanche : 11h00 - 22h00",
    en: "Saturday - Sunday: 11:00 AM - 10:00 PM",
    hu: "Szombat - Vasárnap: 11:00 - 22:00",
  },
  closed: {
    fr: "Fermé lundi et mardi",
    en: "Closed on Monday and Tuesday",
    hu: "Hétfőn és kedden zárva",
  },
},
};

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
  },
  {
    id: 2,
    src: "/images/plat/plat2.jpg",
  },
  {
    id: 5,
    src: "/images/plat/plat5.jpg",
  },
  {
    id: 6,
    src: "/images/plat/plat6.jpg",
  },
  {
    id: 7,
    src: "/images/plat/plat7.jpg",
  },
  {
    id: 8,
    src: "/images/plat/plat8.jpg",
  },
  {
    id: 9,
    src: "/images/plat/plat9.jpg",
  },
  {
    id: 10,
    src: "/images/plat/plat10.jpg",
  },
];


export const interiorPhotos = [
  {
    id: 1,
    src: "/images/interieur/interieur1.jpg"
  },
  {
    id: 2,
    src: "/images/interieur/interieur2.jpg"
  },
  { id: 3, src: "/images/interieur/interieur3.jpg" },
  {
    id: 4,
    src: "/images/interieur/interieur4.jpg",
  }
];

// ==========================================
// LABELS & TRANSLATIONS
// ==========================================

export const aboutContent = {
  title: { fr: "Notre Histoire", en: "Our Story", hu: "Történetünk" },
  subtitle: {
    fr: "L'amour de la cuisine authentique",
    en: "A love for authentic cuisine",
    hu: "Az autentikus konyha szeretete",
  },
  paragraphs: {
    fr: [
      "Madame Monsieur est né de l'envie de partager les vraies saveurs des bistrots français au cœur de Budapest.",
      "Chaque plat est préparé avec passion, dans une ambiance chaleureuse où l'on se sent comme à la maison.",
    ],
    en: [
      "Madame Monsieur was born from the desire to share the true flavors of French bistros in the heart of Budapest.",
      "Each dish is prepared with passion, in a cozy atmosphere where you feel right at home.",
    ],
    hu: [
      "A Madame Monsieur abból a vágyból született, hogy megosszuk a francia bisztrók valódi ízeit Budapest szívében.",
      "Minden étel szenvedéllyel készül, egy olyan hangulatos környezetben, ahol otthon érezheti magát.",
    ],
  },
  highlights: [
    {
      icon: "chef-hat",
      text: {
        fr: "Recettes traditionnelles",
        en: "Traditional recipes",
        hu: "Hagyományos receptek",
      },
    },
    {
      icon: "wine",
      text: { fr: "Carte des boissons", en: "Drink list", hu: "Italválaszték" },
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
    fr: "Venez partager un bon moment autour d'un repas gourmand. Réservez votre table dès maintenant.",
    en: "Come and share a great time over a delicious meal. Book your table now.",
    hu: "Jöjjön el és töltsön el egy remek időt egy finom étkezés mellett. Foglaljon asztalt most.",
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
    fr: "L'authentique bistrot français à Budapest. Un moment gourmand dans une ambiance chaleureuse.",
    en: "The authentic French bistro in Budapest. A delicious moment in a cozy atmosphere.",
    hu: "Autentikus francia bisztró Budapesten. Finom pillanatok hangulatos környezetben.",
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
    galerie: { fr: "Galerie", en: "Gallery", hu: "Galéria" },
    avis: { fr: "Avis", en: "Reviews", hu: "Vélemények" },
    contact: { fr: "Contact", en: "Contact", hu: "Kapcsolat" },
  },
};

export const galleryLabels = {
  badge: { fr: "Galerie", en: "Gallery", hu: "Galéria" },
  title: { fr: "Nos Assiettes", en: "Our Plates", hu: "Tányérjaink" },
  description: {
    fr: "Un aperçu visuel de notre univers : plats gourmands, crêpes généreuses et ambiance décontractée.",
    en: "A visual glimpse of our world: delicious dishes, generous crepes, and a relaxed atmosphere.",
    hu: "Vizuális betekintés világunkba: finom ételek, bőséges palacsinták és laza hangulat.",
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

export const heroLabels = {
  badge: {
    fr: "Bistrot & Crêperie à Budapest",
    en: "Bistro & Creperie in Budapest",
    hu: "Bisztró és Palacsintázó Budapesten",
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
  flipInstruction: {
    fr: "Cliquez sur les coins ou glissez pour tourner les pages.",
    en: "Click on the corners or swipe to turn the pages.",
    hu: "Kattintson a sarkokra, vagy húzza az ujját a lapozáshoz.",
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

export const headerLabels = {

  navLinks: {

    accueil: { fr: "Accueil", en: "Home", hu: "Kezdőlap" },

    about: { fr: "À Propos", en: "About", hu: "Rólunk" },
    /*menu: { fr: "Menu", en: "Menu", hu: "Étlap" },*/

    galerie: { fr: "Galerie", en: "Gallery", hu: "Galéria" },

    avis: { fr: "Avis", en: "Reviews", hu: "Vélemények" },

    contact: { fr: "Contact", en: "Contact", hu: "Kapcsolat" },

  },

  reservation: { fr: "Réservation", en: "Reservation", hu: "Foglalás" },

};

export const testimonialLabels = {
  badge: { fr: "Témoignages", en: "Testimonials", hu: "Vélemények" },
  title: {
    fr: "Avis de nos Clients",
    en: "Guest Reviews",
    hu: "Vendégeink véleménye",
  },
  description: {
    fr: "Ce que nos clients disent de leur repas chez Madame Monsieur.",
    en: "What our guests say about their meal at Madame Monsieur.",
    hu: "Amit vendégeink mondanak a Madame Monsieur-ben elköltött étkezésükről.",
  },
  averageNote: {
    fr: "Note moyenne",
    en: "Average rating",
    hu: "Átlagos értékelés",
  },
};

// ==========================================
// TESTIMONIALS (VRAIS AVIS GOOGLE)
// ==========================================
export const testimonials = [
  {
    id: 1,
    name: "Ainonkpo Leandry",
    location: "Avis Google",
    rating: 5,
    comment: {
      fr: "Nous sommes passés avec ma petite amie dans ce restaurant dès notre arrivée, c’était si savoureux que nous avons dû y retourner à notre départ afin d’être sur de finir le voyage sur une belle note ! Sans oublier un + pour l’accueil chaleureux du gérant et ses anecdotes loufoques à la française. Je recommande chaudement !",
      en: "My girlfriend and I visited this restaurant as soon as we arrived. It was so tasty that we had to go back before leaving to end our trip on a high note! A big plus for the warm welcome from the manager and his quirky French anecdotes. I highly recommend it!",
      hu: "Barátnőmmel rögtön az érkezésünk után betértünk ebbe az étterembe. Olyan finom volt, hogy elutazás előtt is vissza kellett mennünk, hogy szépen zárjuk az utazást! Külön pluszpont az üzletvezető meleg fogadtatásáért és vicces francia anekdotáiért. Meleg szívvel ajánlom!"
    },
    date: "Il y a 7 mois"
  },
  {
    id: 2,
    name: "Traiteur la rose des sables",
    location: "Avis Google",
    rating: 5,
    comment: {
      fr: "Nous avons mangé ce midi de très bonnes crêpes, avec un très bon service, le rapport qualité prix correspond à la qualité de la cuisine. L'établissement est propre avec une belle déco. Vous pouvez y aller les yeux fermés. Des français en vacances. À bientôt.",
      en: "We had very good crepes for lunch today, with great service. The value for money matches the quality of the food. The establishment is clean with beautiful decor. You can go there with your eyes closed. French people on vacation. See you soon.",
      hu: "Nagyon finom palacsintákat ettünk ma ebédre, nagyon jó kiszolgálással. Az ár-érték arány megfelel az ételek minőségének. A hely tiszta és gyönyörű a dekoráció. Csukott szemmel is mehetnek. Nyaraló franciák. Hamarosan találkozunk."
    },
    date: "Il y a un mois"
  },
  {
    id: 3,
    name: "Fabienne Chaber",
    location: "Avis Google",
    rating: 5,
    comment: {
      fr: "Très belle découverte ! Nous avons pris les galettes et elles étaient aussi bonnes qu’en Bretagne. D’ailleurs, le Chef est français et est natif de Brest. Nous nous sommes partagés la crêpe complète. Tellement délicieuse. L’accueil et le service étaient impeccables.",
      en: "A wonderful discovery! We had the galettes and they were as good as in Brittany. In fact, the Chef is French and comes from Brest. We shared the 'complète' crepe. So delicious. The welcome and service were impeccable.",
      hu: "Nagyszerű felfedezés! Galette-eket ettünk, és olyan finomak voltak, mint Bretagne-ban. A séf egyébként francia és Brestből származik. Megosztottunk egy 'complète' palacsintát. Nagyon finom volt. A fogadtatás és a kiszolgálás kifogástalan volt."
    },
    date: "Il y a 5 mois"
  },
  {
    id: 4,
    name: "Lucille Gdl",
    location: "Avis Google",
    rating: 5,
    comment: {
      fr: "Les crêpes étaient délicieuses et les quantités sont généreuses ! Le cadre est vraiment sympa. Le restaurant est très bien placé, en plein cœur de la ville. Le patron et le serveur étaient vraiment accueillants et chaleureux. Je reviendrai avec plaisir !",
      en: "The crepes were delicious and the portions are generous! The setting is really nice. The restaurant is very well located, right in the heart of the city. The boss and the waiter were really welcoming and warm. I will come back with pleasure!",
      hu: "A palacsinták finomak voltak, az adagok pedig bőségesek! A környezet igazán kellemes. Az étterem nagyon jó helyen, a város szívében található. A főnök és a pincér is nagyon barátságos és szívélyes volt. Örömmel fogok visszatérni!"
    },
    date: "Il y a un an"
  },
  {
    id: 5,
    name: "kawtar sadky",
    location: "Avis Google",
    rating: 4,
    comment: {
      fr: "Bon restaurant de crêpes à Budapest. Les produits sont très frais et le service est top. Ça reste un peu cher pour des crêpes, en comparaison avec les restaurants à côté, mais c'est à faire si vous aimez les crêpes.",
      en: "Good crepe restaurant in Budapest. The products are very fresh and the service is top notch. It remains a bit expensive for crepes compared to places nearby, but it's a must-do if you like crepes.",
      hu: "Jó palacsintázó Budapesten. A termékek nagyon frissek és a kiszolgálás is kiváló. Kicsit drága palacsintához képest a szomszédos éttermekhez viszonyítva, de mindenképp érdemes kipróbálni, ha szereted a palacsintát."
    },
    date: "Il y a un an"
  },
  {
    id: 6,
    name: "Damien Rivier",
    location: "Avis Google",
    rating: 5,
    comment: {
      fr: "Un restaurant super agréable en plein cœur de Budapest. Si vous aimez les crêpes sucrées et salées c’est l’endroit idéal. Je recommande !",
      en: "A super pleasant restaurant in the heart of Budapest. If you like sweet and savory crepes, this is the perfect place. I recommend it!",
      hu: "Egy szuper kellemes étterem Budapest szívében. Ha szereted az édes és sós palacsintákat, ez a tökéletes hely. Ajánlom!"
    },
    date: "Il y a un an"
  },
  {
    id: 7,
    name: "jean-noel nicole Benguigui",
    location: "Avis Google",
    rating: 5,
    comment: {
      fr: "De séjour à Budapest en famille, nous sommes tombés par hasard sur cette crêperie française. Le patron, français, très agréable et sympathique nous a très bien reçus. Très bonnes crêpes au sarrasin bien garnies, sucrées ou salées. Je recommande vivement.",
      en: "Staying in Budapest with family, we stumbled upon this French creperie by chance. The French owner, very pleasant and friendly, welcomed us very well. Very good buckwheat crepes, well garnished, sweet or savory. I highly recommend.",
      hu: "Családi nyaraláson voltunk Budapesten, és véletlenül bukkantunk erre a francia palacsintázóra. A nagyon kellemes és barátságos francia tulajdonos kiválóan fogadott minket. Nagyon jó hajdina palacsinták, bőségesen töltve, édesen vagy sósan. Melegen ajánlom."
    },
    date: "Il y a 11 mois"
  }
];