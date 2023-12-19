import Logo from "./Logo";
import "../styles/styles-components/Navbar.css";

function Navbar() {
  return (
    <div className="check-navbar">
      <Logo />
      <div className="check-navbar-inputs">
        <input placeholder="Look for your Fly" />
        <input placeholder="Look for your Information" />
      </div>
      {/* <div className="check-navbar-inputs"></div> */}
      <button className="check-navbar-button">Search</button>
    </div>
  );
}

export default Navbar;
