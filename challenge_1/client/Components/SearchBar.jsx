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
    const { updateQuery } = this.props;
    const { searchWord } = this.state;
    return (
      <form onSubmit={ (e) => { updateQuery(e, searchWord)}}>
        <label>
          Search Events: 
          <input type="text" onChange={ this.handleChange }></input>
        </label>
        <button type="submit">Go!</button>
      </form>
    )
  }
}

export default SearchBar;