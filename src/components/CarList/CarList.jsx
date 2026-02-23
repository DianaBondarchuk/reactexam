import CarCard from "../CarCard/CarCard";

function CarList({ cars, onDelete }) {
  return (
    <div className="row">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default CarList;
