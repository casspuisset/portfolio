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
    stack: ['HTML', 'SASS', 'Javascript', 'React', 'MongoDB'],
    sourceCode: 'https://github.com/casspuisset/mon_vieux_grimoire',
    livePreview: '',
    image: '/images/mon_vieux_grimoire_desktop.png',
  },
  {
    name: 'Kasa',
    description: 'Application React complète de location immobilière',
    stack: ['HTML', 'SASS', 'React'],
    sourceCode: 'https://github.com/casspuisset/kasa',
    livePreview: '',
    image: 'images/kasa_desktop.png',
  },
  {
    name: 'Nina Carducci',
    description:
      'Débogage et optimisation du site de la photographe Nina Carducci, amélioration du référencement SEO',
    stack: ['HTML', 'CSS', 'Javascript'],
    sourceCode: 'https://github.com/casspuisset/nina_carducci',
    livePreview: 'https://casspuisset.github.io/nina_carducci/',
    image: 'images/nina_carducci_desktop.png',
  },
  {
    name: 'Sophie Bluel',
    description:
      "Frontend dynamique pour le site de l'architecte d'ntérieur Sophie Bluel",
    stack: ['HTML', 'CSS', 'Javascript'],
    sourceCode: 'https://github.com/casspuisset/sophie_bluel',
    livePreview: '',
    image: 'images/sophie_bluel_desktop.png',
  },
  {
    name: 'Booky',
    description: "Frontend d'un site location de immobilière",
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
