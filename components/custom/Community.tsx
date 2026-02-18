"use client"
import { useTheme } from '@/context/ThemeContext'
import React, { ReactNode } from 'react'
import Button from '@/components/basic/Button';
import classes from "@/styles/pages/homePage.module.css"
import Image from 'next/image';
import Tag from '../basic/Tag';


export default function Community() {
    return (

        <section className={classes.community}>
            <div className={classes.communityLogo}>
                <Image src={'/assets/images/logo-img-white.png'} alt='Logo' fill priority />
            </div>
            <h2 className={'section-title'}>Join our Community</h2>
            <span className={'section-subtitle'}>Become part of the Blendr Family.<br />Engage , Innovate and Grow with us.</span>
            <div className={classes.communityCtas}>
                <Button variant='bordered'>Telegram</Button>
                <Button variant='bordered'>X<span className="opacity-[0.4]">/Twitter</span></Button>
            </div>


        </section >
    )
}
