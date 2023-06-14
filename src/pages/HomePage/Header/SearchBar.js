import React from "react";
import { BiSearch } from "react-icons/bi";

export const SearchBar = () => {
  return (
    <div className="col-md-8">
      <div className="row">
        <div className="col-md-1">
          <BiSearch />
        </div>
        <div className="col-md-11">
          <input
            type="text"
            class="form-control"
            placeholder="Type a place name..."
          />
        </div>
      </div>
    </div>
  );
};
