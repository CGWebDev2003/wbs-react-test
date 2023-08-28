import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


// function tick() {
//   const element = (
//     <div>
//       <h1>Hello World</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   root.render(element)
// }

// setInterval(tick, 1000)

function Welcome(props) {
  return <h1>Hellooooooo, {props.name}</h1>
}

const welc = <Welcome name="Colin" />

root.render(welc)