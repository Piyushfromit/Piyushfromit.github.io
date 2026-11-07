const navbar = document.getElementById('navbar')
const burger = document.getElementById('burger_menu')
const mobileMenu = document.getElementById('burger_items')

/* ---------- Navbar background on scroll ---------- */
const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 10)
window.addEventListener('scroll', onScroll, { passive: true })
onScroll()

/* ---------- Mobile menu ---------- */
const setMenu = (open) => {
  mobileMenu.classList.toggle('open', open)
  document.body.classList.toggle('menu-open', open)
  burger.setAttribute('aria-expanded', String(open))
  burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
  burger.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>'
  // Ensure the navbar is solid while the menu is open
  if (open) navbar.classList.add('scrolled')
  else onScroll()
}

// Kept for backwards compatibility with any inline onclick="openmenu()"
function openmenu() {
  setMenu(!mobileMenu.classList.contains('open'))
}

burger.addEventListener('click', openmenu)
mobileMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)))
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setMenu(false)
})
window.addEventListener('resize', () => {
  if (window.innerWidth > 960) setMenu(false)
})

/* ---------- Active link highlight ---------- */
const links = document.querySelectorAll('.nav-link')
const sections = [...links].map((l) => document.querySelector(l.getAttribute('href'))).filter(Boolean)

if ('IntersectionObserver' in window) {
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        links.forEach((l) => l.classList.toggle('active', l.getAttribute('href') === `#${entry.target.id}`))
      })
    },
    { rootMargin: '-45% 0px -50% 0px' }
  )
  sections.forEach((s) => spy.observe(s))
}
