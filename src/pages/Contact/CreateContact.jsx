import AddContact from "../../components/Forms/AddContact";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function CreateContact() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleContactCreated = () => {
    navigate("/contact", {
      state: { message: "Contact created successfully", type: "create" },
    });
  };

  return (
    <section className="flex">
      <div className="hidden w-64 lg:block">
        <Sidebar />
      </div>

      <div className="flex-grow flex flex-col justify-center items-center gap-4 px-4 lg:px-8">
        <h1 className="font-bold text-center md:text-3xl">
          {t("Contact Form")}
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-2">
          <AddContact onContactCreated={handleContactCreated} />
        </div>
      </div>
    </section>
  );
}

export default CreateContact;
