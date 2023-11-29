//import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {
const [menu] = useMenu();
const popular = menu.filter(item => item.category === 'popular');
//const[menu,setMenu] = useState([]);

//     useEffect ( () =>{
//         fetch('menu.json')
// .then(res => res.json())
// .then(data =>{
//     const popularItem = data.filter (item=>item.category === 'popular')
//     setMenu(popularItem)})
//     },[])


    return (
        <section>
          <SectionTitle
          
          heading = "From Our Menu"
          subHeading="Popular Items"
          >
            
            </SectionTitle>  


            <div className="grid md:grid-cols-2 gap-8 ">
                {
                    popular.map(item =><MenuItems
                    key={item._id}
                    item={item}
                    ></MenuItems>)
                }
            </div>
            
<Link to='/menu'><button className="text-black ml-80 btn btn-outline border-0 border-b-4 mt-4 text-center mb-4 text-white">View full menu</button></Link>
        </section>
    );
};

export default PopularMenu;