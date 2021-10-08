# test-JSON-Database

Hello! This is simple user database, you can run web react app or postman for comfortable save user data,\
you can save user data: name, surname, username, email, password, and user avatar in jpg/gif.

ATTENTION! Download Nodejs for use - https://nodejs.org/uk/

Technologies: ● Javascript ● Node.js ● Express

ATTENTION ALL EXAMPLES ON IMAGES!!!\
CLICK ON THE IMAGE TO SEE IN FULL!!!


Tutorial for use in POSTMAN:

For comfortable use service you can use Postman - https://www.postman.com/downloads/

First, you must configure your pahts in env file:

![image](https://github.com/Tarasofff/test-JSON-Database/blob/main/server/src/git-img/env.png)

---------------------------------------------------------------------------------------------------------------

FOR RUN SERVER YOU NEED: type in the project console: NODE_ENV=tarasov(or yours) npm run start

If app was started you can see:

![image](https://github.com/Tarasofff/test-JSON-Database/blob/main/server/src/git-img/server.png)

---------------------------------------------------------------------------------------------------------------

Service paths:

- POST http://localhost:3000/api/register - registration user
- POST http://localhost:3000/api/login - login by username & password
- POST http://localhost:3000/api/user/id/avatar - upload avatar by id
- GET http://localhost:3000/api/user/id - get one user by id
- GET http://localhost:3000/api/user/id - get user avatar by id
- DELETE http://localhost:3000/api/user/id - delete user by id
- PUT http://localhost:3000/api/user/id - update user fields(allowed fields)  by id: firstName, lastName, email

---------------------------------------------------------------------------------------------------------------

POST: Registration http://localhost:3000/api/register

![image](https://github.com/Tarasofff/test-JSON-Database/blob/main/server/src/git-img/register.png)

---------------------------------------------------------------------------------------------------------------

POST: Login http://localhost:3000/api/login

![image](https://github.com/Tarasofff/test-JSON-Database/blob/main/server/src/git-img/login.png)

---------------------------------------------------------------------------------------------------------------

POST: Upload avatar http://localhost:3000/api/user/id/avatar (id - user id)

![image](https://github.com/Tarasofff/test-JSON-Database/blob/main/server/src/git-img/upload.png)

---------------------------------------------------------------------------------------------------------------

GET: Get user http://localhost:3000/api/user/id (id - user id)

![image](https://github.com/Tarasofff/test-JSON-Database/blob/main/server/src/git-img/getOne.png)

---------------------------------------------------------------------------------------------------------------

GET: Get user avatar http://localhost:3000/api/user/id (id - user id)

![image](https://github.com/Tarasofff/test-JSON-Database/blob/main/server/src/git-img/getimage.png)

---------------------------------------------------------------------------------------------------------------

DELETE: Delete user http://localhost:3000/api/user/id (id - user id)

![image](https://github.com/Tarasofff/test-JSON-Database/blob/main/server/src/git-img/del.png)

---------------------------------------------------------------------------------------------------------------

PUT: Update user fields http://localhost:3000/api/user/id (id - user id)

![image](https://github.com/Tarasofff/test-JSON-Database/blob/main/server/src/git-img/put.png)

---------------------------------------------------------------------------------------------------------------

Tutorial for use in web app:

FOR RUN APP YOU NEED:open "client" folder and type in the project console: npm start

Registration:

![image](https://github.com/Tarasofff/test-JSON-Database/blob/main/client/src/git-img/reg.png)

---------------------------------------------------------------------------------------------------------------

Login: 

![image](https://github.com/Tarasofff/test-JSON-Database/blob/main/client/src/git-img/log.png)

---------------------------------------------------------------------------------------------------------------

Update: 

![image](https://github.com/Tarasofff/test-JSON-Database/blob/main/client/src/git-img/put.png)

---------------------------------------------------------------------------------------------------------------

Find user:

![image](https://github.com/Tarasofff/test-JSON-Database/blob/main/client/src/git-img/find.png)

---------------------------------------------------------------------------------------------------------------

Delete: 

![image](https://github.com/Tarasofff/test-JSON-Database/blob/main/client/src/git-img/del.png)

---------------------------------------------------------------------------------------------------------------

Upload avatar: 

![image](https://github.com/Tarasofff/test-JSON-Database/blob/main/client/src/git-img/upload.png)

---------------------------------------------------------------------------------------------------------------

Get user avatar:

![image](https://github.com/Tarasofff/test-JSON-Database/blob/main/client/src/git-img/avatar.png)

---------------------------------------------------------------------------------------------------------------





