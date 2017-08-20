// @flow

import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Shiitake from 'shiitake';


const sizes = {
  giant: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

// const CardWrapper = styled((Link: any))`
const CardWrapper = styled.div`
  display: inline-block;
  height: 0;
  vertical-align: top;
  background: #fff;
  border: 2px solid #333;
  border-radius: 4px;
  margin: 0 1% 2% 1%;
  padding-right: 8px;
  padding-bottom: 19.8%;
  overflow: hidden;
  text-align: left;
  text-decoration: none;
  color: black;
  margin: 12px 2% 5px %;
  background: papayawhip;
  ${media.giant`width: 30%; max-height: 170px;`}
	${media.desktop`width: 45%; max-height: 170px;`}
	${media.tablet`width: 45%; height: 150px;`}
	${media.phone`width: 90%; height: 120px;`}
`;

const CardContainer = styled.div`
  display: flex;
  overflow: hidden;
  ${media.giant`max-height: 160px;`}
  ${media.desktop`max-height: 160px;`}
  ${media.tablet`min-height: 150px;`}
  ${media.phone`min-height: 150px;`}
  h3 {
    margin: 12px 0 4px 0;
  }
  h4 {
    margin: 0 0 5px 0;
    color: #666;
    font-size: 13px;
  }
  p {
    margin: 0;
    font-size: 13px;
    padding-bottom: 8px;
    white-space: wrap;
    overflow: hidden;
  }
`;

const Image = styled.img`
  order: 1;
  flex-grow: 1;
  float: left;
  display: inline-block;
  margin-right: 10px;
  ${media.giant`width: 35%;`}
  ${media.desktop`width: 35%;`}
  ${media.tablet`width: 30%;`}
  ${media.phone`width: 30%;`}
`;

const CardInfo = styled.div`
  order: 2;
  flex-grow: 1;
  display: inline-block;
  display: block;
  float: right;
  ${media.giant`width: 60%;`}
  ${media.desktop`width: 60%;`}
  ${media.tablet`width: 65%;`}
  ${media.phone`width: 65%;`}
  overflow-y: hidden;
`;

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
      <CardWrapper>
        <CardContainer>
          <Link to={`/details/${this.props.imdbID}`}>
            <Image src={`/public/img/posters/${this.props.poster}`} alt={`${this.props.title} Show Poster`} />
            <CardInfo>
              <h3>
                {this.props.title}
              </h3>
              <h4>
                ({this.props.year})
              </h4>
                <Shiitake lines={3} throttleRate={200} tagName="p">
                  {this.props.description}
                </Shiitake>
            </CardInfo>
          </Link>
        </CardContainer>
      </CardWrapper>
    );
  }
}

export default ShowCard;
