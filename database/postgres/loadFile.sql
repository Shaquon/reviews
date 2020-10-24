COPY restaurants (name,review_count,overall_rating,food_rating,service_rating,ambience_rating,star_rating,noise_level,loved_for,filters)
FROM '/Users/quon/workspace2/sdc/reviews/database/postgres/csv/restaurantSeedData.csv'
DELIMITER ','
CSV HEADER;

COPY users (avatar, location, first_name,last_name,number_of_reviews)
FROM '/Users/quon/workspace2/sdc/reviews/database/postgres/csv/userSeedData.csv'
DELIMITER ','
CSV HEADER;

COPY reviews (restaurant_id,user_id,avatar,last_visit,text,overall_rating,food_rating,service_rating,ambience_rating)
FROM '/Users/quon/workspace2/sdc/reviews/database/postgres/csv/reviewSeedData.csv'
DELIMITER ','
CSV HEADER;

