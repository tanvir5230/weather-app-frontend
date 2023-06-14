import React from "react";
import { SearchBar } from "./SearchBar";
import { Notification } from "./Notification";
import { Profile } from "./Profile";

export const Header = () => {
  return (
    <div className="row align-items-center">
      <SearchBar />
      <Notification />
      <Profile />
    </div>
  );
};
