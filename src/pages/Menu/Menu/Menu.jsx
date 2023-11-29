import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuCBI from '../../../assets/Menu/menub.jpg';
import burgerImg from '../../../assets/Menu/burgerCB.jpg';
import momosImg from '../../../assets/Menu/momo4.jpg';
import drinksImg from '../../../assets/Menu/drinksC.jpg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
const Menu = () => {

const [menu] = useMenu();
const burger = menu.filter(item => item.category === 'burger');
const momos = menu.filter(item => item.category === 'momos');
const offered = menu.filter(item => item.category === 'offered');
// const soup = menu.filter(item => item.category === 'soup');
// const pizza = menu.filter(item => item.category === 'pizza');
const drinks = menu.filter(item => item.category === 'drinks');


    return (
        <div>
                  <Helmet>
        <title>SpiceCraft | Menu</title>
      </Helmet>

            <Cover img = {menuCBI} title="Checkout spiceCraft's menu"  ></Cover>
            {/* main cover */}
            
<SectionTitle subHeading="Don't Miss " heading="Delicious Items"></SectionTitle>
{/* offered */}
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory 
            items={burger}
             title="Burger" 
             img={burgerImg}
             ></MenuCategory>
            <MenuCategory 
            items={momos}
             title="MOMOS" 
             img={momosImg}
             ></MenuCategory>
            <MenuCategory 
            items={drinks}
             title="drinks" 
             img={drinksImg}
             ></MenuCategory>
        </div>
    );
};

export default Menu;