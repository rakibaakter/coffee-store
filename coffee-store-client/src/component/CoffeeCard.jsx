const CoffeeCard = ({ coffee }) => {
  const { name, chef, supplier, taste, category, details, photo } = coffee;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="coffee" />
        </figure>
        <div className="flex w-full justify-between">
          <div>
            <h2 className="card-title"> {name}</h2>
            <div className="text-left">
              <p>Chef : {chef}</p>
              <p>Taste : {taste}</p>
              <p>Category : {category}</p>
              <p>Price : 240 tk</p>
            </div>
          </div>

          <div className="card-actions justify-end">
            <div className="btn-group btn-group-vertical space-y-2">
              <button className="btn">View</button>
              <button className="btn">Edit</button>
              <button className="btn">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
