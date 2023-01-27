"use client"; // this is a client component


import "./globals.css"
import React, { useState } from "react"
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Image from 'next/image'
import deved from "../../public/dev-ed-wave.png"
import design from "../../public/design.png"
import code from "../../public/code.png"
import consulting from "../../public/consulting.png"
import Link from "next/link";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className='bg-white px-10 md:px-20 lg:px-40  dark:bg-gray-900'>
        <section className="min-h-screen">
          <nav className='py-10 mb-12 flex justify-between dark:text-white'>
            <h1 className='text-xl font-burtons'>Garry</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl' onClick={() => {
                  setDarkMode(!darkMode)
                }} />
              </li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400'>Gaurav Misal</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Developer and Designer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl dark:text-gray-200 max-w-lg mx-auto'>Freelancer providing servives for programming and needs. Join me down below and let's get cracking!</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400 '>
            <Link href="https://twitter.com/GauravMisal8">   <AiFillTwitterCircle className='cursor-pointer' /> </Link>
            <Link href="https://www.linkedin.com/in/gaurav-misal-962a01205/">     <AiFillLinkedin className='cursor-pointer' /> </Link>
            <Link href="https://github.com/Garry028">     <AiFillGithub className='cursor-pointer' /> </Link>


          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={deved} fill alt='Profile' style={{ objectFit: "cover" }} />
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Services I offer</h3>
            <p className='text-md py-2 leading-8 dark:text-gray-200'> Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talented people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center  shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} className='mx-auto' alt="Design" />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>

            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} className='mx-auto' alt="Code" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>

            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} className='mx-auto' alt="Consulting" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>
        <section>
          {/* <div>
            <h3 className='text-3xl py-1'>Portfolio</h3>
        </div> */}
        </section>
      </main>
    </div>
  )
}
