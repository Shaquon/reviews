#make tables
# psql < /Users/quon/workspace2/sdc/reviews/database/postgres/schema.sql

#load data
psql -h 52.14.83.216 -p 5432 -U postgres -W newcolor18 -d reviews < /Users/quon/workspace2/sdc/reviews/database/postgres/loadFile.sql