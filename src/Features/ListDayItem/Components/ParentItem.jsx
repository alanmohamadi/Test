import React from 'react'
import CustoClick from './CustoClick'

function ParentItem() {
    return (
        <div className=' bg-green-00 w-full pt-7 flex justify-between items-center'>
            <div className=' w-[19%]  flex justify-between  text-[1.3vw]'>
                <span className=' cursor-pointer text-[#818085]'>Today</span>
                <span className=' cursor-pointer text-[#818085]'>Tomorrow</span>
                <span className=' cursor-pointer text-[#FFFFFF]'>Next7days</span>
            </div>
            <div className=' w-[35%]  bg-red-800'>
                <div className=' flex  justify-center items-center gap-20 w-[75%] bg-yellow-500'>
                   <CustoClick/>
                   <p className=' text-[#FFFFFF]'>Chance Of Rain</p>
                </div>
            </div>
        </div>
    )
}

export default ParentItem
