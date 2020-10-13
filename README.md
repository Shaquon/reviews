# Project Name

> TKOut

## Related Projects

  - Popular Dishes Service - Anna - https://github.com/TKOut-HRSF130/popular-dishes-service
  - Photos Carousel Service - Billy - https://github.com/TKOut-HRSF130/photos-carousel-service
  - Bookings Service - Johnny - https://github.com/TKOut-HRSF130/bookings-service
  - Reviews Service - Mataeux - https://github.com/TKOut-HRSF130/reviews-service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## API Endpoints

#### reviews - Reviews for restaurant
- GET /reviews - gets a list of reviews
- GET /reviews/{reviewId} - get a review based on it's ID.
- POST /reviews - create a new review
- PUT - /reviews/{reviewId} - update an existing review
- DELETE - /reviews/{reviewId} - delete an existing review

#### restaurants - Access restaurant data
- GET /restaurant - gets a list of restaurants
- GET /restaurant/{restaurantId} - get a restaurant based on it's ID.
- POST /restaurant - create a new restaurant
- PUT - /restaurant/{reviewId} - update an existing restaurant
- DELETE - /reviews/{reviewId} - delete an existing restaurant

#### users - Operations about user

- GET /user - gets a list of user
- GET /user/{userId} - get a user based on it's ID.
- POST /user - create a new restaurant
- PUT - /user/{userId} - update an existing user
- DELETE - /user/{userId} - delete an existing user