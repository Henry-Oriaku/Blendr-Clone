"use client"
import { useTheme } from '@/context/ThemeContext'
import React, { ReactNode } from 'react'
import Button from '@/components/basic/Button';
import classes from "@/styles/pages/homePage.module.css"
import Image from 'next/image';
import Tag from '../basic/Tag';
import Card from '../basic/Card';
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/utils/cn';


export default function Features() {
    // contextz
    const features = [
        {
            image: '/assets/images/features/1.png',
            title: 'Decentralized GPU Compute Mesh(BCM)',
            desc: "Blendr's BCM effectively aggregates underutilized GPU resources across a global network.This network optimally distributes computational tasks, ensuring each GPU's capacity is utilized efficiently, thereby providing a scalable solution for demanding rendering tasks and Al computations without the overhead associated with traditional cloud computing services.",
            tag: 'BCM'
        },
        {
            image: '/assets/images/features/2.png',
            title: 'Blockchain-Enabled Digital Rights Management(DARL)',
            desc: "Blendr incorporates granular digital rights management through its DARL system. This leverages the immutability and transparency of blockchain to offer on-chain traceability for digital assets, ensuring creators maintain control over their work and receive fair compensation.",
            tag: 'DARL'
        },
        {
            image: '/assets/images/features/3.png',
            title: 'Dynamic Task Assignment',
            desc: "Blendr's algorithms dynamically allocate computing tasks among available GPU nodes based on resource availability and performance metrics. This intelligent resource allocation minimizes waste, maximizes system throughput, and optimizes cost-effectiveness for users.",
            tag: 'Efficient Resource Allocation'
        },

    ];
    return (

        <section className={classes.features}>
            <h2 className={'section-title'}>Elevate your AI, rendering, and simulations with Blendr</h2>
            <span className={'section-subtitle'}>For AI, rendering, and simulations, Blendr offers high-performance computing sans centralized costs and scalability limits. Optimize resource usage, minimize expenses, and maintain uninterrupted productivity.</span>
            <Button className={classes.featureCta} variant='bordered'>Learn More</Button>

            <div className={classes.featureList}>
                <AnimatePresence >
                    {features.map((feature, index) => (
                        <motion.div key={index}
                        // initial={{ transform: 'perspective(1200px) rotateX(calc(30deg - 30deg * 0))' }}
                        // whileInView={{ transform: 'perspective(1200px) rotateX(calc(30deg - 30deg * 1))' }}
                        // exit={{ transform: 'perspective(1200px) rotateX(calc(30deg - 30deg * 0))' }}
                        >
                            <Card className={cn([classes.feature, classes[`feature__${index + 1}`]])} style={{ backgroundImage: `url(${feature.image})` }}>
                                <Button variant='bordered' className={classes.featureTag}>
                                    <img src='/assets/images/features/Cube.svg' className={classes.featureTagImage} />
                                    {feature.tag}
                                </Button>
                                <div className={classes.featureWriteup}>
                                    <h3 className={classes.featureTitle}>{feature.title}</h3>
                                    <span className={classes.featureDesc}>{feature.desc}</span>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </section>
    )
}
