import React from "react";

const ScoreBoard = (props) => {
  const { frame, score } = props;
  return (
    <React.Fragment>
      <h2>Frame</h2>
      <div>{frame}</div>
      <h2>Score</h2>
      <div>{score}</div>
    </React.Fragment>
  )
}

export default ScoreBoard;