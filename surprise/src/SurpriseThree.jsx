import { useEffect, useState } from "react"
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom'
import Confetti from 'react-confetti'
import { useTypewriter, Cursor} from 'react-simple-typewriter'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Swiper, SwiperSlide} from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import bvideo from '../src/assets/bvideo.mp4'
// import help from '../src/assets/help.png'
import level from '../src/assets/level.png'
import working from '../src/assets/working-on.gif'


const handleClickHelp = () =>{
  Swal.fire({
    width: 200,
    position: 'bottom-end',
    text: 'Developed by 👻',
    timer: 1500,
    showConfirmButton: false,
  })
}



const SurpriseThree = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      url: "../src/assets/eeee.png",
      alt: "First slide",
    },
    {
      id: 2,
      url: "../src/assets/birthday.jpg",
      alt: "Second slide",
    },
    {
      id: 3,
      url: "../src/assets/view.png",
      alt: "Third slide",
    },
  ];

  const handlePrevClick = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const handleNextClick = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const [msg] = useTypewriter({
    words:['wishing you a very very happy birthday.... 🤩😍🥳✨💝🎂' ],
    // loop:{},
    typeSpeed:120,
    // deleteSpeed:120,
  });

  const [bday] = useTypewriter({
    words:['Happy birthday to one of the few people whose birthday I can remember without a Facebook reminder.','Just wanted to be the first one to wish you happy birthday so I can feel superior to your other well-wishers. So, very very happy birthday!','Hope your special day brings you all that your heart desires! Here’s wishing you a day full of pleasant surprises! Happy birthday!' ],
    loop:{},
    typeSpeed:120,
    deleteSpeed:60,
  });

  

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds,setSeconds] = useState(0);

  const deadline = "April,25,2024";

  const getTime = () =>{
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time/(1000*60*60*24)))
    setHours(Math.floor(time/(1000*60*60)%24))
    setMinutes(Math.floor((time/1000/60)%60))
    setSeconds(Math.floor((time/1000)%60))
  }

  useEffect(() =>{
    const interval = setInterval(() => getTime(deadline),1000)
    return () => clearInterval(interval)
  },[]);

const [showConfetti, setShowConfetti]= useState(false);

const handleClick = () => {
  setShowConfetti(true);
  setTimeout(() =>{
    setShowConfetti(false);
  },10000);
}

const notify = () => toast("Your order is Placed succesfully!");

  return (
    <>
    <section>
      <video autoPlay loop muted id='video' className="opacity-[80%]">
          <source src={bvideo} type='video/mp4' />
      </video>

      
      <div className="container-three">
        < div className="counter">

          <div className=" text-green-400 text-center ">
              <h2 className=""> {days <10 ? "0" + days: days}</h2>
              <span> <h2 className=' '> Days </h2></span>
          </div>

          <div className="text-yellow-300 text-center">
              <h2 className=" "> {hours <10 ? "0" + hours: hours}</h2>
              <span> <h2 className=' '> Hours </h2></span>
          </div>

          <div className="text-white-300 text-center">
              <h2 className="text-center"> {minutes <10 ? "0" + minutes: minutes}</h2>
              <span> <h2 className=''> Minutes </h2></span>
          </div>

          <div className="text-orange-300 text-center">
              <h2 className=""> {seconds <10 ? "0" + seconds: seconds}</h2>
              <span> <h2 className=''> Seconds </h2></span>
          </div>

          </div>
            {/* <h2 className="text-5xl text-black font-bold "> <span>  {msg} </span> <Cursor/> </h2> */}
            <h2 className="text-5xl text-black font-bold "> {msg}<Cursor/> </h2>
        

        <div className="center-container">
        <div className="box"> 
          <button className="button-bday" onClick={handleClick}> Happy BirthDay</button>
          {showConfetti && <Confetti />}
         </div>
        </div>
      </div>

    </section>

    <section className="second-section">

            <div className="container-section">
              <div className="left-container">
                  <h2 className="text-center text-4xl"> this is under maintenance.... </h2>
                    <img src={working} alt="Under maintenance"  className="align-center"/>
              </div>

              <div className="right-container">
                
                <div className="box-1">
                <div className="inner-data">

                    <h2 className="text-center text-2xl font-medium underline text-yellow-300 mb-[5px]"> Message Box </h2>

                  </div>
                    <h2 className="text-3xl text-white"> <span> {bday} </span> <Cursor/> </h2>
                </div>
                <div className="box-2"> 

                <div className="inner-data">

                      <h2 className="text-center text-3xl font-medium underline"> Gift Center </h2>

                </div>

                <div className="text-xl gap-1 ml-[10px] text-white font-serif mt-[5px]">
                    <div className="">
                      <input className="" type="checkbox" value=""  />
                      <label className=" ml-[10px]">
                          Surprise Box 1
                        </label>
                      </div>
                      
                      <div className="">
                      <input className="" type="checkbox" value=""  />
                      <label className=" ml-[10px]" >
                          Surprise Box 2
                        </label>
                      </div>
                      
                      <div className="">
                      < input className="" type="checkbox" value=""  /> 
                      <label className=" ml-[10px]" >
                          Surprise Box 3
                        </label>
                      </div>
                      
                      <div className="">
                      <input className="" type="checkbox" value=""  />
                      <label className=" ml-[10px]" >
                          Surprise Box 4 
                        </label>
                      </div>
                      

                  </div>

                <div className="buttton-order mt-[60px]">
                <button className=" order-button" onClick={notify} > Place your order </button>
                <ToastContainer />

                </div>

                </div>
              </div>
            </div>

    </section>

      {/* <button className='bottom-right-button'> 
         <img src={help} onClick={handleClickHelp} className='h-[100px] w-[100px] opacity-[80%]' />
       </button> */}
      
         <Link to='/level'>
            <button className='top-left-button'> 
             <img src={level} className='h-[100px] w-[100px] opacity-[70%]' />
             </button>
         </Link>
    </>
  )
}

export default SurpriseThree

//       {/* <p>“Happy birthday to one of the few people whose birthday I can remember without a Facebook reminder.”</p>

//         <p>“Just wanted to be the first one to wish you happy birthday so I can feel superior to your other well-wishers. So, happy birthday!”</p>

//         <p>“Hope your special day brings you all that your heart desires! Here’s wishing you a day full of pleasant surprises! Happy birthday!”</p> */}
