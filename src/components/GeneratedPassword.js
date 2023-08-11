import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import styled from "styled-components";

const CopiedMessage = styled.span`
  color: var(--background-clr);
  background-color: var(--accent-clr);
  padding: 6px;
  border-radius: 15px 15px 3px 15px;
  font-weight: 500;
  font-size: 0.8rem;
  position: absolute;
  left: -40px;
  top: -20px;
  display: ${(props) => (props.$display ? "flex" : "none")};
  opacity: 0;
  animation: fadeIn 0.5s ease-in-out forwards;
  display: ${(props) => (props.$display ? "flex" : "none")};

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const GeneratedPassword = ({ generatedPassword }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPassword);
    setCopied(true);

    // Hide the "Copied" message after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  return (
    <div className="px-5 py-3 bg-container-clr flex items-center justify-between w-full relative">
      <h1 className="text-text-clr font-semibold text-2xl">
        {generatedPassword}
      </h1>
      <FaRegCopy
        size={20}
        className="text-text-clr hover:text-accent-clr transition-all duration-300 cursor-pointer"
        onClick={copyToClipboard}
      />
      <CopiedMessage $display={copied}>Copied</CopiedMessage>
    </div>
  );
};

export default GeneratedPassword;
