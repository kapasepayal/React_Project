import { useState } from "react";


function ButtonTabal({data , fun}){

let start=0;
let end =10;

    let length = Math.ceil(data.length/end)
    // console.log(length);
    // console.log(data.products);
    

    let btnarry = [];
    for (let i = 0; i < 3; i++) {
        btnarry[i] = i;
    }
    // console.log(btnarry)
    return(
        <div className="flex justify-end mr-10">

           
             <button onClick={backbtn}
             className="border-2  border-black py-1 px-3 m-1 rounded-md text-white bg-blue-800 hover:bg-white hover:text-black">
                <i className="fa-solid fa-less-than fa-[4px]"></i>
            </button>

          {
            btnarry.map((index)=>{
                let currentStar=start;
                let currentend = end;

                start =start+10;
                end = end +10;
                // console.log(index);
              return  <button key={index} onMouseDown={()=>set(index)}  className={`  border-2  border-black py-1 px-3 m-1 rounded-md hover:bg-blue-800 hover:text-white `}
                    onClick={()=>fun(currentStar,currentend)} 
                >{index+1}</button>
             
              
            })
          }


           <button onClick={nextbtn}
                    className="border-2  border-black py-1 px-3 m-1 rounded-md text-white bg-blue-800 hover:bg-white hover:text-black">
                <i className="fa-solid fa-greater-than fa-[4px]"></i>
            </button>
            
        </div>
    )
}

export default ButtonTabal