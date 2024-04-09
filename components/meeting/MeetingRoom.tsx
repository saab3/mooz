import { cn } from '@/lib/utils';
import { CallControls, CallParticipantsList, CallStatsButton, PaginatedGridLayout, SpeakerLayout } from '@stream-io/video-react-sdk';
import React, { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LayoutList } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useToast } from '../ui/use-toast';
import EndCallButton from './EndCallButton';

type CallLayout = 'grid' | 'speaker-left' | 'speaker-right'

export default function MeetingRoom() {
  const [layout, setLayout] = useState<CallLayout>('speaker-left')
  const [showParticipants, setShowParticipants] = useState(false)
  const {push} = useRouter()
  const {toast} = useToast()

  const CallLayout = () =>{
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />

      case "speaker-left":
        return <SpeakerLayout participantsBarPosition={"left"} />
        
      default:
        return <SpeakerLayout participantsBarPosition={"right"} />
    }
  }
  return (
    <section className='relative h-screen w-full overflow-hidden pt-4 text-white'>
      <div className="relative h-screen flex justify-center items-center">
        <div className="flex size-full h-[calc(100vh-86px)] max-w-[1000px] justify-center items-center">
          <CallLayout />
        </div>
        <div className={cn('h-[calc(100vh-86px)] hidden ml-2', {'show-block' : showParticipants})}>
          <CallParticipantsList onClose={()=> setShowParticipants(false)}/>
        </div>
      </div>
      <div className="fixed bottom-0 px-6 flex-center gap-5">
        <CallControls onLeave={() => {
          push("/")
          toast({
            title: "You left the meeting."
          })
          }} />
        <DropdownMenu>
          <div className="flex items-center">
            <DropdownMenuTrigger className='cursor-pointer size-12 rounded-[100%] flex-center bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]'>
              <LayoutList size={20} className='text-white' />
            </DropdownMenuTrigger>
          </div>
          <DropdownMenuContent className='bg-dark-1 border-dark-1 text-white'>
            {['grid', 'Speaker-Left', 'Speaker-Right'].map(o => (
              <div key={o}>
                <DropdownMenuItem 
                  className='cursor-pointer hover:bg-[#4c535b]'
                  onClick={()=> setLayout(o.toLowerCase() as CallLayout)}
                  >
                  {o}
                </DropdownMenuItem>
                <DropdownMenuSeparator className='border-dark-1' />
              </div>
            ))}
           
          </DropdownMenuContent>
        </DropdownMenu>
        <CallStatsButton />
        <EndCallButton />
      </div>

      </section>
  )
}
