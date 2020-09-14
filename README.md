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
  
&nbsp;If&nbsp;you&nbsp;are&nbsp;<br/>&nbsp;looking&nbsp;to&nbsp;<br/>&nbsp;&nbsp;have&nbsp;an&nbsp;&nbsp;&nbsp;<br/>&nbsp;impact&nbsp;on&nbsp;&nbsp;<br/>&nbsp;the&nbsp;world,&nbsp;<br/>&nbsp;then&nbsp;read&nbsp;&nbsp;<br/>&nbsp;carefully&nbsp;&nbsp;<br/>&nbsp;because&nbsp;at&nbsp;<br/>&nbsp;**CHOCO**,&nbsp;<br/>&nbsp;&nbsp;&nbsp;we&nbsp;are&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;moving&nbsp;&nbsp;&nbsp;<br/>mountains&nbsp;to<br/>&nbsp;transition&nbsp;<br/>&nbsp;the&nbsp;world&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;into&nbsp;&nbsp;&nbsp;&nbsp;<br/>sustainable&nbsp;<br/>&nbsp;&nbsp;&nbsp;*food*&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;systems.&nbsp;&nbsp;<br/>&nbsp;The&nbsp;*food*&nbsp;<br/>industry&nbsp;is&nbsp;<br/>an&nbsp;industry&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;with&nbsp;&nbsp;&nbsp;&nbsp;<br/>&nbsp;essential&nbsp;&nbsp;<br/>&nbsp;problems,&nbsp;&nbsp;<br/>&nbsp;especially&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;in&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>*food*-supply-chain.<br/>&nbsp;We&nbsp;are&nbsp;now&nbsp;<br/>&nbsp;leveraging&nbsp;<br/>&nbsp;technology&nbsp;<br/>&nbsp;&nbsp;to&nbsp;bring&nbsp;&nbsp;<br/>&nbsp;**change**&nbsp;<br/>&nbsp;and&nbsp;start&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;the&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>&nbsp;necessary&nbsp;&nbsp;<br/>transformation<br/>the&nbsp;industry<br/>&nbsp;is&nbsp;craving&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;for.&nbsp;&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;We&nbsp;are&nbsp;&nbsp;&nbsp;<br/>building&nbsp;the<br/>&nbsp;&nbsp;digital&nbsp;&nbsp;&nbsp;<br/>platform&nbsp;on&nbsp;<br/>&nbsp;which&nbsp;the&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;global&nbsp;&nbsp;&nbsp;<br/>*food*&nbsp;trade<br/>&nbsp;&nbsp;&nbsp;&nbsp;will&nbsp;&nbsp;&nbsp;&nbsp;<br/>operate.&nbsp;Our<br/>company&nbsp;has&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;the&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>potential&nbsp;to<br/>&nbsp;&nbsp;&nbsp;reduce&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;*food*&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;prices,&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;decrease&nbsp;&nbsp;<br/>*food*&nbsp;waste<br/>&nbsp;by&nbsp;30%&nbsp;and&nbsp;<br/>reshape&nbsp;one&nbsp;<br/>&nbsp;&nbsp;&nbsp;of&nbsp;the&nbsp;&nbsp;&nbsp;<br/>&nbsp;oldest&nbsp;and&nbsp;<br/>&nbsp;&nbsp;largest&nbsp;&nbsp;&nbsp;<br/>&nbsp;industries&nbsp;<br/>&nbsp;&nbsp;&nbsp;on&nbsp;the&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;planet.&nbsp;&nbsp;&nbsp;<br/>
<br> <br> > Chuck Norris does not find spicy foods hot. Spicy foods find Chuck Norris hot.
