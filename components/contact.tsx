"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail"
import SubumitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
    const { ref } = useSectionInView("Contact");
   
  return (
    <motion.section id='contact' ref={ref} className="scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
        initial={{
            opacity: 0
        }}
        whileInView={{
            opacity: 1
        }}
        transition={{
            duration: 1
        }}
        viewport={{
            once: true
        }}
    >
        <SectionHeading>Contact me</SectionHeading>
        <p className="text-grey-700 -mt-6">
            Please contact me directly at {" "}
            <a className="underline" href="mailto:thalibarrifqi@gmail.com">
                thalibarrifqi@gmail.com
            </a>{" "}
            or through this form.
        </p>

        <form 
        className="mt-10 flex flex-col" 
        action={async (formData) => {
            const { data, error } = await sendEmail(formData);
            if (error) {
              toast.error(error);
              return;
            }
            toast.success("Email sent successfully!");
          }}>
            <input type="email" required maxLength={500} className="h-14 px-4 rounded-lg borderBlack dark:text-gray-800" placeholder="Your email" name="senderEmail" />
            <textarea required maxLength={500} className="h-52 my-3 rounded-lg borderBlack p-4 dark:text-gray-800" placeholder="Your message" name="message"/>
            <SubumitBtn />
        </form>
    </motion.section>
  );
}