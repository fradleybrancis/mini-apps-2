import React from "react";
import ScorePad from "./ScorePad.jsx"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      frame: 0,
    }
    this.updateTotalScore = this.updateTotalScore.bind(this);
  }

  updateTotalScore(frameScore) {
    const { score, frame } = this.state;
    this.setState({ score: score + frameScore, frame: frame + 1 });
  }

  render() {
    return (
      <React.Fragment>
        <h1> Score Card </h1>
        <ScorePad updateTotalScore={ this.updateTotalScore }/>
      </React.Fragment>
    )
  }
}

export default App;
