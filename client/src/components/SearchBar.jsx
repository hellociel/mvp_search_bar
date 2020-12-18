import React, { Component } from "react";

function SearchBar(props) {
  return (
    <div className="form">
      <form>
        <br></br>
        <input
          id="input"
          rows="1"
          cols="20"
          wrap="hard"
          type="text"
          placeholder="Type in your Order ID"
          onChange={props.onChange}
        ></input>
      </form>
    </div>
  );
}

export default SearchBar;
