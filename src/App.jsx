import "./App.scss";
import Nav from "./Component/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import News from "./Pages/News/News";
import Shop from "./Pages/Shop/Shop";
import Logo from "./Component/Logo/Logo";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Logo />
            <Nav />
            <Home />
          </>
        }
      />
      <Route
        path="/about"
        element={
          <>
            <Logo />
            <Nav />
            <About />
          </>
        }
      />
      <Route
        path="/news"
        element={
          <>
            {" "}
            <Logo />
            <Nav />
            <News />
          </>
        }
      />
      <Route
        path="/shop"
        element={
          <>
            {" "}
            <Logo />
            <Nav />
            <Shop />
          </>
        }
      />
    </Routes>
  );
};

export default App;
