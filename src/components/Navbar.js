import Logo from "./Logo";
import "../styles/styles-components/Navbar.css";
import { FaSearchPlus } from "react-icons/fa";

function Navbar() {
  return (
    <div className="check-navbar">
      <Logo />
      {/* <details>
        <summary>
          <FaSearchPlus color="white" size="35px" />
        </summary>
        <div className="check-navbar-inputs">
          <input placeholder="Look for your Fly" />
          <input placeholder="Look for your Information" />
          <button className="check-navbar-button">Search</button>
        </div>
      </details> */}
    </div>
  );
}

export default Navbar;
