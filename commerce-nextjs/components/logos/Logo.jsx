import Image from "next/image";

import React from 'react'

const Logo = () => {
  return (
    <div className="relative  bg-white flex items-center">
        <Image
        src='https://i.imgur.com/Q4Si1a5.png'
        object-fit='contain'
        width='160'
        height='160'
        />
    </div>
  )
}

export default Logo