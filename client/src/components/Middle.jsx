import React from 'react'

const Middle = ({isOn}) => {
  return (
    <div className='mt-10'> 
        <div>

            <div className='flex justify-center'> 
                <h1 className={`${isOn ? 'text-black' : 'text-gray-400'} text-4xl font-bold tracking-wider `}>Best Price To Trade</h1>
            </div>


            <div className='flex justify-between pl-32 pr-32 mt-7'>

                <div className=' flex flex-col items-center'>
                    <h1 className='text-[#3dc6c1] text-4xl'>0.1 %</h1>
                    <h2 className={`${isOn ? 'text-black' : 'text-gray-400' } pt-2 text-lg`}>5 Mins</h2>
                </div>

                <div className=' flex flex-col items-center'>
                    <h1 className='text-[#3dc6c1] text-4xl'>0.96 %</h1>
                    <h2 className={`${isOn ? 'text-black' : 'text-gray-400' } pt-2 text-lg`}>1 Hour</h2>
                </div>

                <div>
                    <h1 className={` ${isOn ? 'text-black' : 'text-white'} tracking-wider text-[50px]`}>$ 26,56,110</h1>
                </div>

                <div className=' flex flex-col items-center'>
                    <h1 className='text-[#3dc6c1] text-4xl'>2.73 %</h1>
                    <h2 className={`${isOn ? 'text-black' : 'text-gray-400' } pt-2 text-lg`}>1 Day</h2>
                </div>

                <div className=' flex flex-col items-center'>
                    <h1 className='text-[#3dc6c1] text-4xl'>7.51 %</h1>
                    <h2 className={`${isOn ? 'text-black' : 'text-gray-400' } pt-2 text-lg`}>7 Days</h2>
                </div>

            </div>

            <div>
                <h1 className={`${isOn ? 'text-black' : 'text-gray-400'} text-2xl font-bold tracking-wider flex justify-center mt-7`}>Average BTC/INR set price including commission</h1>
            </div>

        </div>
    </div>
  )
}

export default Middle