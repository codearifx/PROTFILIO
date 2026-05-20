export function scrollToSection(target) {
  const el = document.getElementById(target)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
