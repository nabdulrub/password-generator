import styled from "styled-components";

// Container to flex & gap all checkbox options
export const CheckboxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

// Checkbox styling
export const CheckBox = styled.input`
  color: var(--accent-clr);
  width: 16px;
  height: 16px;
  background-color: var(--background-clr);
  cursor: pointer;
  border-radius: 0;
  position: relative;
  -webkit-appearance: none;
  border: 2px solid white;
  transition: border 0.3s;
  &:hover {
    border: 2px solid var(--accent-clr);
  }
  &:checked {
    accent-color: var(--accent-clr);
    border: none;
  }
  &:checked::before {
    background-color: red;
  }
  &:checked::before {
    content: "";
    display: block;
    position: absolute;
    width: 16px;
    height: 16px;
    top: 0;
    left: 0;
    background-color: var(--accent-clr);
    padding: 1px;
  }
  &:checked::after {
    content: "";
    display: block;
    width: 5px;
    height: 10px;
    border: solid var(--background-clr);
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 2px;
    left: 5px;
  }
`;

// Length Slider
export const Slider = styled.input`
  width: 100%;
  font-weight: 900;
  -webkit-appearance: none;
  height: 0.5rem;
  background-color: var(--background-clr);
  opacity: 0.7;
  transition: all 0.3s;
  &:hover {
    opacity: 1;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 25px;
    background: white;
    border-radius: 2px;
    outline: none;
    cursor: pointer;
  }
  &::-webkit-slider-thumb:hover {
    background: var(--background-clr);
    outline: 2px solid var(--accent-clr);
  }
  &::-moz-range-thumb {
    -webkit-appearance: none;
    width: 25px;
    height: 25px;
    background: red;
  }
  &::-moz-range-track {
    width: 100%;
    height: 0.5rem;
    cursor: pointer;
    box-shadow:
      1px 1px 1px #000000,
      0px 0px 1px #0d0d0d;
    background: var(--accent-clr);
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  &::-ms-track {
    width: 100%;
    height: 0.5rem;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
  }
`;

// Password Copied Alert
export const CopiedMessage = styled.span`
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

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
