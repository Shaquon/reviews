DROP KEYSPACE restaurant_space;
CREATE KEYSPACE restaurant_space WITH replication =
  {'class': 'SimpleStrategy', 'replication_factor' : '1'};

USE restaurant_space;

-- for restaurant queries (query based!!)
CREATE TABLE restaurant (
  restaurant_id int PRIMARY KEY,
  name text,
  review_count float,
  overall_rating float,
  food_rating float,
  service_rating float,
  ambience_rating float,
  star_rating float,
  noise_level text,
  loved_for text,
  filters text
);

-- handles restaurant review queries
 --organized by restaurant
CREATE TABLE reviews_by_restaurant (
  review_id int,
  -- user_id int,
  restaurant_id int,
  avatar text,
  last_visit text,
  text text,
  overall_rating int,
  food_rating int,
  star_rating int,
  service_rating int,
  ambience_rating int,
  PRIMARY KEY ((restaurant_id), last_visit)
  -- first arg will be partition key
  -- second is clustering key
   -- * look into how to change order of query
);

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

-- add users table (will be similar to sql users table)
CREATE TABLE users (
  user_id int NOT NULL AUTO_INCREMENT,
  avatar text,
  first_name text,
  last_name text,
  number_of_reviews int,
  location text,
  PRIMARY KEY (user_id)
);

  -- Table for reviews_by_user (go to users page and expect to see reviews by user)
  -- organized by user
  CREATE TABLE reviews_by_user (
  review_id int,
  user_id int,
  restaurant_id int,
  avatar text,
  last_visit date,
  text text,
  overall_rating int,
  food_rating int,
  service_rating int,
  ambience_rating int,
  PRIMARY KEY ((user_id), last_visit)
);


-- look up batch statements to alter multiple tables**

COPY restaurant (restaurant_id, name, review_count, overall_rating, food_rating, service_rating, ambience_rating, star_rating, noise_level, loved_for, filters) FROM '/Users/quon/workspace2/sdc/reviews/database/cassandra/csv/cqlRestaurantSeedData.csv' WITH HEADER = TRUE;

COPY review (review_id, restaurant_id, avatar, last_visit, text, overall_rating, food_rating, service_rating, ambience_rating) FROM '/Users/quon/workspace2/sdc/reviews/database/cassandra/csv/reviewSeedData.csv' WITH HEADER = TRUE;

COPY reviews_by_restaurant (review_id, restaurant_id, avatar, last_visit, text, overall_rating, food_rating, service_rating, ambience_rating) FROM '/Users/quon/workspace2/sdc/reviews/database/cassandra/csv/reviewSeedData.csv' WITH HEADER = TRUE;
