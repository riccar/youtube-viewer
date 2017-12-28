//Import react so it can be used inside this module. The transpiler will take care of provide access to it. 
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/SearchBar';

const API_KEY = 'AIzaSyAE1JpbAKurn0ZPMbD-d-TcXxoFP-Sjl3Y';

//Create a new component (a class) to produce some html 
//The parenthesis and the fat arrow is the new ES6 syntax for function() keyword1
const App = () => {
  //jsx is a subset or dialect of javascript that allows us to write what looks like html tags but it's actually javascript
  //we use jsx to produce the actual xml to insert into the DOM once it's transpiled into vanilla javascript . It's a lot easier 
  return (
    <div>
      <SearchBar />
    </div>
  );
}
//Put the component's generated html into the web page DOM 
//React render the instance of the component App (<App / >).
//To create instances of components, just wrap them betwee333333n JSX tags for the transpiler to translate itf into javascript React.createElement("app",null)
ReactDOM.render(<App />, document.querySelector('.container'));
