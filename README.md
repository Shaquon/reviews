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
- GET /restaurants/{restaurantId}/reviews - gets a list of reviews
  Response code: 200
  Response data:
  ```
    [
    {
      id: Number,
      star_rating: Number,
      overall: Number,
      food: Number,
      ambience: Number,
      user: String,
      location: String,
      last_visited: Date,
      review_count: Number,
      reviews: [
        String,
      ]
    }
    ]
  ```
- GET /restaurants/{restaurantId}/reviews/{reviewId} - get a review based on it's ID.
  Response Code: 200
  Response data:
  ```
    {
      id: Number,
      star_rating: Number,
      overall: Number,
      food: Number,
      ambience: Number,
      user: String,
      location: String,
      visited: String,
      text: String,
    }
  ```
- POST /restaurants/{restaurantId}/reviews - create a new review
  Response code 201
  Request data format:
  ```
    {
      text: String,
      // stil
    }
  ```
- PUT - /restaurants/{restaurantId}/reviews/{reviewId} - update an existing review
  Response code 405
   ```
      {
        id: Number,
        star_rating: Number,
        overall: Number,
        food: Number,
        ambience: Number,
        service: Number,
        value: Number,
        user: String,
        text: String,
      }
    ```
- DELETE -  /restaurants/{restaurantId}/reviews/{reviewId} - delete an existing review
  Response code: 202
  reviewId: Id of review to delete

#### restaurants - Access restaurant data
- GET /restaurants - gets a list of restaurants
```
  [
    {
    id: Number,
    name: String,
    number_of_reviews: Number,
    noise_level: String,
    would_recommend: Boolean,
    loved_for: [
      String
    ],
    filters: [
      String
      ]
    }
  ]
```
- GET /restaurants/{restaurantId} - get a restaurant based on it's ID.
```
{
  id: Number,
  name: String,
  number_of_reviews: Number,
  rating_food: Number,
  rating_service:	Number,
  rating_ambience: Number,
  rating_overall: Number,
  rating_recent: Number,
  noise_level: String,
  would_recommend: Boolean,
  star_percentage: Number,
  loved_for: [
    String
  ],
  filters: [
    String
  ]
}
```
- POST /restaurants - create a new restaurant
  Response Code: 201
  Request Body:
    {
      name: String
      // add info from above route.
    }
- PUT - /restaurants/{restaurantId} - update an existing restaurant
```
{
  id: Number,
  name: String,
  number_of_reviews: Number,
  rating_food: Number,
  rating_service:	Number,
  rating_ambience: Number,
  rating_overall: Number,
  rating_recent: Number,
  noise_level: String,
  would_recommend: Boolean,
  star_percentage: Number,
  loved_for: [
    String
  ],
  filters: [
    String
  ]
}
```
- DELETE - /restaurants/{restaurantId} - delete an existing restaurant

#### users - Operations about user

- GET /user - gets a list of user
  Response Code: 200
  Response Data:
  ```
    [
      {
        id: Number,
        username: String,
        reviews: [Strings ],
        favorited_restaurants: [Strings ]
      }
    ]
    ```
- GET /user/{userId} - get a user based on it's ID.
  Response Code: 200
  Response Data:
  ```
 {
    id: Number,
    username: String,
    reviews: [Strings ],
    favorited_restaurants: [Strings ]
  }
  ```

- POST /user - create a new user
  Response Code: 201
  Request body:
  ```
    {
      username: String,
     // include other props
    }
  ```
- PUT - /user/{userId} - update an existing user
```
   {
    username: String,
    reviews: [Strings ],
    restaurants: [Strings ]
  }
```
- DELETE - /user/{userId} - delete an existing user
  Response Code: 202
  userId: Id of user to delete