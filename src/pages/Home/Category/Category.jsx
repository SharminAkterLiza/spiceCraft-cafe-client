import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import img1 from '../../../assets/Home/s_pic1.jpg';
import img2 from '../../../assets/Home/s_pic2.png';
import img3 from '../../../assets/Home/s_pic3.png';
import img4 from '../../../assets/Home/s_pic4.png';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


const Category = () => {
    return (
     <section>
<SectionTitle
subHeading={"From 9.00am to 11.00pm"}
heading={"Order Online"}
></SectionTitle>
<Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide><img src={img1} alt="" />
        
        </SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
        
      </Swiper>

     </section>
    );
};

export default Category;