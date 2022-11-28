import Image from "next/image";

import React from 'react'

const Logo = () => {
  return (
    <div className="w-20">
        <Image className="w-6"
        src='https://i.imgur.com/Q4Si1a5.png'
        width='120'
        height='120'
        />
    </div>
  )
}

export default Logo