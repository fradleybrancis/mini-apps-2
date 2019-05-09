import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWord: "",
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ searchWord: event.target.value });
  }

  render() {
    return (
      <form>
        <label>
          Search Historical Events: 
          <input type="text" onChange={ this.handleChange }></input>
        </label>
      </form>
    )
  }
}

export default SearchBar;