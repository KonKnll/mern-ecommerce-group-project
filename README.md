## NPM Scripts:

<br>

run server:

    npm run server

run client:

    npm run client

run both:

    npm run dev

<br>

seed for import

    npm run DATA:import

delete all data

    npm run DATA:delete

 <br>

reinstalls node_modules

    npm run fresh

<br>

##### NOTES

for the .editorconfig file to work you need to have installed its npm package globally `npm i -g editorconfig` and have also the extention installed on your IDE also

<br>

## Endpoints Postman

| Schema | METHOD | Description | Endpoints |
| :-- | :-- | :-- | :-- |
|  | GET | `'/'` test | http://localhost:5000/ |
| USERS |  |  |  |
| ?? | GET | Get all Users | http://localhost:5000/api/users |
|  | POST | User Login | http://localhost:5000/api/users/login |
|  | POST | Register a User | http://localhost:5000/api/users |
|  | PUT | Update a User | http://localhost:5000/api/users |
|  | DELETE | Delete a User | http://localhost:5000/api/users/:user_id |
| PRODUCTS |  |  |  |
|  | GET | Get all Products | http://localhost:5000/api/products |
|  | GET | Get Product by id | http://localhost:5000/api/products/:product_id |
|  | DELETE | Delete Product | http://localhost:5000/api/products/:product_id |
|  | POST | Create new Product | http://localhost:5000/api/products |
| CATEGORIES |  |  |  |
|  | GET | Get all Categories | http://localhost:5000/api/categories |
|  | GET | Get Category by id | http://localhost:5000/api/categories/:category_id |
|  | POST | Create new a Category | http://localhost:5000/api/categories |
|  | POST | Add product to a Category | http://localhost:5000/api/categories/add |
|  | DELETE | Remove a Category | http://localhost:5000/api/categories/remove |

<br>

Use Git to clone mern-group-project's source code to your local machine.

$ heroku git:clone -a mern-group-project $ cd mern-group-project

<br>

Deploy your changes

Make some changes to the code you just cloned and deploy them to Heroku using Git.

$ git add . $ git commit -am "make it better" $ git push heroku master

<br>

heroku logs --tail
