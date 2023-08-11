import styled from "styled-components";
import { CheckBox } from "./ReusableTags";

const OptionCheckbox = ({ checkboxName, checked, ...props }) => {
  return (
    <div {...props} className="flex gap-4 text-text-clr items-center">
      <CheckBox type="checkbox" defaultChecked={checked} />
      <span className="checkmark"></span>
      <h2>{checkboxName}</h2>
    </div>
  );
};

export default OptionCheckbox;
