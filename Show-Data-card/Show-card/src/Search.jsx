import { useEffect, useState } from "react"



function Search({data}) {

    
    

    const [search, setsearch] = useState(" ")
    const [filteredData, setFilteredData] = useState(data)

    let HandaleNewChange = (event) => {
        console.log("hellow");
        setsearch(event.target.value)

    }

    console.log(filteredData);
    
    
    useEffect(()=>{
       const filteredItems = data.filter(item =>
            item.title.toLowerCase().includes(search.toLowerCase())
          );

          setFilteredData(filteredItems)
    }, [data, search])
    
    

    // console.log(filteredItems);

    // console.log(data)

    return (

        <div className=" ml-10 p-10 ">
            <label htmlFor="search" className="text-xl font-serif font-bold">Serch Hear :</label>
            <input onChange={HandaleNewChange}
                className="font-serif py-1 w-60 pl-3 ml-2 "
                type="text"
                value={search}
                id="serach"
                placeholder="search hear" />

        </div>

    )
}
export default Search



// import { useState } from 'react';

// const SearchComponent = () => {
//   const items = [
//     { title: 'Apple', description: 'A fruit' },
//     { title: 'Banana', description: 'Yellow fruit' },
//     { title: 'Cherry', description: 'Small red fruit' },
//     { title: 'Date', description: 'Sweet fruit' }
//   ];

//   const [query, setQuery] = useState('');

//   const filteredItems = items.filter(item =>
//     item.title.toLowerCase().includes(query.toLowerCase())
//   );

//   return (
//     <div>
//       <input 
//         type="text" 
//         placeholder="Search by title..." 
//         value={query} 
//         onChange={e => setQuery(e.target.value)} 
//       />
      
//       <ul>
//         {filteredItems.map((item, index) => (
//           <li key={index}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SearchComponent;
