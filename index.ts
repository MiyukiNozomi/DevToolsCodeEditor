import {app, BrowserWindow} from "electron";

export let MainWindow : BrowserWindow

function CreateWindow() {
    MainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    MainWindow.loadFile("index.html");
}

//https://blog.infernored.com/electron-angular-7-and-vs-code-liveshare/#:~:text=%20TLDR%3B%20Share%20an%20Electron%20session%20using%20Live,web%20server%20on%20port%204201%20%28or...%20More%20

app.whenReady().then(() => {
    CreateWindow();

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) CreateWindow();
    })
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit();
});