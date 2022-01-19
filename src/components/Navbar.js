import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-sm bg-light">
        <ul className="navbar-nav">
          <Nav page='home' />
          <Nav page='about' />
          <Nav page='services' />
          <Nav page='products' />
          <Nav page='contact' />
        </ul>
      </nav>
    </div>
  );
};

const Nav = (props) => {
  return (
    <li className="nav-item">
      <Link className="nav-link" href="#" to={'/' + props.page}>{props.page} </Link>
    </li>
  )
  // }
}

export default Navbar;