import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FrontEndPage from "./pages/FrontEnd";
import BackEndPage from "./pages/BackEnd";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/front-end" element={<FrontEndPage />} />
        <Route path="/back-end" element={<BackEndPage />} />
      </Routes>
    </>
  );
}

export default App;