// @flow

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Header from './Header.jsx'; // eslint-disable-line import/extensions
import ShowCard from './ShowCard.jsx'; // eslint-disable-line import/extensions


const SearchWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

// .search > div > a:nth-child(3n) > .show-card {
//   margin-right: 0;
// }

const Search = (props: {
  searchTerm: string, // eslint-disable-line react/no-unused-prop-types
  shows: Array<Show>
}) =>
  <SearchWrapper>
    <Header showSearch />
    <div>
      {props.shows
        .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(props.searchTerm.toUpperCase()) >= 0)
        .map(show => <ShowCard key={show.imdbID} {...show} />)}
    </div>
  </SearchWrapper>;

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

export const Unwrapped = Search;

export default connect(mapStateToProps)(Search);
