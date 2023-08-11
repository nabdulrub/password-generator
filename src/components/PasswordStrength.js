import React, { useEffect, useState } from "react";
import { checkBoxes } from "../data/checkBoxData";

const PasswordStrength = ({ length }) => {
  const [strengthColor, setStrengthColor] = useState("");

  const calculateStrength = () => {
    if (length <= 3) return "Weak";
    if (length <= 8) return "Medium";
    if (length <= 15) return "Good";
    if (length >= 15) return "Strong";

    return length;
  };

  const changeColor = () => {
    if (length < 3) return setStrengthColor("border-red-500 bg-red-500");
    if (length <= 8) return setStrengthColor("border-yellow-500 bg-yellow-500");
    if (length <= 15)
      return setStrengthColor("border-orange-500 bg-orange-500");
    if (length >= 15) return setStrengthColor("border-green-500 bg-green-500");
  };

  const strengthLevel = calculateStrength();

  useEffect(() => {
    changeColor();
  }, [length]);

  return (
    <div className="flex justify-between items-center bg-background-clr px-6 py-4">
      <h2 className="text-title-clr uppercase">Strength</h2>
      <div className="flex gap-4 items-center justify-center text-text-clr">
        <h3 className="uppercase font-bold">{strengthLevel}</h3>
        <div className="flex gap-2 items-center justify-center">
          <span className={`w-[10px] h-[30px] border-2 ${strengthColor}`} />
          <span
            className={`w-[10px] h-[30px] border-2 ${
              length > 3 || length > 8
                ? `${strengthColor}`
                : "border-white bg-transparent"
            }`}
          />
          <span
            className={`w-[10px] h-[30px] border-2 ${
              length > 8 || length > 15
                ? `${strengthColor}`
                : "border-white bg-transparent"
            }`}
          />
          <span
            className={`w-[10px] h-[30px] border-2 ${
              length > 15 ? `${strengthColor}` : "border-white bg-transparent"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default PasswordStrength;
