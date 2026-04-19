import { useEffect, useState } from "react";
import CarList from "../../components/CarList/CarList";
import Filter from "../../components/Filter/Filter"; // ← тут була помилка (FIlter)
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [allCars, setAllCars] = useState([]);
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let stored = JSON.parse(localStorage.getItem("cars"));

    if (!stored || stored.length === 0) {
      stored = [
        {
          id: 1,
          manufacturer: "BMW",
          model: "X5",
          year: 2021,
          volume: 3.0,
          price: 60000,
          color: "Black",
          description: "Luxury SUV with powerful engine",
          image: "https://mediapool.bmwgroup.com/cache/P9/202106/P90428329/P90428329-bmw-x5-black-vermilion-edition-07-2021-600px.jpg"
        },
        {
          id: 2,
          manufacturer: "Audi",
          model: "A6",
          year: 2020,
          volume: 2.5,
          price: 45000,
          color: "White",
          description: "Business class sedan",
          image: "https://cdn1.riastatic.com/photosnew/auto/photo/audi_a6__589877936bx.jpg"
        },
        {
          id: 3,
          manufacturer: "Toyota",
          model: "Camry",
          year: 2022,
          volume: 2.5,
          price: 30000,
          color: "Gray",
          description: "Reliable and comfortable sedan",
          image: "https://dealerimages.dealereprocess.com/image/upload/2828863"
        },
        {
          id: 4,
          manufacturer: "Mercedes-Benz",
          model: "C300",
          year: 2021,
          volume: 2.0,
          price: 52000,
          color: "Silver",
          description: "Premium sedan with advanced technology",
          image: "https://wallpapers.com/images/hd/cool-silver-mercedes-benz-c300-jtn6bsdknk7nmigd.jpg"
        },
        {
          id: 5,
          manufacturer: "Ford",
          model: "Mustang",
          year: 2025,
          volume: 5.0,
          price: 55000,
          color: "Blue",
          description: "Legendary American muscle car",
          image: "https://fordauthority.com/wp-content/uploads/2025/06/2026-Ford-Mustang-GT-FX-Package-Reveal-Photos-Exterior-016-front-three-quarters.jpg"
        },
        {
          id: 6,
          manufacturer: "Hyundai",
          model: "Tucson",
          year: 2022,
          volume: 2.0,
          price: 27000,
          color: "Black",
          description: "Modern SUV with spacious interior",
          image: "https://tse2.mm.bing.net/th/id/OIP.NDNO6PslZFJtoteNp3URMwHaEK?w=3333&h=1875&rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        {
          id: 7,
          manufacturer: "Tesla",
          model: "Model 3",
          year: 2023,
          volume: 1.0,
          price: 40000,
          color: "Red",
          description: "Electric car with long range battery",
          image: "https://static1.topspeedimages.com/wordpress/wp-content/uploads/2024/06/red-2024-tesla-model-3-performance-3.jpg"
        },
        {
          id: 8,
          manufacturer: "Honda",
          model: "Civic",
          year: 2022,
          volume: 1.8,
          price: 22000,
          color: "White",
          description: "Compact car with great fuel efficiency",
          image: "https://cdn.motor1.com/images/mgl/AkBE9P/s1/new-honda-civic-e-hev-hybrid-europe.jpg"
        }
      ];

      localStorage.setItem("cars", JSON.stringify(stored));
    }

    setAllCars(stored);
    setCars(stored);
  }, []);

  const handleDelete = (id) => {
    const updated = allCars.filter((c) => c.id !== id);
    setAllCars(updated);
    setCars(updated);
    localStorage.setItem("cars", JSON.stringify(updated));
  };

  const handleFilter = (filters) => {
    let filtered = allCars;

    if (filters.name)
      filtered = filtered.filter((c) =>
        (c.manufacturer + " " + c.model)
          .toLowerCase()
          .includes(filters.name.toLowerCase())
      );

    if (filters.manufacturer)
      filtered = filtered.filter((c) =>
        c.manufacturer.toLowerCase().includes(filters.manufacturer.toLowerCase())
      );

    if (filters.year)
      filtered = filtered.filter((c) =>
        String(c.year) === filters.year
      );

    if (filters.color)
      filtered = filtered.filter((c) =>
        c.color.toLowerCase().includes(filters.color.toLowerCase())
      );

    if (filters.volume)
      filtered = filtered.filter((c) =>
        String(c.volume) === filters.volume
      );

    if (filters.minPrice)
      filtered = filtered.filter((c) =>
        c.price >= +filters.minPrice
      );

    if (filters.maxPrice)
      filtered = filtered.filter((c) =>
        c.price <= +filters.maxPrice
      );

    setCars(filtered);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Car Catalog</h1>

      <Filter onFilter={handleFilter} />

      <div className="text-center mb-4">
        <button
          className="btn btn-primary"
          onClick={() => navigate("/add")}
        >
          Add Car
        </button>
      </div>

      <CarList cars={cars} onDelete={handleDelete} />
    </div>
  );
}

export default HomePage;