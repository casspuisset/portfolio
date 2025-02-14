const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/casspuisset/portfolio',
  title: 'Portfolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Cassandre Puisset',
  role: 'Développeur Front End',
  description:
    "En plein parcours de reconversion professionnelle, j'achève ma première année d'alternance en tant que développeur Web et cherche de nouveaux projets. Maîtrisant à la fois Angular et React, spécialisé Frontend, je cherche activement à me former au Java pour parfaire mon éventail de compétences",
  social: {
    github: 'https://github.com/casspuisset',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Mon Vieux Grimoire',
    description:
      "Backend (serveur et DB) d'un site de partage et de notation de livres",
    resume:
      "Pour le site Mon Vieux Grimoire, il a fallu réaliser la partie Backend et serveur du site. Cela a permis de mettre en place l'inscription et la connexion des utilisateurs et leur accès aux service de création et de notation des livres. La connexion a également été accompagné d'un système de droits pour limiter les actions possibles (création/suppression de se propres créations, notation des livres d'autrui à raison d'une fois maximum et, pour tout utilisateur même non-connecté, une vue sur l'ensemble des livres postés.",
    details:
      "Le serveur a été réalisé avec MongoDB, relié via un serveur Express réalisé avec Node.js. Le système de requête est divisé entre celles associées aux users (reconnu par mot de passe hashé et auxquels sont associés des tokens d'identification) et aux livres qui sont envoyés par ou vers la partie frontend du site selon les requêtes de l'API utilisées.",
    stack: ['HTML', 'SASS', 'Javascript', 'React', 'MongoDB'],
    sourceCode: 'https://github.com/casspuisset/mon_vieux_grimoire',
    livePreview: '',
    image: '/images/mon_vieux_grimoire_desktop.png',
  },
  {
    name: 'Kasa',
    description: 'Application React complète de location immobilière',
    resume:
      "Le frontend du site Kasa a été entièrement réalisé à partir de React. En se basant sur les maquettes fournies, plusieurs pages ont été créées (Accueil, A propos, Erreur et un modèle de page utilisé pour les logements), ainsi qu'un routeur permettant de naviguer entre elles (et de générer les pages des logements àpartir des fichiers JSON fournis). Plusieurs animations react ont également été ajoutées pour dynamiser les interactions entre l'interface et l'utilisateur.",
    details:
      "La génération des différentes pages s'est faite grace au fonctionnements en components de React, qui permettait de définir une structure par la suite irriguée par les props se trouvant dans les fichiers JSON. Des animations permettent de rendre moins abruptes les apparitions/disparitions d'informations lors des ouvertures/fermetures des collapses.",
    stack: ['HTML', 'SASS', 'React'],
    sourceCode: 'https://github.com/casspuisset/kasa',
    livePreview: '',
    image: 'images/kasa_desktop.png',
  },
  {
    name: 'Nina Carducci',
    description:
      'Débogage et optimisation du site de la photographe Nina Carducci, amélioration du référencement SEO',
    resume:
      "Nous avons contacté Nina Carducci pour améliorer son site pré-existant. Plusieurs bugs ont été corrigés (défilement des images du carousel et surlignement des filtres quand sélectionnés), son SEO a été amélioré. Plusieurs modifications importantes ont également été apportées à l'expérience utilisateur et terme de performance et d'accessibilité.",
    details:
      'Le référencement SEO a été effectué en ajoutant les balises nécessaires dans le fichier index.html pour que le site soit repéré comme un service marchand (photographie) avec toutes les informations nécessaires pour son identification par les algorithmes de recherche. La performance a été très grandement améliorée grâce à la compression des photos, leur redimensionnement et leur passage au .webp.',
    stack: ['HTML', 'CSS', 'Javascript'],
    sourceCode: 'https://github.com/casspuisset/nina_carducci',
    livePreview: 'https://casspuisset.github.io/nina_carducci/',
    image: 'images/nina_carducci_desktop.png',
  },
  {
    name: 'Sophie Bluel',
    description:
      "Frontend dynamique pour le site de l'architecte d'ntérieur Sophie Bluel",
    resume:
      "Réalisation de la partie Javascript du site de l'architecte Sophie Bluel, permettant sa connexion et l'accès à l'ajout et la suppression de nouveaux projets. L'affichage du site est dynamique que ce soit concernant la modification des projets ou la modification des aspects visuels de la page de garde (présence de filtres sans connexion/bouton d'accès à la modale et bandeau).",
    details:
      "Le site permet l'identification par mail et mot de passe grace à un token, et offre pour l'admin l'accès à une modale présentant l'ensemble de ses projets, la possibilité de les supprimer (icone poubelle) et d'en poster de nouveaux. L'effet de l'ajout ou la suppression de travaux est visible en direct sans rechargement de la page grace à l'appel des fonctions javaScript de génération de l'affichage (la manipulation des éléments html est réalisé via le fichier JS)",
    stack: ['HTML', 'CSS', 'Javascript'],
    sourceCode: 'https://github.com/casspuisset/sophie_bluel',
    livePreview: '',
    image: 'images/sophie_bluel_desktop.png',
  },
  {
    name: 'Booky',
    description: "Frontend d'un site location de immobilière",
    resume:
      "Réalisation de la page d'accueil du site de Booky, entreprise de voyage. L'objectif était d'atteindre une interface claire, utilisable et fidèle à la maquette à base de langage HTML et CSS. Le site dispose d'une version desktop, une version tablette et une version mobile, avec des spécificités de code relatives à chaque écran (réorientation des blocs, changements de couleur de fond, modification des icônes de recherche).",
    details:
      "La page d'accueil intègre une barre de navigation liée aux éléments de la page, les cards des différents logements et les images s'adaptent à la taille de l'écran tout en restant d'une taille similaire les unes aux autres grâce aux tailles relatives (1fr).",
    stack: ['HTML', 'CSS'],
    sourceCode: 'https://github.com/casspuisset/Booky',
    livePreview: '',
    image: '/images/booky_desktop.png',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'SASS',
  'React',
  'Angular',
  'Node',
  'Git',
  'MongoDB',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'cpuisset98@gmail.com',
}

export { header, about, projects, skills, contact }
