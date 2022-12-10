import { useState, createContext } from "react";

export const GlobalContext = createContext();

// GlobalContext.Provider
// GlobalContext.Consumer

function GlobalProvider(props) {
  const [theme, setTheme] = useState('light')
  // atrybut value jest to atrybut ktory jest wymagany przy Providerze. W nim przekazujemy globalny stan aplikacji

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  // Zrob obsluge zmiennej theme w taki sposob, ze jesli theme jest ustawione na dark, zmien tlo na ciemne i tekst na bialy w Headerze i Footerze


  const globalState = {
    headerText: 'Jakis tekst',
    footerText: 'Tekst w footera',
    theme,
    changeTheme
  }

  return (
    <GlobalContext.Provider value={globalState}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider