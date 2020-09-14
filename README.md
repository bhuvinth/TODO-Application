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

If you are<br/><br/>looking to<br/><br/> have an  <br/><br/>impact on <br/><br/>the world,<br/><br/>then read <br/><br/>carefully <br/><br/>because at<br/><br/>**CHOCO**,<br/><br/>  we are  <br/><br/>  moving  <br/><br/>mountains <br/><br/>    to    <br/><br/>transition<br/><br/>the world <br/><br/>   into   <br/><br/>sustainable<br/><br/>  *food*  <br/><br/> systems. <br/><br/>The *food*<br/><br/> industry <br/><br/>  is an   <br/><br/> industry <br/><br/>   with   <br/><br/>essential <br/><br/>problems, <br/><br/>especially<br/><br/>    in    <br/><br/>*food*-supply-chain.<br/><br/>We are now<br/><br/>leveraging<br/><br/>technology<br/><br/> to bring <br/><br/>**change**<br/><br/>and start <br/><br/>   the    <br/><br/>necessary <br/><br/>transformation<br/><br/>   the    <br/><br/> industry <br/><br/>is craving<br/><br/>   for.   <br/><br/>  We are  <br/><br/> building <br/><br/>   the    <br/><br/> digital  <br/><br/> platform <br/><br/> on which <br/><br/>the global<br/><br/>  *food*  <br/><br/>trade will<br/><br/> operate. <br/><br/>   Our    <br/><br/> company  <br/><br/> has the  <br/><br/>potential <br/><br/>to reduce <br/><br/>  *food*  <br/><br/> prices,  <br/><br/> decrease <br/><br/>  *food*  <br/><br/> waste by <br/><br/> 30% and  <br/><br/> reshape  <br/><br/>one of the<br/><br/>oldest and<br/><br/> largest  <br/><br/>industries<br/><br/>  on the  <br/><br/> planet.  <br/><br/><br> <br> > When Chuck Norris goes to out to eat, he orders a whole chicken, but he only eats its soul.

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



<p style="max-width:10ch;text-align:right"> If you are looking to have an impact on the world, then read carefully because at <b>CHOCO</b>, we are moving mountains to transition the world into sustainable <i>food</i> systems.<br/><br/>The <i>food</i> industry is an industry with essential problems, especially in <i>food</i>-supply-chain. We are now leveraging technology to bring <b>change</b> and start the necessary transformation the industry is craving for.<br/><br/>We are building the digital platform on which the global <i>food</i> trade will operate. Our company has the potential to reduce <i>food</i> prices, decrease <i>food</i> waste by 30% and reshape one of the oldest and largest industries on the planet. </p><br> <br> > When Chuck Norris goes to out to eat, he orders a whole chicken, but he only eats its soul.
