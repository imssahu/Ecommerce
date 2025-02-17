import Home from "./pages/Home";
import ThreeDTextProduct from "./pages/ThreeDTextProduct.jsx";
import ThreeDObjectProduct from "./pages/ThreeDObjectProduct.jsx";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/3d-text" element={<ThreeDTextProduct />} />
      <Route exact path="/3d-object" element={<ThreeDObjectProduct />} />

    </Routes>
  );
};

export default App;
