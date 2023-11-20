import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/Home/04.jpg';
import img2 from '../../../assets/Home/05.png';
import img3 from '../../../assets/Home/06.png';
import img4 from '../../../assets/Home/banner.jpg';
import img5 from '../../../assets/Home/chef-service.jpg';
const Banner = () => {
    return (
        <Carousel>
        <div>
            <img src={img1}/>
        </div>
        <div>
            <img src={img2} />
        </div>
        <div>
            <img src={img3} />
        </div>
        <div>
            <img src={img4} />
        </div>
        <div>
            <img src={img5} />
        </div>
       
    </Carousel>
    );
};

export default Banner;