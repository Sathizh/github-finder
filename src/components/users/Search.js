import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  state = {
    text: "",
  };
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please enter somethng", "bg-yellow-500");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
    // console.log(this.state.text);
  };

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div className='text-center m-auto'>
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            name='text'
            value={this.state.text}
            onChange={this.onChange}
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
  }
}

export default Search;
