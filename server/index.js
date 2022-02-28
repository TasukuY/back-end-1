//import express. argument express has to be in string type.
const express = require('express');
const cors = require('cors');
//assign express and cors to variables
const app = express();

//cannot find module cors -> has not installed cors yet
//Middleware
//software that acts as a bridge between an operating system or database and applications, especially on a network.

app.use(express.json());  // When we want to be able to accept JSON from frontend.
app.use(cors());

let endpoint = '/api/users';

app.get("/api/users", (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
  });
  
  app.get("/weather/:temperature", (req, res) => {
    const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
    res.status(200).send(phrase);
  });
  
//   app.get("/weather/:temperature", (req, res) => {
//     const { temperature } = req.params;
//     const phrase = `<h3>It was ${temperature} today</h3>`;
//     res.status(200).send(phrase);
//   });

//port number + callback
const SERVER_PORT = 4000;

app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`));