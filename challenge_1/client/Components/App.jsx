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
      page: 1,
    }
    this.updateQuery = this.updateQuery.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    axios.get("/events", {
      params: {
        q: this.state.query,
        _page: this.state.page,
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
    this.setState({ query: searchWord }, this.handleSearch);
  }

  handlePrevious() {
    if (this.state.page === 1) {
      return;
    } else {
      this.setState({ page: this.state.page - 1 }, () => this.handleSearch())
    }
  }

  handleNext() {
    this.setState({ page: this.state.page + 1 }, () => this.handleSearch());
  }

  render() {
    const { historicalEvents } = this.state;
    return (
      <div>
        <h1>History Log</h1>
        <SearchBar updateQuery={ this.updateQuery }/>
        <AllEvents historicalEvents={ historicalEvents }/>
        <div className="pageChange">
          <button id="previous" type="button" onClick={ this.handlePrevious }>{"<"}</button>
          <button id="next" type="button" onClick={ this.handleNext }>{">"}</button>
        </div>
      </div>
    )
  }
}

export default App;