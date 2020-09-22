# Note Manager

Test application for managing the notes

## Instalation

App consist of two project: API (.Net Core 3.1) and frontend side (Angular 9.2.4)

How to start: 
    1) Open 'AionysTestProject.sln' using VisualStudio(desirable)
    2) Start the project (press F5) and wait until browser opens 
    3) Lets move to frontend side, open 'AionysTestProjectAngular' folder
    4) Open cmd (or terminal at VS Code)
    5) Write 'npm install' to load necessary libs
    6) Write 'ng serve --o' to start the proj
    
    To run e2e tests use command 'ng e2e --port'
    Also go to "AionysTestProjectAngular\src\environments\environments.ts" to set your API url (change port)

P.s To test API with out frontend side, possiple to use Postman Collection, they stored at 
'PostmanCollection/AionysTestProject.postman_collection.json', to use it open Postman and 
press import button, then select this file
