import React from "react";
import { SearchBar } from "./SearchBar";
import { Notification } from "./Notification";
import { Profile } from "./Profile";

export const Header = () => {
  return (
    <div className="row align-items-center 20vh py-3">
      <SearchBar />
      <Notification />
      <Profile />
    </div>
  );
};
