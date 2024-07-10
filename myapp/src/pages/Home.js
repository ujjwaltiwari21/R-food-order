import Footer from "../component/Footer";
import Products from "../component/Products";
import Sections from "./Sections";

const Home = () => {
    return (
        <>
            <div className="hero py-16">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="w-1/2">
                        <h6 className="text-lg">Are you hungry ?</h6>
                        <h2 className="text-3xl md:text-6xl font-bold">Don't wait</h2>
                        <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-green-500 hover:bg-red-600">Order Now</button>
                    </div>
                    <div className="w-1/2">
                        <img src="/images/tasty_pizza.png" alt="pizza" />
                    </div>
                </div>
            </div>
            <div>
                <div className="pb-24">
                    <Products/><hr className="border-gray-400"/>
                </div>
            </div>
            <div>
                <Sections/>
            </div>
            <div className="container">
                <Footer/>
            </div>
        </>
    )
}

export default Home;