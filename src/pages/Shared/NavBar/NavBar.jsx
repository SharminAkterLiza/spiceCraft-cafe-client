import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';

import { AuthContext } from "../../../providers/AuthProvider";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const NavBar = () => {
const {user,logOut} = useContext(AuthContext);
const [isAdmin] = useAdmin();
const [cart] = useCart();
const handleLogOut = () =>{
logOut()
.then(() => {})
.catch(error =>console.log(error));
}


    return (
<div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl mx-auto bg-black text-white mb-5">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li></li>
      
        {/* <li><a>Item 3</a></li> */}
      </ul>
      
    </div>
    <a className="btn btn-ghost text-xl mr-8">SpiceCraft Cafe & Elixir Bar</a>
  </div>
  <div className="navbar-center hidden lg:flex ml-5">
    <ul className="menu menu-horizontal px-1 ml-40 mt-6 ">
      <li  ><Link to="/">Home</Link></li>
      <li><Link to="/menu">Our Menu</Link></li>
      
      <li> <Link to="/order/momos">Order</Link> </li>
      <li><Link to="/about">About</Link></li>
{
  isAdmin ? <li> <Link to="/dashboard/adminhome" >Dashboard</Link> </li>
  : <li> <Link to="/dashboard/userhome" >Dashboard</Link> </li>
}

      <li> </li>
     <li>
      <Link to="/dashboard/mycart">
      <button className="btn">
  
  <div className="badge badge-secondary">+{cart?.length || 0 }</div>
  <FaShoppingCart></FaShoppingCart>
</button>
      </Link>
     </li>

    </ul>
    {
      user ? 
      <>
      {/* <span>{user?.displayName}</span> */}
      <button onClick={handleLogOut} className="btn btn-ghost mt-6 mr-10">LogOut</button>
      </> : <>  <Link className="mt-6 mr-10" to="/login">Login</Link> </>
      
    }
  </div>
  {/* <button className="btn">
  
  <div className="badge badge-secondary">+{cart?.length || 0 }</div>
  <FaShoppingCart></FaShoppingCart>
</button> */}
  <div className="navbar-end ">
  </div>
</div>
    );
};

export default NavBar;