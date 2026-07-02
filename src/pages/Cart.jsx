//import React from 'react'


const Cart = ({img,name,price}) => {
  return (
    <div className="w-70 h-80
     bg-[#f7f7f7] mt-5 mb-10">
      <img src={img} alt="" />
      <p className='py-2'>{name}</p>
      <p className='font-semibold'>{price}</p>

    </div>
  )
}

export default Cart