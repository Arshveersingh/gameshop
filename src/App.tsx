import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routing/routes";
import "../src/fonts/fonts.css";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
