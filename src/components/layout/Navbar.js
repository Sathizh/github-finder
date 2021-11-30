import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Navbar = ({ icon, name }) => {
  return (
    <nav className='navbar bg-gray-600 p-5 flex '>
      <h1 className='m-auto text-white font-semibold text-xl flex-1'>
        <i className={icon} /> {name}
      </h1>
      <ul className='flex text-white'>
        <li className='mr-2 font-medium'>
          <Link to='/'>Home</Link>
        </li>
        <li className='mr-2 font-medium'>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};
Navbar.defaultProps = {
  name: "Github Finder",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default Navbar;
