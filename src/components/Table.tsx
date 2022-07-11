import React from 'react'


const Table1b = () => {

  const data = [
    {
      name: "Hedgehog strategy",
      denomination: "ETH",
      type: "LP-vault",
      projectedApy: "33.2%",
      tvl: "$32,288,314.9",
      capacity: "94.2%",
      myDeposits: "$18943.2"
    }
  ]

  return (
    <div className="mx-auto pt-4 w-full max-w-7xl px-24 overflow-x-auto ">
      <table className="px-4 min-w-full overflow-hidden table-fixed rounded-t-md">
        <thead className="min-w-full bg-back1-b2 text-gray1-g50 text-left text-base font-medium tracking-wide">
        <tr>
            <th className="py-3 px-4" scope="col">Name</th>
            <th className="py-3 px-4" scope="col">Denomination</th>
            <th className="py-3 px-4" scope="col">Type</th>
            <th className="py-3 px-4" scope="col">Projected APY</th>
            <th className="py-3 pl-14" scope="col">TVL</th>
            <th className="py-3 px-4 " scope="col">My Deposits</th>
          </tr>
        </thead>
          <div className= 'py-2'></div>
        {/* :TABLE BODY */}
        <tbody className="text-white text-base font-bold bg-back1-b2">
          {data.map((data, index) => (
            <tr key={data.name} className={``}>
              {/* Name */}
              <div className= 'py-4 px-4'>
              <td>{data.name}</td>
                <p className="text-gray1-g50">(Uniswap + Squeeth)</p>
              </div>
              {/* Denomination */}
              <td className="py-4 px-14">{data.denomination}</td>
              {/* Vault type */}
              <td className="py-4 px-1">{data.type}</td>
              {/* Projected APY */}
              <td className="py-4 px-12">{data.projectedApy}</td>
              {/*TVL + Capacity */}
              <div className= 'py-4'>
              <td className='pl-5'>{data.tvl}</td>
                <p className="text-white font-semibold">Capacity used: {data.capacity} </p>
              </div>
              {/*My deposits*/}
              <td className="py-4 px-8">{data.myDeposits}</td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table1b
