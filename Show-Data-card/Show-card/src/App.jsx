import { useEffect, useState } from "react"
import Card from "./Card";
import ButtonTabal from "./ButtonTabal"


export default function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("")
  const [filteredData, setFilteredData] = useState([]);


  const Api = "https://dummyjson.com/products"

  const display = async () => {
    const respons = await fetch(Api);
    const result = await respons.json();

    setData(result.products)
  }

  useEffect(() => {
    display();
  }, [])

  // console.log("filteredData", filteredData)
  
  useEffect(() => {
   
    const filteredItem = data.filter((item)=>{
    return  item.title.toLowerCase().includes(search.toLowerCase())
    })

    console.log("filteredItem ==============> ", filteredItem);
    setFilteredData(filteredItem.slice(0,10));
    
  },[data,search])



  const handleChangeInput = (e) => {
    setSearch(e.target.value);
  }

  const filter = (from, to) => {
    setFilteredData(data.slice(from, to))

    // console.log(from)
    // console.log(to)
  }

  // console.log(data)

  
  return (

    <div>
      <h1 className="text-3xl text-center font-bold  font-serif mt-10  ">Display Card</h1>

      {/* <Search data={data}/> */}
      <div className=" ml-10 p-10 ">
        <label htmlFor="search" className="text-xl font-serif font-bold">Search Hear :</label>
        <input onChange={handleChangeInput}
          className="font-serif py-1 w-60 pl-3 ml-2 "
          type="text"
          value={search}
          id="serach"
          placeholder="search hear" />

      </div>
      <div className="grid grid-cols-4 gap-4 m-10 border-2 mb-2 border-gray-500 p-10">
        {filteredData.map((item) => (
          <div key={item.id}>
         
           <Card productData={item} />
          </div>
        ))}

      </div>

      <ButtonTabal data={data} fun={filter} />
    </div>

  )
}
