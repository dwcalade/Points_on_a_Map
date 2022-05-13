--SEEDS--
--Reference db/schema/DB-schema.sql and ERD for reference to the below:

-----------------------------------------------------------------------
INSERT INTO users(username, password)
VALUES ('Dominik', 'password123'),
       ('Nicolas', 'password123'),
       ('Camilo', 'password123'),
       ('Franky', 'password123'),
       ('George', 'password123');

-----------------------------------------------------------------------
INSERT INTO maps(name, latitude, longitude)
VALUES ('Nicks Favorite Hikes', 49.69695, -123.155365),
       ('Nicks Favorite Swim Spots', 49.69695, -123.155365),
       ('Nicks Favorite Restraunts', 49.69695, -123.155365),
       ('Nicks Favorite Rivers', 49.69695, -123.155365),
       ('Nicks Favorite Climbs', 49.69695, -123.155365);

-----------------------------------------------------------------------
INSERT INTO favorite_maps(user_id, map_id)
VALUES (1, 3),
       (1, 2),
       (2, 1),
       (3, 4),
       (5, 1);

-------------------------------------------------------------------------
INSERT INTO user_contributions(user_id, map_id)
VALUES (1, 3),
       (1, 2),
       (2, 1),
       (3, 4),
       (5, 1);

-------------------------------------------------------------------------
INSERT INTO map_points(title, description, image, latitude, longitude, map_id)
VALUES
('The Chief',
'From chief parking lot to top of 1st Peak',
'https://peakvisor.com/img/news/Stawamus-Chief-Provincial-Park.jpg',
49.68318,
-123.137169,
1),

('Howe Sound',
'near downtown Squmaish',
'https://farm8.static.flickr.com/7380/12444392195_b68ec49c72_c.jpg',
49.673183,
-123.186264,
2),

('Pizzalicous Donair Shop',
'on the main drag, in downtown Squamish',
NULL,
49.700281,
-123.151846,
3),

('Mamquam River',
'watch out its fasssst water!',
NULL,
49.705388,
-123.110561,
4),

('Riaz Rock',
'11+ crack made up of of pure granite goodness, named after the coolest kid in the world',
NULL,
49.678181,
-123.212357,
5);




