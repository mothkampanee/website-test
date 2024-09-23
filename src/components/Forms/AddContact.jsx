import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../core/config.mjs";

function AddContact({ onContactCreated }) {
  const { t } = useTranslation();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!firstname) {
      setError("Please enter your first name.");
      return;
    }
    if (!lastname) {
      setError("Please enter your last name.");
      return;
    }
    if (!age) {
      setError("Please enter your age.");
      return;
    }

    setError("");

    try {
      const response = await axios.post(`${API_URL}/contacts`, {
        firstname,
        lastname,
        age,
      });

      if (response.data) {
        onContactCreated();
      }
    } catch {
      setError("an unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="container mx-auto w-96 border rounded-xl px-7 py-10">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <div>
            <label htmlFor="" className="input-label">
              {t("firstname")}
            </label>
            <input
              type="text"
              className="input-box"
              value={firstname}
              onChange={(event) => setFirstname(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="" className="input-label">
              {t("lastname")}
            </label>
            <input
              type="text"
              className="input-box"
              value={lastname}
              onChange={(event) => setLastname(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="" className="input-label">
              {t("age")}
            </label>
            <input
              type="number"
              className="input-box"
              value={age}
              onChange={(event) => setAge(event.target.value)}
            />
          </div>
        </div>

        {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

        <div className="flex justify-between py-6 px-4">
          <button
            type="button"
            className="btn-secondary"
            onClick={() => {
              navigate("/contact");
            }}
          >
            {t("Cancel")}
          </button>
          <button type="submit" className="btn-primary">
            {t("Create")}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddContact;
