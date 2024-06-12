import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbb from './components/Navbb'
import Hotel from '../public/images/1.png'
import Chart from '../public/images/2.png'

function App() {


  return (
    <div className='w-full   h-[1500px]   bg-[#EAEFF6] '>

      <div>
        <Navbb />
      </div>
      <div className='flex justify-between px-20 pt-36'>
        <div className='flex flex-col'>
          <div className='w-[441px] flex flex-col gap-y-8'>
            <h1 className='text-[45px]'>
              Discover a hotel that defies a new dimension of luxury.
            </h1>
            <p className='text-[18px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
          </div>
          <div className='flex justify-between items-center'>
            <button className="btn bg-[#597193] text-white">
              Get Started
            </button>
            <button className="btn bg-[#EAEFF6] text-black">
              <div className='bg-[#597193] rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
              </div>
              Get Started
            </button>
          </div>
        </div>

        <div>
          <div className='w-[440px] h-[440px] rounded-full bg-white relative'>
            <img className='absolute h-[460px] right-[30px] top-[40px]' src={Hotel} alt="" />
          <img className='absolute bottom-[-10px] left-[-130px]  ' src={Chart}/>
          </div>
        </div>

      </div>

    </div>
  )
}

export default App
