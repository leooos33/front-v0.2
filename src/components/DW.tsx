import React from 'react'

const DW = () => {

  return (
    <div className="p-1 lg:w-1/3 w-full bg-back1-b2 rounded-lg">
    <div className="mx-auto w-7/8 overflow-x-auto font-mono">
        <div className="container p-4 mx-auto">

            <div className="flex lg:w-3/5 mx-auto flex-row justify-center">
                <div className= 'px-2'>
                    <ul className="flex items-center text-center ">
                        <a href="#" className="rounded-l-lg border-blue1-light border-2 px-10 py-2 transition">Deposit</a>
                        <a href="#" className="rounded-r-lg border-blue1 border-t-2 border-r-2 border-b-2 px-10 py-2 transition text-gray1-g50 hover:text-white">Withdraw</a>
                    </ul>
                </div>
            </div>

            <div className="flex w-full mx-auto flex-row justify-left pt-3">
                <h1 className="flex px-3 ">Amounts</h1>
                <button className="flex-shrink-0 mx-48 text-white bg-indigo-500 border-0 px-1 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">1</button>
            </div>

            <div className="flex w-full mx-auto flex-row justify-left px-3 pt-3">
                <div className="relative w-full border border-gray1-g50 rounded-md">
                    <div className="flex absolute inset-y-0 left-0 items-center px-3 ">
                        <svg className="w-4 h-4 text-gray-500" fill="" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                    </div>
                    <input className="text-right appearance-none leading-tight focus:outline-none rounded w-full py-3 transition bg-back1-b2" type="number" placeholder="0.00" autoComplete='off'
                    value = ''>
                    </input>
                </div>
            </div>

            <div className="flex w-full mx-auto flex-row justify-left px-3 pt-3">
                <div className="relative w-full  bg-back1-default border border-gray1-g50 rounded-md">
                    <div className="flex absolute inset-y-0 left-0 items-center px-3 ">
                        <svg className="w-4 h-4 text-gray-500" fill="" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                    </div>
                    <input className="text-right appearance-none leading-tight focus:outline-none rounded w-full py-3 transition bg-back1-b2" type="number" placeholder="0.00" autoComplete='off'
                    value = ''>
                    </input>
                </div>
            </div>

            <div className="flex w-full mx-auto flex-row justify-left px-3 pt-3">
                <div className="relative w-full  bg-back1-default border border-gray1-g50 rounded-md">
                    <div className="flex absolute inset-y-0 left-0 items-center px-3">
                        <svg className="w-4 h-4 text-gray-500" fill="" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                    </div>
                    <input className="text-right appearance-none leading-tight focus:outline-none rounded w-full py-3 transition bg-back1-b2" type="number" placeholder="0.00" autoComplete='off'
                    value = ''>
                    </input>
                </div>
            </div>

            <div className="flex w-full mx-auto flex-row justify-left px-3 pt-3">
                <div className="relative w-full">
                    <input type="range" min = "0" max = "100" value="0" step = "1" className="w-full h-1 bg-gray1-g50 rounded-full appearance-none cursor-pointer">
                    </input>
                </div>
            </div>

            <div className="flex w-full mx-auto flex-row justify-left px-4 pt-4">
                    <ul className="flex items-center text-center space-x-3">
                        <a href="#" className="border-gray1-g50 rounded-lg border px-4 py-1 transition text-gray1-g50 hover:text-white">25%</a>
                        <a href="#" className="border-gray1-g50 rounded-lg border px-4 py-1 transition text-gray1-g50 hover:text-white">50%</a>
                        <a href="#" className="border-gray1-g50 rounded-lg border px-4 py-1 transition text-gray1-g50 hover:text-white">75%</a>
                        <a href="#" className="border-gray1-g50 rounded-lg border px-4 py-1 transition text-gray1-g50 hover:text-white">100%</a>
                    </ul>
            </div>

            <div className="flex w-full mx-auto flex-row justify-center pt-10 px-3">
                <button className="relative inline-flex items-center justify-center mb-2 overflow-hidden text-md font-bold text-white rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <span className="relative px-32 py-3 transition-all ease-in duration-75 bg-blue1-light dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Confirm
                    </span>
                </button>
            </div>
        </div>
    </div>
</div>
  )
}
export default DW





