const scriptURL =
  'https://script.google.com/macros/s/AKfycbwElebV2ONtMTMvS2DiiEJxyFom5W5hXLc0R-bCNx6vCM1EFCP5CL8hc9Bn75mZa5S8/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = 'Message Sent Successfully'
      setTimeout(() => {
        msg.innerHTML = ''
      }, 5000)
      form.reset()
    })
    .catch((error) => console.error('Error!', error.message))
})

let open = false

function openmenu() {
  let menu = document.getElementById('burger_items')

  if (open) {
    menu.style.display = 'none'
    open = false
  } else {
    menu.style.display = 'block'
    open = true
  }
}

window.addEventListener('load', () => {
  loadskills(skills)
  loadprojects(projects)
})

let skills = [
  {
    src: './data/java.png',
    name: 'Java',
    type: 'backend',
  },
  {
    src: './data/js.png',
    name: 'JavaScript',
    type: 'backend',
  },
  {
    src: './data/springboot.png',
    name: 'SpringBoot',
    type: 'backend',
  },
  {
    src: './data/hibernate.png',
    name: 'Hibernate',
    type: 'backend',
  },
  {
    src: './data/sql.jpg',
    name: 'SQL',
    type: 'backend',
  },
  {
    src: './data/aws.png',
    name: 'AWS',
    type: 'backend',
  },
  {
    src: './data/html.png',
    name: 'HTML',
    type: 'frontend',
  },
  {
    src: './data/css.png',
    name: 'CSS',
    type: 'frontend',
  },
  {
    src: './data/github.png',
    name: 'GitHUb',
    type: 'all',
  },
  {
    src: './data/netlify.png',
    name: 'Netlify',
    type: 'all',
  },
]

var loadskills = (arr) => {
  let skills_container = document.getElementById('skills-container')
  skills_container.innerHTML = null
  arr.forEach((ele) => {
    const skill = document.createElement('div')

    const logo = document.createElement('img')
    logo.src = ele.src
    const name = document.createElement('p')
    name.innerText = ele.name

    skill.append(logo, name)

    skills_container.append(skill)
  })
}

var loadprojects = (arr) => {
  const projects_container = document.getElementById('projects-container')
  projects_container.innerHTML = null

  arr.forEach((ele) => {
    const project = document.createElement('div')

    const project_demo = document.createElement('div')
    project_demo.setAttribute('class', 'project-demo')
    const image = document.createElement('img')
    image.src = ele.image
    project_demo.append(image)

    const project_info = document.createElement('div')
    project_info.setAttribute('class', 'tac')

    const name = document.createElement('h3')
    name.innerText = ele.name

    const desc = document.createElement('p')
    desc.innerText = ele.desc

    const techstack = document.createElement('b') 
       
    let bag = ''
    ele.techstack.forEach((e) => {
      bag += ' | ' + e
    })
    techstack.innerText = 'Tech Stack ' + bag

    const buttons = document.createElement('div')
    buttons.setAttribute('class', 'btn_div')

    const live = document.createElement('div')
    live.setAttribute('class', 'btn')
    const livelink = document.createElement('a')
    livelink.href = ele.live
    livelink.target = '_blank'
    livelink.innerText = 'See Live'
    live.append(livelink)

    const github = document.createElement('div')
    github.setAttribute('class', 'btn')
    const githublink = document.createElement('a')
    githublink.href = ele.github
    githublink.target = '_blank'
    githublink.innerText = 'View Code'
    github.append(githublink)

    buttons.append(live, github)

    project_info.append(name, desc,techstack, buttons)

    project.append(project_demo, project_info)

    projects_container.append(project)
  })
}

let projects = [
  {
    image: './data/BookMyBus.png',
    name: 'BookMyBus SpringBoot Application',
    desc:
      "An end-to-end bus reservation system. It handles user authentication, create bus, route, book reservations, provide feedback.",
    live: 'https://drive.google.com/file/d/1z8W2wPKOp8Avx32rJu1jWigyjyMxW-F5/view?usp=sharing',
    github: 'https://github.com/sumitraghavwork/habitual-flag-8718',
    techstack: ['SpringBoot', 'AWS', 'Hibernate'],
    group: 'true',
    solo: 'false',
    type: 'all',
  },
  {
    image: './data/recruitee.png',
    name: 'Recruitee.com Website Clone',
    desc:
      "Recruitee is built for bringing teams together. That's why we design tools that allow you to structure and customize your recruitment into a collaborative process. More than 5,000 companies use our collaborative hiring software to share the work, speed up daily processes, and grow their teams together.",
    live: 'https://inquisitive-kashata-a201b3.netlify.app/',
    github: 'https://github.com/sumitraghavwork/bashful-form-6526',
    techstack: ['HTML', 'JavaScript', 'CSS'],
    group: 'true',
    solo: 'false',
    type: 'all',
  },
  {
    image: './data/myntra.png',
    name: 'Myntra Website Clone',
    desc:
      'Ecommerce website for online shopping with Full functionality flow i.e SignUp, SighIn, Cart, Payment Checkout',
    live: 'https://sumitraghavwork.github.io/mytro-di-myntra/',
    github: 'https://github.com/sumitraghavwork/mytro-di-myntra',
    techstack: ['HTML', 'JavaScript', 'CSS'],
    group: 'true',
    solo: 'false',
    type: 'all',
  },
  {
    image: './data/stmwebsite.png',
    name: 'Student Management System',
    desc:
      'Student Management System Helps provide a single platform where Instructors and Students can Sign Up and Manage the Students lectures and assignments.',
    live: 'https://sumitraghavwork.github.io/StudentManagementSystem/',
    github: 'https://github.com/sumitraghavwork/StudentManagementSystem',
    techstack: ['HTML', 'JavaScript', 'CSS'],
    group: 'false',
    solo: 'true',
    type: 'all',
  },
  {
    image: './data/weather.png',
    name: 'Weather App',
    desc:
      'Provides Weather Forecast of the city.Weather API is used to get the forecast for the next 7 days. Google maps API is configured to get geolocation data of the user and to provide the current location and weather information.',
    live: 'https://sumitraghavwork.github.io/weather101/',
    github: 'https://github.com/sumitraghavwork/weather101',
    techstack: ['HTML', 'JavaScript', 'CSS'],
    group: 'false',
    solo: 'true',
    type: 'all',
  },
  {
    image: './data/starwars.png',
    name: 'StarWars Guide',
    desc:
      ' Star wars is a fictional Series and this app gives description of various characters of series using API.',
    live: 'https://sumitraghavwork.github.io/starwars/',
    github: 'https://github.com/sumitraghavwork/starwars',
    techstack: ['HTML', 'JavaScript', 'CSS'],
    group: 'false',
    solo: 'true',
    type: 'all',
  },
]
