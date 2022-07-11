import React from 'react'

const Info = () => {

  return (
    <div className="mx-auto w-full max-w-7xl px-24 overflow-x-auto ">
        <div className="flex flex-row items-left mx-auto bg-gradient-to-r from-info0 to-info1 py-4">
            <div className= 'px-4'>
                <div className=''>Provides liquidity for the ETH-USDC pool on Uniswap V3 and hedges it with LPing for the oSQTH-ETH pool.</div>
                <p className=''>Earns trading fees while experiencing linear ETH payoff. </p>
            </div>          
            <button className="text-white bg-indigo-500 border-0 my-1 px-8 mx-8 rounded">Learn more</button>
        </div>
</div>
  )
}

export default Info





