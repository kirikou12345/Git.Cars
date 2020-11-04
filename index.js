const express = require('express');
const bodyParser = require("body-parser");


const app = express();



app.use(bodyParser.urlencoded({ extended: false }));

const port = 3200;
const cars = [
    { id: 1, brand: 'peugeot', model: 508 },
    { id: 2, brand: 'audi', model: 'A4' },
    { id: 3, brand: 'citroen', model: 'berlingo' },
    { id: 4, brand: 'opel', model: 'astra' },
    { id: 5, brand: 'toyota', model: 'yaris' },
];

app.get('/api/cars', function (req, res) {
    res.json(cars);
});




app.get("/api/cars/:id", function (req, res) {
    const id = req.params.id;
    const car = cars.find(function (car) {
        return car.id == id;
    });


    if (car != undefined) {
        res.json(car);
      } else {
        res.status(404).json({ error: "Car not found !" });
      }
    });



/*Suprimer*/

app.delete('/api/cars/:id', function(req, res) {
    const id = req.params.id;

    const index = cars.findIndex(function(car){
        return car.id == id;
    });


    if (index === -1) {
        res.status(404).json({ error: 'Cars not found !' });
    } else {
        cars.splice(index, 1);
        res.status(204).send();
    }

    
});/*36:50*/





app.post("/api/cars", function (req, res) {
    const data = req.body;

    const newId = cars.reduce(function (acc, car) {
        acc = cacc < car.id ? car.id : acc;
        return acc;
    },  0) + 1;
    car.id = newId; 
    cars.push(car); 
    res.send(true);
});


app.post('/api/cars/:id', function (req, res) {

    const id = req.params.id;
    const { brand, model } = req.body;


    const cars = cars.find(function (c) {
        return c.id == id;
    });

    if (car === undefined) {
        res.status(404).json({ error: 'car not found !' });
    }

    cars.brand = brand;
    cars.brand = model;


    res.status(200).json(car)
});





app.listen(port, function () {
    console.log(`server started :${port}`);
  });
  