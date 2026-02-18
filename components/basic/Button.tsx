import { cn } from '@/utils/cn'
import { Button as HeadlessButton } from '@headlessui/react'
import React from 'react'
import classes from "@/styles/components/button.module.css"
import { AnimatePresence, motion } from 'framer-motion'


export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  variant: 'solid' | 'bordered' | 'transparent'
  noAnimation?: boolean
}

export default function Button({ children, className, variant, noAnimation, ...props }: ButtonProps) {

  return (
    <>
      <HeadlessButton  {...props} className={cn(classes.btn, classes[`btn-${variant}`], noAnimation ? '' : classes.animated, className)} >
        <span className={classes.btnContent}>{children}</span>
        {
          !noAnimation && <span className={classes.animatedText} >{children}</span>
        }
      </HeadlessButton>
    </>
  )
}
