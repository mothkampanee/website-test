import { useContext, useState } from "react";
import { MdLanguage } from "react-icons/md";
import { useTranslation } from "react-i18next";
import ProfileImageContext from "../../contexts/ProfileImageContext";

function Info() {
  const { image, handleImageChange } = useContext(ProfileImageContext);

  const [changeLang, setChangeLang] = useState(true);

  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    if (changeLang) {
      i18n.changeLanguage("th");
    } else {
      i18n.changeLanguage("en");
    }
    setChangeLang(!changeLang);
  };

  return (
    <section className="">
      <div className="flex items-center gap-3">
        <label htmlFor="profileImage" className="cursor-pointer">
          <img
            src={image || "https://placehold.co/48x48"}
            alt="image-profile"
            className="size-12 rounded-full object-cover"
          />
        </label>

        <input
          id="profileImage"
          type="file"
          className="hidden"
          onChange={(event) => handleImageChange(event.target.files[0])}
        />

        <div className="flex flex-col items-center gap-1">
          <p className="text-sm font-medium">Kampanee Cheewanpisalnukul</p>

          <button
            onClick={toggleLanguage}
            className="text-sm text-slate-700 flex items-center gap-1 bg-[#f1f1f1] rounded-full px-2"
          >
            {changeLang ? "English" : "Thailand"}
            <MdLanguage />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Info;
