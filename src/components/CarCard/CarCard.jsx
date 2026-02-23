import { Link } from "react-router-dom";

function CarCard({ car, onDelete }) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100">
        <img src={car.image} className="card-img-top border-bottom" alt={car.name} 
          style={{
      height: "200px",
      objectFit: "cover"
  }}
        />
        <div className="card-body">
          <h5 className="card-title">{car.name}</h5>
          <p className="card-text">
            Mark : {car.manufacturer} 
            <br/> Year : {car.year} 
            <br/> Color : {car.color}
          </p>
          <p className="fw-bold">{car.price}$</p>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <Link className="btn btn-primary btn-sm" to={`/car/${car.id}`}>View</Link>
          <Link className="btn btn-warning btn-sm" to={`/edit/${car.id}`}>Edit</Link>
          <button className="btn btn-danger btn-sm" onClick={() => onDelete(car.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
