"use client"
import { useTheme } from '@/context/ThemeContext'
import React, { ReactNode } from 'react'
import Button from '@/components/basic/Button';
import classes from "@/styles/pages/homePage.module.css"
import Image from 'next/image';


export default function Sponsors() {
    // contextz
    const sponsors = [
        {
            src: '/assets/images/intel.svg',
            title: 'Intel'
        },
        {
            src: '/assets/images/microsoft.svg',
            title: 'Microsoft'
        },
        {
            src: '/assets/images/nvidia.svg',
            title: 'Nvidia'
        }
    ];
    return (

        <section className={classes.sponsors}>
            <span className={classes.sponsorsTitle}>DEVELOPER PROGRAMS</span>
            <div className={classes.sponsorsList}>
                {sponsors.map(((sponsor, index) => (
                    <img key={index} title={sponsor.title} className={classes.sponsorImage} src={sponsor.src} alt={sponsor.title} />
                )))}
            </div>
        </section>
    )
}
