import "./App.css";
import "react-dropdown/style.css";
import { useEffect, useState } from "react";
import CDropdown from "./components/dropdown";

const defaultOptions = [
  { value: "apple", label: "Apple" },
  { value: "burger", label: "Burger" },
  { value: "juice", label: "Juice" },
  { value: "frankie", label: "Frankie" },
  { value: "soup", label: "Soup" },
];

function App() {
  const [mondayValue, setMondayValue] = useState("");
  const [tuesdayValue, setTuesdayValue] = useState("");
  const [wednesdayValue, setWednesdayValue] = useState("");

  const [options, setOptions] = useState(defaultOptions);

  useEffect(() => {
    if (mondayValue || tuesdayValue || wednesdayValue) {
      const filteredArray = defaultOptions.filter(
        (item) =>
          !(
            item.label === mondayValue ||
            item.label === tuesdayValue ||
            item.label === wednesdayValue
          )
      );
      setOptions([...filteredArray]);
    }
  }, [mondayValue, tuesdayValue, wednesdayValue]);

  return (
    <div className="MainContainer">
      <CDropdown
        label="Monday"
        className="DropdownStyle"
        options={options}
        value={mondayValue}
        placeholder="Select an option"
        onChange={(e) => setMondayValue(e.label)}
      />
      <CDropdown
        label="Tuesday"
        className="DropdownStyle"
        options={options}
        value={tuesdayValue}
        onChange={(e) => setTuesdayValue(e.label)}
        placeholder="Select an option"
      />
      <CDropdown
        label="Wednesday"
        className="DropdownStyle"
        options={options}
        value={wednesdayValue}
        onChange={(e) => setWednesdayValue(e.label)}
        placeholder="Select an option"
      />
    </div>
  );
}

export default App;
