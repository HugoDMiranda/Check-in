import Logo from "./Logo";

function Navbar() {
  return (
    <div className="check-navbar">
      <Logo />
      <div className="check-navbar-inputs">
        <input placeholder="Look for your Fly" />
      </div>
      <div className="check-navbar-inputs">
        <input placeholder="Look for your Information" />
      </div>
      <button className="check-navbar-button">Search</button>
    </div>
  );
}

export default Navbar;
