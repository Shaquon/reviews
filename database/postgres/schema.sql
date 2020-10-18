DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

USE reviews;

CREATE TABLE restaurants (
  id int NOT NULL AUTO_INCREMENT,
  name_of_restaurant varchar(50),
  reviews_count int,
  overall_rating decimal(2, 1),
  food_rating decimal(2, 1),
  service_rating decimal(2, 1),
  ambience_rating decimal(2, 1),
  noise_level varchar(20),
  would_recommend decimal(3, 2),
  star_rating integer,
  loved_for text[],
  filters text[],
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  avatar varchar(100),
  first_name varchar(20),
  last_name varchar(20),
  number_of_reviews smallint,
  location varchar,
  PRIMARY KEY (id)
);

CREATE TABLE reviews (
  id smallint NOT NULL AUTO_INCREMENT,
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