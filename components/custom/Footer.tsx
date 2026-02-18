"use client"
import React, { ReactNode } from 'react'
import Button from '@/components/basic/Button';
import classes from "@/styles/components/footer.module.css"
import Logo from '../basic/Logo';
import Link from 'next/link';


export default function Footer() {

    return (

        <section className={classes.container}>
            <div className={classes.footerLinkSection}>
                <Logo />
                <div className={classes.footerLinks}>
                    <Link className={classes.footerLink} href="#">Whitepaper</Link>
                    <Link className={classes.footerLink} href="#">Contract</Link>
                    <Link className={classes.footerLink} href="#">Documentation</Link>
                </div>
                <Button className={classes.footerCta} variant={'solid'}>$BLENDER</Button>
            </div>
            <div className={classes.copyRightSection}>
                <span className={classes.copyrightText}>Copyright &copy; {(new Date()).getFullYear()} Blendr. All rights reserved.</span>
                <div className={classes.policyLinks}>
                    <Link className={classes.policyLink} href="#">Privacy Policy</Link>
                    <Link className={classes.policyLink} href="#">Terms & Conditions</Link>
                </div>
            </div>
        </section>
    )
}
