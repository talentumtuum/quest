#!/bin/bash
psql -f ./sql/install.sql -U postgres
PGPASSWORD=passwrod psql -d quest -f ./sql/structure.sql -U talentumtuum
PGPASSWORD=passwrod psql -d quest -f ./sql/data.sql -U talentumtuum
