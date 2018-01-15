//Import react so it can be used inside this module. The transpiler will take care of provide access to it. 
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YouTubeSearch from 'youtube-api-search';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetails';

const API_KEY = 'AIzaSyAE1JpbAKurn0ZPMbD-d-TcXxoFP-Sjl3Y';


//Create a new component (a class)
//The parenthesis and the fat arrow is the new ES6 syntax for function() keyword.
//This component was refactored to be converted into a class component, hence next line was commented
//const App = () => {
class VideoViewer extends Component {

  //When the page first load, search for a default term in the constructor so the page is loaded with
  //videos
  constructor(props) {
    super(props);

    //Initialize component state as an empty array
    this.state = { 
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('Clean Energy');
    
  }

  videoSearch(term) {
    //Define the Youtube search as function by passing the apy key and the search term and defining the callback function
    //with the returned videos
    YouTubeSearch({key: API_KEY, term: term}, (videos) => {
      //in ES6 when the key and the value of an object are the same, they can be condensed into one. Eg. { videos: videos }
      //can be written as {videos}
      //Set the state with the search results
      this.setState({ 
        videos,
        selectedVideo: videos[0] 
      });
    });
  }

  //When this component was refactored to a class base, the render function was created to include returning jsx code
  render() {

    //Using lodash debounce to make a new version of he original videoSearch that every time it's called, it execution is delayed by x ms
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 600);

    //jsx is a subset or dialect of javascript that allows us to write what looks like html tags but it's actually javascript
    //we use jsx to produce the actual xml to insert into the DOM once it's transpiled into vanilla javascript . It's a lot easier 
    //VideoList component receives the list of videos via  a jsx property tag. This is called passing props
    //In addition, VideoList call defines a callback function passed as a property (props) Sso when it's called back from VideoList it will update App state with the newly selected video
    return (
      <div className="video-viewer group">
        <SearchBar OnSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
  
  
}
//Put the component's generated html into the web page DOM 
//React render the instance of the component App (<App / >).
//To create instances of components, just wrap them between JSX tags for the transpiler to translate itf into javascript React.createElement("app",null)
ReactDOM.render(<VideoViewer />, document.querySelector('.container'));
