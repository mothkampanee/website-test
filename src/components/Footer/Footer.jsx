import { CiPhone, CiMail, CiChat1 } from "react-icons/ci";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer className="flex flex-wrap justify-around gap-7 border-t py-5 md:py-10">
      <div className="flex flex-col items-center md:items-start">
        <h1 className="font-bold text-3xl">{t("Address")}</h1>
        <p className="text-base">
          {t("Lat Krabang")}, {t("Bangkok")} 10520
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8">
        <a href="tel:+66909909012" class="btn-contact-us">
          <CiPhone className="rotate-180 size-6" />
          <p>090-990-9012</p>
        </a>

        <a href="mailto:kampanee.moth@gmail.com" className="btn-contact-us">
          <CiMail className="size-6" />
          <p className="text-base">kampanee.moth@gmail.com</p>
        </a>

        <a href="https://line.me/ti/p/xyKNLfwxB1" className="btn-contact-us">
          <CiChat1 className="size-6" />
          <p>090-990-9012</p>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
