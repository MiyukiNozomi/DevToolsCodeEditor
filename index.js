"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainWindow = void 0;
const electron_1 = require("electron");
function CreateWindow() {
    exports.MainWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 600
    });
    exports.MainWindow.loadFile("index.html");
}
electron_1.app.whenReady().then(() => {
    CreateWindow();
    electron_1.app.on('activate', () => {
        if (electron_1.BrowserWindow.getAllWindows().length === 0)
            CreateWindow();
    });
});
electron_1.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        electron_1.app.quit();
});
