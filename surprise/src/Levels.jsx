import Swal from 'sweetalert2'

import background from '../src/assets/background.mp4'
import help from '../src/assets/help.png'
import home from '../src/assets/home.png'
import view from '../src/assets/view.png'

import {Link} from 'react-router-dom'


const handleClickHelp = () =>{
  Swal.fire({
    width: 200,
    position: 'bottom-end',
    text: 'Developed by 👻',
    timer: 1500,
    showConfirmButton: false,
  })
}

const Levels = () => {
  return (
    <>
    <video autoPlay loop muted id='video'>
          <source src={background} type='video/mp4' />
        </video>

        {/* <h2 className='text-center text-3xl'> Click anyone to open </h2> */}

      <div className='container'>

      <div className='box'>
        <Link to='/surpriseone'>
        <img src={view} className='image'/>
        </Link>
      </div>

      <div className='box'>
        <Link to='/surprisetwo'>
        <img src={view} className='image'/>
        </Link>
      </div>

      <div className='box'>
        <Link to='/surprisethree'>
        <img src={view} className='image'/>
        </Link>
      </div>

        <button className='bottom-right-button'> 
        <img src={help} onClick={handleClickHelp} className='h-[100px] w-[100px] opacity-[80%]' />
        </button>
        
        <Link to='/home'>
           <button className='bottom-left-button'> 
            <img src={home} className='h-[100px] w-[100px] opacity-[80%]' />
            </button>
        </Link>
      </div>
    </>
  )
}

export default Levels
