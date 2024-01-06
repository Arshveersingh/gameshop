import { RouterProvider } from "react-router-dom";
import "../src/fonts/fonts.css";
import "./App.css";
import router from "./routing/routes";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
