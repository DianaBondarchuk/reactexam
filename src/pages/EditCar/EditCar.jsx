import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditCar() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [car, setCar] = useState({
    manufacturer: "",
    model: "",
    year: "",
    volume: ""
  });

  useEffect(() => {
    fetch(`http://localhost:5023/api/cars/${id}`)
      .then(res => res.json())
      .then(data => {
        setCar(data);
      });
  }, [id]);

  const handleChange = (e) => {
    setCar({
      ...car,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5023/api/cars/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        manufacturer: car.manufacturer,
        model: car.model,
        year: Number(car.year),
        volume: Number(car.volume)
      })
    }).then(() => {
      alert("Car updated");
      navigate("/");
    });
  };

  return (
    <div className="container mt-4">
      <h2>Edit Car</h2>

      <form onSubmit={handleSubmit}>
        <input name="manufacturer" value={car.manufacturer} onChange={handleChange} className="form-control mb-2" />
        <input name="model" value={car.model} onChange={handleChange} className="form-control mb-2" />
        <input name="year" value={car.year} onChange={handleChange} className="form-control mb-2" />
        <input name="volume" value={car.volume} onChange={handleChange} className="form-control mb-2" />

        <button className="btn btn-warning">Update</button>
      </form>
    </div>
  );
}

export default EditCar;