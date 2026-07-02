import Cart from "./Cart"

import toper from '../assets/kid_tapered.png'
import men from '../assets/man_round_neck.png'
import boy from '../assets/p_img14.png'
import boy35 from '../assets/p_img35.png'
import boy15 from '../assets/p_img15.png'

const Collection = () => {
  return (
    <div className="mt-15 flex flex-col px-4 text-center">
      <p className="pb-2 text-[30px] font-medium">LATEST COLLECTIONS</p>
      <p className=" mb-8 text-gray-600">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
      </p>

      {/* The Grid Container */}
      <div className="grid grid-cols-5 gap-5 ">
        <Cart img={toper} name='Kid Tapered Slim Fit Trouser' price='$38'/>
        <Cart img={men} name='Men Round Neck Pure Cotton T-shirt' price='$68'/>
        <Cart img={boy} name='Boy Round Neck Pure Cotton T-shirt' price='$60'/>
        <Cart img={boy35} name='Boy Round Neck Pure Cotton T-shirt' price='$74'/>
        <Cart img={boy15} name='Boy Round Neck Pure Cotton T-shirt' price='$58'/>
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
      </div>
    </div>
  )
}

export default Collection