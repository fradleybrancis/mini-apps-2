import React from "react";

const Event = ({ eventData }) => {
  if (eventData) {
    if (eventData.date[0] === "-") {
      eventData.date = eventData.date.split("-")[1].concat(" BC");
    }
  }
  return (
    <div className="Event">
      <div className="Category">{eventData.category2}</div>
      <div className="Date">{eventData.date}</div>
      <div className="Desciption">{eventData.description}</div>
    </div>
  )
}

export default Event;