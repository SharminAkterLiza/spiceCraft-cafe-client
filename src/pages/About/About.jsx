// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//         </div>
//     );
// };

// export default About;

import img1 from '../../assets/About/cafe.jpg';

const About = () => {
    return (
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto flex items-center justify-between">
                <div className="w-full md:w-1/2 mt-20 ml-8">
                    <h1 className=" text-pink-600 text-4xl font-bold mb-6">About Spicecraft Cafe</h1>
                    <p className="text-gray-700 mb-4">
                        Welcome to Spicecraft Cafe, where culinary art meets passion! Our journey began with a commitment to serve the finest dishes, combining fresh ingredients and aromatic spices to create an unforgettable dining experience.
                    </p>
                    <p className="text-gray-700 mb-4">
                        At Spicecraft, we take pride in our diverse menu inspired by global flavors. Each dish is crafted with love and attention, ensuring a symphony of taste with every bite.
                    </p>
                    <p className="text-gray-700">
                        Join us in this culinary adventure, where every meal is a celebration of taste and tradition. Spicecraft Cafe – a place where flavor and warmth come together to create lasting memories.
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <img
                        src={img1}
                        alt="Spicecraft Cafe"
                        className=" ml-20 w-2/3 h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;

