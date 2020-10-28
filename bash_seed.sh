#make tables
# psql < /Users/quon/workspace2/sdc/reviews/database/postgres/schema.sql

#load data
psql -d reviews < /Users/quon/workspace2/sdc/reviews/database/postgres/loadFile.sql