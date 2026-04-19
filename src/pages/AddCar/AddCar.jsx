import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCar() {
  const [car, setCar] = useState({
    manufacturer: "",
    model: "",
    year: "",
    volume: "",
    image: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCar({
      ...car,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5023/api/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        manufacturer: car.manufacturer,
        model: car.model,
        year: Number(car.year),
        volume: Number(car.volume),
        image: car.image
      })
    }).then(() => {
      alert("Car added");
      navigate("/");
    });
  };

  return (
    <div className="container mt-4">
      <h2>Add Car</h2>

      <form onSubmit={handleSubmit}>
        <input name="manufacturer" placeholder="Brand" onChange={handleChange} className="form-control mb-2" />
        <input name="model" placeholder="Model" onChange={handleChange} className="form-control mb-2" />
        <input name="year" placeholder="Year" onChange={handleChange} className="form-control mb-2" />
        <input name="volume" placeholder="Engine Volume" onChange={handleChange} className="form-control mb-2" />
        <input name="image" placeholder="Image URL" onChange={handleChange} className="form-control mb-2" />

        <button className="btn btn-success">Save</button>
      </form>
    </div>
  );
}

export default AddCar;