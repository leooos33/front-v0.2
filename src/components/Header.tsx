
import React from "react"

import { useWeb3React } from "@web3-react/core"
import { injected } from "../web3/connectors"

import logo from '../assets/logo.svg'

const Header = () => {
    const { activate } = useWeb3React()
    const { account } = useWeb3React()

        return (
        <header className="flex flex-wrap place-items-center">
            <section className="relative mx-auto">
                <nav className="flex container justify-between text-white w-screen">
                    <div className=" py-6 flex w-full items-center">
                        <button className="flex title-font font-sans items-center text-white md:mb-0">
                            <img
                            className="object-cover object-center rounded"
                            src={logo} alt={"logo"}
                            width="33px"
                            height="33px"
                            />
                        </button>
                    <nav className="hidden lg:flex mx-auto text-2xl  space-x-6 font-sans font-medium">
                        <div className="w-1/2 mx-auto">
                            <ul id="tabs" className="inline-flex w-full font-semibold text-gray1-g75">
                            <li className="px-4 py-2 -mb-px  text-white border-b-2 border-white ">Trade</li>
                            <li className="px-4 py-2">Portfolio</li>
                            <li className="px-4 py-2">Charts</li>
                            <li className="px-4 py-2">Docs</li>
                            </ul>
                        </div>
                    </nav>
                        <button className="flex-shrink-0 inline-flex bg-transparent text-white font-sans font-medium text-xl py-1.5 px-10 ml-3 border-orange1 border-2 hover:border-transparent rounded-full "
                            onClick={() => activate(injected)}>
                        {account ? 
                        (
                            `${account.substring(0, 6)}...${account.substring(account.length - 4)}`
                        ) : 
                        (null)
                        }                     
                        </button>
                    </div>
                </nav>
            </section>
        </header>
    )
}
export default Header