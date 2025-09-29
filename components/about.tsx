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
      I started my journey in <span className="font-bold">Computer Engineering</span> and discovered my passion for making data practical and useful. 
      Through a coding bootcamp, I learned data engineering and began building systems that help teams understand messy data without confusion. 
      I enjoy collaborating with colleagues to create dashboards, reports, and models that actually make a difference in daily operations. 
      My main tools are <span className="font-bold">Postgres, MySQL, ClickHouse, dbt, and Google Cloud Platform</span>, and I’m also familiar with <span className="font-bold">Metabase and Power BI</span>.
    </p>
    <p>
      I’m open to <span className="font-medium">short-term projects or part-time collaborations</span>. 
      <span> Let’s connect and see what we can build together!</span>
    </p>
    </motion.section>
  );
}
