// Write a data generation script that can produce at minimim 10M records and efficiently upload this data

// This file will generate that data using faker. Then we will export this data into the copy file
const fs = require('fs');
const path = require('path');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const faker = require('faker');
let counter = 0;

const ratings = [2.0, 2.1, 2.2, 2.3, 2.4, 2.5,2.6, 2.7, 2.8, 2.9, 3.0, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.8, 4.9, 5.0];

const genRestaurantData = () => {
  writer.pipe(fs.createWriteStream(path.join(__dirname, '/csv/restaurantSeedData.csv')));

  for (let i = 0; i < 600000; i++) {
    writer.write({
      restaurant_id: counter++,
      name: faker.company.companyName(),
      review_count: faker.random.number(),
      overall_rating: ratings[Math.floor(Math.random() * ratings.length)],
      food_rating: ratings[Math.floor(Math.random() * ratings.length)],
      service_rating: ratings[Math.floor(Math.random() * ratings.length)],
      ambience_rating: ratings[Math.floor(Math.random() * ratings.length)],
      star_rating: ratings[Math.floor(Math.random() * ratings.length)],
      noise_level: faker.random.word(),
      loved_for: '{"food", "atmoshpere", "interior", "music"}',
      filters: '{"fries", "mac & cheese", "chicken", "steak", "entree", "sides"}'
    });
  }
  writer.end();
  console.log('Restaurants CSV done... ');
}

genRestaurantData();