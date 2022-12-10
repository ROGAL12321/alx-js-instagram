import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom'

import { GlobalContext } from "contexts/global";

import Footer from "components/sections/Footer/Footer"
import Header from "components/sections/Header/Header"

import './MainTemplate.css';


function MainTemplate (props) {
  const globalState = useContext(GlobalContext)
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // To sa warunki, kiedy uzytkownik jest niezalogowany i wchodzi na strone niedozwolona

    // if loading === false && user
      // OK
    // if loading === false && if not user
      // Redirect (/login)

    if(!globalState.loading
      && !globalState.user
      && (location.pathname !== '/login' || location.pathname !== '/register')
    ) {
      navigate('/login')
    }

    if(!globalState.loading
      && globalState.user
      && (location.pathname === '/login' || location.pathname === '/register')
    ) {
      navigate('/')
    }


    // Zadanie na teraz:

    // 1. Jesli uzytkownik jest zalogowany to usun z headera 2 linki: login i register
    // 2. Jesli uzytkownik jest zalogowany i sprobuje wejsc na podstrone login lub register za pomoca przegladarki, to przekieruj go na strone glowna



  }, [globalState.loading, globalState.user])


  return (
    <div className="main-template">
      <Header logo="Instagram App"/>
      {props.children}
      <Footer />
    </div>
  )
}

export default MainTemplate

// Zadanie dla was
// 1. Sprawdz czy to dziala
// 2. Uzyj templatki na wszystkich podstronach
// 3. Do templatki wrzuc komponent WelcomeMessage

// Przerwa do 14