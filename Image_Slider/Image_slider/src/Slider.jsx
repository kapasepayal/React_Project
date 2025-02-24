import { useState } from "react"
import Buttons from "./Buttons"

function Slider({ data }) {
    const [activeIndex, setActiveIndex] = useState(0)

    const inc = () => {
        setActiveIndex(activeIndex + 1)
        if (data.length === activeIndex + 1) {
            setActiveIndex(0)
        }
    }

    const dec = () => {
        setActiveIndex(activeIndex - 1)
        // console.log(images.length)
        if (activeIndex - 1 < 0) {
            setActiveIndex(data.length - 1)
        }
    }

    return (

        <div className=" flex justify-center mt-48 mx-40">
            <Buttons fun={dec} val={"Previous"} />

            {data.map((item, index) => (
                <div key={index} className={` w-96 h-52 ${activeIndex === index ? "block" : "hidden"}`}  >

                    <img src={item} alt="no img fount" />

                </div>
            ))}
            
            <Buttons fun={inc} val={"Next"} />
        </div>
    )
}

export default Slider