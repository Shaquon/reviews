COPY restaurants
FROM '/Users/quon/workspace2/sdc/reviews/database/postgres/csv/restaurantSeedData.csv'
DELIMITER ','
CSV HEADER;

COPY users
FROM '/Users/quon/workspace2/sdc/reviews/database/postgres/csv/userSeedData.csv'
DELIMITER ','
CSV HEADER;

COPY reviews
FROM '/Users/quon/workspace2/sdc/reviews/database/postgres/csv/reviewSeedData.csv'
DELIMITER ','
CSV HEADER;

