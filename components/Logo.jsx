import Image from "next/image";

import React from 'react'

const Logo = () => {
  return (
    <div>
        <Image 
        src='https://i.imgur.com/Q4Si1a5.png'
        layout='fill'
        objectFit="contain"
        />
    </div>
  )
}

export default Logo