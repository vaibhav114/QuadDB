import React, { useEffect, useState } from "react";

const Navbar = ({isOn ,toggleSwitch}) => {
  const [count, setCount] = useState(60);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 60));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // const [isOn, setIsOn] = useState(false);

  // const toggleSwitch = () => {
  //   setIsOn(!isOn);
  //   document.body.style.backgroundColor = isOn ? '#191d28'  : '#f8f9fa'; 
  // };

  const percentage = (count / 60) * 100;

  return (
    <div className="p-3 pt-8">

      <div className="flex justify-around">
        <div>
          <img
            src="https://hodlinfo.com/static/media/HODLINFO.8f78fc06.png"
            className="w-72"
          />
        </div>

        <div className="flex pl-5 pr-5 gap-6">
          <div>
            <select
              name="curr"
              id="curr"
              className={ `py-2 px-3 rounded-xl cursor-pointer ${isOn? 'bg-gray-200 text-black' :  'bg-[#2e3241] text-white  '}` }
            >
              <option value="inr" className="bg-white text-black">
                INR
              </option>
            </select>
          </div>

          <div>
            <select
              name="crypto"
              id="crypto"
              className={ `py-2 px-3 rounded-xl cursor-pointer ${isOn? 'bg-gray-200 text-black' :  'bg-[#2e3241] text-white  '}` }
            >
              <option value="btc" className="bg-white text-black ">
                BTC
              </option>
              <option value="eth" className="bg-white text-black">
                ETH
              </option>
              <option value="usdt" className="bg-white text-black">
                USDT
              </option>
              <option value="xrp" className="bg-white text-black">
                XRP
              </option>
              <option value="trx" className="bg-white text-black">
                TRX
              </option>
              <option value="dash" className="bg-white text-black">
                DASH
              </option>
              <option value="zec" className="bg-white text-black">
                ZEC
              </option>
              <option value="xem" className="bg-white text-black">
                XEM
              </option>
            </select>
          </div>

          <div className=" mt-2">
            <a
              href="https://wazirx.com/signup"
              target="_blank"
              className={ `py-2 px-3 rounded-xl cursor-pointer ${isOn? 'bg-gray-200 text-black' :  'bg-[#2e3241] text-white  '}` }
            >
              BUY BTC
            </a>
          </div>
        </div>

        <div className="flex gap-7 items-center ">
          <div
            className="w-10 h-10 flex justify-center items-center rounded-full border-4"
            style={{
              borderColor: `rgba(255, 255, 255, ${(100 - percentage) / 100})`,
              background: "#191d28",
              transition: "border-color 1s linear",
            }}
          >
            <span className="text-md text-white">{count}</span>
          </div>

          <div>
            <span className={` ${isOn ? 'text-black' : 'text-white' }  cursor-pointer bg-[#3dc6c1] pl-3 pr-3 pt-3 pb-3 rounded-xl`}>
              Connect Telegram
            </span>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div
              className={`w-16 h-8 rounded-full p-1 cursor-pointer flex items-center transition-all duration-300 ${
                isOn ? "bg-blue-400" : "bg-[#2e3241]"
              }`}
              onClick={toggleSwitch}
            >
              <div
                className={`w-6 h-6 ${isOn? 'bg-white':'bg-[#3dc6c1]'} rounded-full shadow-md transform transition-transform duration-300 ${
                  isOn ? "translate-x-8" : "translate-x-0"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
