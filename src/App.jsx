import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CarDetail from "./pages/CarDetail/CarDetail";
import EditCar from "./pages/EditCar/EditCar";
import AddCar from "./pages/AddCar/AddCar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/car/:id" element={<CarDetail />} />
          <Route path="/edit/:id" element={<EditCar />} />
          <Route path="/add" element={<AddCar />} />
        </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
