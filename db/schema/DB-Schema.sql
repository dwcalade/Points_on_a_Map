--SCHEMA--
--Reference ERD for visual guide to the below:

----------------------------------------------------------------------------------------
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
ID SERIAL PRIMARY KEY,
username VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL
);

---------------------------------------------------------------------------------------
DROP TABLE IF EXISTS maps CASCADE;

CREATE TABLE maps (
ID SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
latitude DECIMAL NOT NULL,
longitude DECIMAL NOT NULL
);

---------------------------------------------------------------------------------------
DROP TABLE IF EXISTS favorite_maps CASCADE;

CREATE TABLE favorite_maps (
ID SERIAL PRIMARY KEY,

user_id INTEGER REFERENCES users(ID) ON DELETE CASCADE,
map_id INTEGER REFERENCES maps(ID) ON DELETE CASCADE
);

-- -user_id is the foreign key within the favorite_maps table (and user_contributions) and
--  it is being connected users table via the user tables ID

-- -map_id is the foreign key within the favorite_maps table (and user_contributions) and it
-- is being connected to the maps table via the maps tables ID

----------------------------------------------------------------------------------------
DROP TABLE IF EXISTS user_contributions CASCADE;

CREATE TABLE user_contributions (
ID SERIAL PRIMARY KEY,

user_id INTEGER REFERENCES users(ID) ON DELETE CASCADE,
map_id INTEGER REFERENCES maps(ID) ON DELETE CASCADE
);

----------------------------------------------------------------------------------------
DROP TABLE IF EXISTS map_points CASCADE;

CREATE TABLE map_points (
ID SERIAL PRIMARY KEY,
title VARCHAR(255) NOT NULL,
description VARCHAR(255) NOT NULL,
image VARCHAR(255),
latitude DECIMAL NOT NULL,
longitude DECIMAL NOT NULL,


map_id INTEGER REFERENCES maps(ID) ON DELETE CASCADE
);

----------------------------------------------------------------------------------------
