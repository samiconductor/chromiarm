document.querySelectorAll('link[rel=import]').forEach(link => {
  const appendTo = `#js-${link.id}`
  const template = link.import.querySelector('template')
  const clone = document.importNode(template.content, true)

  document.querySelector(appendTo).appendChild(clone)
})
