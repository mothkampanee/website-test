import { FcAddImage, FcEditImage } from "react-icons/fc";
import { useContext } from "react";
import ProfileImageContext from "../../contexts/ProfileImageContext";

function ProfileInfo() {
  const { image, handleImageChange } = useContext(ProfileImageContext);

  const handleIconClick = () => {
    document.getElementById("profileImage").click();
  };

  return (
    <div className="flex flex-col justify-center items-center gap-8 py-6 px-4 border border-[#DCDFED] rounded-xl shadow-md w-full max-w-[350px]">
      {image ? (
        <div className="relative">
          <label htmlFor="profileImage" className="cursor-pointer">
            <img
              src={image}
              alt="image-profile"
              className="size-32 rounded-full object-cover"
            />
          </label>
          <FcEditImage
            className="size-8 cursor-pointer absolute bottom-0 right-0"
            onClick={handleIconClick}
          />
        </div>
      ) : (
        <>
          <FcAddImage
            className="size-32 cursor-pointer"
            onClick={handleIconClick}
          />
        </>
      )}

      <input
        id="profileImage"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(event) => handleImageChange(event.target.files[0])}
      />

      <p className="text-lg font-bold">Kampanee Cheewanpisalnukul</p>
    </div>
  );
}

export default ProfileInfo;
