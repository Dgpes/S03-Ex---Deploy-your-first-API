import './loadEnvironment.js';
import express from 'express';

// Initialize express
const app = express();
const port = process.env.HOST_PORT ?? '3000';

app.get('/ping', (req, res) => res.send('pong'));

// Students json array
const studentsArray = [
  "Daniel Galeano",
  "Nahomy Argueta",
  "Joan Puig",
  "Adri Uson",
  "Satenik Avetisyan",
  "Santiago Fernadez-Pedrera",
  "Denis Podovei",
  "Ivan Vallejo",
  "Nil Marquez",
  "Paul Aznar",
  "Oscar Cruañas",
  "Quim Pallares",
  "Oriol Fontcuberta"
];

// Students json array length
const totalStudents = studentsArray.length;

// Server responds to get /students sending the json
app.get('/students', (req, res) => res.json({totalStudents, studentsArray}));

app.listen(process.env.HOST_PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export default app;
/*
const express = require('express')
 import express from 'express'
 const app = express()
 const port = 3000
 app.get('/', (req, res) => {
   res.send('Hello World!')
 })
 app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
 })*/
