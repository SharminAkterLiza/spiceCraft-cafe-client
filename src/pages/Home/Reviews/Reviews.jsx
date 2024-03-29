import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import '@smastrom/react-rating/style.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
const Reviews = () => {
    const [reviews, setReviews] = useState([]);
useEffect(() => {
    fetch('https://spicecraft-cafe-server.onrender.com/reviews')
    .then(res => res.json())
    .then(data => setReviews(data))
},[])
    return (
        <section>
         <SectionTitle
         subHeading="What our Clients Say"
         heading="Reviews"
         ></SectionTitle>   
         
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       
        {
            reviews.map(review =>  <SwiperSlide
            
            key={review._id}
            >
                <div className="flex m-24 flex-col items-center mx-24 my-16">
                <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
                    <p className="py-8">{review.details}</p>
                    <h3 className="text-2xl text-orange-400">{review.name}</h3>
                </div>
                </SwiperSlide>)
        }
      </Swiper>
        </section>
    );
};

export default Reviews;