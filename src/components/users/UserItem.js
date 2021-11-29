import React from "react";
import PropTypes from "prop-types";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <>
      <div className='object-center mx-5 mt-5 p-5  text-center bg-gray-200'>
        <img src={avatar_url} alt='' className='rounded-t-3xl' />
        <h3 className='font-bold'>{login}</h3>
        <div className='mt-5'>
          <a
            href={html_url}
            className='bg-black hover:bg-gray-400 text-white hover:text-black p-2 m-2  rounded-lg '>
            More
          </a>
        </div>
      </div>
    </>
  );
};
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UserItem;
