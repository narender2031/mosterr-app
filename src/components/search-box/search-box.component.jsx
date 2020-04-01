import * as React from 'react';
import './search-box.styles.css';

const SearchBox = ({ placeholder, handleChange }) => {
	return (
		<input className="search" name="search-box" placeholder={placeholder} onChange={handleChange} type="search" />
	);
};

export default SearchBox;
