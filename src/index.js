//Import react so it can be used inside this module. The transpiler will take care of provide access to it. 
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YouTubeSearch from 'youtube-api-search';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

const API_KEY = 'AIzaSyAE1JpbAKurn0ZPMbD-d-TcXxoFP-Sjl3Y';


//Create a new component (a class) to produce some html 
//The parenthesis and the fat arrow is the new ES6 syntax for function() keyword.
//This component was refactored to be converted into a class component, hence next line was commented
//const App = () => {
class App extends Component {

  //When the page first load, search for a default term in the constructor so the page is loaded with
  //videos
  constructor(props) {
    super(props);

    //Initialize component state as an empty array
    this.state = { videos: [] }

    //Define the Youtube search as function by passing the apy key and the search term and defining the callback function
    YouTubeSearch({key: API_KEY, term: 'Clean Enegery'}, (videos) => {
      //in ES6 when the key and the value of an object are the same, they can be condensed into one. Eg. { videos: videos }
      //can be just {videos}
      //Set the state with the search results
      this.setState({ videos })
    });
  }

  //When this component was refactored to a class base, the render function was created to include returning jsx code
  render() {
    //jsx is a subset or dialect of javascript that allows us to write what looks like html tags but it's actually javascript
    //we use jsx to produce the actual xml to insert into the DOM once it's transpiled into vanilla javascript . It's a lot easier 
    //VideoList component receives the list of videos via  a jsx property tag. This is called passing props
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
  
  
}
//Put the component's generated html into the web page DOM 
//React render the instance of the component App (<App / >).
//To create instances of components, just wrap them between JSX tags for the transpiler to translate itf into javascript React.createElement("app",null)
ReactDOM.render(<App />, document.querySelector('.container'));
