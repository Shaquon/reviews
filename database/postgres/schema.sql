DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

\connect reviews;

DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS restaurants;
DROP TABLE IF EXISTS users;

CREATE TABLE restaurants (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  name varchar(50) NOT NULL,
  review_count integer,
  overall_rating decimal,
  food_rating decimal,
  service_rating decimal,
  ambience_rating decimal,
  star_rating decimal,
  noise_level varchar(35),
  loved_for text[],
  filters text[]
);


CREATE TABLE users (
  id BIGSERIAL NOT NULL,
  avatar varchar(100),
  first_name varchar(35),
  last_name varchar(35),
  number_of_reviews integer,
  PRIMARY KEY (id)
);


CREATE TABLE reviews (
  id BIGSERIAL NOT NULL,
  restaurant_id BIGSERIAL,
  user_id BIGSERIAL,
  avatar varchar(100),
  last_visit varchar(30),
  text varchar(750),
  overall_rating integer,
  food_rating integer,
  service_rating integer,
  ambience_rating integer,
  PRIMARY KEY (id),
  FOREIGN KEY (restaurant_id)
    REFERENCES restaurants(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id)
    REFERENCES users(id) ON DELETE CASCADE
);
