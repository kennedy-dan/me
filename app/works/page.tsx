"use client"
import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "@/components/UI/Cards/ProjectCard";
import Loader from "@/components/Loader";
import MasterLayout from "@/components/layout/Layout";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

// 🚨 Hardcoded projects data - Structure that works with both ProjectCard AND ProjectDetails
const projectsData = [
  {
    _id: "project-1",
    // Fields for ProjectCard
    title: "GeeftMe",
    name: "GeeftMe", // For ProjectDetails
    description: "Fundraiser and crowdfunding platform",
    client: "GeeftMe",
    tag: "Fundraising", // For ProjectDetails
    category: "web",
    year: "2026",
    
    // Image fields (support both formats)
    image: { url: "/images/geeftmeproject.png" }, // For ProjectCard
    bgImage: { url: "/images/geeftmeproject.png" }, // For ProjectDetails
    appLogo: { url: "/images/geeftme.png" },
    overviewThumbnail: { url: "/images/geeftmeproject.png" },
    prototype: { url: "/images/geeftmeproject.png" },
    
    // Fields for ProjectDetails
    roles: ["Lead Designer", "Brand Strategist"],
    industry: "Fintech/Crowdfunding",
    duration: "6 months",
    overview: "Complete brand identity redesign for Nike, focusing on modern aesthetics while maintaining brand heritage.",
    overviewLinks: {
      liveWebsite: "https://nike-demo.com"
    },
    testimonial: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    extraImages: [
      { url: "/images/geeftmeproject.png" },
      { url: "/images/geeftmeproject.png" }
    ],
    problems: {
      description: "The existing brand identity felt outdated and didn't resonate with younger audiences.",
      lists: [
        "Inconsistent brand messaging across platforms",
        "Outdated visual elements",
        "Poor digital presence",
        "Lack of brand guidelines"
      ]
    },
    goals: {
      description: "Create a modern, cohesive brand identity that appeals to Gen Z while maintaining brand equity.",
      lists: [
        "Increase brand engagement by 50%",
        "Create comprehensive brand guidelines",
        "Design for digital-first experience",
        "Maintain brand recognition"
      ]
    },
    target: {
      description: "Young athletes and sneaker enthusiasts aged 16-30.",
      lists: [
        "Gen Z consumers",
        "Sneaker collectors",
        "Athletes and fitness enthusiasts",
        "Fashion-forward individuals"
      ]
    },
    role: {
      description: "Led the entire rebranding process from research to final delivery.",
      lists: [
        "Conducted market research and competitor analysis",
        "Developed brand strategy and positioning",
        "Created visual identity system",
        "Collaborated with marketing team on rollout"
      ]
    },
    accessibility: {
      description: "Ensured brand materials are accessible across all platforms and abilities.",
      images: [
        { url: "/images/geeftmeproject.png" }
      ]
    }
  },
  {
    _id: "project-2",
    // Fields for ProjectCard
    title: "Fintech App",
    name: "Cloverleaf",
    description: "A mobile application for managing personal finances.",
    client: "Uber",
    tag: "Mobile Application",
    category: "mobile",
    year: "2023",
    
    // Image fields
    image: { url: "/images/cloverleafproject.png" },
    bgImage: { url: "/images/cloverleafproject.png" },
    appLogo: { url: "/images/cloverleaf.png" },
    overviewThumbnail: { url: "/images/cloverleafproject.png" },
    prototype: { url: "/images/cloverleafproject.png" },
    
    // Fields for ProjectDetails
    roles: ["Product Designer", "UX Researcher"],
    industry: "Food Delivery",
    duration: "8 months",
    overview: "A mobile application for managing personal finances.",
    overviewLinks: {
      appStore: "https://apps.apple.com/app/uber-eats",
      googlePlay: "https://play.google.com/store/apps/details?id=com.uber.eats"
    },
    testimonial: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    extraImages: [
      { url: "/images/cloverleafproject.png" },
      { url: "/images/cloverleafproject.png" }
    ],
    problems: {
      description: "Users were abandoning orders due to complicated checkout process.",
      lists: [
        "High cart abandonment rate",
        "Confusing navigation",
        "Slow loading times",
        "Limited payment options"
      ]
    },
    goals: {
      description: "Streamline the ordering process and improve user satisfaction.",
      lists: [
        "Reduce cart abandonment by 40%",
        "Improve app performance",
        "Add multiple payment methods",
        "Enhance restaurant discovery"
      ]
    },
    target: {
      description: "Busy professionals and food enthusiasts looking for convenient meal options.",
      lists: [
        "Office workers",
        "Students",
        "Families",
        "Foodies"
      ]
    },
    role: {
      description: "Led the UX research and UI design for the mobile app redesign.",
      lists: [
        "Conducted user interviews and usability testing",
        "Created user flows and wireframes",
        "Designed high-fidelity UI",
        "Worked with developers on implementation"
      ]
    },
    accessibility: {
      description: "Implemented WCAG 2.1 AA standards throughout the app.",
      images: [
        { url: "/images/cloverleafproject.png" }
      ]
    }
  },
  {
    _id: "project-3",
    // Fields for ProjectCard
    title: "Spotify Web Player",
    name: "Spotify Web Player",
    description: "Enhanced Spotify web player with new features",
    client: "Spotify",
    tag: "Web Application",
    category: "web",
    year: "2024",
    
    // Image fields
    image: { url: "/images/myartstockproject.png" },
    bgImage: { url: "/images/myartstockproject.png" },
    appLogo: { url: "/images/myartstock.webp" },
    overviewThumbnail: { url: "/images/myartstockproject.png" },
    prototype: { url: "/images/myartstockproject.png" },
    
    // Fields for ProjectDetails
    roles: ["UI Designer", "Front-end Developer"],
    industry: "Art and Creativity",
    duration: "4 months",
    overview: "A web-based platform for artists to showcase and sell their work.",
    overviewLinks: {
      liveWebsite: "https://spotify-web-demo.com"
    },
    testimonial: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    extraImages: [
      { url: "/images/myartstockproject.png" },
      { url: "/images/myartstockproject.png" }
    ],
    problems: {
      description: "Users were struggling to manage their art portfolios effectively.",
      lists: [
        "Limited playlist management",
        "Poor offline functionality",
        "Slow search results",
        "No lyrics integration"
      ]
    },
    goals: {
      description: "Bring web player feature parity with desktop app while maintaining performance.",
      lists: [
        "Add playlist creation tools",
        "Improve search speed",
        "Integrate lyrics display",
        "Enhance offline mode"
      ]
    },
    target: {
      description: "Music lovers who prefer browser-based listening.",
      lists: [
        "Office workers",
        "Students",
        "Casual listeners",
        "Audiophiles"
      ]
    },
    role: {
      description: "Designed and developed new features for the web player.",
      lists: [
        "Created UI components in React",
        "Improved accessibility",
        "Optimized performance",
        "Conducted user testing"
      ]
    },
    accessibility: {
      description: "Ensured web player is accessible with keyboard navigation and screen readers.",
      images: [
        { url: "/images/myartstockproject.png" }
      ]
    }
  },
  {
    _id: "project-4",
    // Fields for ProjectCard
    title: "Dine",
    name: "Dine",
    description: "A food delivery/ordering app that connects users with local restaurants.",
    client: "Meta",
    tag: "Mobile Feature",
    category: "web",
    year: "2025",
    
    // Image fields
    image: { url: "/images/dineproject.png" },
    bgImage: { url: "/images/dineproject.png" },
    appLogo: { url: "/images/dineproject.png" },
    overviewThumbnail: { url: "/images/dineproject.png" },
    prototype: { url: "/images/dineproject.png" },
    
    // Fields for ProjectDetails
    roles: ["Product Designer", "Motion Designer"],
    industry: "Hospitality",
    duration: "3 months",
    overview: "Designed new interactive elements for Instagram Stories to increase user engagement.",
    overviewLinks: {
      appStore: "https://apps.apple.com/app/instagram"
    },
    testimonial: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    extraImages: [
      { url: "/images/dineproject.png" },
      { url: "/images/dineproject.png" }
    ],
    problems: {
      description: "Stories engagement was declining due to stale interactive features.",
      lists: [
        "Limited interaction options",
        "Outdated stickers",
        "Poor discoverability of features",
        "Low story completion rate"
      ]
    },
    goals: {
      description: "Revitalize Stories with fresh, engaging interactive elements.",
      lists: [
        "Increase story completion by 30%",
        "Design new interactive stickers",
        "Improve feature discoverability",
        "Enhance creative tools"
      ]
    },
    target: {
      description: "Active Instagram users aged 18-35 who regularly post and view stories.",
      lists: [
        "Content creators",
        "Teens and young adults",
        "Influencers",
        "Brands"
      ]
    },
    role: {
      description: "Led the design of new interactive features for Stories.",
      lists: [
        "Conceptualized new sticker designs",
        "Created motion prototypes",
        "Conducted A/B testing",
        "Collaborated with engineering team"
      ]
    },
    accessibility: {
      description: "Designed features with accessibility in mind, including voiceover support.",
      images: [
        { url: "/images/dineproject.png" }
      ]
    }
  }
];

