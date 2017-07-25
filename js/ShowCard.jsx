// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardWrapper = styled((Link: any))`
  display: inline-block;
  width: 32%;
  height: 250px;
  vertical-align: top;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 8px;
  overflow: hidden;
  text-align: left;
  text-decoration: none;
  color: black;
  h3 {
    margin: 12px 0 4px 0;
  }
  h4 {
    margin: 4px 0 0 0;
  }
  p {
    padding-bottom: 8px;
  }
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

// class ShowCard extends React.Component {
// shouldComponentUpdate() {
// return false;
// }

class ShowCard extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  props: {
    poster: string,
    title: string,
    year: string,
    description: string,
    imdbID: string
  };

  render() {
    return (
      <CardWrapper to={`/details/${this.props.imdbID}`} className="show-card">
        <Image src={`/public/img/posters/${this.props.poster}`} alt={`${this.props.title} Show Poster`} />
        <div>
          <h3>
            {this.props.title}
          </h3>
          <h4>
            ({this.props.year})
          </h4>
          <p>
            {this.props.description}
          </p>
        </div>
      </CardWrapper>
    );
  }
}

export default ShowCard;
