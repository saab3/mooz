import React, { ReactNode } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Divide } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'

interface MeetingModalProps {
  isOpen      : boolean
  title       : string
  className ? : string
  buttonText? : string
  children?   : ReactNode
  handleClick?: ()=> void
  onClose: ()=> void
  image?: string
  buttonIcon?: string
}

export default function MeetingModal({isOpen, onClose, title, className, buttonText, handleClick, image, children, buttonIcon}: MeetingModalProps) {
  return (
    <section>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className='text-white flex w-[500px] max-w-[520px]  flex-col gap-6 border-none bg-dark-1 px-6 py-9'>
          <div className="flex flex-col gap-6">
            {image && (
            <div className='flex justify-center'>
              <Image
                src    = {image}
                width  = {72}
                height = {72}
                alt    = {"image"}
                />
              </div>
            )}
            <h1 className={cn('text-3xl font-bold leading-[42px]', className)} >{title}</h1>
            {children}
            <Button className='bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0 flex-center gap-2' onClick={handleClick}>
              {buttonIcon && <Image
                src    = {buttonIcon}
                width  = {13}
                height = {13}
                alt    = "Button icon"
                />} 
                <p>{buttonText || 'Schedule Meeting'}</p>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
  </section>
  )
}
