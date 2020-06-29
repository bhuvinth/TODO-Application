# Choices & Rationales

### 1. Http Framework
I am using ExpressJS in the project since I saw in the portal that, ExpressJS is used. 

I have used an additional layer of a library called as [routing-controllers](https://github.com/typestack/routing-controllers) from typestack.

It makes our work easy, since it has built in support for **Validation** (with the help of class-validator) and binding it to the DTOs with (class-transformer) and built in support for **typedi** for **IOC** control. 

### 2. Postgres Database
I have used postgres database as the persistence, which is being deployed in a separate docker than the application.

### 3. Implementation of Domain layer
Generally I prefer doing business rule validations in the Domain layer, having specific domain types, and relevant Value objects. 
But since, the TO-DO application is fairly very simple application, it didn't make sense to another layer of abstraction between the DTO's and the Database Entities. 

### 4. Code Organization
I have tried to follow Hexagonal architecture with as specified above doesn't have a domain layer. 
But let's say if this application's Business domain gets more difficult in that case it is fairly simple change to do.

### 5. Dependency Injections
I am using *typedi* to carry out the Dependency injections. 

### 6. Docker-compose:
*Remark:* I have handled the part where the application docker waits for the Postgres docker to be ready in the application code as suggested in the [docker-compose page](https://docs.docker.com/compose/startup-order/).

### 7. TypeORM: 
I have used TypeORM for this application. Since it is suited well with Typescript.

### 8. Automation Testing: 
I have a moderate amount of unit tests. Additionally, I have also added integration tests for the Repository. 

### 9. Authorization key: 
Currently, I am reading the Authorization key from the environment variables.

### 10. Missing migrations:
I haven't added the migrations for the application. In general, I would write migrations for creating/altering the table. But for simplicity, I have not done that in the application.

### 11. Custom Errors:
I have made a stack of Custom Errors, based on various things, like domain errors, database-related errors, generic Application error. I have tried to add the relevant ERROR CODE, which normally is used for relevant error messages in the Front end.

### 12. Webpack: 
I am compiling the code, using webpack since the initial plan was to deploy the things in the Lamda. Where webpack would help us generate single minified file to be deployed on the Lambda with only the relevant code to be deployed. Also, it offers an easy solution of the case of handling the paths for module resolution.
