import { createContext, useState } from "react";

const globalContext = createContext();

const GlobalContextProvider = (props) => {
  // this state will be shared with all components
  const [store, setStore] = useState({ theme: "light" });

  function toggleTheme() {
    if (store.theme === "light") {
      setStore({ theme: "dark" });
    } else {
      setStore({ theme: "light" });
    }
  }

  const actions = {
    toggleTheme
  };

  return (
    // this is the provider providing state
    <globalContext.Provider value={[store, actions]}>
      {props.children}
    </globalContext.Provider>
  );
};

export { globalContext, GlobalContextProvider };
