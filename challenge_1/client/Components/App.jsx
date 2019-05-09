import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar.jsx";
import AllEvents from "./AllEvents.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      historicalEvents: [],
      query: "",
    }
    this.updateQuery = this.updateQuery.bind(this);
  }

  componentDidMount() {
    axios.get("/events", { 
      params: {
        _limit: 25,
      }
    })
    .then(response => {
      this.setState({ historicalEvents: response.data });
    })
    .catch(error => {
      console.log(error);
    })
  }

  updateQuery(event, searchWord) {
    event.preventDefault();
    this.setState({ query: searchWord });
  }

  render() {
    const { historicalEvents } = this.state;
    return (
      <div>
        <h1>History Log</h1>
        <SearchBar updateQuery={ this.updateQuery }/>
        <AllEvents historicalEvents={ historicalEvents }/>
      </div>
    )
  }
}

export default App;