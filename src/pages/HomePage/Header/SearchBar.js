import React from "react";
import { BiSearch } from "react-icons/bi";

export const SearchBar = () => {
  return (
    <div className="col-10">
      <div className="row">
        <div className="col-12">
          <button className="btn p-0 m-0">
            <BiSearch
              style={{ width: "20px", height: "20px", marginBottom: "3px" }}
            />
          </button>
          <input
            type="text"
            className="border-0 text-sm w-75 p-2"
            placeholder="Type a place name..."
          />
        </div>
      </div>
    </div>
  );
};
