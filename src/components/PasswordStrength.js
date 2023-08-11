import React, { useState } from "react";
import { checkBoxes } from "../data/checkBoxData";

const PasswordStrength = () => {
  const [checkboxState, setCheckboxState] = useState({
    checkbox1: checkBoxes[0].checked,
    checkbox2: checkBoxes[0].checked,
    checkbox3: checkBoxes[0].checked,
    checkbox4: checkBoxes[0].checked,
  });

  const calculateStrength = () => {
    let strength = 0;

    if (checkboxState.checkbox1) strength++;
    if (checkboxState.checkbox2) strength++;
    if (checkboxState.checkbox3) strength++;
    if (checkboxState.checkbox4) strength++;

    if (strength === 0) return "Weak";
    if (strength === 1) return "Medium";
    if (strength >= 2) return "Strong";

    return strength;
  };

  const strengthLevel = calculateStrength();

  return (
    <div className="flex justify-between items-center bg-background-clr px-6 py-4">
      <h2 className="text-title-clr uppercase">Strength</h2>
      <div className="flex gap-4 items-center justify-center text-text-clr">
        <h3 className="uppercase font-bold">{strengthLevel}</h3>
        <div className="flex gap-2 items-center justify-center">
          {checkBoxes.map((checkbox, index) => (
            <span
              key={index}
              className={`w-[10px] h-[30px] border-2 ${
                checkboxState[`checkbox${index + 1}`]
                  ? "border-strength-clr bg-strength-clr"
                  : "border-white bg-transparent"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PasswordStrength;
