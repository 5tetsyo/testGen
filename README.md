# Simple Courses App



## Created Using Libraries Like:

### react-router-dom

Library for routing. Allows you to move between pages without refreshing them and transfer data between them.

### axios

Query library. Allows you to reliably and simply create the API requests you need.

### hls.js

A library for working with video files with the format ".m3u8"

### json-server

Since I initially had problems with the postman API, I used the json-server library to get all the data I needed. Added file db.json where all data is stored, as well as routes.json where there are all data routes.
In order to run the ISON server on your PC, just install the library, and in the terminal of the root foler of the project, type "npx json-server -w db.json -r routes.json"
