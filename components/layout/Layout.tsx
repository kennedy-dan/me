"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "./Contact";
import { Modal } from "antd";

// 🚨 assets
import avatar from "@/public/images/myself.png";
import text from "@/public/svg/text.svg";
import contact from "@/public/svg/inactive-contact.svg";

export default function MasterLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isFooter, setIsFooter] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  
  const handleContactModal = () => {
    setIsContactOpen((prevState) => !prevState);
  };
  
  const navRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  // Scroll effect commented out as in original
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const navbar = navRef.current;
  //     const footer = footerRef.current;
  //     if (!navbar || !footer) return;
  //     const currentScroll =
  //       window.pageYOffset || document.documentElement.scrollTop;

  //     const footerRect = footer.getBoundingClientRect();
  //     const footerTop = footerRect.top + currentScroll;
  //     const navHeight = navbar.offsetHeight;
  //     const viewportHeight = window.innerHeight;
  //     const triggerPoint = footerTop - viewportHeight + navHeight;
      
  //     if (currentScroll >= triggerPoint) {
  //       setIsFooter(true);
  //     } else {
  //       setIsFooter(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll();
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [pathname]);

  return (
    <section className="relative h-full">
      {/* 🚨 face */}
      <section
        onClick={handleContactModal}
        className="fixed [ lg:block hidden ] z-[999999999] bottom-30 right-10 cursor-pointer"
      >
        <section className="relative">
          <div className="[animation-duration:12s] animate-spin absolute right-[60px] w-[120px]">
            <Image src={text} alt="Rotating text" width={120} height={120} />
          </div>
          <div className="relative bottom-[-25px] right-[85px] cursor-pointer">
            <Image src={avatar} alt="Avatar" className="[ lg:w-[4.3rem] ] rounded-full" width={68} height={68} />
          </div>
        </section>
      </section>

      <section
        ref={navRef}
        className="transition-all duration-500 ease-in-out top-5 fixed w-full z-40"
      >
        <Navbar />
      </section>
      
      {/* 👇 This is where page content will be rendered */}
      {children}
      
      <section ref={footerRef}>
        <Footer />
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
          <Image src={contact} alt="icon" className="h-8" width={32} height={32} />
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