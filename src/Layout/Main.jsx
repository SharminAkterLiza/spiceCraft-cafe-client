// import { Outlet, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
    // const location = useLocation();
   // console.log(location);
    // const isHeaderLoading = location.pathname.includes('login') || location.pathname.includes('signup');
    return (
        <div>
            {/* {isHeaderLoading || <NavBar></NavBar>} */}
            <NavBar></NavBar>
        <Outlet></Outlet>  
        <Footer></Footer>
           {/* {isHeaderLoading || <Footer></Footer>  } */}
        </div>
    );
};

export default Main;