import { useState } from "react";
import './Hero.css'
// import video from "../../public/assets/ani-1.mp4"

function Hero() {

    let array = ["ani-1.mp4", "ani-2.mp4", "ani-3.mp4", "ani-4.mp4"];
    // let array=["bus.jpg","gil-8.jpg","w-5.jpeg","w=4.jpeg"];
    // let array=["1","8","5","4"];


    const [toggleState, setToggleState] = useState(0);
    const [state, setState] = useState(1);
    const [istrue, setTrue] = useState(true);
    const toggleTab = (index) => {

        console.log("hellow");
        setToggleState(index);
        // setText("new");
    }

    const changeState = (index) => {
        console.log("bye");
        console.log(index);
        let one = setState(array[index]);
        console.log(one);
    }

    const changeTrue = () => {
        setTrue(!istrue);
    }

    return (


        <div className='flex'>

            {istrue ? (

                <i onClick={() => changeTrue()} className="fa-solid fa-bars absolute fa-2x top-[85px] left-6 text-white z-10"></i>
            ) : (
                <i onClick={() => changeTrue()} className="fa-solid fa-xmark absolute fa-2x top-[76px] left-6 text-white"></i>
            )}
            <div className={istrue === true ? " active-box1 backflow" : "box-1 show bg-white border-gray-200  border-2 shadow-lg shadow-stone-500/100 border-stone-200 w-[20.4rem] h-dvh text-center pt-1 mr-2   "}>
                <h1 className='font-bold  mb-2 text-2xl font-serif cursor-pointer border-2 bg-violet-900 mx-1 py-2 text-white '>Menu OPtion</h1>
                <h1 className='vid  border-gray-300 ' onClick={() => changeState(0)}>Video-1</h1>
                <h1 className='vid ' onClick={() => changeState(1)}>video-2</h1>
                <h1 className='vid ' onClick={() => changeState(2)}>Video-3</h1>
                <h1 className='vid ' onClick={() => changeState(3)}>Video-4</h1>
            </div>

            <div className={istrue === true ? "absolute top-[68px] left-[-1rem] mr- w-screen h-full" : "w-auto  absolute top-[68px] left-[20rem] "}>
                {/* <div className= 'bg-voilet-600  ml-3 h-1/2  flex justify-center runing  bg-black'> */}

                <div className={istrue === true ? "bg-voilet-600 py-6 ml-3 h-[26rem]  flex justify-center  bg-black" : 'bg-voilet-600  ml-3 h-1/2  flex justify-center runing  bg-black'}>
                    {console.log(state)}
                    <iframe className="w-2/3 h-80 my-6 " src={`../../public/assets/${state}`} ></iframe>
                    {/* <iframe src="../../public/assets/ani-1.mp4"></iframe> */}
                    {/* <video src="../../public/assets/ani-1.mp4"></video> */}
                    {/* <video src="../../"></video> */}
                    
                </div>


                <div className=" ">
                    <div className={istrue === true ? "pl-40 w-[84rem] flex bg-white  h-12 pt-1 justify-between  ml-3 " : " flex bg-white  h-12 pt-1 justify-between  ml-3"} >

                        <button className={toggleState === 1 ? " active-tabs" : "tabs"}

                            onClick={() => toggleTab(1)}>Discription</button>

                        <button className={toggleState === 2 ? " active-tabs" : "tabs"}
                            onClick={() => toggleTab(2)}>Overview</button>

                        <button className={toggleState === 3 ? " active-tabs" : "tabs"}
                            onClick={() => toggleTab(3)}>Trending</button>

                        <button className={toggleState === 4 ? " active-tabs " : "tabs"}
                            onClick={() => toggleTab(4)}>Business</button>
                    </div>

                    <div className={istrue === true ? "hadow-lg shadow-stone-500/100 tabs_content border-b-4 text-center text-4xl font-bold h-[18rem] w-[94rem] bg-white ml-3 pl-8rem" : 'tabs_content  text-center text-4xl font-bold h-3/4 w-[74rem] bg-white ml-3 pl-8 '}>
                        <div className={toggleState === 1 ? " active-con" : "con"} >
                            <h1 className="pb-4 text-violet-900 pt-8  text-5xl" >Discription </h1>
                            <p className="text-[16px] text-black px-20">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem numquam debitis quos.</p>
                        </div>
                        <div className={toggleState === 2 ? " active-con" : "con"}>
                            <h1 className="pb-4 text-violet-900 pt-8  text-5xl" >Overview</h1>
                            <p className="text-[16px] text-black px-20">Lorem ipsum dolor sit amet consectetur, adipisicing elit.  adipisicing elit. Rem numquam debitis quos.</p>
                        </div>
                        <div className={toggleState === 3 ? " active-con" : "con"}>
                            <h1 className="pb-4 text-violet-900 pt-8  text-5xl" >Trainding</h1>
                            <p className="text-[16px] text-black px-20">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem numquam debitis quos.</p>
                        </div>
                        <div className={toggleState === 4 ? " active-con" : "con"}>
                            <h1 className="pb-4 text-violet-900 pt-8  text-5xl" >Bussines</h1>
                            <p className="text-[16px] text-black px-20">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet  Rem numquam debitis quos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero