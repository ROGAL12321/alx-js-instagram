import { useContext } from "react";
import { Link } from "react-router-dom";

import { GlobalContext } from "contexts/global";

import './Footer.css';

function Footer() {
  const globalState = useContext(GlobalContext)

  return (
    <footer
      className={`footer ${globalState.theme === 'dark' ? 'footer-dark' : ''}`}
    >
      Instagram App - Footer

      <nav>
        <ul>
          <li>
            <Link to="/">
              Strona Glowna
            </Link>
          </li>
          <li>
            <Link to="/add">
              Add new message
            </Link>
          </li>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
          <li>
            <Link to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register">
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer;