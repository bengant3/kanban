// Copyright 2022 Ben

import ReactDOM from 'react-dom';
import LoginPage from './pages/login'
//import TasksPage from './pages/tasks'

const loggedIn = (): void => {
    alert("logged in")
}

window.addEventListener('DOMContentLoaded', () => {
    const domContainer = document.getElementById('login-root');
    //domContainer.innerHTML = LoginPage(loggedIn);
    const login: any = <LoginPage successfulLogin={loggedIn} />;
    ReactDOM.render(login, domContainer);

    

    // const replaceText = (selector, text) => {
    //   const element = document.getElementById(selector)
    //   if (element) element.innerText = text
    // }
  
    // for (const dependency of ['chrome', 'node', 'electron']) {
    //   replaceText(`${dependency}-version`, process.versions[dependency])
    // }
  })