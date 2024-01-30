import { NavLink,  Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet,  FaHome,  FaUsers } from 'react-icons/fa';
// ..FaBook,FaCalendarAlt,
import { GiForkKnifeSpoon } from "react-icons/gi";

import './Dashboard.css';
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
const Dashboard = () => {

const [cart] = useCart();

//  const isAdmin = true;

const [isAdmin] = useAdmin();

    return (
        
         
      <div className="drawer lg:drawer-open ">
           
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>

            <div className="drawer-side -ml-10 ">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-60 min-h-full  mt-2 bg-orange-400 ">
                  
                  {
                    isAdmin ? <>
                        <li><NavLink to="/dashboard/adminhome"> <FaHome></FaHome>Admin Home</NavLink></li>
                    <li><NavLink to="/dashboard/addItem"> <GiForkKnifeSpoon /> Add Items</NavLink></li>
                    <li><NavLink to="/dashboard/manageItems"> <FaWallet></FaWallet> Manage Items</NavLink></li>
                    {/* <li><NavLink to="/dashboard/history"> <FaBook></FaBook> Manage Bookings</NavLink></li> */}
                    <li><NavLink to="/dashboard/allusers"> <FaUsers></FaUsers> All Users</NavLink></li>
                    

                     </> : <>
                       <li><NavLink to="/dashboard/userhome"> <FaHome></FaHome>User Home</NavLink></li>
                    {/* <li><NavLink to="/"> <FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li> */}
                    {/* <li><NavLink to="/"> <FaWallet></FaWallet> Payment History</NavLink></li> */}
                    <li><NavLink    to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart > My Cart<span className="badge badge-secondary  ">+{cart?.length || 0 }</span>
                    

                    </NavLink></li>
                    {/* <li><NavLink    to="/dashboard/payment"><FaShoppingCart></FaShoppingCart > My Cart<span className="badge badge-secondary  ">+{cart?.length || 0 }</span>
                    

                    </NavLink></li> */}

                    </>
                  }
                  
                    {/* Sidebar content here */}
                    
                  
                    <div className="divider"></div>
                    <li ><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to="/menu">Our Menu</NavLink></li>
                    <li> <NavLink to="/order/momos">Order</NavLink> </li>

                </ul>

            </div>
        </div>
   
        
    );
};

export default Dashboard;