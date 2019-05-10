import React from "react";
import Event from "./Event.jsx"

const AllEvents = (props) => {
  return (
    props.historicalEvents.map((eventData, index) => {
      return <Event key={index} eventData={eventData}/>
    })
  )
}

export default AllEvents;