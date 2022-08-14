import React from 'react';

const Search = ({search, searchInput, handleSearch}) => {
  return (
    <div className='Search' >
        <input 
          type='text' 
          value={search} 
          ref={searchInput} 
          onChange={handleSearch} 
          placeholder='Search your character'/>
    </div>
  );
};

export default Search;