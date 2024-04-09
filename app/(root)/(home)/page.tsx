import MeetingTypeList from '@/components/meeting/MeetingTypeList'
import React from 'react'

function Home() {
  const now = new Date()
  let time = now.toLocaleTimeString('en-US',{hour:'2-digit', minute:"2-digit"})
  let date = (new Intl.DateTimeFormat("en-US",{dateStyle:"full"})).format(now)
  
  return (
    <section className='flex size-full flex-col gap-10 text-white'>

      <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
        <div className="flex h-full flex-col justify-between max-lg:px-5 max-lg:py-8 lg:p-11">
          <h2 className='glassmorphism w-[300px] px-2 py-2 rounded-lg opacity-85'>
            Upcoming Meeting at: 12:30 PM</h2>
          <div className='flex flex-col gap2'>
            <h1 className='text-4xl font-extrabold lg:text-7xl'>
              {time}
            </h1>
            <p className='text-lg font-medium text-sky-1 lg:text-2xl'>{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  )
}

export default Home