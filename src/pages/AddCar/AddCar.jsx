import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCar() {
  const navigate = useNavigate();
  const [car, setCar] = useState({
    name: "",
    manufacturer: "",
    year: "",
    volume: "",
    price: "",
    color: "",
    description: "",
    image: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!car.name) newErrors.name = "Name is required";
    if (!car.manufacturer) newErrors.manufacturer = "Manufacturer is required";
    if (!car.year || isNaN(car.year) || car.year < 1900 || car.year > 2025)
      newErrors.year = "Year must be a number between 1900 and 2025";
    if (!car.volume || isNaN(car.volume) || car.volume < 0)
      newErrors.volume = "Volume must be a positive number";
    if (!car.price || isNaN(car.price) || car.price <= 0)
      newErrors.price = "Price must be a positive number";
    if (!car.color) newErrors.color = "Color is required";
    if (!car.description) newErrors.description = "Description is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const stored = JSON.parse(localStorage.getItem("cars")) || [];
    const newCar = { ...car, id: Date.now() };
    stored.push(newCar);
    localStorage.setItem("cars", JSON.stringify(stored));
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h2>Add Car</h2>
      <form onSubmit={handleSubmit}>
        {["name","manufacturer","year","volume","price","color","description","image"].map((field) => (
          <div className="mb-3" key={field}>
            <label className="form-label">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              type={field === "image" ? "text" : "text"}
              className={`form-control ${errors[field] ? "is-invalid" : ""}`}
              name={field}
              value={car[field]}
              onChange={handleChange}
            />
            {errors[field] && <div className="invalid-feedback">{errors[field]}</div>}
          </div>
        ))}
        <button type="submit" className="btn btn-primary">Add Car</button>
      </form>
    </div>
  );
}

export default AddCar;
