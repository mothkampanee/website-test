import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  CiHome,
  CiChat2,
  CiMap,
  CiCircleList,
  CiBookmarkPlus,
} from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";

function Sidebar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const isContactPage =
    location.pathname === "/contact" ||
    location.pathname === "/contact/create-contact";

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          const mapUrl = `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

          window.open(mapUrl, "_blank");
        },
        (error) => {
          console.error("Error getting location:", error);
          const fallbackUrl =
            "https://www.google.com/maps/place/Phunsin+Thani+2+Village,+Khlong+Song+Ton+Nun,+Lat+Krabang,+Bangkok+10520/@13.7678914,100.7085983,15z";
          window.open(fallbackUrl, "_blank");
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div
      className={`w-64 min-h-[calc(100dvh-237.6px)] fixed px-4 py-2 border-r bg-white ${
        isContactPage ? "h-full" : ""
      }`}
    >
      <ul className="mt-3 font-bold">
        <li
          className={`mb-2 py-2 rounded hover:bg-[#f1f1f1] ${
            location.pathname === "/" && "bg-[#f1f1f1]"
          }`}
        >
          <Link to="/" className="flex justify-start items-center gap-2 px-3">
            <CiHome />
            {t("Home")}
          </Link>
        </li>

        <li
          className={`mb-2 py-2 rounded hover:bg-[#f1f1f1] ${
            isContactPage ? "bg-[#f1f1f1]" : ""
          }`}
        >
          <button
            onClick={toggleDropdown}
            className="flex justify-start items-center gap-2 px-3 w-full"
          >
            <CiChat2 />
            {t("Contact")}
            {dropdownOpen ? (
              <RiArrowDropDownLine className="ml-auto rotate-180" />
            ) : (
              <RiArrowDropDownLine className="ml-auto" />
            )}
          </button>
        </li>

        {(dropdownOpen || isContactPage) && (
          <ul className="ml-8 mt-2">
            <li
              className={`mb-2 py-2 rounded hover:bg-[#f1f1f1] ${
                location.pathname === "/contact" && "bg-[#f1f1f1]"
              }`}
            >
              <Link
                to="/contact"
                className="flex justify-start items-center gap-2 px-3"
              >
                <CiCircleList />
                {t("List")}
              </Link>
            </li>
            <li
              className={`mb-2 py-2 rounded hover:bg-[#f1f1f1] ${
                location.pathname === "/contact/create-contact" &&
                "bg-[#f1f1f1]"
              }`}
            >
              <Link
                to="/contact/create-contact"
                className="flex justify-start items-center gap-2 px-3"
              >
                <CiBookmarkPlus />
                {t("Create")}
              </Link>
            </li>
          </ul>
        )}

        <li className="mb-2 py-2 rounded hover:bg-[#f1f1f1]">
          <button
            onClick={getCurrentLocation}
            className="flex justify-start items-center gap-2 px-3 w-full"
          >
            <CiMap />
            {t("Current Location")}
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
