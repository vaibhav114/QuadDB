import React, { useEffect, useState } from 'react'
import Item from './Item'
import axios from 'axios'
const Table = ({isOn}) => {

    const [tickers, setTickers] = useState([])
    useEffect(() => {

        const fetchData = async ()=>{
            const response  = await axios.get("http://localhost:5000/main/get-tickers")
            setTickers(response.data)
        }
        fetchData()
    }, [])
    
  return (
    <div className='mt-16'>
        <div>
         <div className={`${isOn ? 'text-black' :'text-gray-400' }  flex justify-between mr-52 ml-64 text-2xl mb-5 `}>
            <div>#</div>
            <div>Platform</div>
            <div>Last Traded Price</div>
            <div>Buy / Sell Price</div>
            <div>Difference</div>
            <div>Savings</div>
         </div>

         <div>
            {tickers.map((item,index)=>{
                return <div className='mb-4 bg-[#2e3241] mr-20 ml-20 rounded-xl pt-3 pb-3 ' key={index}>
                    <Item ticker = {item} />
                    </div>
            })
            }
         </div>
        </div>
    </div>
  )
}

export default Table