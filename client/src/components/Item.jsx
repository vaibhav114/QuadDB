import React from 'react'

const Item = ({ticker}) => {

  return (
<div className='w-full h-full flex justify-center items-center'>
    <div className='text-white flex justify-between pl-10 pr-10 w-full h-full'>

        <div className='flex-1 flex justify-center items-center text-2xl'>
            {ticker.id}
        </div>
        <div className='flex-1  flex justify-center items-center text-2xl'>
            {ticker.name}
        </div>
        <div className='flex-1 flex justify-center items-center text-2xl'>
            {ticker.last}
        </div>
        <div className='flex-1 flex justify-center items-center text-2xl'>
            <div className='flex'>
                <h1 className='pr-1'>{ticker.buy}</h1> /
                <h1 className='pl-1'>{ticker.sell}</h1>
            </div>
        </div>
        <div className='flex-1 flex justify-center items-center text-2xl text-red-500'>
            -3.14 %
        </div>
        <div className='flex-1 flex justify-center items-center text-2xl'>
            $83,220
        </div>
    </div>
</div>

  )
}

export default Item