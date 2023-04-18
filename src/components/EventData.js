import { useState, useEffect } from "react";

export default function useEventData() {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    // simulate fetching data from an API
    const fetchEventData = async () => {
      const data = [
        {
          Title: "Beethoven's Greatest Works",
          Type: "Master’s Performance",
          Dates: [
            "2023-06-23T23:00:00Z",
            "2023-07-23T23:00:00Z",
            "2023-08-23T23:00:00Z",
          ],
          Image: "https://onepeterfive.com/wp-content/uploads/2020/12/Beethoven1-1536x948.jpg",
          Description: "Come witness this amazing performance.",
        },
        {
          Title: "Mozart's Greatest Works",
          Type: "Expert's Performance",
          Dates: [
            "2023-06-23T23:00:00Z",
            "2023-07-23T23:00:00Z",
            "2023-08-23T23:00:00Z",
          ],
          Image: "https://www.thecultureconcept.com/wp-content/uploads/2014/08/Mozart-e1475041741130.jpg",
          Description: "Come witness this really cool performance.",
        },
      ];
      setEventData(data);
    };
    fetchEventData();
  }, []);

  return eventData;
}
