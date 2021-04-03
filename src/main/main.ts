import { app, BrowserWindow } from 'electron'

app.on("ready", () => {
    const win = new BrowserWindow({})
    win.loadFile("./index.html")
})
