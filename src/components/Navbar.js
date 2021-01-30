import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to="/" className="navbar__logo">
            TRVL <i className="fab fa-typo3" />
          </Link>
          <div className="navbar__menuIcon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "navbar__menu active" : "navbar__menu"}>
            <li className="navbar__menuItem">
              <Link to="/" className="nabar__links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="navbar__menuItem">
              <Link
                to="/services"
                className="nabar__links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="navbar__menuItem">
              <Link
                to="/products"
                className="nabar__links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="navbar__menuItem">
              <Link
                to="/signup"
                className="nabar__linksMobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn__outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
