const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const postgres = require('postgres');
require('dotenv').config();

// const db = require('../database/postgres/model.js');
// require('newrelic');

const DB_PORT = process.env.DB_PORT;
const DB_HOST = process.env.DB_HOST;
const DB_PASSWORD = process.env.DB_PASSWORD;


const sql = postgres({
  host     : DB_HOST,
  port     :  DB_PORT,
  database : 'reviews',
  user     : 'postgres',
  password : DB_PASSWORD
});

const app = express();
const PORT = 3002;
let count = 0;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public/')));


app.get('/api/restaurants/:id/reviews', async (req, res) => {
  const data = await sql`
  SELECT * FROM reviews FULL OUTER JOIN users ON reviews.user_id=users.id WHERE restaurant_id=${req.params.id};
  `
  console.log('data: ', data);

  res.send(JSON.stringify(data));
});


app.get('/api/restaurants/:id', async (req, res) => {

  console.log('req.params.id', req.params);

  const data = await sql`
  SELECT * FROM restaurants WHERE id=1;
  `

  console.log('data: ', data);

  res.send('Hello!');
});

const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

app.post('/api/restaurants/:id/reviews', async (req, res)=> {
  const data = await sql`
  INSERT INTO reviews (restaurant_id, user_id, avatar, last_visit, text, overall_rating, food_rating, service_rating, ambience_rating) VALUES (${req.params.id}, ${randomNum(1, 1000000)}, 'img.jpg', 'July', 'this is a review.', 4, 5, 3, 4);
  `
  console.log('data: ', data);

  res.end(JSON.stringify(data));
});

// app.get('/api/review_list/:id/', (req, res2) => {
//   db.getReviewList(req.params.id, (err, data) => {
//     if (err) {
//       // console.log('error in server get request');
//       res2.status(400).send(err);
//     } else {
//       // console.log('successful server get request');
//       res2.status(200).send(data);
//     }
//   });
// });



// app.get('/api/users', (req, res3) => {
//   db.getAllUsers((err, data) => {
//     if (err) {
//       // console.log('error in server get request');
//       res3.status(400).send(err);
//     } else {
//       // console.log('successful server get request');
//       res3.status(200).send(data);
//     }
//   });
// });

const server = app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${PORT}`);
});

module.exports = {
  server,
  app,
};
