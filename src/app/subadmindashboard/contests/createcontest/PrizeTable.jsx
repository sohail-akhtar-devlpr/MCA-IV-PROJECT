import React from 'react'

function PrizeTable({rows, deleteRow, editRow}) {
  return (
    // <div className='overflow-auto rounded-lg shadow'>
    <div className='flex flex-col justify-center items-center P-4'>
       <p className='p-3 text-lg text-white font-semibold'>Prize Details:</p>
            {/* <table className="w-full overflow-x-auto"> */}
            <table className="w-11/12 block table-fixed border-collapse shadow-[0_10px_0] rounded-[10px] overflow-x-auto break-words">
              <thead className='bg-gray-50 border-b-2 border-gray-500'>
                <tr>
                  <th className="p-3 text-sm font-semibold tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-70 text-center">Rank</th>
                  <th className="p-3 text-sm font-semibold tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-70 text-center">Name</th>
                  <th className="w-52 p-3 text-sm font-semibold tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-70 text-center">Description</th>
                  <th className="w-20 p-3 text-sm font-semibold tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-70 text-center">Category</th>
                  <th className="w-20 p-3 text-sm font-semibold tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-70 text-center">Value</th>
                  <th className="p-3 text-sm font-semibold tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-70 text-center">Actions</th>
                </tr>
              </thead>
              <tbody 
              className='divide-y-2 divide-gray-500 bg-gray-300'>
                 {
                rows.map((row,idx)=>{
                  return( 
                  <tr key={idx} >

                    <td className='p-3 text-gray-700 font-bold break-words'>{row.prizeRank}</td>
                    <td className='p-3 text-sm text-gray-700 font-semibold break-words'>{row.prizeName}</td>
                    <td className='p-3 text-sm text-gray-700 font-semibold break-words'>{row.prizeDescription}</td>
                    <td className='p-3 text-sm text-gray-700 font-semibold break-words'>{row.prizeCategory}</td>
                    <td className='p-3 text-sm text-gray-700 font-semibold break-words'>{row.prizeValue}</td>
                    <td className="p-3 text-sm text-gray-700 font-semibold">
                    <div className='flex items-center space-x-2'>

                      <button type='button' onClick={()=>editRow(idx)}><span className='p-1.5 text-xs font-semibold uppercase tracking-wider text-red-800 bg-green-400 rounded-lg hover:bg-green-500'>UPDATE</span></button>

                      <button type='button' onClick={()=>deleteRow(idx)}><span className='p-1.5 text-xs font-semibold uppercase tracking-wider text-red-800 bg-red-300 rounded-lg hover:bg-red-400'>Delete</span></button>
                      </div>
                    </td>

                  </tr>
                  )
                })
              }
              </tbody>
            </table>
    </div>
  )
}

export default PrizeTable
