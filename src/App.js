import logo from "./logo.svg";
import "./App.css";
import GeneratedPassword from "./components/GeneratedPassword";
import CharacterSlider from "./components/CharacterSlider";
import OptionCheckbox from "./components/OptionCheckbox";
import { CheckboxContainer } from "./components/ReusableTags";
import PasswordStrength from "./components/PasswordStrength";
import GenerateButton from "./components/GenerateButton";
import { checkBoxes } from "./data/checkBoxData";
import { generatePassword } from "./functions/GeneratePassword";
import { useState } from "react";

function App() {
  const [password, setPassword] = useState("Generate Password");
  const [length, setLength] = useState(10);

  const generate = () => {
    setPassword("");

    const generatedPass = generatePassword(
      length,
      checkBoxes[0].checked,
      checkBoxes[1].checked,
      checkBoxes[2].checked,
      checkBoxes[3].checked
    );

    setPassword(generatedPass);
  };

  return (
    <div>
      <body className="flex flex-col items-center justify-center bg-background-clr gap-8 p-4">
        <h1 className="text-xl text-title-clr font-semibold">
          Password Generator
        </h1>

        <div className="w-full flex flex-col items-center max-w-[400px] gap-6 ">
          <GeneratedPassword generatedPassword={password} />
          <div className="w-full bg-container-clr p-5 flex flex-col gap-6">
            <CharacterSlider setLength={setLength} length={length} />
            <CheckboxContainer>
              {checkBoxes.map((box, idx) => (
                <OptionCheckbox
                  checkboxName={box.name}
                  key={idx}
                  checked={box.checked}
                  onChange={(e) => (box.checked = e.target.checked)}
                />
              ))}
            </CheckboxContainer>
            <PasswordStrength length={length} />
            <GenerateButton onClick={generate} />
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
