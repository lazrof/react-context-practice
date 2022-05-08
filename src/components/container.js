import { useContext, useState } from "react";
import { globalContext } from "../store";

function Container(props) {
  const [obj, actions] = useContext(globalContext);

  let isFluid = props.isFluid === true ? "-fluid" : "";
  let bgClass = `bg-${obj.theme}`;
  let textClass = obj.theme === "dark" ? "text-light" : "text-dark";

  let containerClass = `container${isFluid} ${bgClass} ${textClass}`;

  return (
    <>
      <div class={containerClass}>{props.children}</div>
    </>
  );
}

export default Container;
