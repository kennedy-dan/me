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

// Types
interface ImageField {
  url: string;
}

interface ProjectData {
  _id: string;
  title: string;
  name: string;
  description: string;
  client: string;
  tag: string;
  category: "web" | "mobile" | "all";
  year: string;
  
  // Images
  image: ImageField;
  bgImage: ImageField;
  appLogo: ImageField;
  overviewThumbnail: ImageField;
  prototype: ImageField;
  
  // Project details
  roles: string[];
  industry: string;
  duration: string;
  overview: string;
  overviewLinks: {
    liveWebsite?: string;
    appStore?: string;
    googlePlay?: string;
  };
  testimonial: string;
  extraImages: ImageField[];
  problems: {
    description: string;
    lists: string[];
  };
  goals: {
    description: string;
    lists: string[];
  };
  target: {
    description: string;
    lists: string[];
  };
  role: {
    description: string;
    lists: string[];
  };
  accessibility: {
    description: string;
    images: ImageField[];
  };
}

type TabType = "all" | "web" | "mobile";

interface NavItem {
  name: string;
  value: TabType;
  count: number;
}

// Hardcoded projects data
const projectsData: ProjectData[] = [
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

export default function Work(): React.ReactElement {
  const [activeTab, setActiveTab] = useState<TabType>("all");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Filter projects based on active tab
  const filteredProjects = useMemo((): ProjectData[] => {
    if (activeTab === "all") return projectsData;
    return projectsData.filter((project) => project.category === activeTab);
  }, [activeTab]);

  // Navigation items with counts
  const navItems: NavItem[] = useMemo((): NavItem[] => {
    const getCountByCategory = (category: TabType): number => {
      if (category === "all") return projectsData.length;
      return projectsData.filter((p) => p.category === category).length;
    };

    return [
      { name: "All Projects", value: "all", count: getCountByCategory("all") },
      { name: "Web Applications", value: "web", count: getCountByCategory("web") },
      { name: "Mobile Apps", value: "mobile", count: getCountByCategory("mobile") },
    ];
  }, []);

  // Text animation for header
  useGSAP(() => {
    const headerText = new SplitText(".work-header", { type: "words, chars" });
    
    gsap.from(headerText.chars, {
      opacity: 0,
      y: 50,
      rotateX: -90,
      stagger: 0.02,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".work-header",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  // Animation for project cards
  useGSAP(() => {
    if (filteredProjects.length > 0) {
      const projectCards = gsap.utils.toArray<HTMLElement>(".project-card");
      
      gsap.set(projectCards, { opacity: 0, y: 50 });
      
      projectCards.forEach((card: HTMLElement) => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=50",
            toggleActions: "play none none reverse",
          },
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [filteredProjects]);

  return (
    <MasterLayout>
      <main className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24">
          
          {/* Header Section */}
          <div className="mb-20">
            <span className="text-sm font-mono text-gray-400 tracking-wider block mb-4">
              (03) — Featured Work
            </span>
            
            <h1 className="work-header text-5xl lg:text-7xl font-light text-gray-900 max-w-4xl leading-tight">
              Creating next level
              <span className="font-medium block mt-2">digital products</span>
            </h1>
          </div>

          {/* Filter Tabs */}
          <div className="mb-16 flex flex-wrap gap-3">
            {navItems.map(({ name, value, count }) => (
              <button
                key={value}
                onClick={() => setActiveTab(value)}
                className={`
                  px-6 py-3 text-sm font-mono transition-all
                  ${activeTab === value
                    ? 'bg-gray-900 text-white'
                    : 'bg-transparent text-gray-400 hover:text-gray-600 border border-gray-100 hover:border-gray-200'
                  }
                `}
              >
                {name} <span className="text-xs opacity-60">({count})</span>
              </button>
            ))}
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center items-center py-40">
              <Loader />
            </div>
          )}

          {/* Projects Grid */}
          {!isLoading && (
            <>
              {filteredProjects.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                  {filteredProjects.map((project, index) => {
                    const isEven = index % 2 === 0;
                    
                    return (
                      <div
                        key={project._id}
                        className={`
                          project-card opacity-0
                          ${isEven ? 'md:mt-0' : 'md:mt-16'}
                          transition-all duration-500
                        `}
                      >
                        <Link href={`/project-details/${project._id}`}>
                          <ProjectCard project={project} />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-40 space-y-6">
                  <p className="text-2xl font-light text-gray-300">
                    No projects found
                  </p>
                  <button
                    onClick={() => setActiveTab("all")}
                    className="px-6 py-3 bg-gray-900 text-white text-sm font-mono hover:bg-gray-800 transition-colors"
                  >
                    View all projects
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </MasterLayout>
  );
}