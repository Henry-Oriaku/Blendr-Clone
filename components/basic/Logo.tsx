"use client"
import { useTheme } from '@/context/ThemeContext'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface LogoProps {
    size?: number
}

export default function Logo({ size }: LogoProps) {
    // context
    const themeContext = useTheme();

    const halfSize = size ? size / 2 : 50;
    return (
        <Link href={'#'} className='flex items-center gap-1'>
            <Image
                aria-hidden
                src={`/assets/images/logo-img-white.png`}
                alt="Logo"
                width={halfSize}
                height={halfSize}
            />
            <Image
                aria-hidden
                src={`/assets/images/${themeContext.activeTheme == 'light' ? 'dark' : 'light'}-logo.svg`}
                alt="Logo"
                width={halfSize}
                height={halfSize}
            />
        </Link>
    )
}
