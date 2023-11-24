import { Link } from "react-router-dom";

const NavBar = () => {

    return (
<div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl mx-auto bg-black text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li></li>
        {/* <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li> */}
        
        <li><a>Item 3</a></li>
      </ul>
      
    </div>
    <a className="btn btn-ghost text-xl">SpiceCraft Cafe & Elixir Bar</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/menu">Our Menu</Link></li>
      {/* <li tabIndex={0}>
        <details>
          <summary>Menu</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li> */}
      <li><a>About</a></li>
    </ul>
    
  </div>
  
  <div className="navbar-end ">
    <a href="https://xztwka5ygg7mzydicqkjbg.on.drv.tw/SpiceCraftCafe%26ElixirBar/?fbclid=IwAR3unLINrKQJdx4X1HEBdkQCsBQSOoYxvjtczzCKVwaRJagmPy7QL9tyNgE" className="btn">Login</a>
  </div>
</div>
    );
};

export default NavBar;