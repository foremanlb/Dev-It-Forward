import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/profile">
        <button>Profile</button>
      </Link>
    </div>
  );
}

export default Navbar;
