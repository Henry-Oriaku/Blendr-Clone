import { cn } from '@/utils/cn'
import React from 'react'


export interface CardProps extends React.HTMLAttributes<HTMLElement> {
}


export default function Card({ children, className, ...props }: CardProps) {

  return (
    <div className={cn(["border border-border rounded-[20px]", className])} {...props}>
      {children}
    </div>
  )
}
