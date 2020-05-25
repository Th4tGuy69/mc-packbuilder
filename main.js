const { app, BrowserWindow } = require('electron')

function createWindow() 
{
    //Create the browser window
    let win = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true
        }
    })
    
    win.removeMenu()

    //Load the index.html for the app
    win.loadFile('index.html')
}

app.on('ready', createWindow)