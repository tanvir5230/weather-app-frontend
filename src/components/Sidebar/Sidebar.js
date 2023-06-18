import React from "react";
import { Logo } from "../Logo/Logo";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { RiHistoryLine } from "react-icons/ri";
import { GrContact, GrStatusInfo } from "react-icons/gr";
import { FaHireAHelper } from "react-icons/fa";

export const Sidebar = () => {
  return (
    <>
      <Link to={"/"} className="navbar-brand">
        <Logo />
      </Link>
      <nav className="w-100 h-75 mt-5">
        <LinkTemplate url="/" icon={RxDashboard} linkText="Dashboard" />
        <LinkTemplate
          url="/previous-weather"
          icon={RiHistoryLine}
          linkText="Previous Data"
        />
        <LinkTemplate
          url="/contact-me"
          icon={GrContact}
          linkText="Contact Me"
        />
        <LinkTemplate
          url="/about"
          icon={GrStatusInfo}
          linkText="Developer Info"
        />
      </nav>
      <LinkTemplate
        absUrl="https://api.whatsapp.com/send/?phone=%2B8801521407975"
        icon={FaHireAHelper}
        linkText="Hire Me"
      />
    </>
  );
};

const LinkTemplate = ({ url, absUrl, linkText, icon: LinkIcon }) => {
  console.log(absUrl);
  return (
    <Link
      to={url ? url : absUrl}
      target={absUrl === undefined ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className="nav-link d-flex align-items-center py-3"
    >
      <LinkIcon className="mx-3" style={{ width: "20px", height: "20px" }} />
      <h6 className="font-weight-bold p-0 m-0">{linkText}</h6>
    </Link>
  );
};
