import CardFood from "../../../components/SectionTitle/cardFood/cardFood";

const OrderTab = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-10 mt-12'>
        {
           items.map(item => <CardFood
           key={item._id}
           item={item}
     
           ></CardFood> )
         }
        </div>

    );
};

export default OrderTab;