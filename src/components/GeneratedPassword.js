import { FaRegCopy } from "react-icons/fa";

const GeneratedPassword = ({ generatedPassword }) => {
  generatedPassword = "PTx1f5DaFX";

  return (
    <>
      <div className="px-5 py-3 bg-container-clr flex items-center justify-between w-full">
        <h1 className="text-text-clr font-semibold text-2xl">
          {generatedPassword}
        </h1>
        <FaRegCopy
          size={20}
          className="text-text-clr hover:text-accent-clr transition-all duration-300 cursor-pointer"
          onClick={() => navigator.clipboard.writeText(generatedPassword)}
        />
      </div>
    </>
  );
};

export default GeneratedPassword;
