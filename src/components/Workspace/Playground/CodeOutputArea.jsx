import React from 'react'

function CodeOutputArea({output}) {

  return (
    <div className='input-output-container flex flex-col flex-1 mt-2 space-y-1'>
      <div className='output-header text-white'>
        <b>output:</b>
      </div>
      <textarea 
      className='bg-dark-layer-2 text-white text-sm font-semibold resize-none p-1' 
      readOnly 
      rows={8}
      value={output? output:'Click "Run" to see the output Here'}
      />
        
    </div>
  )
}

export default CodeOutputArea
