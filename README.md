
# Event Listing Template
A simple FE application using React and bootstrap.
The application is receiving this data from a headless CMS:
```json
[
  {
    "Title": "Beethoven's Greatest Works",
    "Type": "Master’s Performance",
    "Dates": [
      "2023-06-23T23:00:00Z",
      "2023-07-23T23:00:00Z",
      "2023-08-23T23:00:00Z"
    ],
    "Image": "{plugin any image url here}",
    "Description": "Come witness this amazing performance."
  },
    {
    "Title": "Mozart's Greatest Works",
    "Type": "Expert's Performance",
    "Dates": [
      "2023-06-23T23:00:00Z",
      "2023-07-23T23:00:00Z",
      "2023-08-23T23:00:00Z"
    ],
    "Image": "{plugin any image url here}",
    "Description": "Come witness this really cool performance."
  }
]

```
It's hardcoded JSON data in a mock service layer as if it was queried from an API from a headless CMS. The data has been rendered out as event cards using all fields in the above data (one card per date) as if it were displaying an event listing for the world renowned venue “Bob’s Orchestra Hall”, which is an organization located in Seattle, WA. The date and time is in a friendly format, matching the time the event would happen in Seattle. Minimal css styling on the event cards.

## To Run Dev Server
Node v16.19.1
Npm v8.19.3
```js
npm install && npm start
```
