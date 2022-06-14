import React from 'react';
import { Button } from 'antd';


function Navbar() {
  return (
    <div className='w-full flex justify-between items-center p-4 shadow-md'>
        <div className='flex justify-center items-center'>
            <span className='px-10 font-bold text-lg'>ATools.</span>
        </div>
        <div className='grid grid-cols-2 justify-between items-center invisible sm:visible w-1/2 lg:w-2/6 md:px-5 lg:px-10'>
            <div className='mx-2 lg:mx-1'>
                <Button size='default' className='bg-slate-800  text-white rounded-md border-none focus:bg-slate-900  focus:text-white hover:bg-slate-800  hover:text-white hover:border-none' block>start free trial</Button>
            </div>
            <div className='mx-2 lg:mx-1'>
                <Button size='default' className='bg-orange-500 text-white rounded-md border-none focus:bg-orange-600 focus:text-white hover:bg-orange-500 hover:text-white hover:border-none' block>Login</Button>
            </div>
        </div>    
    </div>
  )
}

export default Navbar