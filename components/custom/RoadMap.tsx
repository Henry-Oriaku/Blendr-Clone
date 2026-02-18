"use client"
import { useTheme } from '@/context/ThemeContext'
import React, { ReactNode } from 'react'
import Button from '@/components/basic/Button';
import classes from "@/styles/pages/homePage.module.css"
import Image from 'next/image';
import Tag from '../basic/Tag';


export default function RoadMap() {
    return (

        <section className={classes.roadMap}>
            <h2 className={'section-title'}>MVP Development Roadmap</h2>
            <span className={'section-subtitle'}>Establish a functional prototype that allows GPU owners to offer their computing power and users to execute tasks using available GPU resources.</span>

            <div className={classes.phase}>
                <div className={classes.phaseTitle}>
                    <span>Phase 1</span>
                    <span>Initial MVP Setup</span>
                </div>
                <div>
                    <div className={classes.phaseLineImage}>
                        <Image fill priority alt='Graphics' src={'/assets/images/blue-line.svg'} />
                    </div>
                    <div>
                        <div className={classes.phaseInfo}>
                            <span>Client-Side Python Program (CLI)</span>
                            <div>

                                <span>Purpose:</span>
                                <span>Enables GPU owners to register their devices with the central server and listen for incoming tasks.</span>
                            </div>
                            <div>
                                <span>Features:</span>
                                <ul>
                                    <li>Detect local GPU resources.</li>
                                    <li>Establish WebSocket connections to the central server for real-time communication.</li>
                                    <li>Receive task details and execute tasks using the GPU.</li>
                                </ul>
                            </div>
                        </div>
                        <div className={classes.phaseInfo}>
                            <span>Central Server</span>
                            <div>
                                <span>Technology:</span>
                                <span>Enables GPU owners to register their devices with the central server and listen for incoming tasks.</span>
                            </div>
                            <div>
                                <span>Features:</span>
                                <ul>
                                    <li>Manage user registrations and authentications.</li>
                                    <li>Handle task dispatching and monitor GPU availability.</li>
                                    <li>Provide a WebSocket endpoint for client communications.</li>
                                </ul>
                            </div>
                        </div>
                        <div className={classes.phaseInfo}>
                            <span>Web Dashboard</span>
                            <div>
                                <span>Purpose:</span>
                                <span>Allows users to view available GPU resources and submit tasks.</span>
                            </div>
                            <div>
                                <span>Features:</span>
                                <ul>
                                    <li>Display overall GPU capacity or specific available GPUs (configurable based on feedback).</li>
                                    <li>User interface for submitting tasks and viewing task status.</li>
                                </ul>
                            </div>
                        </div>
                        <div className={classes.phaseInfo}>
                            <span>Data Management with AWS S3</span>
                            <div>
                                <span>Implementation:</span>
                                <span>Utilize S3 for storing input datasets and processed results.</span>
                            </div>
                            <div>
                                <span>Features:</span>
                                <ul>
                                    <li>Generate and manage S3 access keys to allow users direct access to upload and download data, reducing load on the central server.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.phase}>
                <div className={classes.phaseTitleSection}>
                    <span className={classes.phaseTag}>Phase 2</span>
                    <span className={classes.phaseTitle}>Scale and Decentralize</span>
                </div>
                <div>
                    <div className={classes.phaseLineImage}>
                        <Image fill priority alt='Graphics' src={'/assets/images/blue-line.svg'} />
                    </div>
                    <div>
                        <div className={classes.phaseInfo}>
                            <span className={classes.phaseInfoTitle}>Decentralized Storage System</span>
                            <div>
                                <span className={classes.phaseInfoSubtitle}>Purpose:</span>
                                <span className={classes.phaseInfoText}>Replace S3 with a decentralized storage solution to enhance privacy and reduce reliance on centralized services.</span>
                            </div>
                            <div>
                                <span className={classes.phaseInfoSubtitle}>Plan:</span>
                                <ul>
                                    <li className={classes.phaseInfoText}>Research and integrate technologies like IPFS (InterPlanetary File System) or similar for storing and retrieving task data.</li>
                                </ul>
                            </div>
                        </div>
                        <div className={classes.phaseInfo}>
                            <span className={classes.phaseInfoTitle}>Token-Based Economy</span>
                            <div>
                                <span className={classes.phaseInfoSubtitle}>Purpose:</span>
                                <span className={classes.phaseInfoText}>Introduce a blockchain-based token system to reward users based on the GPU power they provide.</span>
                            </div>
                            <div>
                                <span className={classes.phaseInfoSubtitle}>Implementation:</span>
                                <ul>
                                    <li className={classes.phaseInfoText}>Develop and deploy smart contracts on a blockchain platform.</li>
                                    <li className={classes.phaseInfoText}>Implement a system for tracking resource usage and issuing tokens accordingly.</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={classes.phase}>
                <div className={classes.phaseTitleSection}>
                    <span className={classes.phaseTag}>Phase 3</span>
                    <span className={classes.phaseTitle}>Advanced GPU Integration</span>
                </div>
                <div>
                    <div className={classes.phaseLineImage}>
                        <Image fill priority alt='Graphics' src={'/assets/images/blue-line.svg'} />
                    </div>
                    <div>
                        <div className={classes.phaseInfo}>
                            <span className={classes.phaseInfoTitle}>Distributed GPU Processing</span>
                            <div>
                                <span className={classes.phaseInfoSubtitle}>Goal:</span>
                                <span className={classes.phaseInfoText}>Enable multiple GPUs to work together on complex tasks, enhancing processing capabilities and efficiency.</span>
                            </div>
                            <div>
                                <span className={classes.phaseInfoSubtitle}>Challenges:</span>
                                <ul>
                                    <li className={classes.phaseInfoText}>Address synchronization, data consistency, and network latency.</li>
                                </ul>
                            </div>
                            <div>
                                <span className={classes.phaseInfoSubtitle}>Approach:</span>
                                <ul>
                                    <li className={classes.phaseInfoText}>Utilize advanced distributed computing frameworks and modify the client software to support distributed tasks.</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
