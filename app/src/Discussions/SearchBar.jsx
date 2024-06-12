import React from 'react';
import './styles/SearchBar.css';

function SearchBar({ onSearch }) {
  return ( <div className='searchBar-discussions'>
        <input
      type="text"
      className="search-bar" 
      placeholder="Search posts..."
      onChange={(e) => onSearch(e.target.value)}
    />
    <button id='search-btn-discussion'>Search</button>
    <hr noshade></hr>
  </div>

  );
}

export default SearchBar;
