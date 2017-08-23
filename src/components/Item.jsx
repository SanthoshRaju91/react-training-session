import React, { Component } from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  margin-bottom: 20px;
`;

const H3Wrapper = styled.h3`
  letter-spacing: 2px;
  font-size: 18px;
`;

const PWrapper = styled.p`
  letter-spacing: 1px;
  font-size: 12px;
  font-weight: 300;
`;

export default class Item extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showTrailer: false
    }
  }

  render() {
    const props = this.props;
    return (
      <ItemWrapper className="card">
        <div className="card-block">
          <div className="row">
            <div className="col-md-2 image-poster">
              <img src={props.poster} alt="Movie Poster" width="80" height="80"/>
            </div>

            <div className="col-md-8">
              <H3Wrapper>{ props.title }</H3Wrapper>
              <PWrapper>{ props.description }</PWrapper>
            </div>

            <div className="col-md-2">
              <button className="btn btn-sm align-middle btn-outline-success">
                { this.state.showTrailer ? 'Hide Trailer' : 'Show Trailer'}
              </button>
            </div>
          </div>
        </div>
      </ItemWrapper>
    )
  }
}
