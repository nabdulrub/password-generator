import styled from "styled-components";

const CheckBox = styled.input`
  color: var(--accent-clr);
  width: 16px;
  height: 16px;
  background-color: var(--background-clr);
  cursor: pointer;
  border-radius: 0;
  position: relative;
  -webkit-appearance: none;
  &:checked {
    accent-color: var(--accent-clr);
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
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 2px;
    left: 5px;
  }
`;

const OptionCheckbox = ({ checkboxName, checked }) => {
  return (
    <div className="flex gap-4 text-text-clr items-center">
      <CheckBox type="checkbox" defaultChecked={checked} />
      <span className="checkmark"></span>
      <h2>{checkboxName}</h2>
    </div>
  );
};

export default OptionCheckbox;
