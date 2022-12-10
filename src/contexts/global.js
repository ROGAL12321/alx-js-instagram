import { onAuthStateChanged } from "firebase/auth";
import { useState, createContext, useEffect } from "react";

import { auth } from "helpers/firebase";

export const GlobalContext = createContext();

// GlobalContext.Provider
// GlobalContext.Consumer

function GlobalProvider(props) {
  const [theme, setTheme] = useState('light')
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true);

  // useEffect wewnatrz Providera (Contextu) sluzy po to, zeby zaladowac na start rzeczy, ktore sa potrzebne dla calej aplikacji
  useEffect(() => {
    // metoda onAuthStateChanged jest to metoda z FB ktora sluzy do sprawdzania, czy uzytkownik jest zalogowany czy nie (czy sesja jest aktywna)
    onAuthStateChanged(auth, user => {
      setUser(user);
      setLoading(false);
    })
  }, [])


  // 1. Stworz strone o nazwie MyProfile i podlinkuj ja w headerze i footerze
  // 2. Wyswietl strone w headerze tylko wtedy, kiedy uzytkownik jest zalogowany
  // 3. Strona MyProfile ma ladowac formularz, ktory zawiera 2 pola "Name" i "avatar"
  // 4. Nastepnie za pomoca funkcji z FB o nazwie updateProfile (https://firebase.google.com/docs/auth/web/manage-users) dokonaj aktualizacji profilu
  // 5. Po udanej aktualizacji, przejdz na strone glowna
  // 6. Zrob obsluge wyswietlania avatara i displayName w headerze



  // atrybut value jest to atrybut ktory jest wymagany przy Providerze. W nim przekazujemy globalny stan aplikacji

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  // Zrob obsluge zmiennej theme w taki sposob, ze jesli theme jest ustawione na dark, zmien tlo na ciemne i tekst na bialy w Headerze i Footerze


  const globalState = {
    headerText: 'Jakis tekst',
    footerText: 'Tekst w footera',
    theme,
    changeTheme,
    user,
    setUser,
    loading
  }

  return (
    <GlobalContext.Provider value={globalState}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider