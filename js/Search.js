import React, { Component } from 'react';
// import { connect } from 'react-redux';

import ShowCard from './ShowCard';
// import Header from './Header';
import preload from '../data.json';


/*
const Search = (props: {
  searchTerm: string, // eslint-disable-line react/no-unused-prop-types
  shows: Array<Show>
}) => (
*/


/*
 < Header showSearch />
 <div>
 {props.shows
 .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(props.searchTerm.toUpperCase()) >= 0)
 .map((show, index) => <ShowCard {...show} key={show.imdbID} id={index} />)}
 </div>
 
 */

class Search extends Component {
  state = {
    searchTerm: ``
  }
  handleSearchTermChange = event => {
    this.setState({searchTerm: event.target.value})
  }
  render() {
    return (
      <div className="search">
        <header>
          <h1>svideo</h1>
          <input
            type="text"
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            placeholder="Search"
          />
        </header>
        <div>
          {preload.shows
            .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map(show => (<ShowCard key={show.imdbID} show={show}/>))}
        </div>
      </div>
    )
  }
}


/*
const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

export const Unwrapped = Search;
export default connect(mapStateToProps)(Search);
*/
export default Search;
