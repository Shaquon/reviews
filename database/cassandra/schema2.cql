USE restaurant_space;

CREATE TABLE review (
  review_id int,
  restaurant_id int,
  avatar text,
  last_visit text,
  text text,
  overall_rating int,
  food_rating int,
  star_rating int,
  service_rating int,
  ambience_rating int,
  PRIMARY KEY ((review_id), last_visit)
);

COPY reviews_by_restaurant (review_id, restaurant_id, avatar, last_visit, text, overall_rating, food_rating, service_rating, ambience_rating) FROM '/Users/quon/workspace2/sdc/reviews/database/cassandra/csv/reviewSeedData.csv' WITH HEADER = TRUE;

INSERT INTO review (review_id, restaurant_id, avatar, last_visit, text, overall_rating, food_rating, star_rating, service_rating, ambience_rating) VALUES (9995000,9995000, 'image.jpg', 'july', 'The pizza was great.', 4, 4, 4, 4, 4);