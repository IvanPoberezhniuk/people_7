import React from "react";

const SearchField = props => {
  return (
    <form action="">
      <input
        type="text"
        className="inputText"
        placeholder="Search..."
        onChange={props.filterList}
      />
    </form>
  );
};

export default SearchField;
