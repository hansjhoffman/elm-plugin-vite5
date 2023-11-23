import { Elm } from "./Main.elm";
import "./globals.css";

const app = Elm.Main.init({
  node: document.querySelector<HTMLDivElement>("#root"),
  flags: null,
});

//app.ports.interopFromElm.subscribe((_fromElm) => {});

// app.ports.interopFromElm.unsubscribe((_fromElm) => {});
