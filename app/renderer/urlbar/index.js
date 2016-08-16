const {parse: parseUrl} = require('url')
const {escape: escapeQueryString} = require('querystring')
const {valid: validDomain} = require('../../../lib/domain')

const page = document.querySelector('#js-page')

const urlBar = document.currentScript.ownerDocument.querySelector('#js-urlbar')

const defaultProtocol = 'https://'

function updateUrl() {
  console.log(`updating nav bar url to ${page.getURL()}`)

  urlBar.url.value = page.getURL()
}

page.addEventListener('dom-ready', updateUrl)
page.addEventListener('will-navigate', updateUrl)
page.addEventListener('did-navigate', updateUrl)
page.addEventListener('did-navigate-in-page', updateUrl)

urlBar.addEventListener('submit', (event) => {
  event.preventDefault()

  const url = urlBar.url.value
  const parsedUrl = parseUrl(urlBar.url.value)

  if (!url) {
    return
  }

  console.log(`navigating to url ${url}`)

  if (parsedUrl.protocol) {
    page.loadURL(url)

    // Default to https if it starts with a valid domain name
  } else if(validDomain(parsedUrl.pathname.split('/').shift())) {
    console.log(`url '${url}' has a valid domain, adding protocol ${defaultProtocol}`)

    page.loadURL(`${defaultProtocol}${url}`)

    // Google it
  } else {
    page.loadURL(`https://www.google.com/#q=${escapeQueryString(url)}`)
  }
})
