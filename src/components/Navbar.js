import "../css/Navbar.css";
import logo from "../logo.svg";

function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <div>
          <img src={logo} alt="logo" width="50px" height="50px" />
        </div>
        <div>
          <ul className="menu text-red-600">
            <li>Name</li>
            <li>Profile</li>
            <li>Settings</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// Very important!!!
export default Navbar;
