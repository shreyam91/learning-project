// import { useTypewriter, Cursor} from 'react-simple-typewriter'

// import Swal from 'sweetalert2'
// import {Link} from 'react-router-dom'

// import two from '../src/assets/two.mp4'
// import help from '../src/assets/help.png'
// import level from '../src/assets/level.png'
// import message from '../src/assets/message.png'

// const handleClickHelp = () =>{
//   Swal.fire({
//     width: 200,
//     position: 'bottom-end',
//     text: 'Developed by 👻',
//     timer: 1500,
//     showConfirmButton: false,
//   })
// }

// const handleClickYes = () =>{
//   Swal.fire({
//     title: 'Thanks for accepting!',
//     // text: ' ',
//     imageUrl: '../src/assets/thankyou.gif',
//     imageWidth: 300,
//     imageHeight: 200,
//     // imageAlt: 'Custom image',
//   })
// }
// const handleClickNo = () =>{
//   Swal.fire({
//     title: 'Regret to hear this!',
//     // text: ' ',
//     imageUrl: '../src/assets/please-cute.gif',
//     imageWidth: 300,
//     imageHeight: 200,
//     // imageAlt: 'Custom image',
//   })
// }


// const SurpriseTwo = () => {

//   const [msg] = useTypewriter({
//     words:['A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of organizing extended segments of prose.raphic conventions of any language with a writing system, paragraphs are a conventional prose.of organizing extended segments of prose.raphic conventions of any language with a writing system, paragraphs are a conventional prose.of organizing extended segments of prose.raphic conventions of any language with a writing system, paragraphs are a conventional prose.' ],
//     // loop:{},
//     typeSpeed:120,
//     // deleteSpeed:60,
//   });


//   return (
//     < >
//       <video autoPlay loop muted id='video'>
//           <source src={two} type='video/mp4' />
//         </video>

//     <div className='container'>
//         {/* <h1 className='text-2xl text-center'> Surprise Box Two </h1> */}
//         {/* <p>I just wanted to make sure that I told you that I love you today.</p> */}
//         {/* <img src={message} className='h-[650px] w-[650px]' /> */}
//           <div className='text-overlay'>
//          <p className='text-2xl'><span className='span'> {msg}</span><Cursor/></p>
//          {/* <h1 className='heading text-4xl'>  <span>{msg}</span> <Cursor/></h1> */}
//           </div>
//             <div className='buttons'>

//           <button className='button-accept' onClick={handleClickYes}>Accept 😍</button>
//           <button className='button-deny' onClick={handleClickNo}>Deny 😥</button>
//             </div>


//         {/* <button className='bottom-right-button'> 
//         <img src={help} onClick={handleClickHelp} className='h-[100px] w-[100px] opacity-[80%]' />
//       </button> */}
      
//         <Link to='/level'>
//            <button className='top-left-button'> 
//             <img src={level} className='h-[100px] w-[100px] opacity-[80%]' />
//             </button>
//         </Link>
//     </div>
//     </>
//   )
// }

// export default SurpriseTwo

import React from 'react'
import horror from '../src/assets/horror.mp4'
import help from '../src/assets/help.png'
import level from '../src/assets/level.png'



import Swal from 'sweetalert2'
import {Link} from 'react-router-dom'

import cute from '../src/assets/cute.mp3'
const handleClickHelp = () =>{
  Swal.fire({
    width: 200,
    position: 'bottom-end',
    text: 'Developed by 👻',
    timer: 1500,
    showConfirmButton: false,
  })
}

// const audio = document.getElementById('audio');
// const playPauseBTN = document.getElementById('playPauseBTN');

// const count = 0;

// const playPause = () => {
//   if(count == 0){
//     count = 1;
//     audio.play();
//   }else{
//     count = 0;
//     audio.pause();
//   }
// }


const SurpriseTwo = () => {

//   const audio = document.getElementById('audio');
//   const playPauseBTN = document.getElementById('playPauseBTN');

// const count = 0;

// const playPause = () => {
//   if(count == 0){
//     count = 1;
//     audio.play();
//   }else{
//     count = 0;
//     audio.pause();
//   }
// }
  // function playPause(){
  //   if(count == 0){
  //     count = 1;
  //     audio.play();
  //   }else{
  //     count = 0;
  //     audio.pause();
  //   }}
  
  
  // const play = () =>{
  //   new Audio (cute).play();
  // }
  return (

    // const play = () =>{
    //   new Audio (cute).play();
    // }

    <>
      <video autoPlay loop muted id='video'>
           <source src={horror} type='video/mp4' />
         </video>


    <div className='container text-center justify-center align-center'>


         {/* <button onClick={play}> play sound </button>   &#9208 */} 
      <h2 className='text-white text-2xl'> Ooo... Ooo...  <br />
        <span> Sorry to say but this page is no longer for you or <br />you don't have access for this page ... </span>
        <span> <br />Please go back to homepage or check next level...</span>
      </h2>
    </div>
    <button className='bottom-right-button'> 
         <img src={help} onClick={handleClickHelp} className='h-[100px] w-[100px] opacity-[80%]' />
       </button>
      
         <Link to='/level'>
            <button className='bottom-left-button'> 
             <img src={level} className='h-[100px] w-[100px] opacity-[80%]' />
             </button>
         </Link>
    </>
  )
}

export default SurpriseTwo
