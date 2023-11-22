import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featureImg from '../../../assets/Home/featured.jpg';
import './Featured.css';
const Featured = () => {
    return (
        <div className="featured-item text-white pt-8 bg-fixed">
            <SectionTitle subHeading="check it out" heading="Featured Items"></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-70">
                <div>
                <img  src={featureImg} alt="" />
                </div>
            <div className="md:ml-10">
                
                <p>Jun 28, 2024</p>
                <p className="uppercase text-2xl ">Where can i get some?</p>
                <p>Delight in the best of SpiceCraft whether you are dining in or ordering online! Our menu is a feast of flavors, carefully crafted for a memorable experience. From tasty starters to irresistible desserts, each dish is made with fresh, quality ingredients. For those who love dining in, our warm ambiance and attentive staff create a welcoming atmosphere. If you prefer the convenience of home, our online ordering makes it easy—just a click away! Experience the culinary journey with SpiceCraft, whether you are in our cozy restaurant or enjoying it from your own space. Bon appétit, wherever you choose!</p>
                <button className="text-black btn btn-outline border-0 border-b-4 mt-4">Order Now</button>

                </div>
            </div>
            
        </div>
    );
};

export default Featured;