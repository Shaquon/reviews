const faker = require('faker');

const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const restaurantData= [];

const getRandomNumber =  () => {
  for (let i = 0; i < 10000000; i++) {
    restaurantData.push(randomNum(1,5));
  };
}

const getRandomWord = () => {

}

getRandomWord();

getRAndomNumber();
console.log('done', restaurantData.length);

const genData = () => {
  for (let i = 0; i < 4000000; i++) {
      restaurantData.push({
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
  };


  return restaurantData;
}

genData();
console.log('1 done');
genData();






// console.log(restaurantData);


