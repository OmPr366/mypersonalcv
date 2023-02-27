"use client";
import React,{useState}  from "react";
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Navbar from '../component/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-primary  w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} pt-5`}>
            <Navbar />
          </div>
        </div>
    </div>
  )
}
