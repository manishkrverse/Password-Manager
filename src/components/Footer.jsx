import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 text-white flex flex-col justify-center items-center  w-full'>
            <div className="logo font-bold text-white text-2xl">
                <span className='text-green-500'> &lt;</span>
                {/* &lt; means less than &gt; means greater than */}

                <span>Password</span><span className='text-green-500'>Manager/&gt;</span>


            </div>
            <div className='flex justify-center items-center'> Created with <img className='w-7 mx-2' src="icons/heart.png" alt="" /> BY MANISH </div>
        </div>
    )
}

export default Footer
