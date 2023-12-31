import CardFood from "../../../components/SectionTitle/cardFood/cardFood";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const OrderTab = ({items}) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };
    return (
        <div >
<Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide >
            <div className='grid md:grid-cols-3 gap-10 mt-12'>
            {
           items.map(item => <CardFood
           key={item._id}
           item={item}
     
           ></CardFood> )
         }
            </div>
        
        </SwiperSlide>
       
        
      </Swiper>


        </div>

    );
};

export default OrderTab;