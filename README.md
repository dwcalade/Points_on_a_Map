Points On A Map
=========

Points on a Map is a web app that uses Leaflet; this allows users to create and edit maps of their interests/places to refer!

It was built by Dominik Wrona, Danny Jiang and Nicholas Reimer.

## User Stories

Authenticated User:
- As a authenticated user I can create a new map and add, edit or remove map points, because I have been verified by the site.

- As a authenticated user I can edit an existing map by adding, editing or removing points, because i have been verified by the site.

- As a authenticated user my profile page shows my favourite maps AND maps I have contributed to , because i have been verified by the site.

Regular User:
- I can view a list of all maps because I have a profile on the site

- I can favorite maps from the map list because I have a profile on the site

- I have a profile page that shows my favourite maps, 
 
- I can NOT edit or view other maps because I am NOT an authenticated user

## Page Features 

- Regular users can see a list of the available maps;

- Regular users can view a map;

- A map can contain many points;

- Each point can have: a title, description, and image;

- Authenticated user can create maps;

- Authenticated user can modify maps (add, edit, remove points);

- Authenticated user can favourite a map;

- Authenticated user can see their indicated favourite maps and maps they've contributed to

## Warnings & Tips

- Do not edit the `layout.css` file directly, it is auto-generated by `layout.scss`
- Split routes into their own resource-based file names, as demonstrated with `users.js` and `widgets.js`
- Split database schema (table definitions) and seeds (inserts) into separate files, one per table. See `db` folder for pre-populated examples. 
- Use the `npm run db:reset` command each time there is a change to the database schema or seeds. 
  - It runs through each of the files, in order, and executes them against the database. 
  - Note: you will lose all newly created (test) data each time this is run, since the schema files will tend to `DROP` the tables and recreate them.

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x


## Routes


## ERD

## Finised App Screenshots
