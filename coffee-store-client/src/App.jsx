import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./component/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>
      <h1 className="text-4xl text-yellow-900 font-bold mb-10">
        Our Popular Products
      </h1>
      <div className="grid lg:grid-cols-2 gap-10">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          />
        ))}
      </div>
    </>
  );
}

export default App;
