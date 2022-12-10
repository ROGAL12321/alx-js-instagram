import { useContext } from 'react'
import { signOut } from 'firebase/auth'
import { Link } from 'react-router-dom'

import { auth } from 'helpers/firebase'

import { GlobalContext } from 'contexts/global'

import Button from 'components/atoms/Button/Button';

import './Header.css'


function Header(props) {
  // uzywajac useContext, automatycznie jestem konsumentem danego contextu (Providera)
  const globalState = useContext(GlobalContext);

  // Stworz w globalnym stanie zmienna o nazwie footerText. Nastepnie odbierz jej wartosc w pliku Footer.js i wyswietl w konsoli

  const handleLogout = () => {
    signOut(auth)
  }

  return (
    <header className={`header ${globalState.theme === 'dark' ? 'header-dark' : ''}`}>
      <h1>{props.logo}</h1>
      <Button
        text="Change Theme"
        onClick={globalState.changeTheme}
      />
      <nav>
        <ul>
          {
            globalState.user
              ?
                <li>
                  Hello {globalState.user.displayName}
                </li>
              : null
          }
          {
            globalState.user
              ?
                <img
                  src={globalState.user.photoURL}
                  alt="User Avatar"
                  style={{width: "50px", borderRadius: "20px"}}
                />
              : null
          }
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
          {
            globalState.user
              ? (
                <li>
                  <Link to="/myprofile">
                    Mój profil
                  </Link>
                </li>
              )
              : null
          }
          <li>
            <Link to="/register">
              Register
            </Link>
          </li>
          {
            globalState.user
              ? (
                <li>
                  <Button text="Wyloguj" onClick={handleLogout}/>
                </li>
              )
              : null
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header;