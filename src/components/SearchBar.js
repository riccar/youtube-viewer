//Class based Search Bar component

//Curly brackets means import React, create a Component variable and initialize it with the React.Component property
import React, { Component } from 'react';

//Components variable is available and can be used as extender of the class
class SearchBar extends Component {

  //State is initialized in the constructor method as follows
  constructor(props) {
    //executing parent constructor. 
    super(props);

    //Initializing the state by creating a new object and assign it to the state attribute of the class
    //Add the property term to the object as empty, to record the search term that is the value typed into the text box
    this.state = { term: 'Clean Energy'};
  }
  
  //Every React class based component must have a render method
  render() {
    //as in classic html use the onChange property of the element to define the onChange function and provide the this.<functionName> defined in the class (within curly bracers)
    return (
      <div className="search-bar">
        <input 
          value={this.state.term}
          placeholder="Search"
          //the following error function simplifies the code by declaring the function as <param> => <function body>
          //event.target.value has the input value
          onChange={event => this.onInputChange(event.target.value)} />
          
      </div>
    );
  }

  //event handler on + <ElementName> + <EventName>. Add the event parameter
  //When the functioon is simple enougn, it can also be written within the onChange return value
  //as onChange={event => this.setState({ term: event.target.value })} />
  onInputChange(term) {
    //{term} equals to {term: term}
    this.setState({term});
    this.props.OnSearchTermChange(term);
  }
}

export default SearchBar;