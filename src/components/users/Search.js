import React, { Component } from "react";

export class Search extends Component {
  render() {
    return (
      <div className='text-center m-auto'>
        <form>
          <input
            type='text'
            name='text'
            className='p-2 border-4 border-gray-600 border-r-0'
            placeholder='Search Users...'
          />
          <input
            type='submit'
            value='Search'
            className='border-4 border-gray-600 border-l-0 bg-black text-white p-2 mt-5'
          />
        </form>
      </div>
    );
  }
}

export default Search;
