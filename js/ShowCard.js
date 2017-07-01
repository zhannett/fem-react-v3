import React from 'react';
import { shape, string } from 'prop-types';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';


// $FlowFixMe
const Wrapper = styled.div`
  display: inline-block;
  width: 30%;
  height: 100%;
  vertical-align: top;
  border: 2px solid #333;
  border-radius: 4px;
  margin: 0 10px 25px 10px;
  padding-right: 10px;
  overflow: hidden;
  text-decoration: none;
  color: black;
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
/*
  props: {
    poster: string,
    title: string,
    year: string,
    description: string,
    imdbID: string
  };
  render() {
    return (
      <Wrapper className="show-card" to={`/details/${this.props.imdbID}`}>
        <Image alt={`${this.props.title} Show Poster`} src={`/public/img/posters/${this.props.poster}`} />
        <div>
          <h3>{this.props.title}</h3>
          <h4>({this.props.year})</h4>
          <p>{this.props.description}</p>
        </div>
      </Wrapper>
    );
  }
}
*/

const ShowCard = props => (
  <Wrapper className="show-card">
    <Image alt={`${props.show.title} Show Poster`} src={`/public/img/posters/${props.show.poster}`} />
    <div>
      <h3>{props.show.title}</h3>
      <h4>({props.show.year})</h4>
      <p>{props.show.description}</p>
    </div>
  </Wrapper>
)

ShowCard.propTypes = {
  show: shape({
    poster: string.isRequired,
    title: string.isRequired,
    year: string.isRequired,
    description: string.isRequired
  }).isRequired
}

export default ShowCard;