export default function Work() {
  const [tab, setTab] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  // 🚨 Filter works based on selected tab
  const works = useMemo(() => {
    if (tab === "all") return projectsData;
    return projectsData.filter((item) => item?.category?.toLowerCase() === tab);
  }, [tab]);

  // 🚨 Navigation items with counts
  const navs = useMemo(() => {
    interface Project {
      _id: string;
      name: string;
      category: string;
      description: string;
      year: string;
      client: string;
    }

    type NavValue = "all" | "mobile" | "web";

    interface NavItem {
      name: string;
      value: NavValue | string;
      num: number;
    }

    const getNavCount = (nav: string): number => {
      return projectsData.filter((item: Project) => item?.category?.toLowerCase() === nav).length;
    };

    return [
      {
        name: "All",
        value: "all",
        num: projectsData.length ?? 0,
      },
      {
        name: "Mobile App",
        value: "mobile",
        num: getNavCount("mobile"),
      },
      {
        name: "Web App",
        value: "web",
        num: getNavCount("web"),
      },
    ];
  }, []);

  // 🚨 Text animation for header
  useGSAP(() => {
    const headerText = new SplitText(".work-header", { type: "words" });
    
    gsap.from(headerText.words, {
      opacity: 0,
      y: 100,
      rotationX: -90,
      stagger: 0.05,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".work-header",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  // 🚚 Animation for project cards
  useGSAP(() => {
    if (works?.length > 0) {
      const projectCards = gsap.utils.toArray<HTMLElement>(".project-card");
      
      // Reset animations
      gsap.set(projectCards, { autoAlpha: 0, y: 100 });
      
      // Animate each card
      projectCards.forEach((card: HTMLElement) => {
        gsap.to(card, {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        });
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [works]);

  return (
    <MasterLayout>
      <section className="wrapper py-10 mt-20 lg:space-y-6 space-y-4">
        {/* 🚨 Header Section */}
        <div className="">
          <h1 className="work-header lg:text-[6rem] text-[34px] lg:leading-24 leading-10 text-[#333333] lg:w-[70%] w-[90%]">
            Creating next level digital products
          </h1>
        </div>

        {/* 🚨 Toggle Buttons */}
        <section className="lg:gap-x-4 gap-x-1 flex items-center flex-wrap">
          {navs.map(({ name, num, value }) => {
            return (
              <button
                key={name}
                onClick={() => setTab(value?.toLowerCase())}
                className={`
                  ${tab === value
                    ? "bg-black text-white"
                    : "bg-transparent text-black hover:bg-gray-100"
                  } 
                  lg:py-4 py-2 px-3 lg:px-6
                  lg:w-[200px] lg:h-[80px] 
                  font-light border border-black-200 
                  rounded-full cursor-pointer transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-black-200
                `}
              >
                <h1 className="flex items-center h-full justify-center lg:text-size20 text-[9px] sm:text-sm whitespace-nowrap">
                  {name} ({num})
                </h1>
              </button>
            );
          })}
        </section>

        {/* 🚨 Loading State */}
        {isLoading && <Loader />}

        {/* 🚨 Projects Grid */}
        {!isLoading && (
          <section>
            <section className="">
              {works?.length > 0 && (
                <section className="grid lg:grid-cols-2 grid-cols-1 lg:w-[85%] w-[95%] lg:gap-x-4 mx-auto gap-y-8 lg:gap-y-12">
                  {works?.map((project, index) => {
                    // 🚨 Alternate card positioning for visual interest
                    const isEven = index % 2 === 0;
                    
                    return (
                      <div
                        key={project._id}
                        className={`
                          project-card 
                          ${isEven ? 'lg:mt-0' : 'lg:mt-20'}
                          transition-all duration-500
                        `}
                      >
                        <Link href={`/project-details/${project?._id}`}>
                          <ProjectCard project={project} />
                        </Link>
                      </div>
                    );
                  })}
                </section>
              )}

              {works.length < 1 && (
                <div className="text-3xl text-center w-full py-40 text-gray-500">
                  <p>No projects found in this category</p>
                  <button 
                    onClick={() => setTab("all")}
                    className="mt-4 text-base bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
                  >
                    View All Projects
                  </button>
                </div>
              )}
            </section>
          </section>
        )}
      </section>
    </MasterLayout>
  );
}