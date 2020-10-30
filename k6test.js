import http from 'k6/http';
import { check, sleep } from 'k6';
export let options = {
  stages: [
    { duration: '30s', target: 10 },
    { duration: '30m', target: 500 },
    { duration: '30s', target: 1000 },
  ],
};

// const randomNum = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// let randId;
// randId = randId(1, 1999999);

export default function () {
  const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

  let randId = randomNum(1, 1999999);

  let res = http.get(`http://localhost:3002/api/restaurants/${randId}/reviews`);
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
};
