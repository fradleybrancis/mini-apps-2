import React from "react";
import ScorePad from "./ScorePad.jsx";
import ScoreBoard from "./ScoreBoard.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      frame: 0,
    }
    this.updateTotalScore = this.updateTotalScore.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { frame } = this.state;
    if (frame === 11) {
      this.setState({ score: 0, frame: 0 });
      alert("gg")
    }
  }

  

  updateTotalScore(frameScore, callback) {
    const { score, frame } = this.state;
    this.setState({ score: score + frameScore, frame: frame + 1 }, () => callback);
  }

  render() {
    const { score, frame } = this.state;
    return (
      <React.Fragment>
        <h1> Score Card </h1>
        <ScorePad updateTotalScore={ this.updateTotalScore }/>
        <ScoreBoard score={ score } frame={ frame }/>
      </React.Fragment>
    )
  }
}

export default App;
