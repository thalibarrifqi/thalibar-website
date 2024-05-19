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
        <span className="font-bold">Computer Engineering</span>, I decided to pursue my passion for data. I enrolled in a coding bootcamp and learned data engineering. I thrive on
        <span className="italic font-bold"> solving complex data challenges and continually seek innovative ways to optimize data processes.</span> Collaboration is essential to my work, I enjoy partnering with others to transform data into actionable insights. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack includes{" "}
        <span className="font-bold">Postgres, MySQL, Clickhouse, Airbyte, dbt, Airflow.</span>
        <span> I am also familiar with</span>
        <span className="font-bold"> Metabase and Power BI.</span>
        <span> Outside of work, I enjoy reading and listening to music.</span>
      </p>
      <p>
        I'm open to{" "}
        <span className="font-medium">short-term projects as well as part-time, long-term collaborations. </span> 
        <span>Let's connect and harness the power of data together!</span>
      </p>
    </motion.section>
  );
}
