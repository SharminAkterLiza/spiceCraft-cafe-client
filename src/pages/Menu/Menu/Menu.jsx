import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuCBI from '../../../assets/Menu/menub.jpg';
const Menu = () => {
    return (
        <div>
                  <Helmet>
        <title>SpiceCraft | Menu</title>
      </Helmet>

            <Cover img = {menuCBI} title="Ckeckout spiceCraft menu"  ></Cover>
            

            
        </div>
    );
};

export default Menu;