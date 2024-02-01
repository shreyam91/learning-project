import { useTypewriter, Cursor} from 'react-simple-typewriter'
import Swal from 'sweetalert2'

import { useState } from 'react'

import {Link} from 'react-router-dom'

import one from '../src/assets/one.mp4'
import help from '../src/assets/help.png'
import please from '../src/assets/please-cute.gif'
import level from '../src/assets/level.png'


const handleClick = () =>{
  Swal.fire({
    title: 'Thank You!',
    imageUrl: '../src/assets/thankyou.gif',
    imageWidth: 300,
    imageHeight: 200,
    timer: 3000,
  })
}

const handleClickHelp = () =>{
  Swal.fire({
    width: 200,
    position: 'bottom-end',
    text: 'Developed by 👻',
    timer: 1500,
    showConfirmButton: false,
  })
}

// const moveButton = () => {
//   var x = Math.floor(Math.random() * window.innerWidth);
//   var y = Math.floor(Math.random() * window.innerHeight)
//   document.getElementsByTagName('button')[0].style.left = x = "px";
//   document.getElementsByTagName('button')[0].style.top = y = "px";
// }


const SurpriseOne = () => {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({
      x: Math.floor(Math.random() * window.innerWidth),
      y: Math.floor(Math.random() * window.innerHeight),
    });
  };

  // const [position, setPosition] = useState({
  //   left: Math.floor(Math.random() * window.innerWidth) + "px",
  //   top: Math.floor(Math.random() * window.innerHeight) + "px",
  // });

  // const moveButton = () => {
  //   setPosition({
  //     left: Math.floor(Math.random() * window.innerWidth) + "px",
  //     top: Math.floor(Math.random() * window.innerHeight) + "px",
  //   });
  // };

  // const moveButton = () => {
  //   var x = Math.floor(Math.random() * window.innerWidth);
  //   var y = Math.floor(Math.random() * window.innerHeight)
  //   document.getElementsByTagName('button')[0].style.left = x = "px";
  //   document.getElementsByTagName('button')[0].style.top = y = "px";
  // }

  // const handleMouseOver = () => {
  //   setPosition({
  //     left: Math.floor(Math.random() * window.innerWidth) + "px",
  //     top: Math.floor(Math.random() * window.innerHeight) + "px",
  //   });
  // };
  // const [position, setPosition] = useState({x:0,y:0});

//   const handleMouseOver = () => {
//     const maxX = window.innerWidth - current.offsetWidth;
//     const maxY = window.innerHeight - current.offsetHeight;

//   const randomX = Math.floor(Math.random() *maxX);
//   const randomY = Math.floor(Math.random() *maxY);

//   setPosition({x:randomX,y:randomY});
// };


// const noBtn = document.querySelector('.no-btn');
// const noBtnRect = noBtn.getBoundingClientRect();

// noBtn.addEventListener('mouseover',() =>{
//   const i = Math.floor(Math.random() *(width - noBtnRect.width)) + 1;
//   const j = Math.floor(Math.random() *(height - noBtnRect.height)) + 1;

//   noBtn.style.left = i + 'px';
//   noBtn.style.top = j + 'px';
// })

  const [msg] = useTypewriter({
    words:['Can we go for a coffee date?', "Can we go on a date night to enjoy a movie? ",'Can we go for a long ride?' ],
    loop:{},
    typeSpeed:120,
    deleteSpeed:60,
  });


  return (
    <>
    <video autoPlay loop muted id='video'>
          <source src={one} type='video/mp4' />
        </video>

    <div className='container-one'>
      <h1 className='heading text-4xl'>  <span>{msg}</span> <Cursor/></h1>
      
      <div className='box'>
        <img src={please} className='image'/>
      </div>

      <div className='button-container'>
        <button className='button' onClick={handleClick}> yes 🤩</button>
        <button className='no-Btn' style={{ position: "fixed", left: position.x, top: position.y }} onMouseMove={handleMouseMove}> No 😠</button>
      </div>

      {/* <button className='bottom-right-button'> 
        <img src={help} onClick={handleClickHelp} className='h-[100px] w-[100px] opacity-[80%]' />
      </button> */}
      
        <Link to='/level'>
           <button className='top-left-button'> 
            <img src={level} className='h-[100px] w-[100px] opacity-[80%]' />
            </button>
        </Link>
        
    </div>

    </>
  )
}

export default SurpriseOne
