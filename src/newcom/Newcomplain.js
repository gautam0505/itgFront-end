import React from 'react'
import Navbar from '../components/Navbar'

const Newcomplain = () => {
  return (
   <>
   <Navbar/>
   <div className='ml-8'>
   <div className='mt-20'>
            <div className='flex flex-row '>
                <div className='basis-1/4'>
                    <label className="form-control  max-w-xs">
                <div className="label">
                    <span className="label-text">Complaint Category</span>
                    
                </div>
                <select className="select select-bordered">
                    <option disabled selected>Select Complaint Category</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                    <option>Option 5</option>
                </select>
                </label>
                </div>

            <div className='basis-1/4'><label className="form-control  max-w-xs">
                <div className="label">
                    <span className="label-text">Complaint Sub-Category</span>
                    
                </div>
                <select className="select select-bordered">
                    <option disabled selected>Select Complaint Category</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                    <option>Option 5</option>
                </select>
                </label>
            </div>

            <div className='basis-1/4'>
            <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">Complainant Name</span>
                
            </div>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
           
            </label>
            </div>

            <div className='basis-1/4'>
            <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">Mobile No</span>
                
            </div>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
           
            </label>
            </div>
            
        </div>
    

   </div>

   <div className='mt-20'>
            <div className='flex flex-row '>
                <div className='basis-1/4 '>
                    <label className="form-control">
                    <div className="label">
                        <span className="label-text">Complaint Description</span>
                    </div>
                    <textarea className="textarea textarea-bordered h-24" placeholder="Type Here"></textarea>
                    
                    </label>
                </div>

                <div className='basis-1/4 ml-5'>
                    <label className="form-control">
                    <div className="label">
                        <span className="label-text">Complaint Description</span>
                    </div>
                    <textarea className="textarea textarea-bordered h-24" placeholder="Type Here"></textarea>
                    
                    </label>
                </div>

                <div className='basis-1/4 ml-5'>

                     <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Upload Image</span>
                           
                        </div>
                        <div className="label">
                        <input type="file" className="file-input w-full max-w-xs" />
                        </div>
                     </label>
            
                </div>

           
           
            
        </div>
    

   </div>

   <div className='mt-20'>
            <div className='flex flex-row '>
                <div className='basis-1/4'>
                    <label className="form-control  max-w-xs">
                <div className="label">
                    <span className="label-text">Ward No. </span>
                    
                </div>
                <select className="select select-bordered">
                    <option disabled selected>Select Ward No</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                    <option>Option 5</option>
                </select>
                </label>
                </div>

            <div className='basis-1/4'><label className="form-control  max-w-xs">
                <div className="label">
                    <span className="label-text">Zone </span>
                    
                </div>
                <select className="select select-bordered">
                    <option disabled selected>Select Zone</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                    <option>Option 5</option>
                </select>
                </label>
            </div>

            <div className='basis-1/4'>
            <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">Landline No.</span>
                
            </div>
            <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
           
            </label>
            </div>

            <div className='basis-1/4'>
            <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">Email Id</span>
                
            </div>
            <input type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
           
            </label>
            </div>
            
        </div>
    

   </div>
<br/><br/>
<button className="btn btn-success">Save</button>


   </div>
   </>
  )
}

export default Newcomplain