import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import SearchBar from "../../components/SearchBar/SearchBar";
import ContactList from "../../components/Cards/ContactList";
import Sidebar from "../../components/Sidebar/Sidebar";
import Toast from "../../components/ToastMessage/Toast";
import { API_URL } from "../../core/config.mjs";

function Contact() {
  const { t } = useTranslation();
  const location = useLocation();

  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);

  const [showToastMsg, setShowToastMsg] = useState({
    isShow: false,
    message: "",
    type: "create",
  });

  const [isSearch, setIsSearch] = useState(false);

  const getAllContacts = async () => {
    try {
      const response = await axios.get(`${API_URL}/contacts`);
      if (response.data) {
        setContacts(response.data);
      }
    } catch (error) {
      showToastMessage(
        "Failed to load contacts. Please try again later.",
        "error"
      );
    }
  };

  const deleteContact = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/contacts/${id}`);
      if (response.data) {
        showToastMessage("Contact deleted successfully", "delete");
        getAllContacts();
      } else {
        showToastMessage("Failed to delete contact");
      }
    } catch (error) {
      showToastMessage(
        "An unexpected error occurred. Please try again.",
        "error"
      );
    }
  };

  const showToastMessage = (message, type) => {
    setShowToastMsg({
      isShow: true,
      message,
      type,
    });
  };

  const handleCloseToast = () => {
    setShowToastMsg({
      isShow: false,
      message: "",
    });
  };

  const handleSearch = (query) => {
    if (query.length >= 3) {
      const lowerQuery = query.toLowerCase();
      const filtered = contacts.filter(
        (contact) =>
          contact.firstname.toLowerCase().includes(lowerQuery) ||
          contact.lastname.toLowerCase().includes(lowerQuery)
      );
      setFilteredContacts(filtered);
      setIsSearch(true);
    } else {
      setFilteredContacts([]);
      setIsSearch(false);
    }
  };

  const handleClearSearch = () => {
    setFilteredContacts([]);
    setIsSearch(false);
  };

  useEffect(() => {
    getAllContacts();
    if (location.state && location.state.message) {
      showToastMessage(location.state.message, location.state.type);
    }
  }, [location.state]);

  return (
    <section className="flex">
      <div className="hidden w-64 lg:block">
        <Sidebar />
      </div>

      <div className="flex-grow flex flex-col justify-center items-center gap-4 px-4 lg:px-8">
        <h1 className="font-bold text-center md:text-3xl">
          {t("Contact List")}
        </h1>

        <div className="flex flex-wrap justify-center gap-2">
          <SearchBar onSearch={handleSearch} onClear={handleClearSearch} />

          <Link
            to="/contact/create-contact"
            className="w-full flex justify-center gap-1 py-3 px-4 border rounded-xl lg:w-fit"
          >
            <CiCirclePlus className="size-6" />
            {t("Create Contact")}
          </Link>
        </div>

        <ContactList
          contacts={contacts}
          filteredContacts={filteredContacts}
          onDelete={deleteContact}
          isSearch={isSearch}
        />
      </div>

      <Toast
        isShow={showToastMsg.isShow}
        message={showToastMsg.message}
        type={showToastMsg.type}
        onClose={handleCloseToast}
      />
    </section>
  );
}

export default Contact;
