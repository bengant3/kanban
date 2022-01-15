# Kanban Task Manager

*Ben Gant*

### Description

This is a project to try out Electron and some other technologies. The final product should be Kanban-style productivity tool that allows the user to distribute tasks among a few categories (a simplified version of Trello, perhaps)

### Tech Stack

Framework: Electron
Front end: React, TypeScript, Material UI Library
Back end: Node.js, *AWS hosting, MySQL database*

### Architecture
Two main screens for the app: login screen and kanban boards. A renderer controls which is display at a certain time and is the root component that it rendered on the page.



### Project Status
The front end is coded up but not built in any way. I ran out of time during winter break to make the backend and database. Things that need to be done:

 - Integrating React and Electron for polished product: either porting code to a [Create React App](https://medium.com/@kitze/%EF%B8%8F-from-react-to-an-electron-app-ready-for-production-a0468ecb1da3) and connecting to the Electron framework OR use [Electron React Boilerplate](https://electron-react-boilerplate.js.org/docs/installation) which would be an added layer of complexity but would make eventual deployment easier
 - Make a MySQL database hosted on AWS ()
 - Develop API calls to CRUD task cards (node)