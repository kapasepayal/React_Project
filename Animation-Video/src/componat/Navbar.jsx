import './Navbar.css'

function Navbar() {


    return (
        <nav className="flex justify-between bg-violet-900 py-2 ">
           
            <div>
            
                <h1 className="pl-20 font-serif text-4xl  font-bold text-white">SteamNest</h1>
            </div>
            <div className="flex mr-10 mt-1">
                <div className='navb flex'>
                <li className="list">Home</li>
                <li className="list">Product</li>
                <li className="list">Contact us</li>
                <li className="list mr-10">About us</li>
            </div>
                <div className="ml-19 mr-10 mt-1">
                    <button className="btn">Sing in</button>
                    <button className="btn ">Login</button>
                </div>
            </div>
        </nav>

    )
}
export default Navbar