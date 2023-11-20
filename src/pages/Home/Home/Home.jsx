import Banner from "../Banner/Banner";
import Category from "../Category/Category";

const Home = () => {
    return (
        <div className=" ">
        
            {/* <h1 className="text-6xl font-bold text-center text-green-700 mt-5">SpiceCraft Cafe & Elixir Bar</h1> */}
       <Banner></Banner>
       <Category></Category>
        </div>
    );
};

export default Home;