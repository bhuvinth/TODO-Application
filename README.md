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

&nbsp;If&nbsp;you&nbsp;are&nbsp;<br/><br/>&nbsp;looking&nbsp;to&nbsp;<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;have&nbsp;an&nbsp;<br/><br/>&nbsp;&nbsp;impact&nbsp;on&nbsp;<br/><br/>&nbsp;the&nbsp;world,&nbsp;<br/><br/>&nbsp;&nbsp;then&nbsp;read&nbsp;<br/><br/>&nbsp;&nbsp;carefully&nbsp;<br/><br/>&nbsp;because&nbsp;at&nbsp;<br/><br/>&nbsp;**CHOCO**,&nbsp;<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we&nbsp;are&nbsp;<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;moving&nbsp;<br/><br/>mountains&nbsp;to&nbsp;<br/><br/>&nbsp;transition&nbsp;<br/><br/>&nbsp;&nbsp;the&nbsp;world&nbsp;<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;into&nbsp;<br/><br/>sustainable&nbsp;<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*food*&nbsp;<br/><br/>&nbsp;&nbsp;&nbsp;systems.&nbsp;<br/><br/>&nbsp;The&nbsp;*food*&nbsp;<br/><br/>industry&nbsp;is&nbsp;<br/><br/>an&nbsp;industry&nbsp;<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with&nbsp;<br/><br/>&nbsp;&nbsp;essential&nbsp;<br/><br/>&nbsp;&nbsp;problems,&nbsp;<br/><br/>&nbsp;especially&nbsp;<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;in&nbsp;<br/><br/>*food*-supply-chain.&nbsp;<br/><br/>&nbsp;We&nbsp;are&nbsp;now&nbsp;<br/><br/>&nbsp;leveraging&nbsp;<br/><br/>&nbsp;technology&nbsp;<br/><br/>&nbsp;&nbsp;&nbsp;to&nbsp;bring&nbsp;<br/><br/>&nbsp;**change**&nbsp;<br/><br/>&nbsp;&nbsp;and&nbsp;start&nbsp;<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the&nbsp;<br/><br/>&nbsp;&nbsp;necessary&nbsp;<br/><br/>transformation&nbsp;<br/><br/>the&nbsp;industry&nbsp;<br/><br/>&nbsp;is&nbsp;craving&nbsp;<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for.&nbsp;<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We&nbsp;are&nbsp;<br/><br/>building&nbsp;the&nbsp;<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;digital&nbsp;<br/><br/>platform&nbsp;on&nbsp;<br/><br/>&nbsp;&nbsp;which&nbsp;the&nbsp;<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;global&nbsp;<br/><br/>*food*&nbsp;trade&nbsp;<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;will&nbsp;<br/><br/>operate.&nbsp;Our&nbsp;<br/><br/>company&nbsp;has&nbsp;<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the&nbsp;<br/><br/>potential&nbsp;to&nbsp;<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reduce&nbsp;<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*food*&nbsp;<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;prices,&nbsp;<br/><br/>&nbsp;&nbsp;&nbsp;decrease&nbsp;<br/><br/>*food*&nbsp;waste&nbsp;<br/><br/>&nbsp;by&nbsp;30%&nbsp;and&nbsp;<br/><br/>reshape&nbsp;one&nbsp;<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;of&nbsp;the&nbsp;<br/><br/>&nbsp;oldest&nbsp;and&nbsp;<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;largest&nbsp;<br/><br/>&nbsp;industries&nbsp;<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;on&nbsp;the&nbsp;<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;planet.<br/><br/><br> <br> > When Chuck Norris goes to out to eat, he orders a whole chicken, but he only eats its soul.
