import React from "react";

class ScorePad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ball: 1,
      frameScore: 0,
    }
    this.count = 0;
    this.updateFrameScore = this.updateFrameScore.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { updateTotalScore } = this.props;
    const { ball, frameScore } = this.state;
    if (ball === 3 || frameScore > 9) {
      updateTotalScore(frameScore, this.setState({ ball: 1, frameScore: 0 }));
    }
  }

  

  updateFrameScore(event) {
    const value = event.target.value;
    const { ball, frameScore } = this.state;
   
    if (frameScore > 10 || ball > 2) {
      this.setState({ ball: 1, frameScore: 0 });
    } else if (ball === 1 && value === "10") {
      this.setState({ frameScore: 30 });
    } else if (ball === 2 && Number(value) + frameScore === 10) {
      this.setState({ frameScore: frameScore + 10 });
    } else {
      this.setState({ frameScore: frameScore + Number(value), ball: ball + 1 });
    }
  }

  render() {
    const { frameScore } = this.state;
    return (
      <React.Fragment>
        <div>
          <button type="button" value="0" onClick={(e) => this.updateFrameScore(e)}>0</button>          
        </div>
        <div>
          
          <button type="button" value="1" onClick={(e) => this.updateFrameScore(e)}>1</button>
          
          {
            frameScore < 9 &&
            <button type="button" value="2" onClick={(e) => this.updateFrameScore(e)}>2</button>
          }
          {

            frameScore < 8 &&
            <button type="button" value="3" onClick={(e) => this.updateFrameScore(e)}>3</button>
          }
        </div>
        <div>
          {
            frameScore < 7 &&
            <button type="button" value="4" onClick={(e) => this.updateFrameScore(e)}>4</button>
          }
          {
            frameScore < 6 &&
            <button type="button" value="5" onClick={(e) => this.updateFrameScore(e)}>5</button>
          }
          {
            frameScore < 5 && 
            <button type="button" value="6" onClick={(e) => this.updateFrameScore(e)}>6</button>
          }
        </div>
        <div>
          {
            frameScore < 4 && 
            <button type="button" value="7" onClick={(e) => this.updateFrameScore(e)}>7</button>
          }
          {
            frameScore < 3 && 
            <button type="button" value="8" onClick={(e) => this.updateFrameScore(e)}>8</button>
          }
          {
            frameScore < 2 && 
            <button type="button" value="9" onClick={(e) => this.updateFrameScore(e)}>9</button>
          }
        </div>
        <div>
          {
            frameScore < 1 && 
            <button type="button" value="10" onClick={(e) => this.updateFrameScore(e)}>10</button>
          }
        </div>
      </React.Fragment>
    )
  }
}

export default ScorePad;