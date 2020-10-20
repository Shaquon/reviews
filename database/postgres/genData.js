// Write a data generation script that can produce at minimim 10M records and efficiently upload this data

// This file will generate that data using faker. Then we will export this data into the copy file
const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter({sendHeaders: false});
const faker = require('faker');
let counter = 0;

const dataGen = () => {
  writer.pipe(fs.createWriteStream('anothertest.csv'));
  for (let i = 0; i < 43000000; i++) {
    writer.write({
      id: counter++,
      name: faker.company.companyName(),
      review_count: faker.random.number(),
      overall_rating: faker.random.number(),
      food_rating: faker.random.number(),
      service_rating: faker.random.number(),
      ambience_rating: faker.random.number(),
      noise_level: faker.random.word(),
      would_recommend: faker.random.number(),
      star_rating: faker.random.number(),
      loved_for: '{"food"}',
      filters: '{"blue"}'
    });
  }

  for (let i = 0; i < 43000000; i++) {
    writer.write({
      id: counter++,
      name: faker.company.companyName(),
      review_count: faker.random.number(),
      overall_rating: faker.random.number(),
      food_rating: faker.random.number(),
      service_rating: faker.random.number(),
      ambience_rating: faker.random.number(),
      noise_level: faker.random.word(),
      would_recommend: faker.random.number(),
      star_rating: faker.random.number(),
      loved_for: '{"food"}',
      filters: '{"blue"}'
    });
  }

  for (let i = 0; i < 43000000; i++) {
    writer.write({
      id: counter++,
      name: faker.company.companyName(),
      review_count: faker.random.number(),
      overall_rating: faker.random.number(),
      food_rating: faker.random.number(),
      service_rating: faker.random.number(),
      ambience_rating: faker.random.number(),
      noise_level: faker.random.word(),
      would_recommend: faker.random.number(),
      star_rating: faker.random.number(),
      loved_for: '{"food"}',
      filters: '{"blue"}'
    });
  }

  writer.end();

  console.log('done');
}
console.log('running')
dataGen();