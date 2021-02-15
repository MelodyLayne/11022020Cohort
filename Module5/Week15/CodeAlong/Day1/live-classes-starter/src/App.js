import { NavLink, Route } from "react-router-dom";
import Parent from "./components/Parent";

function App() {
  return (
    <>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/away">
        Away
      </NavLink>
      <Route path="/" exact>
        <Parent />
      </Route>
      <Route path="/away">
        <h1>Hello from away!</h1>
      </Route>
    </>
  );
}

export default App;
