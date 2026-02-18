import { cn } from '@/utils/cn'
import { Button as HeadlessButton, Tab } from '@headlessui/react'
import React from 'react'



export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  isActive?: boolean
}

export default function Tag({ isActive, children, className, ...props }: ButtonProps) {
  return (
    <HeadlessButton {...props} className={cn(['cursor-pointer text-primary text-[14px] p-[10px] rounded-[10px] border border-gray', isActive ? 'transparent' : 'bg-gray', className])}>{children}</HeadlessButton>
  )
}
