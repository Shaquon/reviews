const fs = require('fs');
const path = require('path');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const faker = require('faker');

let counter = 0;

const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const genReviewData = () => {

  writer.pipe(fs.createWriteStream(path.join(__dirname, '/csv/reviewSeedData.csv')));
  for (let i = 0; i < 5000000; i++) {
    writer.write({
      review_id: counter++,
      restaurant_id: randomNum(0, 599999),
      // restaurant_id: randomNum(1,6),
      // user_id: randomNum(1,2),
      avatar: faker.image.imageUrl(),
      last_visit: faker.date.month(),
      text: faker.lorem.sentence(),
      overall_rating: randomNum(1,5),
      food_rating: randomNum(1,5),
      service_rating: randomNum(1,5),
      ambience_rating: randomNum(1,5),
      // user_id: randomNum(0, 999999)
    });
  }
  console.log('half')
  for (let i = 5000000; i < 10000000; i++) {
    writer.write({
      review_id: counter++,
      restaurant_id: randomNum(0, 599999),
      // restaurant_id: randomNum(1,6),
      // user_id: randomNum(1,2),
      avatar: faker.image.imageUrl(),
      last_visit: faker.date.month(),
      text: faker.lorem.sentence(),
      overall_rating: randomNum(1,5),
      food_rating: randomNum(1,5),
      service_rating: randomNum(1,5),
      ambience_rating: randomNum(1,5),
      // user_id: randomNum(0, 999999)
    });
  }

  writer.end();

  console.log('Reviews CSV done... ');
  console.log('CSV work complete... ')
}

genReviewData();