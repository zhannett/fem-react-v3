// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setSearchTerm } from './actionCreators';

/*
 const Header = styled.div`
 z-index: 10;
 position: fixed;
 display: flex;
 align-items: center;
 justify-content: space-between;
 text-align: center;
 top: 0;
 left: 0;
 width: 100%;
 overflow: hidden;
 background-color: #fafafa;
 padding: 8px 30px;
 `;
 */

const Header = (props: { showSearch?: boolean, searchTerm: string, handleSearchTermChange: Function }) => {
  let utilSpace;

  if (props.showSearch) {
    utilSpace = (
      <input onChange={props.handleSearchTermChange} type="text" value={props.searchTerm} placeholder="Search" />
    );
  } else {
    utilSpace = (
      <h2>
        <Link to="/search">Back</Link>
      </h2>
    );
  }
  return (
    <header>
      <h1>
        <Link to="/">svideo</Link>
      </h1>
      {utilSpace}
    </header>
  );
};

Header.defaultProps = {
  showSearch: false
};

const mapStateToProps = state => ({ searchTerm: state.searchTerm });

const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
