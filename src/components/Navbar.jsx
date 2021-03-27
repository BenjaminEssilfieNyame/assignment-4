import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav id="navbar">
        <div class="container navbar-inner">
          <div class="logo">
            <NavLink to="/">APPROVAL1</NavLink>
          </div>

          <ul class="links">
            <li>
              <NavLink to="/about">About us</NavLink>
            </li>
            <li>
              <NavLink to="/inventory">Inventory</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact us</NavLink>
            </li>
            <li>
              <NavLink to="/" className="btn-apply-dark">
                Apply now
              </NavLink>
            </li>
          </ul>

          <div class="hamburger" onclick="showMenu()">
            <i data-feather="menu"></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
