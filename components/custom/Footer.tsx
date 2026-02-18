"use client"
import React from 'react'
import Button from '@/components/basic/Button'
import Logo from '../basic/Logo'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className=" py-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
                {/* Logo & Links */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <Logo />
                    <div className="flex flex-col md:flex-row gap-4">
                        <Link href="#" className="hover:text-gray-300">Whitepaper</Link>
                        <Link href="#" className="hover:text-gray-300">Contract</Link>
                        <Link href="#" className="hover:text-gray-300">Documentation</Link>
                    </div>
                </div>

                {/* CTA Button */}
                <div>
                    <Button variant="solid">$BLENDER</Button>
                </div>
            </div>

            {/* Copyright & Policy */}
            <div className="mt-10 border-t border-gray-700 pt-6 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                <span>Copyright &copy; {new Date().getFullYear()} Blendr. All rights reserved.</span>
                <div className="flex gap-4 mt-2 md:mt-0">
                    <Link href="#" className="hover:text-white">Privacy Policy</Link>
                    <Link href="#" className="hover:text-white">Terms & Conditions</Link>
                </div>
            </div>

            {/* Blendr Clone Caption */}
            <div className="mt-4 text-center text-base">
                <a href='https://www.blendr.network/' target='_blank' className='text-white'> Blendr</a> clone by Henry Oriaku
            </div>
        </footer>
    )
}
