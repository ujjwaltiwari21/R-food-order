import { Link } from "react-router-dom";

const Navigation = () => {
    const cartStyle = {
        background: '#fff',
        padding: '5px 10px',
        display: 'flex',
    }
    return (
        <>
            <nav className="container mx-auto flex item-center justify-between py-4">
                <Link to="/">
                    <img src="/images/new-logo.png" alt="logo" style={{height:60}}/>
                </Link>
                <ul className="flex item-center">
                    <li className=" py-3"><Link to="/">Home</Link></li>
                    <li className="ml-20 py-3"><Link to="/products">Kitchen</Link></li>
                    <li className="ml-20">
                        <Link to="/cart">
                        <div style={cartStyle}>
                            <span className="text-blue py-2">10</span>
                            <img src="/images/cart.jpg" alt="cart" style={{height:35}}/>
                        </div>
                        </Link>
                    </li>
                    <li className="ml-20 py-3 border border-green-500 rounded font-bold px-5"><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navigation;