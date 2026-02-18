"use client"
import { useTheme } from '@/context/ThemeContext'
import React, { ReactNode } from 'react'
import Button from '@/components/basic/Button';
import classes from "@/styles/pages/homePage.module.css"
import Image from 'next/image';
import Tag from '../basic/Tag';
import { cn } from '@/utils/cn';


export default function Benefits() {
   
    return (

        <section className={classes.benefits}>
            <h2 className={'section-title'}>Join our GPU sharing network and earn $BLENDR tokens</h2>
            <span className={'section-subtitle'}>for powering rendering and computational tasks</span>
            <Button variant='bordered'>Learn More</Button>

            {/* <div className={classes.benefitList} >
                <div className={cn([classes.benefit, classes.benefit__1])}>
                    <Image src={''} alt={''} />
                </div>
                <div className={cn([classes.benefit, classes.benefit__2])}>
                    <div>
                        <span>Internet of GPUs</span>
                        <span>Elevate your projects with our Plug-and-Play Rendering and AI Computing Solution</span>
                    </div>
                </div>
                <div className={cn([classes.benefit, classes.benefit__3])}>
                    <div>
                        <span>Optimized Rendering Grids</span>
                        <span>Integrate your workflows with our Decentralized Processing Infrastructure Network, DePIN</span>
                    </div>
                    <Button variant={'solid'}>Learn More</Button>
                </div>
                <div className={cn([classes.benefit, classes.benefit__4])}>
                    <table className={classes.benefitTable}>
                        <tr>
                            <td><span>Distributed <br /> Computing</span></td>
                        </tr>
                        <tr>
                            <td> <span>Versatile <br />Solutions</span></td>
                            <td> <span>Fortified <br /> Transactions</span></td>
                        </tr>
                        <tr>
                            <td> <span>Steadfast <br />Performance</span></td>
                        </tr>
                        <tr>
                            <td> <span>Community <br />and Support</span></td>
                            <td> <span>Economic <br /> Advantage</span></td>
                        </tr>
                    </table>
                </div>
                <div className={cn([classes.benefit, classes.benefit__5])}>
                    <div>
                        <span>Flexible Payment Gateway</span>
                        <span>Diverse and secure payment methods tailored to your convenience</span>
                    </div>
                    <div className={classes.benefitImage}>
                        <Image src={''} alt={''} />
                    </div>
                </div>
            </div> */}
        </section >
    )
}
