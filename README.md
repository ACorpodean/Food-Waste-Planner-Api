# node-api

Node JS CRUD API example

- [x] store info in [JSON file](data/teams.json)
- [x] store info in DB (MYSQL)

## Team
- [Ichim-Anchidin Maximilian](https://github.com/max-anchidin/)
- [Corpodean Andrei](https://github.com/ACorpodean)
- [Chișiu Ionuț](https://github.com/IonussCh)

## Install

```sh
git clone https://github.com/ACorpodean/node-api.git food-waste-planner-api
```
cd node-api
npm install


## JS Usage

```sh
npm run devstart
```

### DB (MySQL) as storage

Team members are stored mysql

- configure user & pass for mysql connection [routes/products-db.js](routes/products-db.js)
- create a database named **products**
- run [http://localhost:3000/products/install](http://localhost:3000/products/install)
- now you can any other CRUD operations (the same as for json but change url **"products-json" -> "products"**)
