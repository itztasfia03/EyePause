const path = require("path");
const { app, BrowserWindow } = require("electron");

let breakWindow;
const EYE_BREAK_DELAY_MS = 20 * 60 * 1000;

function showBreakWindow() {
  if (breakWindow) {
    breakWindow.focus();
    return;
  }

  breakWindow = new BrowserWindow({
    width: 520,
    height: 420,
    resizable: false,
    alwaysOnTop: true,
    title: "",
    titleBarStyle: "hidden",
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  breakWindow.removeMenu();
  breakWindow.loadFile("break.html");

  breakWindow.on("closed", () => {
    breakWindow = null;
    app.quit();
  });
}

app.whenReady().then(() => {
  setTimeout(showBreakWindow, EYE_BREAK_DELAY_MS);

  app.on("activate", () => {
    setTimeout(showBreakWindow, EYE_BREAK_DELAY_MS);
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
