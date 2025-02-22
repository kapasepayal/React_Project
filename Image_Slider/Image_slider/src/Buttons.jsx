


function Buttons({fun, val}){

    return(
        <div>
            <button className="mt-24 m-8 px-2 py-1 text-xl font-serif border-gray-400 font-bold border-2 hover:bg-gray-700 hover:text-white rounded-md" onClick={fun}>{val}</button>
        </div>
    )
}

export default Buttons