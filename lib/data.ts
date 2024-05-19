import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import minileticsImg from "@/public/miniletics.jpg";
import careappImg from "@/public/careapp.jpg"
import twitterImg from "@/public/sentiment.png";
import atmloanImg from "@/public/atmloan.jpg"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Miniletics Sales",
    description:
      "Examine the customer behavior of Miniletics from two online marketplaces.",
    tags: ["Python", "Jupyter Notebook", "Excels", "Power BI"],
    imageUrl: minileticsImg,
  },
  {
    title: "Sentiment Analysis",
    description:
      "Sentiment analysis on 10,000 tweets about the 'UCL Final' between Liverpool and Real Madrid.",
    tags: ["Python", "Jupyter Notebook", "Seaborn", "Numpy", "Pandas"],
    imageUrl: twitterImg,
  },
  {
    title: "Care APP",
    description:
      "Web and Android application specifically designed for reporting and monitoring machine problems in PT. Jatim Autocomp Indonesia.",
    tags: ["MySQL", "PHP", "JavaScript", "BootStrap", "HTML"],
    imageUrl: careappImg,
  },
  {
    title: "ATM Loan Analysis",
    description:
      "Analyzed client data for PT. Mitramas Infosys Global to calculate metrics and map clients by city and location.",
    tags: ["Python", "Jupyter Notebook", "Excels", "Power BI"],
    imageUrl: atmloanImg,
  },
] as const;

export const skillsData = [
  "Python",
  "SQL",
  "MySQL",
  "Postgres",
  "Clickhouse",
  "Docker",
  "Linux",
  "GitLab",
  "Airbyte",
  "Airflow",
  "dbt",
  "PowerBI",
  "Metabase",
  "Jupyter Notebook",
  "Pandas",
  "Seaborn",
  "Google Cloud Platform",
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    location: "Pasuruan, East Java",
    description:
    "I interned as a Software Engineer at wiring harness manufacturer in Indonesia, change the problem reporting and monitoring system from paper-based to web and Android applications.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Data Entry",
    location: "Remote",
    description:
    "I start my journey in data by working part-time as a Data Entry Specialist. By doing this I learned the importance of data in aligning with and supporting the company's vision.",
    icon: React.createElement(CgWorkAlt),
    date: "2021-2022",
  },
  {
    title: "Data Engineer",
    location: "Gresik, East Java",
    description:
      "I have been working as a Data Engineer for over a year at one of the largest textile manufacturers in Indonesia, helping the company achieve their vision by collaborate with another department.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
  {
    title: "Freelancer",
    location: "Remote",
    description:
      "Doing part-time work on Upwork is one of my ways to upgrade my skills and connect with amazing stakeholders around the world.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
] as const;