import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Order.css';
// import orderCI from '../../assets/Menu/orderC.png';
// import Cover from '../Shared/Cover/Cover';
import { useState } from 'react';
import useMenu from '../../hooks/useMenu';
import OrderTab from './OrderTab/OrderTab';
// import CardFood from '../../components/SectionTitle/cardFood/cardFood';

const Order = () => {
    const [tabIndex,setTabIndex] = useState(0);
    const [menu] = useMenu();

    const burger = menu.filter(item => item.category === 'burger');
    const momos = menu.filter(item => item.category === 'momos');
    // const offered = menu.filter(item => item.category === 'offered');
    // const soup = menu.filter(item => item.category === 'soup');
    // const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');
    const dessert = menu.filter(item => item.category === 'dessert');

    return (
        <div >
            {/* <Cover img={orderCI} title="Order Food " >
</Cover> */}
<div className="orderC  pt-8 ">
          
                
           
                
             <h1 className='orderT'>ORDER NOW</h1>
             <p className='text-center  px-8 py-8 mt-2 justify-center  bold bg-slate-900 bg-opacity-80 text-white  absolute right-0 w-[75%] rounded-sm mr-40'>
Welcome to SpiceCraft Cafe and Elixir Bar! Dive into a world of flavor both online and offline. Easily customize your order on our website for a quick, fresh, and healthy meal delivered straight to your door. If you prefer the ambiance of our cafe, join us in person for a delightful experience. SpiceCraft is your destination for delicious moments, wherever you are. Place your order now and let the spice unfold! !!!</p>
            
            
            
        </div>

            {/* using react-Tab  */}
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="mt-20">
  <TabList>
    <Tab>Burger</Tab>
    <Tab>Momos</Tab>
    <Tab>Drinks</Tab>
    <Tab>Dessert</Tab>
    
  </TabList>
  <TabPanel>
   <OrderTab items={burger}></OrderTab>
  </TabPanel>
  <TabPanel>
   <OrderTab items={momos}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab items={drinks}></OrderTab>
  </TabPanel>
  <TabPanel>
 <OrderTab items={dessert}></OrderTab>
  </TabPanel>
</Tabs>
{/* ..................... */}
        </div>
    );
};

export default Order;