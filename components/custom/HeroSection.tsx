"use client"
import { useTheme } from '@/context/ThemeContext'
import React, { ReactNode, useEffect, useRef } from 'react'
import Button from '@/components/basic/Button';
import classes from "@/styles/pages/homePage.module.css"
import { cn } from '@/utils/cn';


export default function HeroSection({ children }: { children: ReactNode }) {
    // contextz
    const heroVideo = useRef<HTMLVideoElement | null>(null)

    useEffect(() => {
        //   heroVideo.current?.play()

    }, [heroVideo])

    return (

        <section className={classes.heroSection}>
            {children}
            <video ref={heroVideo} playsInline muted autoPlay loop src='/assets/videos/CPU.mp4' className={classes.heroVideo} />

            <div className={classes.heroContentContainer}>
                <div className={cn([classes.heroContent, 'responsive-container'])}>
                    <h1 className={cn([classes.heroTitle, 'dark-grad'])}>Blendr,<br /> the Blueprint<br /> for tomorrow</h1>
                    <span className={classes.heroDesc}>Secure, scalable access to computing resources via blockchain for research and development.</span>
                    <Button variant={'solid'} className={classes.heroBtn}>Documentation</Button>
                </div>
            </div>
        </section>
    )
}
