import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
    const location = useLocation();
   // console.log(location);
    const isHeaderLoading = location.pathname.includes('login');
    return (
        <div>
            {isHeaderLoading || <NavBar></NavBar>}
        <Outlet></Outlet>  
           {isHeaderLoading || <Footer></Footer>  }
        </div>
    );
};

export default Main;