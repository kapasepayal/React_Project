import { useState } from "react"

function Form() {

    const [isTrue, setTrue] = useState(true);

    function hidden() {
        setTrue(!isTrue);   
      
    }

    return (

        <div className="text-center pt-40 ">

            <div className="border-2 mx-96 text-center  bg-violet-900 rounded-2xl pb-20">

                <h1 className="text-3xl font-serif font-bold py-8 text-white">Enter the Information</h1>

                <div className="mb-5 ">
                    <label htmlFor="email" className="text-xl pt-16 font-serif font-bold text-white "> Enter The Email :</label>
                    <input className=" outline-none border-2 border-gray-700 ml-2 pl-2 py-1 rounded-md w-56" type="email" placeholder="enter email" id="email" />
                </div>

                <div className="ml-8">

                    <label className="text-xl pt-16 font-serif font-bold ml-14 text-white"> Enter password :</label>
                    <input 
                    className=" outline-none border-3 border-gray-700 ml-2 pl-2 py-1 rounded-md text-black w-56"
                    type={isTrue ? "password" : "text"} 
                    placeholder="enter password" 
                   />

                 <button onClick={hidden} className="ml-3 rounded-md px-3 py-1  bg-white text-black font-serif font-bold">
                    {isTrue ? "hide" : "show"}</button>
                </div>
               
            </div>
        </div>
    )
}

export default Form