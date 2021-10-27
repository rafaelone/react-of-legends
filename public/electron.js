const path = require('path');

const {app, BrowserWindow} = require('electron');
const isDev = require('electron-is-dev');

let win;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
    frame: false,
    show: false,
  });

  // and load the index.html of the app.
  // win.loadFile("index.html");

  const splash = new BrowserWindow({
    width: 810,
    height: 610,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
  });

  splash.loadURL(`file://${__dirname}/splash/index.html`);

  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`,
  );
  // Open the DevTools.
  if (isDev) {
    win.webContents.openDevTools({mode: 'detach'});
  }

  win.once('ready-to-show', () => {
    splash.destroy();
    win.maximize();
    win.show();
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
