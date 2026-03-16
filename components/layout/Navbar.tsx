"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Modal } from "antd";
import { useState } from "react";

// 🚨 assets
import work from "@/public/svg/inactive-work.svg";
import contact from "@/public/svg/inactive-contact.svg";
import cv from "@/public/svg/inactive-cv.svg";
import about from "@/public/svg/inactive-about.svg";
import aWork from "@/public/svg/active-work.svg";
import aContact from "@/public/svg/active-contact.svg";
import aAbout from "@/public/svg/active-about.svg";
import home from "@/public/svg/inactive-home.svg";
import aHome from "@/public/svg/active-home.svg";

// 🚨 components
import ReadCV from "./ReadCV";
import Contact from "./Contact";

interface NavItem {
  activeIcon: string;
  icon: string;
  name: string;
  link?: string;
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openCV = () => {
    setIsModalOpen(true);
  };

  const handleContactModal = () => {
    setIsContactOpen((prevState) => !prevState);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const navs: NavItem[] = [
    {
      activeIcon: aHome,
      icon: home,
      name: "Home",
      link: "/",
    },
    {
      activeIcon: aWork,
      icon: work,
      name: "Work",
      link: "/works",
    },
    {
      activeIcon: aAbout,
      icon: about,
      name: "About me",
      link: "/about",
    },
    {
      activeIcon: cv,
      icon: cv,
      name: "Read CV",
      // No link for this item
    },
    {
      activeIcon: aContact,
      icon: contact,
      name: "Get in touch",
      // No link for this item
    },
  ];

  const handleNavigation = (link: string | undefined, name: string) => {
    if (name === "Read CV") {
      openCV();
    } else if (name === "Get in touch") {
      handleContactModal();
    } else if (link) {
      router.push(link);
    }
  };

  return (
    <nav className="[ lg:w-[45%] w-[95%] ] [ px-4 lg:px-0 ] mx-auto rounded-full max-w-[1500px] shadow-lg bg-white-200">
      <section className="flex justify-between [ lg:px-8 px-4 ]">
        {navs.map(({ activeIcon, icon, name, link }) => {
          let isActive = false;
          
          if (name === "Work") {
            isActive = pathname === link || pathname.includes("project-details");
          } else {
            isActive = pathname === link;
          }

          return (
            <div
              key={name}
              className={`cursor-pointer transition-all lg:px-6 duration-150 flex flex-col items-center gap-y-2 font-medium mb-[-1px] [ lg:py-5 py-4 ] ${
                isActive
                  ? "text-green-100 border-b-4 border-green-100"
                  : "text-black-200"
              }`}
              onClick={() => handleNavigation(link, name)}
            >
              <Image 
                src={isActive ? activeIcon : icon} 
                alt={name} 
                className="[ lg:w-[20px] w-[15px] ]"
                width={20}
                height={20}
              />
              <p className="[ lg:text-sm text-[10px] ]">{name}</p>
            </div>
          );
        })}
      </section>

      {/* 🚨 CV Modal */}
      <Modal
        title={null}
        closable={false}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={false}
        width={{
          xs: "90%",
          sm: "80%",
          md: "70%",
          lg: "60%",
          xl: "50%",
          xxl: "40%",
        }}
      >
        <div className="flex items-center justify-between py-4 px-4 border-b border-gray-600">
          <Image src={about} alt="About icon" className="h-8" width={32} height={32} />
          <button
            onClick={handleCancel}
            aria-label="Close"
            className="text-3xl cursor-pointer"
          >
            ×
          </button>
        </div>
        <ReadCV />
      </Modal>

      {/* 🚨 Contact Modal */}
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
    </nav>
  );
}