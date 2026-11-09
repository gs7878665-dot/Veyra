import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import CenterLine from "./components/CenterLine";

import CategoryPage from "./pages/CategoryPage";

const Home = () => {
  return (
    <>
      <Hero />
      <CenterLine />
    </>
  );
};

const App = () => {
  return (
    <div className="bg-[#111111] min-h-screen">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/category/:categorySlug" element={<CategoryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
