"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About () {
  const { ref } = useSectionInView('About')

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-bold">Computer Engineering</span>, I decided to pursue my passion for data. I enrolled in a coding bootcamp and learned data engineering. I'm driven by
        <span className="italic font-bold"> the thrill of tackling intricate data puzzles, constantly exploring inventive strategies to streamline data workflows.</span> I firmly believe in the power of teamwork, relishing the opportunity to join forces with colleagues in crafting meaningful narratives from raw data. There's nothing quite like the euphoria of cracking a tough problem and witnessing the pieces fall into place. My core stack includes{" "}
        <span className="font-bold">Postgres, MySQL, Clickhouse, dbt, and Google Cloud Platform.</span>
        <span> I am also familiar with</span>
        <span className="font-bold"> Metabase and Power BI.</span>
      </p>
      <p>
        I'm open to{" "}
        <span className="font-medium">short-term projects as well as part-time, long-term collaborations. </span> 
        <span>Let's connect and harness the power of data together!</span>
      </p>
    </motion.section>
  );
}
