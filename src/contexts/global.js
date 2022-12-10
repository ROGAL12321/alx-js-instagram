import { createContext } from "react";

export const GlobalContext = createContext();

// GlobalContext.Provider
// GlobalContext.Consumer

function GlobalProvider(props) {
  // atrybut value jest to atrybut ktory jest wymagany przy Providerze. W nim przekazujemy globalny stan aplikacji
  const globalState = {
    headerText: 'Jakis tekst'
  }

  return (
    <GlobalContext.Provider value={globalState}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider