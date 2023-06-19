import React from "react";
import { Logo } from "../Logo/Logo";
import { Link } from "react-router-dom";
import { NavItemTemplate } from "./NavItemTemplate";

// Icons
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
        <NavItemTemplate url="/" icon={RxDashboard} linkText="Home" />
        <NavItemTemplate
          url="/previous-weather"
          icon={RiHistoryLine}
          linkText="Previous Data"
        />
        <NavItemTemplate
          url="/contact-me"
          icon={GrContact}
          linkText="Contact Me"
        />
        <NavItemTemplate
          url="/about"
          icon={GrStatusInfo}
          linkText="Developer Info"
        />
      </nav>
      <NavItemTemplate
        absUrl="https://api.whatsapp.com/send/?phone=%2B8801521407975"
        icon={FaHireAHelper}
        linkText="Hire Me"
      />
    </>
  );
};
