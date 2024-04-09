import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { UserButton } from '@clerk/nextjs'
import MobileNav from './MobileNav'

function Navbar() {
  return (
    <nav className='flex-between gap-2 fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
      <div className="flex-between w-full">
        <Link href="/" className='flex items-center gap-1'>
          <Image
            src={"/icons/logo.png"}
            width={32}
            height={32}
            alt="Mooz Logo"
            className='max-sm:size-10'
          />
          <p className='text-[26px] font-extrabold text-white max-sm::hidden'>Mooz</p>
        </Link>
        <div className="hidden gap-5 max-sm:flex-between">
          {/* clerk UM */}
          <MobileNav />
        </div>
      </div>
      <UserButton />
    </nav>
  )
}

export default Navbar