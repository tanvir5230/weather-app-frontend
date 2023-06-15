import React from "react";
import { BiSearch } from "react-icons/bi";

export const SearchBar = () => {
  return (
    <div className="col-10">
      <div className="row">
        <div className="col-12">
          <button className="btn">
            <BiSearch />
          </button>
          <input
            type="text"
            className="border-0 text-sm"
            placeholder="Type a place name..."
          />
        </div>
      </div>
    </div>
  );
};
