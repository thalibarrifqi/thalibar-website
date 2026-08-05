"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden relative flex flex-col sm:h-[24rem] h-auto hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        
        <div className="pt-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 max-w-full sm:max-w-[50%] flex flex-col relative z-20">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 text-sm sm:text-base">
            {description}
          </p>
        </div>

        <div className="px-5 sm:pl-10 pb-6 sm:pb-8 mt-6 sm:mt-auto relative z-20">
          <ul className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          {url && (
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm font-medium underline decoration-transparent hover:decoration-gray-400 transition"
            >
              Link to project
            </Link>
          )}
        </div>

        <Image
          src={imageUrl}
          alt={`Screenshot of ${title} project`}
          quality={95}
          className="
            relative block w-[90%] mx-auto mt-4 rounded-t-lg shadow-2xl
            sm:absolute sm:top-8 sm:-right-40 sm:w-[28.25rem] sm:mt-0 sm:block
            transition 
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2
          "
        />
      </section>
    </motion.div>
  );
}