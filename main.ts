// Copyright 2021 Ben

import {app, BrowserWindow } from 'electron';

let win;

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    });

    win.loadFile('index.html');
}

app.on('ready', () => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })