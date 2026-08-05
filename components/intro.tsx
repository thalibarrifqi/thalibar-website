"use client";

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { SiNotion } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5)
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  
  return (
    <section ref={ref} id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
        {/* AVATAR SECTION */}
        <div className='flex items-center justify-center'>
            <div className='relative mt-10'>
                <motion.div
                    initial={{opacity:0, scale:0}}
                    animate={{opacity:1, scale:1}}
                    transition={{ type:"tween", duration: 0.3 }}
                >
                    <Image 
                      src="/berbahaya.png"
                      alt= "Thalibar Rifqi"
                      width="192"
                      height="192"
                      quality="95"
                      priority={true}
                      className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
                    />
                </motion.div>
                 <motion.span 
                   initial={{opacity:0, scale:0}}
                   animate={{opacity:1, scale:1}}
                   transition={{ type:"spring", stiffness:125, delay:0.15, duration:0.8 }}
                   className='absolute bottom-0 right-0 text-3xl'
                 >👋🏻</motion.span>
            </div>
        </div>

        {/* TEXT SECTION */}
        <motion.div
            className="mb-10 mt-10 px-4"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col items-center justify-center text-center">
            {/* HEADLINE: Ukuran teks disesuaikan agar tidak tumpang tindih di HP */}
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">
              Building Data You Can Trust.
            </h1>

            {/* INTRO PARAGRAPH: Penambahan text-gray-900 di dark mode agar kontras */}
            <p className="max-w-3xl text-base sm:text-lg text-gray-700 dark:text-white/80 leading-relaxed">
              <span className="font-bold text-gray-900 dark:text-white">Hello, I'm Thalibar Rifqi.</span>{" "}
              <span>I'm a </span>
              <span className="font-bold text-gray-900 dark:text-white">data engineer</span>{" "}
              <span>who builds scalable data environments that teams can trust. Leveraging </span>
              <span className="font-bold text-gray-900 dark:text-white">Airflow, ClickHouse, and dbt</span>
              <span>, I design systems where </span>
              <span className="underline font-bold text-gray-900 dark:text-white">quality, context, and history</span>
              <span> matter as much as the numbers themselves.</span>
            </p>
          </div>
        </motion.div>

        {/* BUTTONS SECTION: Responsif (Kolom di HP, Baris di Desktop) */}
        <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition w-full sm:w-auto justify-center"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 w-full sm:w-auto justify-center"
          href="/cv_thalibar_feb26.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <div className="flex gap-2">
            <a
              className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="https://www.linkedin.com/in/thalibarrifqi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin />
            </a>

            <a
              className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="https://github.com/thalibarrifqi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare />
            </a>
            
            <a
              className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="https://astonishing-gasoline-ad9.notion.site/Things-that-I-Built-Broke-Fixed-and-Learned-2a1e2e5431288067b4d8cf5fd4554f11?pvs=143"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiNotion />
            </a>
        </div>
      </motion.div>
    </section>
  )
}