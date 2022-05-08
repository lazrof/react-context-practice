import { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { GlobalContextProvider } from "./store";
import BookList from "./components/booksList";
import Home from "./components/home";
import ThemeToggle from "./components/themeToggle";
import Container from "./components/container";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

// export const globalContext = createContext();

// const GlobalContextProvider = (props) => {
//   // this state will be shared with all components
//   //const [userDetails, setUserDetails] = useState();

//   return (
//     // this is the provider providing state
//     <globalContext.Provider value={[{ name: "nunzio" }]}>
//       {props.children}
//     </globalContext.Provider>
//   );
// };

export default function App() {
  return (
    <GlobalContextProvider>
      <Router>
        <Container isFluid={true}>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/books">Books</Link>
                </li>
                <li>
                  <ThemeToggle />
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/books">
                <BookList />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Container>
      </Router>
    </GlobalContextProvider>
  );
}

// function Home() {
//   return (
//     <>
//       <div className="container">
//         <h2>Home</h2>
//       </div>
//     </>
//   );
// }
