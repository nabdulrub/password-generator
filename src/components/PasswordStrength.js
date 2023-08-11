import React, { useState } from "react";

const PasswordStrength = () => {
  const [borderColor, setBorderColor] = useState("border-white");
  

  return (
    <>
      <div className="flex justify-between items-center bg-background-clr px-6 py-4">
        <h2 className="text-title-clr uppercase">Strength</h2>
        <div className="flex gap-4 items-center justify-center text-text-clr">
          <h3 className="uppercase font-bold">Medium</h3>
          <div className="flex gap-2 items-center justify-center">
            <span className="w-[10px] h-[30px] border-strength-clr border-2 bg-strength-clr"></span>
            <span className="w-[10px] h-[30px] border-white border-2 bg-transparent"></span>
            <span className="w-[10px] h-[30px] border-white border-2 bg-transparent"></span>
            <span className="w-[10px] h-[30px] border-white border-2 bg-transparent"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordStrength;
