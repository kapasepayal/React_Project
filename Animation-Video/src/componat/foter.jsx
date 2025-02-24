import './Footer.css'
function Footer() {
    return (
        <div>
            <div className="bg-violet-950">
                <div className=" flex justify-center py-2 mt-20 ">
                        <a href=""><i className="fa-brands fa-facebook fa-2x img"></i></a>
                        <a href=""><i className="fa-brands fa-instagram fa-2x img"></i></a>
                        <a href=""><i className="fa-brands fa-twitter fa-2x img "></i></a>
                        <a href=""><i className="fa-brands fa-google-plus fa-2x img"></i></a>
                        <a href=""><i className="fa-brands fa-youtube fa-2x img"></i></a>
                </div>
            </div>
            <div className="footerbotam bg-black py-2 flex justify-center mb-2">
            <p className="text-white text-xl">Copyright &copy;2024; Designed by <span className="designer">gold</span></p>
            </div>
        </div>
       
    )
}

export default Footer