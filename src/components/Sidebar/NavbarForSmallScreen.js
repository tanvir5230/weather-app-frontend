import { NavItemTemplate } from "./NavItemTemplate";
import { RxDashboard } from "react-icons/rx";
import { RiHistoryLine } from "react-icons/ri";
import { GrContact, GrStatusInfo } from "react-icons/gr";
import { FaHireAHelper } from "react-icons/fa";

export const NavbarForSmallScreen = () => {
  return (
    <>
      <nav
        className="d-flex justify-content-around text-center w-100 bg-white"
        style={{
          borderTop: "5px solid orange",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      >
        <NavItemTemplate
          url="/previous-weather"
          icon={RiHistoryLine}
          linkText="Previous"
        />
        <NavItemTemplate
          url="/contact-me"
          icon={GrContact}
          linkText="Contact"
        />
        <NavItemTemplate url="/" icon={RxDashboard} linkText="Home" />
        <NavItemTemplate
          url="/about"
          icon={GrStatusInfo}
          linkText="Developer"
        />
        <NavItemTemplate
          absUrl="https://api.whatsapp.com/send/?phone=%2B8801521407975"
          icon={FaHireAHelper}
          linkText="Hire"
        />
      </nav>
    </>
  );
};
