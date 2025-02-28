

function Card({productData}){
    // console.log(productData);

    
   
    return(
        
        // <div className="grid grid-cols-4 gap-4 m-10">
            <div className="text-center w-80 h-60 mb-5 border-2 rounded-lg border-blue-400 p-4 ">
                <h1 className=" mb-2 text-xl font-serif font-bold ">{productData.title}</h1>
                <p className=" font-serif mt-6">{productData.description} </p>
            </div>
            

          
        // </div>
        
    )
}

export default Card