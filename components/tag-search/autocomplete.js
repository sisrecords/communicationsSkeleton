import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class Autocomplete extends Component {
  static propTypes = {
    singleLayerSuggestions: PropTypes.instanceOf(Array)
  };

  static defaultProps = {
    singleLayerSuggestions: []
  };

  constructor(props) {
    super(props);

    this.state = {
      // The active selection's index
      activeSuggestion: 0,
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestions: false,
      // What the user has entered
      userInput: ""
    };
  }

  // Event fired when the input value is changed
  onChange = e => {
    const {
      singleLayerSuggestions,
      doubleLayerSuggestions
    } = this.props.suggestions;

    let userInput = e.currentTarget.value;
    if (userInput.startsWith("#")) {
      userInput = userInput.substring(1);
      const singleLayerFilteredSuggestions = singleLayerSuggestions.filter(
        suggestion =>
          suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );
      const doubleLayerFilteredSuggestions = Object.keys(
        doubleLayerSuggestions
      ).filter(
        suggestion =>
          suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );
      const filteredSuggestions = singleLayerFilteredSuggestions.concat(
        doubleLayerFilteredSuggestions
      );
      this.setState({
        activeSuggestion: 0,
        filteredSuggestions: filteredSuggestions,
        showSuggestions: true,
        userInput: e.currentTarget.value
      });
    } else {
      this.setState({
        activeSuggestion: 0,
        filteredSuggestions: [],
        showSuggestions: true,
        userInput: e.currentTarget.value
      });
    }
  };

  //   Event fired when the user clicks on a suggestion
  onClick = e => {
    // Update the user input and reset the rest of the state
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: ""
    });
    this.props.onSelect(e.target.textContent);
  };

  // Event fired when the user presses a key down
  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;
    const { doubleLayerSuggestions } = this.props.suggestions;

    if (e.key === "Backspace" && this.state.userInput === "") {
      this.props.onBackBtn();
    }
    // User pressed the enter key, update the input and close the
    // suggestions
    if (e.keyCode === 13) {
      if (
        Object.keys(doubleLayerSuggestions).includes(
          filteredSuggestions[activeSuggestion]
        )
      ) {
        this.setState({
          activeSuggestion: 0,
          filteredSuggestions:
            doubleLayerSuggestions[filteredSuggestions[activeSuggestion]],
          showSuggestions: true,
          userInput: "#"
        });
        // console.log(doubleLayerSuggestions["orel1"]);
      } else {
        this.setState({
          activeSuggestion: 0,
          filteredSuggestions: [],
          showSuggestions: false,
          userInput: ""
        });
      }
      if (filteredSuggestions.length > 0) {
        this.props.onSelect(filteredSuggestions[activeSuggestion]);
      } else {
        this.props.onSelect(e.target.value);
      }
    }
    // User pressed the up arrow, decrement the index
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (activeSuggestion === filteredSuggestions.length - 1) {
        return;
      }
      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput.startsWith("#")) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = "suggestion-active";
              }
              return (
                <li className={className} key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        // suggestionsListComponent = (
        //   // <div className="no-suggestions">
        //   //   <em>No suggestions, you're on your own!</em>
        //   // </div>
        // );
      }
    }

    return (
      <Fragment>
        <input
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
        />
        {suggestionsListComponent}
      </Fragment>
    );
  }
}

export default Autocomplete;
