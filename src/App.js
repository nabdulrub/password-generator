import logo from "./logo.svg";
import "./App.css";
import GeneratedPassword from "./components/GeneratedPassword";
import CharacterSlider from "./components/CharacterSlider";
import OptionCheckbox from "./components/OptionCheckbox";
import { CheckboxContainer } from "./components/Containers";
import PasswordStrength from "./components/PasswordStrength";
import GenerateButton from "./components/GenerateButton";

const checkBoxes = [
  { name: "Include Uppercase Letters", checked: true },
  { name: "Include Lowercase Letters", checked: true },
  { name: "Include Numbers", checked: true },
  { name: "Include Symbols", checked: false },
];

function App() {
  return (
    <div>
      <body className="flex flex-col items-center justify-center bg-background-clr gap-8 p-4">
        <h1 className="text-xl text-title-clr font-semibold">
          Password Generator
        </h1>

        <div className="w-full flex flex-col items-center max-w-[400px] gap-6">
          <GeneratedPassword />
          <div className="w-full bg-container-clr p-5 flex flex-col gap-6">
            <CharacterSlider />
            <CheckboxContainer>
              {checkBoxes.map((box, idx) => (
                <OptionCheckbox
                  checkboxName={box.name}
                  key={idx}
                  checked={box.checked}
                />
              ))}
            </CheckboxContainer>
            <PasswordStrength />
            <GenerateButton />
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
