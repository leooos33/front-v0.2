import React, { useState } from 'react'

const Tabs = () => {

  const [currentTab, setCurrentTab] = useState("Deposit")

  return (
      <div className="p-1 lg:w-1/3 md:w-1/2 w-full">
        <div className="flex flex-row items-center mx-auto rounded-md py-4 bg-back1-b2">
          <div className= 'px-2'>
            <ul className="flex  items-center text-center ">
              <a href="#" className="rounded-l-lg border-blue1-light border-2  px-4 py-2 transition">Deposit</a>
              <a href="#" className="border-blue1 border-t-2 border-r-2 border-b-2 px-4 py-2 transition text-gray1-g50 hover:text-white">Withdraw</a>
            </ul>
          </div>          
        </div>
      </div>
  )
}

export default Tabs
