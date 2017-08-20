// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import type { RouterHistory } from 'react-router-dom';

import { setSearchTerm } from './actionCreators';

const LandingWrapper =  styled.div`
  background-color: rgba(220, 220, 220, .7);
  padding: 15px 30px;
  border-radius: 5px;
  form {
    width: 100%;
    min-width: 300px;
    input {
      width: 100%;
      padding: 10px;
      border-radius: 4px;
    }
  }
  h1 {
    color: #B10DC9;
    font-family: Skia;
    font-weight: normal;
  }
  a {
    margin-top: 15px;
    padding: 10px 40px;
    background-color: #333;
    color: #fafafa;
    border-color: transparent;
    display: inline-block;
    text-decoration: none;
    border-radius: 4px;
    & :hover,
    & :focus {
      background-color: #666;
    }
    & :active {
      background-color: #fafafa;
      color: #333;
      border-color: #333;
    }
  }
`;

class Landing extends Component {
  props: {
    searchTerm: string,
    handleSearchTermChange: Function,
    history: RouterHistory
  };
  goToSearch = (event: SyntheticEvent) => {
    event.preventDefault();
    this.props.history.push('/search');
  };
  render() {
    return (
      <LandingWrapper>
        <h1>svideo</h1>
        <form onSubmit={this.goToSearch}>
          <input
            type="text"
            onChange={this.props.handleSearchTermChange}
            placeholder="Search"
            value={this.props.searchTerm}
          />
        </form>
        <Link to="/search"> or Browse All</Link>
      </LandingWrapper>
    );
  }
}

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
