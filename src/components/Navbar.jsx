import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavWrapper = styled.nav`
  height: 60px;

  a {
    font-weight: 300;
    letter-spacing: 2px;
  }

  .form-inline {
    margin-left: 30px;
    width: 100%;

    input {
      width: 50%;
    }

    .btn-outline-success {
      margin-left: 30px;
    }
  }
`;

const Navbar = (props) => {
  return (
    <NavWrapper className="navbar navbar-toggleable-md fixed-top navbar-light bg-faded">
      <Link className="navbar-brand" to="/">Search Videos</Link>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            onChange={props.handleSearch}
          />
          <Link to="/about" className="btn align-middle btn-outline-success">About</Link>
        </form>
      </div>
    </NavWrapper>
  )
}

export default Navbar;
