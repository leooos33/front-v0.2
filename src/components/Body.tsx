import React from 'react'
import Tabs from './Tabs'
import DW from './DW'
const Body = () => {

  return (
    <div className="mx-auto w-full max-w-7xl px-24 overflow-x-auto font-mono">
        <div className="mx-auto  bg-back1-default py-4 pl-4">
            <div className="flex flex-wrap">
                
                <DW />

                <div className="px-3 lg:w-2/5 md:w-1/2 w-full">
                    <div className="flex flex-row items-left mx-auto rounded-md py-4 bg-back1-b2">
                        <div className= 'px-2'>
                            <div className=''>Current share price
                            </div>
                        </div>          
                        <div className= 'pl-16'> $1.4269 (+0.24%)
                        </div>
                    </div>
                        <div className="flex flex-row items-left mx-auto rounded-md py-4 my-4 bg-back1-b2">
                            <div className= 'px-2'>
                                <div className=''>CHART</div>
                            </div>          
                        </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full">
                    <div className="flex flex-row items-left mx-auto rounded-md py-4 bg-back1-b2">
                        <div className= 'px-2'>
                            <div className=''>My performance:
                            </div>
                            

                            <div className="flex flex-row items-left mx-auto rounded-md pt-5 bg-back1-b2">
                        <div className= 'text-sm text-gray1-g50'>
                            <div className=''>Entry share price
                            </div>
                        </div>          
                        <div className= 'pl-20 text-sm text-gray1-g50'> $1.02
                        </div>
                            </div>

                            <div className="flex flex-row items-left mx-auto rounded-md pt-3 bg-back1-b2">
                        <div className= 'text-sm text-gray1-g50'>
                            <div className=''>Hedgehog performance
                            </div>
                        </div>          
                        <div className= 'pl-12 text-sm text-gray1-g50'> +39.1%
                        </div>
                            </div>

                            <div className="flex flex-row items-left mx-auto rounded-md pt-3 bg-back1-b2">
                        <div className= 'text-sm text-gray1-g50'>
                            <div className=''>ETH hodl
                            </div>
                        </div>          
                        <div className= 'pl-36 -mx-1 text-sm text-gray1-g50'> +14.2%
                        </div>
                            </div>

                        </div>          
                    </div>
                    <div className="flex flex-row items-left mx-auto rounded-md py-4 my-4 bg-back1-b2">
                        <div className= 'px-2'>
                            <div className=''>Vault snapshot:
                            </div>
                            

                            <div className="flex flex-row items-left mx-auto  bg-back1-b2 border-b border-dashed py-2">
                                <div className= 'text-sm text-gray1-g50'>
                                    <div className='mt-5'>Exposure
                                    </div>
                                </div>          
                                <div className= 'pl-32 -ml-2  text-sm text-white'> ETH 51.1%
                                <p className='-ml-2'>USDC 24.3%</p>
                                <p className='-ml-4'>oSQTH 24.6%</p>
                                </div>
                            </div>

                            <div className="flex flex-row items-left mx-auto bg-back1-b2 border-b border-dashed py-2">
                        <div className= 'text-sm text-gray1-g50'>
                            <div className=''>Total ETH Value
                            </div>
                        </div>          
                        <div className= 'pl-12 text-sm text-white'> 7569.41 ETH
                        </div>
                            </div>

                            <div className="flex flex-row items-left mx-auto bg-back1-b2 border-b border-dashed py-2">
                        <div className= 'text-sm text-gray1-g50'>
                            <div className=''>ETH-USDC range
                            </div>
                        </div>          
                        <div className= 'pl-8 text-sm text-white'> 860.97-1155.22
                        </div>
                            </div>

                            <div className="flex flex-row items-left mx-auto  bg-back1-b2 border-b border-dashed py-2">
                        <div className= 'text-sm text-gray1-g50'>
                            <div className=''>oSQTH-ETH range
                            </div>
                        </div>          
                        <div className= 'pl-8 text-sm text-white'> 0.0645-0.0865
                        </div>
                            </div>

                            <div className="flex flex-row items-left mx-auto bg-back1-b2 border-b border-dashed py-2">
                        <div className= 'text-sm text-gray1-g50'>
                            <div className=''>Last rebalance:
                            </div>
                        </div>          
                        <div className= 'pl-12 text-sm text-white'> 11h 22m ago
                        </div>
                            </div>

                        </div>          
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Body