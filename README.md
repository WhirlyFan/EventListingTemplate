
# Event Listing Template
You are writing a simple FE application and may use any major framework of your choice (React, Vuejs, Next.js, etc.) and any design framework of your choice (e.g. bootstrap, tailwind).
The application is receiving this data from a headless CMS:

```json
[
  {
    "Title": "Beethoven's Greatest Works",
    "Type": "Master’s Performance",
    "Dates": [
      "2023-06-23T23:00:00Z",
      "2023-07-23T23:00:00Z"
    ],
    "Image": "{plugin any image url here}",
    "Description": "Come witness this amazing performance."
  }
]
```
Wrap it in a mock service layer as if you were querying an API from a headless CMS, but you can just use the above hardcoded JSON data.
Your goal is to render event cards using all fields in the above data (one card per date), as if you were displaying an event listing for the world renown venue “Bob’s Orchestra Hall”, which is an organization located in Seattle, WA. Remember to display the date and time in a friendly format, matching the time the event would happen in Seattle.
Style the event cards to your liking.

## To Run Dev Server
Node v16.19.1
Npm v8.19.3
```js
npm install && npm start
```
