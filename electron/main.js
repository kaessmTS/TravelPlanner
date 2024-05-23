const { app, BrowserWindow,ipcMain } = require('electron/main')
const path = require('node:path')
const chatGPTcall = require('./code.js')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// Listen for messages from the renderer process
ipcMain.on('send-data', (event, data) => {
  chatGPTcall(data); // Call the tmp function from code.js with the received data
});