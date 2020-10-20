DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS restaurants;
DROP TABLE IF EXISTS users;

CREATE TABLE restaurants (
  id BIGSERIAL NOT NULL PRIMARY KEY, -- BIGSERIAL type auto-increments
  name varchar(50) NOT NULL,
  review_count int,
  overall_rating int,
  food_rating int,
  service_rating int,
  ambience_rating int,
  noise_level varchar(20),
  would_recommend int,
  star_rating int,
  loved_for text[],
  filters text[]
);

CREATE TABLE users (
  id BIGSERIAL NOT NULL,
  avatar varchar(100),
  first_name varchar(20),
  last_name varchar(20),
  number_of_reviews smallint,
  location varchar,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS reviews;
CREATE TABLE reviews (
  id BIGSERIAL NOT NULL,
  restaurant_id int,
  user_id int,
  avatar varchar(100),
  last_visit DATE NOT NULL,
  text varchar(750),
  overall_rating smallint,
  food_rating smallint,
  service_rating smallint,
  ambience_rating smallint,
  PRIMARY KEY (id),
  FOREIGN KEY (restaurant_id)
    REFERENCES restaurants(id), -- set a delete on cascade
  FOREIGN KEY (user_id) -- maybe for user??
    REFERENCES users(id)
);