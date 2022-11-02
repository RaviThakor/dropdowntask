import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./styles.css";

const CDropdown = ({ label, ...props }) => {
  return (
    <div data-testid="dropdown-parent" className="DropdownDiv">
      <label data-testid="dropdown-label" className="DropdownTitle">
        {label}
      </label>
      <Dropdown {...props} />
    </div>
  );
};

export default CDropdown;
