const fs = require('fs');
const path = require('path');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const faker = require('faker');

const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const genReviewData = () => {

  writer.pipe(fs.createWriteStream(path.join(__dirname, '/csv/reviewSeedData2.csv')));
  for (let i = 0; i < 10000000; i++) {
    writer.write({
      restaurant_id: randomNum(1,6),
      user_id: randomNum(1,2),
      avatar: faker.image.imageUrl(),
      last_visit: faker.date.month(),
      text: faker.lorem.sentence(),
      overall_rating: randomNum(1,5),
      food_rating: randomNum(1,5),
      service_rating: randomNum(1,5),
      ambience_rating: randomNum(1,5),
      restaurant_id: randomNum(1, 9999999),
      user_id: randomNum(1, 29999999)
    });
  }

  writer.end();

  console.log('Reviews CSV done... ');
  console.log('CSV work complete... ')
}

genReviewData();