import React from 'react'

const Footer = () => {
  return (
    <section className=" pb-3  flex justify-center items-center flex-wrap border-t-2 border-gray-300 py-3 gap-10">
      <div className="text-white-500 font-bold flex gap-2">
        <p className=' hover:text-gray-400 cursor-pointer'>Terms & Conditions</p>
        <p>|</p>
        <p className='hover:text-gray-400 cursor-pointer'>Privacy Policy</p>
      </div>
      <p className="text-white-500 font-bold">© 2025 PrepHire.All rights reserved.</p>
    </section>
  )
}

export default Footer