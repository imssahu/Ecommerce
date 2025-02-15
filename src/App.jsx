import Home from "./pages/Home";
import ThreeDTextProduct from "./pages/ThreeDTextProduct";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/3d-text" element={<ThreeDTextProduct />} />

    </Routes>
  );
};

export default App;
