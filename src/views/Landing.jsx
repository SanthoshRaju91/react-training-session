import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import preload from '../data/data.json';
import Item from '../components/Item';
import styled from 'styled-components';

const H2Wrapper = styled.h2`
  letter-spacing: 2px;
  font-weight: 300;
  font-size: 18px;
  margin-bottom: 20px;
`;

export default class Landing extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  handleSearch = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
  }

  render() {
    return (
      <div>
        <Navbar searchTerm={this.state.searchTerm} handleSearch={this.handleSearch}/>

        <H2Wrapper>Movies list</H2Wrapper>
        
        { preload.shows
          .filter(current => `${current.title} ${current.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >=0 )
          .map(current => <Item key={current.imdbID} { ...current }></Item>)}
      </div>
    )
  }
};
