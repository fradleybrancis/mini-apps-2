import React from "react";

const ScoreBoard = (props) => {
  return (
    <React.Fragment>
      <h2>Frame</h2>
      <div>{props.frame}</div>
      <h2>Score</h2>
      <div>{props.score}</div>
    </React.Fragment>
  )
}

export default ScoreBoard;