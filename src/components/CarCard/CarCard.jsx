import { useNavigate } from "react-router-dom";

function CarCard({ car, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">

        <img
          src={
            car.image ||
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70"
          }
          className="card-img-top"
          alt={`${car.manufacturer} ${car.model}`}
          style={{ height: "200px", objectFit: "cover" }}
        />

        <div className="card-body">
          <h5 className="card-title">
            {car.manufacturer} {car.model}
          </h5>

          <p className="card-text">
            <b>Year:</b> {car.year} <br />
            <b>Engine:</b> {car.volume} L
          </p>
        </div>

        <div className="card-footer d-flex justify-content-between">
          <button
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(car.id)}
          >
            Delete
          </button>

          <button
            className="btn btn-warning btn-sm"
            onClick={() => navigate(`/edit/${car.id}`)}
          >
            Edit
          </button>
        </div>

      </div>
    </div>
  );
}

export default CarCard;