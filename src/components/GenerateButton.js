import { BsArrowRightShort } from "react-icons/bs";

const GenerateButton = (props) => {
  return (
    <div
      {...props}
      className={`flex items-center justify-center cursor-pointer gap-2 text-accent-clr font-semibold border-2 border-accent-clr py-4 hover:bg-accent-clr hover:text-background-clr transition-all duration-300 ${props.className}`}
    >
      <h2>GENERATE</h2>
      <BsArrowRightShort size={20} />
    </div>
  );
};

export default GenerateButton;
