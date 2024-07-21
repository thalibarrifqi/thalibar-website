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
      "Analyze Miniletics' customer behavior across two online marketplaces.",
    tags: ["Python", "Jupyter Notebook", "Excel", "PowerBI"],
    imageUrl: minileticsImg,
  },
  {
    title: "Sentiment Analysis",
    description:
      "Analysis of public sentiment on 10,000 tweets about the 'UCL Final' between Liverpool and Real Madrid.",
    tags: ["Python", "roBERTa-base", "Jupyter Notebook", "Seaborn", "Pandas"],
    imageUrl: twitterImg,
  },
  {
    title: "Care APP",
    description:
      "Web application developed for reporting and monitoring machine issues at PT. Jatim Autocomp Indonesia.",
    tags: ["MySQL", "PHP", "JavaScript", "BootStrap", "HTML"],
    imageUrl: careappImg,
  },
  {
    title: "ATM Loan Analysis",
    description:
      "Evaluated client data for PT. Mitramas Infosys Global to clients by their city and location.",
    tags: ["Python", "Jupyter Notebook", "Excel", "PowerBI"],
    imageUrl: atmloanImg,
  },
] as const;

export const skillsData = [
  "SQL",
  "Python",
  "MySQL",
  "Postgres",
  "Clickhouse",
  "Docker",
  "Linux",
  "Git",
  "Airflow",
  "dbt",
  "PowerBI",
  "Metabase",
  "Jupyter Notebook",
  "Pandas",
  "Google Cloud Platform"
] as const;

export const experiencesData = [
  {
    title: "Freelancer",
    location: "Remote",
    description:
      "Doing part-time work on Upwork is one of my ways to upgrade my skills and connect with amazing stakeholders around the world.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
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
    title: "Data Entry",
    location: "Remote",
    description:
    "I began my journey in data by working part-time as a Data Entry Specialist. This job taught me how important data is for helping a company achieve its goals.",
    icon: React.createElement(CgWorkAlt),
    date: "2021-2022",
  },
  {
    title: "Software Engineer",
    location: "Pasuruan, East Java",
    description:
    "I interned as a Software Engineer at a wiring harness manufacturer in Indonesia, transforming the problem reporting and monitoring system from paper-based to web applications.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
] as const;