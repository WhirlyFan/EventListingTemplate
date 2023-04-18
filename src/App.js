import React from "react";
//importing without destructuring as it reduces amount of data sent to client
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EventCard from "./components/EventCard";
import useEventData from "./components/EventData";

function App() {
  const eventData = useEventData();

  return (
    <Container>
      <h1>Bob’s Orchestra Hall - Seattle, WA</h1>
      <Row>
        {eventData.map((event) =>
          event.Dates.map((date) => (
            <Col sm={12} md={6} lg={4} key={date}>
              <EventCard event={event} date={date} />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
}

export default App;
