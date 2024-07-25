import React from 'react'
import Navbar from '../components/Navbar'

const Trackcom = () => {
  return (
    <>
    <Navbar/>
    <div className='mt-20 ml-10'>

        <div className='flex flex-row'>
            <div className='basis-1/4'>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Search Status By Complain Number</span>
                </div>
                <input type="text" placeholder="Enter Complain Number Here" className="input input-bordered w-full max-w-xs" />
                <br/>
                <button className="btn btn-success w-fit">Search</button>
              
            </label>
            </div>
        </div>
    </div>
    </>
  )
}

export default Trackcom