import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function CarDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cars")) || [];
    const found = stored.find((c) => c.id === +id);
    setCar(found);
  }, [id]);

  if (!car) return <p>Car not found</p>;

  return (
    <div className="card p-4">
      <img src={car.image} className="img-fluid mb-3" alt={car.name} />
      <h2>{car.name}</h2>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Manufacturer: {car.manufacturer}</li>
        <li className="list-group-item">Year: {car.year}</li>
        <li className="list-group-item">Volume: {car.volume}</li>
        <li className="list-group-item">Price: {car.price}$</li>
        <li className="list-group-item">Color: {car.color}</li>
      </ul>
      <p className="mt-3">{car.description}</p>

        <button
        className="btn btn-secondary mt-3"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>
    </div>
  );
}

export default CarDetail;
