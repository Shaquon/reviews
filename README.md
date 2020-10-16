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
    [
    {
      id: Number,
      star_rating: Number,
      overall: Number,
      food: Number,
      ambience: Number,
      user: String,
      location: String,
      visited: String,
      review_count: Number,
      reviews: [
        String,
      ]
    }
    ]
- GET /restaurants/{restaurantId}/reviews/{reviewId} - get a review based on it's ID.
  Response Code: 200
  Response data:
    {
      id: Number,
      star_rating: Number,
      overall: Number,
      food: Number,
      ambience: Number,
      user: String,
      location: String,
      visited: String,
      review_count: Number,
      reviews: [
        String,
      ]
    }
- POST /reviews - create a new review
  Response code 201
  Request data format:
    {
      text: String,
    }
- PUT - /reviews/{reviewId} - update an existing review
  Response code 405
      {
        id: Number,
        star_rating: Number,
        overall: Number,
        food: Number,
        ambience: Number,
        user: String,
        location: String,
        visited: String,
        review_count: Number,
        reviews: [
          String,
        ]
      }
- DELETE - /reviews/{reviewId} - delete an existing review
  Response code: 202
  reviewId: Id of review to delete

#### restaurants - Access restaurant data
- GET /restaurantss - gets a list of restaurants
[
  {
  id: Number,
  name: String,
  number_of_reviews: Number,
  noise_level: ‘moderate’,
  would_recommend: Boolean,
  loved_for: [
    String
  ],
  filters: [
    String
    ]
  }
]
- GET /restaurants/{restaurantId} - get a restaurant based on it's ID.

{
  id: Number,
  name: String,
  number_of_reviews: Number,
  rating_food: Number,
  rating_service:	Number,
  rating_ambience: Number,
  rating_overall: Number,
  rating_recent: Number,
  noise_level: ‘moderate’,
  would_recommend: Boolean,
  star_percentage: Number,
  loved_for: [
    String
  ],
  filters: [
    String
  ]
}

- POST /restaurant - create a new restaurant
  Response Code: 201
  Request Body:
    {
      name: String
    }
- PUT - /restaurant/{restarantId} - update an existing restaurant
{
  id: Number,
  name: String,
  number_of_reviews: Number,
  rating_food: Number,
  rating_service:	Number,
  rating_ambience: Number,
  rating_overall: Number,
  rating_recent: Number,
  noise_level: ‘moderate’,
  would_recommend: Boolean,
  star_percentage: Number,
  loved_for: [
    String
  ],
  filters: [
    String
  ]
}

- DELETE - /resturant/{restaurantId} - delete an existing restaurant

{
  name: String,
}

or

{
  id: Number,
}

#### users - Operations about user

- GET /user - gets a list of user
  Response Code: 200
  Response Data:
    [
      {
        id: Number,
        username: String,
        reviews: [Strings ],
        restaurants: [Strings ]
      }
    ]
- GET /user/{userId} - get a user based on it's ID.
  Response Code: 200
  Response Data:
 {
    id: Number,
    username: String,
    reviews: [Strings ],
    restaurants: [Strings ]
  }
- POST /user - create a new restaurant
  Response Code: 201
  Request body:
    {
      username: String,
    }

- PUT - /user/{userId} - update an existing user
   {
    username: String,
    reviews: [Strings ],
    restaurants: [Strings ]
  }
- DELETE - /user/{userId} - delete an existing user
  Response Code: 202
  userId: Id of user to delete