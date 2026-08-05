import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import starSchemaImg from "@/public/star_schema.png";
import historicalStockImg from "@/public/trend_stock.png";
import dbtImg from "@/public/dbt.png";
import spotifyWallpaperImg from "@/public/spotify_wallpaper_generator.png";

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
    title: "Enterprise Dimensional Modeling",
    description:
      "Architected a centralized data warehouse utilizing Kimball’s dimensional modeling methodology. Designed and deployed robust star schemas structuring complex manufacturing data into intuitive Fact and Dimension tables.",
    tags: ["ClickHouse", "dbt"],
    imageUrl: starSchemaImg,
  },
  {
    title: "Enterprise Inventory Orchestration",
    description:
      "Architected an automated pipeline using Apache Airflow and dbt. Transformed raw warehouse data into a performant ClickHouse semantic layer, empowering operations with Metabase dashboards.",
    tags: ["ClickHouse", "dbt", "Apache Airflow", "Metabase"],
    imageUrl: historicalStockImg,
  },
  {
    title: "Historical Data Tracking via dbt Snapshots",
    description:
      "Engineered a robust Slowly Changing Dimension (SCD Type 2) architecture using dbt snapshots. Overcame complex ClickHouse configuration constraints to accurately capture historical data mutations.",
    tags: ["ClickHouse", "dbt"],
    imageUrl: dbtImg,
  },
  {
    title: "Modular Data Transformations via dbt Macros",
    description:
      "Engineered custom dbt macros to enforce the DRY (Don't Repeat Yourself) principle across the data warehouse. Remove repetitive SQL transformations into centralized components.",
    tags: ["ClickHouse", "dbt"],
    imageUrl: dbtImg,
  },
  {
    title: "Spotify Playlist Wallpaper Generator",
    description:
      "A fun side project that generates aesthetic wallpapers from Spotify playlists. Fetches album art and track data via the Spotify API to create customizable visual layouts.",
    tags: ["Next.js", "Spotify API", "Tailwind CSS"],
    imageUrl: spotifyWallpaperImg,
  },
];

export const skillsData = [
  "Airflow",
  "dbt",
  "Clickhouse",
  "Dimensional Modeling",
  "SQL",
  "Python",
  "Postgres",
  "MySQL",
  "Google Cloud Platform",
  "Docker",
  "Linux",
  "Metabase",
  "PowerBI",
  "Git",
] as const;

export const experiencesData = [
  {
    title: "Data Engineer",
    location: "Gresik, East Java",
    description:
      "Architected and deployed a centralized Enterprise Data Warehouse to unify fragmented ERP systems. I engineered 20+ automated pipelines using Apache Airflow and implemented Kimball Dimensional Modeling via dbt to create a performant semantic layer for executive decision-making.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
  {
    title: "Data Quality Operator",
    location: "Remote",
    description:
      "Maintained a 90%+ data quality threshold for a global music database. I specialized in auditing and validating high-volume datasets, collaborating with international teams to ensure the integrity and reliability of platform analytics.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Software Engineer Intern",
    location: "Pasuruan, East Java",
    description:
      "Digitized legacy paper-based reporting workflows into a web-based monitoring application. Developed a centralized platform using MySQL and JavaScript to streamline internal problem-reporting and operational monitoring.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
] as const;