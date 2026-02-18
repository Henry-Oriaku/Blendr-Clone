'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Transition } from '@headlessui/react';
import classes from "@/styles/pages/homePage.module.css"

import HeroSection from '@/components/custom/HeroSection';
import Header from '@/components/custom/Header';
import Sponsors from '@/components/custom/Sponsors';
import Features from '@/components/custom/Features';
import ComingSoon from '@/components/custom/ComingSoon';
import Benefits from '@/components/custom/Benefits';
import RoadMap from '@/components/custom/RoadMap';
import Community from '@/components/custom/Community';
import Footer from '@/components/custom/Footer';
export default function Page() {
  return (
    <main>

      <HeroSection>
        <Header />
      </HeroSection>
      <div className='responsive-container'>
        <div className={classes.homeSection}><Sponsors /></div>
        <div className={classes.homeSection}><Features /></div>
      </div>
      <div className={classes.homeSection}><ComingSoon /></div>
      <div className='responsive-container'>

        <div className={classes.homeSection}><Benefits /></div>
        <div className={classes.homeSection}><RoadMap /></div>
        <div className={classes.homeSection}><Community /></div>
        <div className={classes.homeSection}><Footer /></div>
      </div>
    </main >
  )
}