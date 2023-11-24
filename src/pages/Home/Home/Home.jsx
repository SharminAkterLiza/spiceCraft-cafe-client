import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Reviews from "../Reviews/Reviews";

const Home = () => {
    return (
        <div className=" ">
             <Helmet>
        <title>SpiceCraft | Home</title>
      </Helmet>
            {/* <h1 className="text-6xl font-bold text-center text-green-700 mt-5">SpiceCraft Cafe & Elixir Bar</h1> */}
       <Banner></Banner>
       <Category></Category>
       <PopularMenu></PopularMenu>
       <Featured></Featured>
       <Reviews></Reviews>
        </div>
    );
};

export default Home;