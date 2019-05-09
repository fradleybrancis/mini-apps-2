import React from "react";

const Event = ({ eventData }) => {
  return (
    <div className="Event">
      <div>{eventData.category1}</div>
      <div>{eventData.category2}</div>
      <div>{eventData.date}</div>
      <div>{eventData.description}</div>
      <div>{eventData.granularity}</div>
      <div>{eventData.lang}</div>
    </div>
  )
}

export default Event;