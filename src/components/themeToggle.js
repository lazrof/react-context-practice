import { useContext } from "react";
import { globalContext } from "../store";

function ThemeToggle() {
  const [obj, actions] = useContext(globalContext);

  return (
    <>
      {obj.theme}
      <button onClick={actions.toggleTheme}>toggle theme</button>
    </>
  );
}

export default ThemeToggle;
