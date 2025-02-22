
import { useState } from "react";

function App() {

  const [color, setcolor] = useState("white");
  let array = ["red-600", "yellow-600", "green-600", "blue-600"]

  function changeColor(index) {
    setcolor(array[index]);
  }

  let a = 10;
  console.log(a);

  return (
    <div className="text-center mt-20">
      {console.log(color)}
      <div className={`border-2 py-32 mx-96 bg-${color}`}>
        Background Color
      </div>
      <div className="mt-5">
        <button className="border-2 rounded-md bg-red-600 p-2 text-white mx-5"
          onClick={() => changeColor(0)}>Red</button>

        <button className="border-2 rounded-md bg-yellow-600 p-2 text-white mx-5"
          onClick={() => changeColor(1)} >yellow</button>

        <button className="border-2 rounded-md bg-green-600 p-2 text-white mx-5"
          onClick={() => changeColor(2)} >green</button>

        <button className="border-2 rounded-md bg-blue-600 p-2 text-white mx-5"
          onClick={() => changeColor(3)} >blue</button>
      </div>
    </div>
  )
}

export default App