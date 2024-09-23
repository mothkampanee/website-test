import { Link } from "react-router-dom";
import Info from "./Info";
import { CiMenuBurger } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";

function Navbar() {
  const { t } = useTranslation();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className="bg-white flex justify-between items-center px-6 py-6 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <CiMenuBurger
            onClick={toggleSidebar}
            className="block siez-6 lg:hidden cursor-pointer"
          />

          <Link to="/" className="flex items-center gap-4">
            <h1 className="font-bold text-3xl">{t("Logo")}</h1>
          </Link>
        </div>

        <Info />
      </nav>

      {sidebarOpen && (
        <div className="block lg:hidden">
          <Sidebar sidebarOpen={sidebarOpen} />
        </div>
      )}
    </>
  );
}

export default Navbar;
