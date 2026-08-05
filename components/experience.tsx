"use client";

import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);
  const { theme } = useTheme();

  const themeStyles = {
    contentBg: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
    arrowBorder: theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255, 255, 255, 0.5)",
    iconBg: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
  };

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: themeStyles.contentBg,
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight: themeStyles.arrowBorder,
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background: themeStyles.iconBg,
              fontSize: "1.5rem",
            }}
          >
            <h3 className="font-semibold capitalize">
              {item.title} — <span className="font-normal text-sm opacity-80">{item.location}</span>
            </h3>
            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
              {item.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}