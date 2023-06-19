import React from "react";
import { Link } from "react-router-dom";

export const NavItemTemplate = ({ url, absUrl, linkText, icon: LinkIcon }) => {
  return (
    <Link
      to={url ? url : absUrl}
      target={absUrl === undefined ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className="nav-link d-flex flex-column flex-lg-row justify-content-center  justify-content-lg-start align-items-center py-3"
    >
      <LinkIcon className="mx-3" style={{ width: "20px", height: "20px" }} />
      <h6 className="font-weight-bold p-0 m-0">{linkText}</h6>
    </Link>
  );
};
