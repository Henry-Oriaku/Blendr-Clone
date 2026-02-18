"use client"
import { useTheme } from '@/context/ThemeContext'
import React, { ReactNode } from 'react'
import Button from '@/components/basic/Button';
import classes from "@/styles/pages/homePage.module.css"
import { cn } from '@/utils/cn';



export default function ComingSoon() {
    // contextz
   
    return (

        <section className={classes.comingSoon}>
            <div className={classes.comingSoonBg}>
                <video playsInline muted autoPlay loop src='/assets/videos/Gpu.mp4'></video>
            </div>
            <div className={cn([classes.cominSoonWriteUps, 'responsive-container'])}>
                <Button className={classes.comingSoonLabel} variant={'solid'}>COMING SOON</Button>
                <h2 className={classes.comingSoonTitle}>Blendr<br />Box X1</h2>
                <span className={classes.comingSoonDesc}>A cutting-edge, plug-and-play solution that allows users to host a $BLENDR node at home, enhancing the decentralized GPU network and offering passive income opportunities. Compact and powerful, it's your gateway to advanced rendering and AI computing.</span>
                <span className={cn([classes.comingSoonSpecTitle, 'dark-grad'])}>Blendr Box X1 Specifications</span>
                <ul className={classes.comingSoonSpecs}>
                    <li>
                        <span>Equipped with RTX 4060* for optimized processing in complex tasks.</span>
                    </li>
                    <li>
                        <span>M.2 SSD support ensures rapid data handling.</span>
                    </li>
                    <li>
                        <span>Thunderbolt™ 4 for speedy transfers up to 40Gbps and connecting high-performance devices.</span>
                    </li>
                    <li>
                        <span>TPM 2.0 for enhanced data security.</span>
                    </li>
                    <li>
                        <span>Compliant with CE, FCC, KC, RoHS standards.</span>
                    </li>
                    <li>
                        <span>Ultra-compact 3.5” form factor for space efficiency.</span>
                    </li>
                </ul>

                <span className={classes.comingSoonNotice}>*Specifications, including the GPU, are based on our current prototype and might change to optimize performance.</span>
            </div>
        </section>
    )
}
