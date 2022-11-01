import "./App.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useEffect, useState } from "react";

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
      <div className="DropdownDiv">
        <label className="DropdownTitle">Monday</label>
        <Dropdown
          className="DropdownStyle"
          options={options}
          value={mondayValue}
          placeholder="Select an option"
          onChange={(e) => setMondayValue(e.label)}
        />
      </div>
      <div className="DropdownDiv">
        <label className="DropdownTitle">Tuesday</label>
        <Dropdown
          className="DropdownStyle"
          options={options}
          value={tuesdayValue}
          onChange={(e) => setTuesdayValue(e.label)}
          placeholder="Select an option"
        />
      </div>
      <div className="DropdownDiv">
        <label className="DropdownTitle">Wednesday</label>
        <Dropdown
          className="DropdownStyle"
          options={options}
          value={wednesdayValue}
          onChange={(e) => setWednesdayValue(e.label)}
          placeholder="Select an option"
        />
      </div>
    </div>
  );
}

export default App;
