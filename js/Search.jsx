// @flow

import React from 'react';
import { connect } from 'react-redux';

import Header from './Header.jsx'; // eslint-disable-line import/extensions
import ShowCard from './ShowCard.jsx'; // eslint-disable-line import/extensions

const Search = (props: {
  searchTerm: string, // eslint-disable-line react/no-unused-prop-types
  shows: Array<Show>
}) =>
  <div className="search">
    <Header showSearch />
    <div>
      {props.shows
        .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(props.searchTerm.toUpperCase()) >= 0)
        .map(show => <ShowCard key={show.imdbID} {...show} />)}
    </div>
  </div>;

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

// //onChange={this.handleSearchTermChange}

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

export const Unwrapped = Search;

export default connect(mapStateToProps)(Search);
