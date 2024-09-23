import { createContext, useState } from "react";

const ProfileImageContext = createContext();

export const ProfileImageProvider = ({ children }) => {
  const [image, setImage] = useState("");

  const handleImageChange = (file) => {
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <ProfileImageContext.Provider value={{ image, handleImageChange }}>
      {children}
    </ProfileImageContext.Provider>
  );
};

export default ProfileImageContext;
