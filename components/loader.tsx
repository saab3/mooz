import Image from 'next/image'
import React from 'react'

export default function Loader() {
  return (
    <div className='flex-center h-screen w-full' >
      <Image
        src    = {"/icons/loading-circle.svg"}
        width  = {50}
        height = {50}
        alt    = {"loading"}
        />
    </div>
  )
}
