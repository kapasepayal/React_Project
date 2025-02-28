import { Link } from "react-router-dom"

const NavBar = () =>{
    return (
        <div>
            <ul className="flex p-4 pl-4 bg-black">
                <Link to={"/"}>
                <li className="p-3 text-xl font-serif text-white">Home</li>
                </Link>

                <Link to={"/Product"}>
                <li className="p-3 text-xl font-serif text-white">Product</li>
                </Link>

                <Link to={"/AboutUs"}>
                <li className="p-3 text-xl font-serif text-white">AbotUs</li>
                </Link>
            </ul>
        </div>
    )
}

export default NavBar;