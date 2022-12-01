import "./App.scss";
import Nav from "./Component/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import News from "./Pages/News/News";
import Shop from "./Pages/Shop/Shop";

const App = () => {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <>
            <Nav />
            <Home />
          </>
        }
      />
      <Route
        path="/about"
        element={
          <>
            <Nav />
            <About />
          </>
        }
      />
      <Route
        path="/news"
        element={
          <>
            <Nav />
            <News />
          </>
        }
      />
      <Route
        path="/shop"
        element={
          <>
            <Nav />
            <Shop />
          </>
        }
      />
    </Routes>
  );
};

export default App;
