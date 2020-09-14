# TODO-Application
This is a ExpressJS application to help you store your To-Do tasks.
This has basic features for: 

## Prerequisites
You will need to below dependencies for running this application: 
1. [install node.js](https://nodejs.org/en/download)
2. [docker-compose](https://docs.docker.com/compose/install/)

#### Install dependencies

To install all dependencies run the following command:
```
npm install
```

#### Create the .env file from .env.example
You would need to create a .env file for the application to run. 
You can directly copy the values from .env.example to a new .env file. 

#### Starting application

Finally you can start the TODO applocation server:

```
npm run start
```
This would be running based on docker-compose. So please install the docker-compose before running this.
This would take some time, since it would build the relevant dockers and start the application. 

This application is based on ExpressJS.

Or you can [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/ce93b0ae3b8ebbae89aa)

The export is also provided in the [repository](TODO-Application.postman_collection.json)

Currently the "Authorization" Token has been set in .env.example to 8xjM8PF9XC7KVUQ. 
So you would need to pass this as a header:
```
{"Authorization": "8xjM8PF9XC7KVUQ"}
```

#### Running Tests
You can run the tests with command: 
```
npm run test
```

You can also see the test coverage using: 
```
npm run test:coverage
```
I have tried to write tests to cover the Logical parts.


#### Choices & Rationals
Please find the choices and rationales [here](./choices-and-rationales/README.md)



 If you are <br/><br/> looking to <br/><br/>  have an   <br/><br/> impact on  <br/><br/> the world, <br/><br/> then read  <br/><br/> carefully  <br/><br/> because at <br/><br/> **CHOCO**, <br/><br/>   we are   <br/><br/>   moving   <br/><br/>mountains to<br/><br/> transition <br/><br/> the world  <br/><br/>    into    <br/><br/>sustainable <br/><br/>   *food*   <br/><br/>  systems.  <br/><br/> The *food* <br/><br/>industry is <br/><br/>an industry <br/><br/>    with    <br/><br/> essential  <br/><br/> problems,  <br/><br/> especially <br/><br/>     in     <br/><br/>*food*-supply-chain.<br/><br/> We are now <br/><br/> leveraging <br/><br/> technology <br/><br/>  to bring  <br/><br/> **change** <br/><br/> and start  <br/><br/>    the     <br/><br/> necessary  <br/><br/>transformation<br/><br/>the industry<br/><br/> is craving <br/><br/>    for.    <br/><br/>   We are   <br/><br/>building the<br/><br/>  digital   <br/><br/>platform on <br/><br/> which the  <br/><br/>   global   <br/><br/>*food* trade<br/><br/>    will    <br/><br/>operate. Our<br/><br/>company has <br/><br/>    the     <br/><br/>potential to<br/><br/>   reduce   <br/><br/>   *food*   <br/><br/>  prices,   <br/><br/>  decrease  <br/><br/>*food* waste<br/><br/> by 30% and <br/><br/>reshape one <br/><br/>   of the   <br/><br/> oldest and <br/><br/>  largest   <br/><br/> industries <br/><br/>   on the   <br/><br/>  planet.   <br/><br/><br> <br> > Chuck Norris once sued Burger King after they refused to put razor wire in his Whopper Jr, insisting that that actually is \"his\" way."
