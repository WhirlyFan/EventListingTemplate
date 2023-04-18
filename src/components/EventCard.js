import React from "react";
import Card from 'react-bootstrap/Card';

export default function EventCard({ event, date }) {
  const eventDate = new Date(date).toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <Card className="card my-3">
      <Card.Img variant="top" src={event.Image} />
      <Card.Body>
        <Card.Title>{event.Title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{event.Type}</Card.Subtitle>
        <Card.Text>{event.Description}</Card.Text>
        <Card.Text>{eventDate}</Card.Text>
      </Card.Body>
    </Card>
  );
}
