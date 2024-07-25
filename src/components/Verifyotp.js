import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Verifyotp = () => {


   
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

 

  return (
    <>
      <div>
        {/* You can open the modal using document.getElementById('my_modal_3').showModal() method */}
        <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>Open Modal</button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg">OTP Verification</h3>
            <p className="py-4">Enter your OTP to verify your account </p>
            <div className="flex justify-center items-center space-x-2">
              {otp.map((data, index) => (
                <input
                  className="w-12 h-12 text-center form-control border rounded-lg"
                  type="text"
                  name="otp"
                  maxLength="1"
                  key={index}
                  value={data}
                  onChange={e => handleChange(e.target, index)}
                  onFocus={e => e.target.select()}
                />
              ))}
            </div>
            <div className="mt-4">
              <Link to={'/Home'}>
              <button className="btn btn-primary">Verify OTP</button>
              
              </Link>
            </div>
          </div>
        </dialog>
      </div>
    </>
  )
}

export default Verifyotp
