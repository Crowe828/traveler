import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  // Setting state so nav menu default is not open
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // Showing the button only on certain screen sizes
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  });

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar--container">
          {/* Title and logo */}
          <Link to="/" className="navbar--logo" onClick={closeMobileMenu}>
            TRAVELER <i className="fab fa-typo3" />
          </Link>
          {/* Nav menu button */}
          <div className="menu--icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav--menu active" : "nav--menu"}>
            <li className="nav--item">
              {/* Links to other pages */}
              <Link to="/" className="nav--links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav--item">
              <Link
                to="/services"
                className="nav--links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav--item">
              <Link
                to="/products"
                className="nav--links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav--item">
              <Link
                to="/signup"
                className="nav--links--mobile"
                onClick={closeMobileMenu}
              >
                Join
              </Link>
            </li>
          </ul>
          {/* Join Traveler */}
          {button && <Button buttonStyle="btn--outline">JOIN</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
