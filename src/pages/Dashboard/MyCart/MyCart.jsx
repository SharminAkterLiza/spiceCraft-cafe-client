import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useCart();
  console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = item => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://spicecraft-cafe-server.onrender.com/carts/${item._id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          })
      }
    });




  }

  return (
    <div className="w-full">
      <Helmet>
        <title>SpiceCraft | My Cart</title>
      </Helmet>
      <div className="uppercase font-semibold h-[60px] items-center flex justify-evenly mt-40">
        <h3 className="text-3xl">Total Items: {cart.length}</h3>
        <h3 className="text-3xl">Total price: <span className="text-orange-600">{total} </span> TK</h3>
        <Link to="/dashboard/payment"><button className="btn bg-orange-500 btn-sm">
          Pay</button></Link>


      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              cart.map((item, index) => <tr
                key={item._id}
              >
                <td>
                  {index + 1}
                </td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.image} alt="Avatar Tailwind CSS Component" />
                    </div>

                  </div>
                </td>
                <td>
                  {item.name}
                </td>
                <td className="text-end">
                  {item.price} Tk
                </td>
                <td>
                  <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-lg text-red-600 "> <FaTrashAlt></FaTrashAlt> </button>
                </td>
              </tr>)
            }


          </tbody>


        </table>
      </div>

    </div>
  );
};

export default MyCart;