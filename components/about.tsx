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
      className="mb-28 max-w-[45rem] text-left leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
    <p className="mb-3">
      While my formal academic background is in <span className="font-bold">Computer Engineering</span>, my expertise in building scalable data environments was forged entirely through hands-on industry experience and continuous self-learning. 
      I discovered my passion for making data practical, and quickly specialized in the Modern Data Stack. 
      Rather than simply moving data from point A to B, I build automated systems that transform fragmented operational records into reliable semantic layers. 
      I thrive on collaborating with cross-functional teams, replacing manual reporting bottlenecks with highly performant models that drive daily business decisions.
    </p>
    <p className="mb-3">
      My core engineering tools include <span className="font-bold">Apache Airflow, dbt, ClickHouse, Postgres, and Google Cloud Platform</span>, complemented by a strong focus on serving accessible insights through <span className="font-bold">Metabase and Power BI</span>.
    </p>
    <p>
      I’m currently open to <span className="font-medium">full-time roles and high-impact freelance collaborations</span>. 
      <span> Let’s connect and build a data foundation your team can trust!</span>
    </p>
    </motion.section>
  );
}
