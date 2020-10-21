const fs = require('fs');
const path = require('path');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const faker = require('faker');
let counter = 0;
/*
  id BIGSERIAL NOT NULL,
  avatar varchar(100),
  first_name varchar(20),
  last_name varchar(20),
  number_of_reviews int,
  location varchar(30),
  PRIMARY KEY (id)
*/

const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const dataGen = () => {
  writer.pipe(fs.createWriteStream(path.join(__dirname, '/csv/userSeedData.csv')));

  for (let i = 0; i < 10; i++) {
    writer.write({
      id: counter++,
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      location: faker.address.city(),
      number_of_reviews: randomNum(0, 51)
    });
  }

  writer.end();

  console.log('Users CSV done... ');
}
dataGen();