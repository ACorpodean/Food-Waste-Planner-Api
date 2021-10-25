# node-api

Node JS CRUD API example

- [x] store info in [JSON file](data/teams.json)
- [x] store info in DB (MYSQL)

## Team
- [Ichim-Anchidin Maximilian](https://github.com/max-anchidin/)
- [Corpodean Andrei](https://github.com/ACorpodean)
- [Chișiu Ionuț](https://github.com/IonussCh)

## Install (On first Usage)

```sh
git clone https://github.com/ACorpodean/node-api.git OPTINAL : name of folder > food-waste-planner-api
Open a comamnd prompt and navigate to directory cd node-api(default name) / food-waste-planner-api
In command prompt run command npm install
When npm install is successful - run command > npm run devstart for usage 
```


## JS Usage

```sh
On every use after the first one:
Open command prompt and navigate to cd node-api(default name) / food-waste-planner-api
In command prompt run command > npm run devstart
```

### DB (MySQL) as storage

Products are stored mysql

- configure user & pass for mysql connection [routes/products-db.js](routes/products-db.js)
- create a database named **food_planner**
- run [http://localhost:3000/products/install](http://localhost:3000/products/install)
- now you can any other CRUD operations (the same as for json but change url **"products-json" -> "products"**)
