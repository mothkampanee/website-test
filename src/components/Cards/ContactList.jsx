import { RiArrowDropDownLine } from "react-icons/ri";
import { HiOutlineArchiveBoxXMark } from "react-icons/hi2";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import EmptyCard from "../EmptyCard/EmptyCard";

function ContactList({ contacts, filteredContacts, onDelete, isSearch }) {
  const { t } = useTranslation();

  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);

  const contactsToShow =
    filteredContacts.length > 0 ? filteredContacts : contacts;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedContacts = contactsToShow.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const totalPages = Math.ceil(contactsToShow.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredContacts]);

  return (
    <div className="container mx-auto py-6 flex flex-col justify-center items-center">
      {contactsToShow.length > 0 ? (
        <table className="table-auto w-full border-collapse lg:w-4/5">
          <thead>
            <tr>
              <th className="text-sm border px-4 py-2 md:text-base">
                {t("firstname")}
              </th>
              <th className="text-sm border px-4 py-2 md:text-base">
                {t("lastname")}
              </th>
              <th className="text-sm border px-4 py-2 md:text-base">
                {t("age")}
              </th>
              <th className="text-sm border px-4 py-2 md:text-base">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedContacts.map((contact) => (
              <tr
                key={contact.id}
                className="bg-white border-t hover:bg-[#f1f1f1] group"
              >
                <td className="border px-4 py-2 text-center">
                  {contact.firstname}
                </td>
                <td className="border px-4 py-2 text-center">
                  {contact.lastname}
                </td>
                <td className="border px-4 py-2 text-center">{contact.age}</td>
                <td className="border px-4 py-2">
                  <HiOutlineArchiveBoxXMark
                    onClick={() => onDelete(contact.id)}
                    className="text-gray-500 group-hover:block cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <EmptyCard
          message={
            isSearch
              ? "Oops! No contacts found matching your search."
              : "No contacts available."
          }
        />
      )}

      {contactsToShow.length > itemsPerPage && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 mx-1 border rounded-full ${
              currentPage === 1 ? "bg-[#f1f1f1]" : "bg-white"
            }`}
          >
            <RiArrowDropDownLine className="size-4 rotate-90" />
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`text-sm px-4 py-2 mx-1 border rounded-full ${
                currentPage === index + 1 ? "bg-[#f1f1f1]" : "bg-white"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 mx-1 border rounded-full ${
              currentPage === totalPages ? "bg-[#f1f1f1]" : "bg-white"
            }`}
          >
            <RiArrowDropDownLine className="size-4 -rotate-90" />
          </button>
        </div>
      )}
    </div>
  );
}

export default ContactList;
