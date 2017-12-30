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
    this.state = { term: 'write your text here'};
  }
  
  //Every React class based component must have a render method
  render() {
    //as in classic html use the onChange property of the element to define the onChange function and provide the this.<functionName> defined in the class (within curly bracers)
    return (
      <div>
        <input 
          value={this.state.term}
          //the following error function simplifies the code by declaring the function as <param> => <function body>
          onChange={event => this.setState({ term: event.target.value })} />
          <p>Value of the input: {this.state.term}</p>
      </div>
    );
  }

  //event handler on + <ElementName> + <EventName>. Add the event parameter
  //below function is no longer necessary because the event is written within the onChange return value
  /*onInputChange(event) {
    console.log(event.target.value);
  }*/
}

export default SearchBar;