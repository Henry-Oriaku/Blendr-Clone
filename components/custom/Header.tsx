"use client"
import { useTheme } from '@/context/ThemeContext'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Logo from '@/components/basic/Logo';
import Button from '@/components/basic/Button';
import classes from "@/styles/components/header.module.css"
import { cn } from '@/utils/cn';

export default function Header() {
    // context
    const [windowScrolled, setWindowScrolled] = useState(false);

    const handleScroll = () => {
        setWindowScrolled(window.scrollY > 10);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [])
    return (

        <header className={cn([classes.header, windowScrolled ? classes.headerScrolled : '', 'responsive-container'])}>
            <Logo />
            <nav>
                <Button variant="transparent" >Contract</Button>
                <Button variant="transparent" >
                    X<span className='opacity-[0.4]'>/Twitter</span>
                </Button>
                <Button variant="transparent" >Whitepaper</Button>
                <Button variant="transparent" >Documentation</Button>
                <Button variant="transparent" >Stake</Button>
                <Button variant="transparent" >Testnet</Button>
            </nav>
            <Button variant='solid' className={classes.headerCTA}>$BLENDER</Button>
        </header>
    )
}
