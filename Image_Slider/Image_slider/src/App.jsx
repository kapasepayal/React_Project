import Slider from "./Slider";


export default function App() {
  const images =[
    "https://www.creativefabrica.com/wp-content/uploads/2023/04/02/Nature-Background-Graphics-66003217-1.jpg",
    "https://images3.alphacoders.com/823/thumb-1920-82317.jpg",
    "https://windows10spotlight.com/wp-content/uploads/2023/01/81a6e74c8adbf7f55406e8c4b80669d5.jpg",
    "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=2210&quality=70"
      ]
 
  return (
   <div>
    {/* <Slider/> */}
      <Slider data={images}/>
   </div>
  )
}