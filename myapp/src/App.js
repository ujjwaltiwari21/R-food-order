import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.js';
// import About from './pages/About.js';
import Navigation from './component/Navigation.js';
// import Products from './pages/Products.js';
import Kitchen from "./component/Product.js";
import Cart from './pages/Cart.js';
import Login from './component/Login.js';

const App = () => {
    return (
        <>
        <Router>
            <Navigation/>
            <Routes>
                <Route path='/' Component={Home}></Route>
                {/* <Route path='/about' Component={About}></Route> */}
                {/* <Route path='/products' exact Component={Products}></Route> */}
                <Route path='/products' Component={Kitchen}></Route>
                <Route path='/cart' Component={Cart}></Route>
                <Route path='/login' Component={Login}></Route>
            </Routes>
        </Router>
        </>
    )
}


export default App;