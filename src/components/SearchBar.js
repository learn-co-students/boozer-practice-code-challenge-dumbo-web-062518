import React from 'react';
import { Input } from 'semantic-ui-react';

const SearchBar = ({value, handleInputChange}) => {
    return (
      <div>
        <label for="search">Search:
        <Input id="search" value={value}
        onChange={e => handleInputChange(e)}
        />
        </label>
      </div>
    );
};

export default SearchBar;
