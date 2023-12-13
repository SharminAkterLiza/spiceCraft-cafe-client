import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const CardFood = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useContext(AuthContext);

  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = item => {
    console.log(item);
    if (user && user.email) {
      const cartItem = { menuItemId: _id, name, image, price, email: user.email }

      fetch('http://localhost:5000/carts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(cartItem)
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
             refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Food added on cart.",
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
    }
    else {
      Swal.fire({
        title: "Please login for order.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      });
    }
  }
  return (
    <div className=" border card w-96 bg-base-100 shadow-xl ">
      <figure><img className="h-[250px] w-[500px]" src={image} alt="Food" /></figure>
      <p className="bg-slate-900 text-white  absolute right-0 mt-4 mr-4 px-4 rounded-sm">{price} <small>TK</small> </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions  justify-end mr-2">
          {/* <button className="bg-rose-900 h-[35px] bold w-[120px]  text-white rounded-md ">Add to Cart</button> */}
          <button onClick={() => handleAddToCart(item)} className="btn btn-outline font-bold bg-slate-100 text-black border-0 border-rose-900 border-b-4 mt-4 ml-80">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default CardFood;