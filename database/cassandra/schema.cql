CREATE KEYSPACE restaurant WITH replication =
  {'class': 'SimpleStrategy', 'replication_factor' : '1'};

-- for restaurant queries (query based!!)
CREATE TABLE 'restaurant' (
  restaurant_id int,
  name_of_restaurant text,
  reviews_count int,
  overall_rating int,
  food_rating int,
  service_rating int,
  ambience_rating int,
  noise_level text,
  would_recommend int,
  star_rating int,
  loved_for text,
  filters text,
  PRIMARY KEY (restaurant_id)
)

-- handles restaurant review queries
 --organized by restaurant
CREATE TABLE 'reviews_by_restaurant' (
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
  PRIMARY KEY (restaurant_id, last_visit)
  -- first arg will be partition key
  -- second is clustering key
   -- * look into how to change order of query
)


-- add users table (will be similar to sql users table)
CREATE TABLE 'users' (
  id int NOT NULL AUTO_INCREMENT,
  avatar text,
  first_name text,
  last_name text,
  number_of_reviews int,
  location text,
  PRIMARY KEY (id)
)

  -- Table for reviews_by_user (go to users page and expect to see reviews by user)
  -- organized by user
  CREATE TABLE 'reviews_by_user' (
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
  PRIMARY KEY (user_id, last_visit)
)


-- look up batch statements to alter multiple tables**