// Copyright 2022 Ben
import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import LoginPage from './pages/login'
import TasksPage from './pages/tasks'
//import TasksPage from './pages/tasks'

const loggedIn = (): void => {
    alert("logged in")
}

const Page = () => {
    const [loggedIn, logIn] = useState(false);

    return (
        <div>
            {!loggedIn && <LoginPage successfulLogin = {() => logIn(true)}/>}
            {loggedIn && <TasksPage logOut = {() => logIn(false)}/>}
        </div>
    )
}

window.addEventListener('DOMContentLoaded', () => {
    
    // const replaceText = (selector, text) => {
    //   const element = document.getElementById(selector)
    //   if (element) element.innerText = text
    // }
  })


ReactDOM.render(
    <Page />, 
    document.getElementById('root')
);