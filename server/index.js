// server/index.js
const app = require('express')();
const bodyParser = require('body-parser');


const express = require("express");

const PORT = process.env.PORT || 3001;


const dogs = [
  {
    id: 1,
    name: 'Doggo',
    race: "German shepherd"
  },
  {
    id: 2,
    name: 'Musti',
    race: 'Australian shepherd'
  }
];


app.use(bodyParser.json());

<<<<<<< HEAD

app.get("/api", (req, res) => {
  res.json({ message: "Gamer!" });
});

=======
>>>>>>> fixes
app.get('/dogs', (req, res) => {
  let result = {dogs:dogs.map(function(p){
    return {id: p.id, name: p.name, race: p.race};
  })};
  res.json(result);
});

app.post('/dogs/add', (req, res) => {
  var dog = {
    id:(dogs.length + 1),
    name: req.body.name,
    race: req.body.race
  } 

  dogs.push(dog);
  res.json(dog);
});

app.post('/dogs/edit', (req, res) => {

  for (var i = 0; i < dogs.length; i++) {
    if (dogs[i].id === req.body.id) {
      dogs[i].name = req.body.name;
      dogs[i].race = req.body.race;
      return;
    }
  }

  dogs.push(dogs);
  res.json(dogs);
});

app.post('/dogs/delete', (req, res) => {
  
  for (var i = 0; i < dogs.length; i++) {
    if (dogs[i].id === req.body.id) {
      delete dogs[i];
      return;
    }
  }

  dogs.push(dogs);
  res.json(dogs);
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});