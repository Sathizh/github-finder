import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../contaxt/github/githubContext";

const Search = ({ showClear, clearUsers, setAlert }) => {
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter somethng", "bg-yellow-500");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
    // console.log(this.state.text);
  };

  // const { showClear, clearUsers } = this.props;
  return (
    <div className='text-center m-auto'>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          value={text}
          onChange={onChange}
          autoComplete='off'
          className='p-2 border-4 border-gray-600 border-r-0'
          placeholder='Search Users...'
        />
        <input
          type='submit'
          value='Search'
          className='border-4 border-gray-600 border-l-0 focus:border-0 bg-black text-white p-2 mt-5'
        />
      </form>
      {showClear && (
        <button
          className='m-3 w-32 p-2 bg-red-600 text-white rounded-lg'
          onClick={clearUsers}>
          Clear&nbsp;
          <i className='fas fa-trash'></i>
        </button>
      )}
    </div>
  );
};
Search.propTypes = {
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};
export default Search;
