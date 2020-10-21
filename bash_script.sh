# npm run seed
node /Users/quon/workspace2/sdc/reviews/database/postgres/genRestaurantData.js
node /Users/quon/workspace2/sdc/reviews/database/postgres/genUserData.js
node /Users/quon/workspace2/sdc/reviews/database/postgres/genReviewData.js

psql < /Users/quon/workspace2/sdc/reviews/database/postgres/schema.sql
psql -d reviews < /Users/quon/workspace2/sdc/reviews/database/postgres/loadFile.sql