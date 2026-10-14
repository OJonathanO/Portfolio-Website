"use client";

import useSectionInView from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { toast } from "react-hot-toast";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane } from "react-icons/fa";

const SERVICE_ID = "service_kn494zj";
const TEMPLATE_ID = "template_ypjmci5";
const PUBLIC_KEY = "PJEpg-wMWweJAoyzI";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const senderEmail = String(formData.get("senderEmail") || "");
    const message = String(formData.get("message") || "");

    if (!senderEmail || !message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSending(true);

    const templateParams = {
      from_name: senderEmail,
      name: senderEmail,
      from_email: senderEmail,
      email: senderEmail,
      senderEmail,
      reply_to: senderEmail,
      message,
      msg: message,
      subject: "New message from portfolio contact form",
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      toast.success("Email sent successfully");
      formRef.current?.reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send email. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 w-full max-w-[38rem] text-center sm:mb-28"
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="-mt-6 text-sm leading-7 text-gray-700 sm:text-base dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:jonathanmiranda2003@gmail.com">
          jonathanmiranda2003@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        ref={formRef}
        className="mt-10 flex flex-col gap-3 dark:text-black"
        onSubmit={handleSubmit}
      >
        <input
          className="borderBlack h-14 rounded-lg px-4 text-sm transition-all placeholder:text-gray-400 dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100 sm:text-base"
          name="senderEmail"
          type="email"
          required
          maxLength={100}
          placeholder="Your email. e.g. example@email.com"
        />
        <textarea
          className="borderBlack h-48 rounded-lg p-4 text-sm transition-all placeholder:text-gray-400 dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100 sm:h-52 sm:text-base"
          name="message"
          required
          maxLength={5000}
          placeholder="Your message. e.g. Hello, I would like to collaborate with you..."
        />
        <button
          type="submit"
          disabled={isSending}
          className="disabled:bg-opacity-65 group flex h-[2.5rem] w-[8rem] items-center justify-center gap-2 rounded-lg bg-gray-900 text-white outline-none transition-all hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105 disabled:scale-100 dark:bg-white dark:bg-opacity-10"
        >
          {isSending ? (
            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
          ) : (
            <>
              Submit{" "}
              <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
            </>
          )}
        </button>
      </form>
    </motion.section>
  );
}