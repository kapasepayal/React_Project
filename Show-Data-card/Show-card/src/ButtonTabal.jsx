import { useState } from "react";


function ButtonTabal({ data, fun }) {

 const [currentPage, setcurrentPage] = useState(0);

  let pageperItem = 10;

  let totalPage = Math.ceil(data.length / pageperItem)
 
  let btnarry = [];
  for (let i = 0; i < totalPage; i++) {
      btnarry[i] = i;
  }
  console.log(btnarry)


  const updated = (index)=>{
    setcurrentPage(index);
    fun(index*pageperItem , (index+1)*pageperItem)
  }

console.log(currentPage-1)
  return (
    <div className="flex justify-end mr-10">


      
      <button  onMouseDown={()=>updated(currentPage-1)} 
                
             className={` ${currentPage ===0 ? "bg-gray-300 cursor-not-allowed":""} border-2  border-black py-1 px-3 m-1 rounded-md
              text-white bg-blue-800`}>
                      
                <i className="fa-solid fa-less-than fa-[4px]"></i>
            </button>

      {
            btnarry.map((index)=>{
           return  <button key={index}   
              onClick={()=>updated(index)} 
                       className={` ${currentPage===index? "bg-blue-800":"bg-white text-black"} border-2  border-black py-1 px-3 m-1 rounded-md`}
                >{index+1}</button>
             
            })
          }


           <button onClick={()=>updated(currentPage+1)}
                    className={` ${currentPage ===totalPage-1 ? "bg-gray-300 cursor-not-allowed":""} border-2  border-black py-1 px-3 m-1 rounded-md
                    text-white bg-blue-800`}>
                <i className="fa-solid fa-greater-than fa-[4px]"></i>
            </button>

    </div>
  )
}

export default ButtonTabal












