const fs = require('fs');
const path = require('path');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const faker = require('faker');

let counter = 0;
console.log('running!!!')
/*
  id BIGSERIAL NOT NULL,
  restaurant_id BIGSERIAL,
  user_id BIGSERIAL,
  avatar varchar(100),
  last_visit DATE NOT NULL,
  text varchar(750),
  overall_rating integer,
  food_rating integer,
  service_rating integer,
  ambience_rating integer,
  PRIMARY KEY (id),
  FOREIGN KEY (restaurant_id)
    REFERENCES restaurants(id), -- set a delete on cascade
  FOREIGN KEY (user_id) -- maybe for user??
    REFERENCES users(id)
*/

const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const genReviewData = () => {

  writer.pipe(fs.createWriteStream(path.join(__dirname, '/csv/reviewSeedData.csv')));
  for (let i = 0; i < 10; i++) {
    writer.write({
      review_id: counter++,
      restaurant_id: randomNum(1,6),
      user_id: randomNum(1,2),
      avatar: faker.image.imageUrl(),
      last_visit: faker.date.month(),
      text: faker.lorem.sentence(),
      overall_rating: randomNum(1,5),
      food_rating: randomNum(1,5),
      service_rating: randomNum(1,5),
      ambience_rating: randomNum(1,5)
    });
  }

  writer.end();

  console.log('Reviews CSV done... ');
}

genReviewData();