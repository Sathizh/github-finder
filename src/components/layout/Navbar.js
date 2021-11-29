import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ icon, name }) => {
  return (
    <nav className='navbar bg-gray-600 p-5 '>
      <h1 className='m-auto text-white font-semibold text-xl'>
        <i className={icon} /> {name}
      </h1>
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
