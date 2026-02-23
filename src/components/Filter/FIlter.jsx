import { useState } from "react";

function Filter({ onFilter }) {
  const [name, setName] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [volume, setVolume] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ name, manufacturer, year, color, volume, minPrice, maxPrice });
  };

  return (
<form onSubmit={handleSubmit} className="mb-4">
  <div className="row g-2">
    <div className="col">
      <input
        className="form-control"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
    <div className="col">
      <input
        className="form-control"
        placeholder="Manufacturer"
        value={manufacturer}
        onChange={(e) => setManufacturer(e.target.value)}
      />
    </div>
    <div className="col">
      <input
        className="form-control"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
    </div>
    <div className="col">
      <input
        className="form-control"
        placeholder="Color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
    <div className="col">
      <input
        className="form-control"
        placeholder="Volume"
        value={volume}
        onChange={(e) => setVolume(e.target.value)}
      />
    </div>
    <div className="col">
      <input
        className="form-control"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
    </div>
    <div className="col">
      <input
        className="form-control"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
    </div>
  </div>

  <div className="text-center mt-3">
    <button className="btn btn-success" type="submit">
      Apply
    </button>
  </div>
</form>

  );
}

export default Filter;
