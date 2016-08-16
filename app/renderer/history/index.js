const page = document.querySelector('#js-page')

const back = document.currentScript.ownerDocument.querySelector('#js-history-back')
const forward = document.currentScript.ownerDocument.querySelector('#js-history-forward')

function updateHistoryButtons() {
  console.log('updating history buttons', {
    canGoBack: page.canGoBack(),
    canGoForward: page.canGoForward()
  })

  back.disabled = !page.canGoBack()
  forward.disabled = !page.canGoForward()
}

page.addEventListener('dom-ready', updateHistoryButtons)
page.addEventListener('will-navigate', updateHistoryButtons)
page.addEventListener('did-navigate', updateHistoryButtons)
page.addEventListener('did-navigate-in-page', updateHistoryButtons)

back.addEventListener('click', () => {
  page.goBack()
})

forward.addEventListener('click', () => {
  page.goForward()
})
