['node', 'chrome', 'electron'].forEach(dep => {
  const version = document.currentScript.ownerDocument.querySelector(`#js-about-${dep}`)

  version.innerText = process.versions[dep]
})
