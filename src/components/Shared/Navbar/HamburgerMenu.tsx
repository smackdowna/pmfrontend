import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ICONS } from "../../../assets";

const HamburgerMenu = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const closestDropdown = event.target.closest(".hamburgerMenu");
      if (isHamburgerOpen && closestDropdown === null) {
        setIsHamburgerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isHamburgerOpen]);

  const sidebarLinks = [
    {
      label: "3-4 yrs",
      path: "/all-products",
    },
    {
      label: "5-6 yrs",
      path: "/all-products",
    },
    {
      label: "7-8 yrs",
      path: "/all-products",
    },
  ];

  return (
    <div className="relative hamburgerMenu block lg:hidden">
      <img
        onClick={toggleHamburgerMenu}
        src={ICONS.hamburgerMenu}
        alt="menu-icon"
        className="size-6 cursor-pointer"
      />

      {/* Background Overlay */}
      <div
        onClick={toggleHamburgerMenu}
        className={`fixed inset-0 bg-black z-50 transition-opacity duration-300 ${
          isHamburgerOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      {/* Side Menu */}
      <div
        className={`fixed inset-y-0 left-0 z-50 bg-white w-[330px] overflow-y-auto h-screen transition-all duration-300 transform ${
          isHamburgerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link to={"/"} className="">Hi</Link>
      </div>
    </div>
  );
};

export default HamburgerMenu;
