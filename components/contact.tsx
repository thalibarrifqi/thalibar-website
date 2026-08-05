"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { EMAIL_MAX_LENGTH, MESSAGE_MAX_LENGTH } from "@/lib/constants";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { useRef } from "react";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:thalibarrifqi@gmail.com">
          thalibarrifqi@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        ref={formRef}
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const honeypot = formData.get("company_url");
          if (honeypot) {
            toast.success("Email sent successfully!");
            return;
          }

          const submitTime = formData.get("submitted_at");
          if (submitTime && Date.now() - Number(submitTime) < 3000) {
            toast.success("Email sent successfully!");
            return;
          }

          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={EMAIL_MAX_LENGTH}
          placeholder="Your email"
          aria-label="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={MESSAGE_MAX_LENGTH}
          aria-label="Your message"
        />
        <input type="hidden" name="submitted_at" value={Date.now().toString()} />
        <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
          <input type="text" name="company_url" tabIndex={-1} autoComplete="off" />
          <input type="text" name="fax_number" tabIndex={-1} autoComplete="off" />
        </div>
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
