import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
    <div className=''>
      <div className="flex w-full  min-h-screen  h-screen mt-32 justify-center">
        <div className="card  bg-success text-stone-50 rounded-box grid h-20 flex-grow place-items-center"><Link to={'/new-complain'}>REGISTER NEW COMPLAIN</Link></div>
        <div className="divider divider-horizontal"></div>
        <div className="card bg-rose-600 text-stone-50 rounded-box grid h-20 flex-grow place-items-center uppercase"><Link to={'/track-complain'}>Track Complain Status</Link></div>
      </div>
    </div>
    </>
  )
}

export default Banner