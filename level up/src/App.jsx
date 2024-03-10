import { Outlet } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Header from "./components/header";
import HomeImage from "./components/homeImage";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
