const {app, BrowserWindow} = require('electron')

// Use a global reference to prevent garbage collection closing the window
let win

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadURL(`file://${__dirname}/browser.html`)

  win.on('closed', () => win = null)
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  // Keep the main process going if OS X
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // Open a window when Dock icon clicked on OS X and all windows are closed
  if (win === null) {
    createWindow()
  }
})
