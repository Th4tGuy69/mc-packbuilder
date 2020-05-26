//#region Header

//npm install -g electron
//npm install -g mc-curseforge-api

const { app, BrowserWindow } = require('electron')
const cf = require('mc-curseforge-api')

//#endregion

//#region CurseForge

class CurseForge {

    GetMods(searchText, version, index, pages, callback)
    {
        cf.getMods({
            searchFilter: searchText,
            gameVersion: version,
            index: index,
            pageSize: pages,
            callback: cb
        }).then((mods) => {
            console.log(mods)
        })
    }

    GetMod(callback)
    {
        cf.getMod(callback).then((mod) => { console.log(mod) })
    }

    GetModFiles(id, callback)
    {
        cf.getModFiles(id, callback).then((files) => {
            files[0].download("./TestDownloads/Mod.jar")
        })
    }

    GetModDescription(id, callback)
    {
        cf.GetModDescription(id, callback).then((desc) => {
            console.log(desc)
        })
    }
}

//#endregion

//#region Electron

function createWindow() 
{
    //Create the browser window
    let win = new BrowserWindow({
        width: 1280,
        height: 600,
        frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    })
    
    win.removeMenu()

    //Load the index.html for the app
    win.loadFile('index.html')
}

app.on('ready', createWindow)

//#endregion