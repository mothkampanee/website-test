import { CiSearch, CiCircleRemove } from "react-icons/ci";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function SearchBar({ onSearch, onClear }) {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length >= 3) {
      onSearch(value);
    } else {
      onClear();
    }
  };

  const handleClear = () => {
    setQuery("");
    onClear();
  };

  return (
    <div className="w-full flex items-center px-4 bg-[#f1f1f1] rounded-xl lg:w-80 ">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder={t("Search Contacts")}
        className="w-full text-base bg-transparent py-[11px] outline-none"
      />
      {query ? (
        <CiCircleRemove
          className="size-8 text-slate-500 cursor-pointer hover:text-black"
          onClick={handleClear}
        />
      ) : (
        <CiSearch className="size-6 text-slate-500" />
      )}
    </div>
  );
}

export default SearchBar;
