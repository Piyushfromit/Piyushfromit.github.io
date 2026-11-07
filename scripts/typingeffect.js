const text = document.getElementById('java-typing')
const words = ['JAVA BACKEND DEVELOPER', 'SPRING BOOT ENTHUSIAST', 'PROBLEM SOLVER']
let wordIdx = 0
let charIdx = 0
let deleting = false

function write() {
  const word = words[wordIdx]
  charIdx += deleting ? -1 : 1
  text.textContent = word.slice(0, charIdx)

  let delay = deleting ? 45 : 95
  if (!deleting && charIdx === word.length) {
    delay = 1800 // pause on full word
    deleting = true
  } else if (deleting && charIdx === 0) {
    deleting = false
    wordIdx = (wordIdx + 1) % words.length
    delay = 400
  }
  setTimeout(write, delay)
}

// Respect users who prefer reduced motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  text.textContent = words[0]
} else {
  text.textContent = ''
  write()
}
