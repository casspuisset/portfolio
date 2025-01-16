const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'Portfolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Cassandre Puisset',
  role: 'Développeur Front End',
  description: 'Insérer rapide description + encart avec photo',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
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
    livePreview: 'https://github.com/casspuisset/mon_vieux_grimoire',
  },
  {
    name: 'Kasa',
    description: 'Application React complète de location immobilière',
    stack: ['HTML', 'SASS', 'React'],
    sourceCode: 'https://github.com/casspuisset/kasa',
    livePreview: 'https://github.com/casspuisset/kasa',
  },
  {
    name: 'Nina Carducci',
    description:
      'Débogage et optimisation du site de la photographe Nina Carducci',
    stack: ['HTML', 'CSS', 'Javascript'],
    sourceCode: 'https://github.com/casspuisset/nina_carducci',
    livePreview: 'https://casspuisset.github.io/nina_carducci/',
  },
  {
    name: 'Sophie Bluel',
    description:
      "Frontend dynamique pour le site de l'architecte d'ntérieur Sophie Bluel",
    stack: ['HTML', 'CSS', 'Javascript'],
    sourceCode: 'https://github.com/casspuisset/sophie_bluel',
    livePreview: 'https://github.com/casspuisset/sophie_bluel',
  },
  {
    name: 'Booky',
    description: "Frontend d'un site location de immobilière",
    stack: ['HTML', 'CSS'],
    sourceCode: 'https://github.com/casspuisset/Booky',
    livePreview: 'https://github.com/casspuisset/Booky',
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
  email: '',
}

export { header, about, projects, skills, contact }
