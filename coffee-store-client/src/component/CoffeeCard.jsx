import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handleDeleteItem = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remainig = coffees.filter(
                (singleCoffee) => singleCoffee._id !== id
              );
              setCoffees(remainig);

              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

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
              <button
                onClick={() => handleDeleteItem(_id)}
                className="btn bg-orange-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
