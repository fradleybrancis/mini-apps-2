import React from "react";
import axios from "axios";
import Chart1 from "./Chart.jsx"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bpi: [],
    }
  }

  componentDidMount() {
    axios.get("/prices")
      .then(response => {
        this.setState({ bpi: response.data.bpi });
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    const { bpi } = this.state;
    return (
      <div>
        <h1>Bitcoin Price Index</h1>
        <Chart1 bpi={ bpi }/>
      </div>

    )
  }
}

export default App;