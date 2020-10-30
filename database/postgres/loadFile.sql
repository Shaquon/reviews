-- CREATE OR REPLACE FUNCTION loadRestaurants() RETURNS void AS $$
--   BEGIN
--     FOR counter IN 1..2
--     LOOP
--       COPY restaurants (name,review_count,overall_rating,food_rating,service_rating,ambience_rating,star_rating,noise_level,loved_for,filters)
--       FROM '/Users/quon/workspace2/sdc/reviews/database/postgres/csv/restaurantSeedData.csv'
--       DELIMITER ','
--       CSV HEADER;
--       raise notice 'Loop finished... ';
--     END LOOP;
--   END;
-- $$ LANGUAGE plpgsql;

-- SELECT loadRestaurants();

-- CREATE OR REPLACE FUNCTION loadUsers() RETURNS void AS $$
--   BEGIN
--     FOR counter IN 1..4
--     LOOP
--       COPY users (avatar, location, first_name,last_name,number_of_reviews)
--       FROM '/Users/quon/workspace2/sdc/reviews/database/postgres/csv/userSeedData.csv'
--       DELIMITER ','
--       CSV HEADER;
--       raise notice 'Loop finished... ';
--     END LOOP;
--   END;
-- $$ LANGUAGE plpgsql;
-- SELECT loadUsers();

-- CREATE OR REPLACE FUNCTION loadReviews() RETURNS void AS $$
--   BEGIN
--     FOR counter IN 1..10
--     LOOP
--     COPY reviews (restaurant_id,user_id,avatar,last_visit,text,overall_rating,food_rating,service_rating,ambience_rating)
--       FROM '/Users/quon/workspace2/sdc/reviews/database/postgres/csv/reviewSeedData.csv'
--       DELIMITER ','
--       CSV HEADER;
--       raise notice 'Loop finished... ';
--     END LOOP;
--   END;
-- $$ LANGUAGE plpgsql;

-- SELECT loadReviews();

-- COPY restaurants (name,review_count,overall_rating,food_rating,service_rating,ambience_rating,star_rating,noise_level,loved_for,filters)
-- FROM '/Users/quon/workspace2/sdc/reviews/database/postgres/csv/restaurantSeedData.csv'
-- DELIMITER ','
-- CSV HEADER;

-- ALTER TABLE reviews
-- ADD FOREIGN KEY (user_id) REFERENCES users(id);
-- ALTER TABLE reviews
-- ADD FOREIGN KEY (restaurant_id) REFERENCES restaurants(id);

-- COPY users (avatar, location, first_name,last_name,number_of_reviews)
-- FROM '/Users/quon/workspace2/sdc/reviews/database/postgres/csv/userSeedData.csv'
-- DELIMITER ','
-- CSV HEADER;

-- COPY reviews (restaurant_id,user_id,avatar,last_visit,text,overall_rating,food_rating,service_rating,ambience_rating)
-- FROM '/Users/quon/workspace2/sdc/reviews/database/postgres/csv/reviewSeedData2.csv'
-- DELIMITER ','
-- CSV HEADER;

-- For EC2 instance
-- \copy restaurants (name,review_count,overall_rating,food_rating,service_rating,ambience_rating,star_rating,noise_level,loved_for,filters) FROM '/Users/quon/workspace2/sdc/reviews/database/postgres/csv/restaurantSeedData.csv' WITH CSV HEADER;

-- \copy reviews (restaurant_id,user_id,avatar,last_visit,text,overall_rating,food_rating,service_rating,ambience_rating) FROM '/Users/quon/workspace2/sdc/reviews/database/postgres/csv/reviewSeedData2.csv' WITH CSV HEADER;

\copy users (avatar, location, first_name,last_name,number_of_reviews) FROM '/Users/quon/workspace2/sdc/reviews/database/postgres/csv/userSeedData.csv' WITH CSV HEADER;

