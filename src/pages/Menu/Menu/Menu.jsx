import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuCBI from '../../../assets/Menu/menub.jpg';
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
const Menu = () => {
    return (
        <div>
                  <Helmet>
        <title>SpiceCraft | Menu</title>
      </Helmet>

            <Cover img = {menuCBI} title="Ckeckout spiceCraft menu"  ></Cover>
            <PopularMenu></PopularMenu>

            <Cover img = {menuCBI} title="Ckeckout spiceCraft menu"  ></Cover>
            <PopularMenu></PopularMenu>

            <Cover img = {menuCBI} title="Ckeckout spiceCraft menu"  ></Cover>
            <PopularMenu></PopularMenu>

            <Cover img = {menuCBI} title="Ckeckout spiceCraft menu"  ></Cover>
            <PopularMenu></PopularMenu>

            <Cover img = {menuCBI} title="Ckeckout spiceCraft menu"  ></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;