import Image from "next/image";

import React from 'react'

const Logo = () => {
  return (
    <div className="relative  bg-white flex items-center h-400">
        <Image
        src='https://i.imgur.com/Q4Si1a5.png'
        object-fit='contain'
        width='160'
        height='160'
        />
        <ul>
          <li></li>
          <li></li>
        </ul>
    </div>
  )
}

export default Logo