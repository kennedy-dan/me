"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// 🚨 assets
import arrowUp from "@/public/svg/arrow-up.svg";
import insta from "@/public/svg/instagram.svg";
import twitter from "@/public/svg/twitter.svg";
import linkedIn from "@/public/svg/linkedIn.svg";
import contact from "@/public/svg/inactive-contact.svg";

import Contact from "./Contact";
import { Modal } from "antd";

export default function Footer() {
  const pathname = usePathname();
  
  // Fix: Check if pathname is NOT root AND NOT about to apply radius
  // Original logic was flawed: pathname !== "/" || pathname !== "/about" is always true
  const applyRadius = pathname !== "/" && pathname !== "/about";

  const [isContactOpen, setIsContactOpen] = useState(false);
  
  const handleContactModal = () => {
    setIsContactOpen((prevState) => !prevState);
  };

  return (
    <section
      className={`footer ${!applyRadius ? "rounded-t-2xl" : ""}`}
    >
      <section className="wrapper mb-20 bg-black-600 rounded-xl space-y-10 py-10 flex flex-col justify-center">
        <div className="text-center tagline text-black w-full [ lg:text-[72px] text-[28px] ] [ lg:leading-20 leading-10 ]">
          <h1 className="font-thin">Let's create something amazing</h1>
          <h2 className="font-semibold">together!</h2>

          <button
            onClick={handleContactModal}
            className="w-fit mx-auto cursor-pointer border-2 border-black-400 rounded-full flex gap-x-2 text-base font-semibold text-black-400 [ lg:mt-10 mt-5 ] [ px-4 lg:py-4 py-3 ]"
          >
            <p>Get in touch</p>
            <Image src={arrowUp} alt="Arrow up" width={20} height={20} />
          </button>
        </div>

        <div className="border-b border-black-600 overflow-y-hidden [ lg:h-[100px] h-[37px] ] faded-text">
          <h1 className="text-center text-black-2000 opacity-70 font-semibold [ lg:text-[100px] text-[38px] ]">
            Daniel Kennedy.
          </h1>
        </div>

        <section className="w-fit lg:mx-auto text-[32px] text-black-400 font-medium flex gap-x-8 [ lg:flex-row flex-col ] [ lg:items-center items-start ]">
          <a
            href="https://www.instagram.com/made.by.habscreative/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit px-8 py-4 flex gap-x-2 lg:border rounded-full"
          >
            <Image src={insta} alt="Instagram" width={24} height={24} />
            <h1 className="underline">Instagram</h1>
            <Image src={arrowUp} alt="Arrow up" width={16} height={16} />
          </a>

          <a
            href="https://x.com/habib_oluwaseun"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit px-8 py-4 flex gap-x-2 lg:border rounded-full"
          >
            <Image src={twitter} alt="Twitter" width={24} height={24} />
            <h1 className="underline">X</h1>
            <sup className="text-sm">(twitter)</sup>
            <Image src={arrowUp} alt="Arrow up" width={16} height={16} />
          </a>

          <a
            href="https://www.linkedin.com/in/habeeb-abdullahi/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit px-8 py-4 flex gap-x-2 lg:border rounded-full"
          >
            <Image src={linkedIn} alt="LinkedIn" className="w-[32px]" width={32} height={32} />
            <h1 className="underline">LinkedIn</h1>
            <Image src={arrowUp} alt="Arrow up" width={16} height={16} />
          </a>
        </section>
      </section>

      {/* 🚨 contact modal */}
      <Modal
        title={null}
        closable={false}
        open={isContactOpen}
        onCancel={handleContactModal}
        footer={false}
        width={{
          xs: "90%",
          sm: "80%",
          md: "70%",
          lg: "60%",
          xl: "50%",
          xxl: "40%",
        }}
        style={{ top: 30 }}
      >
        <div className="flex items-center justify-between py-4 px-4 border-b border-gray-600">
          <Image src={contact} alt="Contact icon" className="h-8" width={32} height={32} />
          <button
            onClick={handleContactModal}
            aria-label="Close"
            className="text-3xl cursor-pointer"
          >
            ×
          </button>
        </div>
        <Contact />
      </Modal>
    </section>
  );
}