import { useContext } from "react";
import { globalContext } from "../store";

function BooksList() {
  const [obj, actions] = useContext(globalContext);
  console.log(actions.toggleTheme);
  return (
    <div>
      <h4>BooksList</h4>
      {obj.theme}

      <button onClick={actions.toggleTheme}>toggle theme</button>
    </div>
  );
}

export default BooksList;
