import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import styled from "styled-components";
import { CopiedMessage } from "./ReusableTags";
import { copyToClipboard } from "../functions/CopyText";

const GeneratedPassword = ({ generatedPassword, $display }) => {
  const [copied, setCopied] = useState(false);

  const copyText = () => {
    copyToClipboard(generatedPassword, setCopied);
  };

  return (
    <div className="px-5 py-3 bg-container-clr flex items-center justify-between w-full relative">
      <h1 className="text-text-clr font-semibold text-2xl">
        {generatedPassword}
      </h1>
      <FaRegCopy
        size={20}
        className="text-accent-clr hover:text-text-clr transition-all duration-300 cursor-pointer"
        onClick={copyText}
      />
      <CopiedMessage $display={copied}>Copied</CopiedMessage>
    </div>
  );
};

export default GeneratedPassword;
