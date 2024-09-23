import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      Logo: "Logo",
      Home: "Home",
      Contact: "Contact",
      List: "List",
      Create: "Create",
      "Current Location": "Current Location",
      Address: "Address",
      "Lat Krabang": "Lat Krabang",
      Bangkok: "Bangkok",
      "Contact List": "Contact List",
      "Search Contact": "Search Contact",
      "Contact Form": "Contact Form",
      firstname: "firstname",
      lastname: "lastname",
      age: "age",
      Cancel: "Cancel",
    },
  },
  th: {
    translation: {
      Logo: "โลโก้",
      Home: "โฮม",
      Contact: "ติดต่อ",
      List: "รายการ",
      Create: "สร้าง",
      "Current Location": "ตำแหน่งปัจจุบัน",
      Address: "ที่อยู่",
      "Lat Krabang": "ลาดกระบัง",
      Bangkok: "กรุงเทพฯ",
      "Contact List": "รายชื่อผู้ติดต่อ",
      "Search Contacts": "ค้นหาผู้ติดต่อ",
      "Contact Form": "แบบฟอร์มเพิ่มชื่อผู้ติดต่อ",
      firstname: "ชื่อ",
      lastname: "นามสกุล",
      age: "อายุ",
      Cancel: "ยกเลิก",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
