import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { GlobalContext } from 'contexts/global'

import './Header.css'

function Header(props) {
  // uzywajac useContext, automatycznie jestem konsumentem danego contextu (Providera)
  const globalState = useContext(GlobalContext);

  console.log(globalState.headerText)

  // Stworz w globalnym stanie zmienna o nazwie footerText. Nastepnie odbierz jej wartosc w pliku Footer.js i wyswietl w konsoli


  return (
    <header className="header">
      <h1>{props.logo}</h1>
      <nav>
        <ul>
          <li>
            {/* komponent Link od react-router-dom, rozni sie tym, ze zamiast atrybutu href jest atrybut to */}
            <Link to="/add">
              Dodaj nowy post
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
    </header>
  )
}

export default Header;