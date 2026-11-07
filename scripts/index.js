// Uncomment the line below to activate the contact form (Google Sheet)
// const scriptURL ='https://script.google.com/macros/s/AKfycbwElebV2ONtMTMvS2DiiEJxyFom5W5hXLc0R-bCNx6vCM1EFCP5CL8hc9Bn75mZa5S8/exec'

document.documentElement.classList.remove('no-js')

const RESUME_URL =
  'https://drive.usercontent.google.com/u/0/uc?id=1S1tICyFT3Ts_whWB7EhcZGt0d2GXaUsh&export=download'

/* ---------------- Contact form ---------------- */
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

const showMsg = (text) => {
  msg.textContent = text
  setTimeout(() => (msg.textContent = ''), 5000)
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  // If the Google Sheet script is not enabled, fall back to the user's mail app
  if (typeof scriptURL === 'undefined') {
    const data = new FormData(form)
    const subject = encodeURIComponent(`Portfolio message from ${data.get('Name')}`)
    const body = encodeURIComponent(`${data.get('Message')}\n\n${data.get('Name')} (${data.get('Email')})`)
    window.location.href = `mailto:piyushfrommasai@gmail.com?subject=${subject}&body=${body}`
    return
  }

  const button = form.querySelector('button[type="submit"]')
  button.disabled = true
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(() => {
      showMsg('Message sent successfully. Thank you!')
      form.reset()
    })
    .catch((error) => {
      console.error('Error!', error.message)
      showMsg('Something went wrong. Please email me directly.')
    })
    .finally(() => (button.disabled = false))
})

/* ---------------- Data ---------------- */
let skills = [
  { src: './data/java.png', name: 'Java', type: 'backend' },
  { src: './data/springboot.png', name: 'Spring Boot', type: 'backend' },
  { src: './data/hibernate.png', name: 'Hibernate', type: 'backend' },
  { src: './data/sql.jpg', name: 'SQL', type: 'database' },
  { src: './data/aws.png', name: 'AWS', type: 'cloud' },
  { src: './data/js.png', name: 'JavaScript', type: 'language' },
  { src: './data/html.png', name: 'HTML', type: 'frontend' },
  { src: './data/css.png', name: 'CSS', type: 'frontend' },
  { src: './data/restapi.svg', name: 'REST API', type: 'backend' },
  { src: './data/graphql.svg', name: 'GraphQL', type: 'backend' },
  { src: './data/kafka.svg', name: 'Kafka', type: 'messaging' },
  { src: './data/mongodb.svg', name: 'MongoDB', type: 'database' },
  { src: './data/redis.svg', name: 'Redis', type: 'database' },
  { src: './data/docker.svg', name: 'Docker', type: 'devops' },
  { src: './data/kubernetes.svg', name: 'Kubernetes', type: 'devops' },
  { src: './data/jenkins.svg', name: 'Jenkins', type: 'devops' },
  { src: './data/git.svg', name: 'Git', type: 'tools' },
  { src: './data/github.png', name: 'GitHub', type: 'tools' },
  { src: './data/postman.svg', name: 'Postman', type: 'tools' },
  { src: './data/netlify.png', name: 'Netlify', type: 'tools' },
]

let projects = [
  {
    image: './data/fooduswaggerhomepage.jpg',
    name: 'Online Food Delivery Application',
    desc:
      'An end-to-end food delivery system. It handles user and restaurant authentication, categories, orders and bills.',
    live: 'https://drive.google.com/file/d/1AY7rmxxM6qQD9Gr0sR4ojEzUgRdxFBVU/view?usp=share_link',
    github: 'https://github.com/PratyayChakraborty/holy-food-9262',
    techstack: ['SpringBoot', 'Mysql', 'Hibernate', 'Swagger-Ui'],
    group: 'true',
    solo: 'false',
    type: 'all',
  },
  {
    image: './data/cricbuzz.png',
    name: 'Cricbuzz.com Website Clone',
    desc:
      'A clone of Cricbuzz, the cricket news website, showing live scores, match updates and the latest cricket news.',
    live: 'https://piyushfromit.github.io/cricbuzzClone/',
    github: 'https://github.com/Hilton-Borah/Cricbuzz-Clone',
    techstack: ['HTML', 'CSS', 'JavaScript', 'API'],
    group: 'true',
    solo: 'false',
    type: 'all',
  },
  {
    image: './data/myntra.png',
    name: 'Myntra Website Clone',
    desc:
      'E-commerce website for online shopping with a full functional flow: Sign Up, Sign In, Cart and Payment Checkout.',
    live: 'https://sumitraghavwork.github.io/mytro-di-myntra/',
    github: 'https://github.com/sumitraghavwork/mytro-di-myntra',
    techstack: ['HTML', 'CSS', 'JavaScript'],
    group: 'true',
    solo: 'false',
    type: 'all',
  },
  {
    image: './data/lmsofmasai.png',
    name: 'Learning Management System',
    desc:
      'A single platform where instructors and students can sign up and manage lectures and assignments.',
    live: 'https://piyushfromit.github.io/LMSofMasai/',
    github: 'https://github.com/Piyushfromit/LMSofMasai',
    techstack: ['HTML', 'CSS', 'JavaScript'],
    group: 'false',
    solo: 'true',
    type: 'all',
  },
  {
    image: './data/weather.png',
    name: 'Weather App',
    desc:
      "Shows the weather forecast for any city using a Weather API, and uses Google Maps geolocation to show the user's current location and weather.",
    live: 'https://piyushfromit.github.io/WeatherApp/',
    github: 'https://github.com/Piyushfromit/WeatherApp',
    techstack: ['HTML', 'CSS', 'JavaScript', 'API'],
    group: 'false',
    solo: 'true',
    type: 'all',
  },
  {
    image: './data/starwars.png',
    name: 'StarWars Guide',
    desc:
      'Star Wars is a fictional series, and this app describes its various characters using the SWAPI API.',
    live: 'https://piyushfromit.github.io/StarWarsCharacter/',
    github: 'https://github.com/Piyushfromit/StarWarsCharacter',
    techstack: ['HTML', 'CSS', 'JavaScript', 'API'],
    group: 'false',
    solo: 'true',
    type: 'all',
  },
]

/* ---------------- Helpers ---------------- */
const el = (tag, className, text) => {
  const node = document.createElement(tag)
  if (className) node.className = className
  if (text) node.textContent = text
  return node
}

const linkBtn = (href, label, iconClass, className) => {
  const a = el('a', `btn btn-sm ${className}`)
  a.href = href
  a.target = '_blank'
  a.rel = 'noopener'
  a.append(document.createTextNode(label + ' '))
  a.append(el('i', iconClass))
  return a
}

/* ---------------- Render ---------------- */
const loadskills = (arr) => {
  const container = document.getElementById('skills-container')
  container.innerHTML = ''

  arr.forEach((ele) => {
    const card = el('div', 'skill-card')

    const icon = el('div', 'skill-icon')
    if (ele.icon) {
      // Font Awesome icon for skills without an official logo (e.g. REST API)
      const i = el('i', ele.icon)
      i.setAttribute('aria-hidden', 'true')
      icon.append(i)
    } else {
      const img = el('img')
      img.src = ele.src
      img.alt = ''
      img.loading = 'lazy'
      icon.append(img)
    }

    const name = el('p', '', ele.name)
    name.append(el('small', '', ele.type))

    card.append(icon, name)
    container.append(card)
  })
}

const loadprojects = (arr) => {
  const container = document.getElementById('projects-container')
  container.innerHTML = ''

  arr.forEach((ele) => {
    const card = el('article', 'project-card reveal')

    const media = el('div', 'project-media')
    const img = el('img')
    img.src = ele.image
    img.alt = `${ele.name} screenshot`
    img.loading = 'lazy'
    media.append(img, el('span', 'project-tag', ele.solo === 'true' ? 'Solo project' : 'Team project'))

    const body = el('div', 'project-body')
    const tech = el('div', 'tech-list')
    ele.techstack.forEach((t) => tech.append(el('span', 'pill', t)))

    const buttons = el('div', 'btn_div')
    buttons.append(
      linkBtn(ele.live, 'Live demo', 'fa-solid fa-arrow-up-right-from-square', 'btn-primary'),
      linkBtn(ele.github, 'Source code', 'fa-brands fa-github', 'btn-ghost')
    )

    body.append(el('h3', '', ele.name), el('p', '', ele.desc), tech, buttons)
    card.append(media, body)
    container.append(card)
  })
}

/* ---------------- Reveal on scroll ---------------- */
const initReveal = () => {
  const items = document.querySelectorAll('.reveal')
  if (!('IntersectionObserver' in window)) {
    items.forEach((i) => i.classList.add('visible'))
    return
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          io.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  )
  items.forEach((i) => io.observe(i))
}

// Render immediately (script is loaded at the end of <body>)
loadskills(skills)
loadprojects(projects)
initReveal()

const year = document.getElementById('year')
if (year) year.textContent = 2023
