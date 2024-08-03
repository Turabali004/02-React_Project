// import React from 'react'

// eslint-disable-next-line react/prop-types
function Button( {value} ) {
  return (
    <div className=''>
    <input type="number" onChange={() => {}} className = {`bg-blue-600 h-[60px] w-[60px] rounded-2xl`} >
      {value}
    </input>
    </div>
  )
}

export default Button
