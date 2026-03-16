"use client"
import Comment from "../UI/Cards/Comments";

// Types
interface CommentType {
  id: number;
  name: string;
  position: string;
  text: string;
  image: string;
}

interface RecommendationsProps {
  isRounded?: boolean;
}

export default function Recommendations({ isRounded = true }: RecommendationsProps) {
  const comments: CommentType[] = [
    {
      id: 1,
      name: "John Carter",
      position: "Product Manager at FintechX",
      text: "Kennedy is an exceptional frontend developer. His attention to detail and ability to translate designs into functional interfaces while maintaining performance is impressive. The code quality and documentation were top-notch.",
      image: "/images/testimonials/john.jpg",
    },
    {
      id: 2,
      name: "Sarah Williams",
      position: "Founder at BuildLabs",
      text: "Working with Kennedy was a great experience. He communicates clearly, delivers high-quality work consistently, and always considers accessibility and user experience in his implementations.",
      image: "/images/testimonials/sarah.jpg",
    },
    {
      id: 3,
      name: "David Chen",
      position: "CTO at DevBridge",
      text: "Kennedy helped us ship a complex product UI on time. His knowledge of React, TypeScript, and modern frontend tools is outstanding. He also mentored junior developers on the team.",
      image: "/images/testimonials/david.jpg",
    },
    {
      id: 4,
      name: "Amaka Okafor",
      position: "Product Designer",
      text: "Kennedy brings designs to life beautifully. The UI interactions and animations he implemented were exactly what we envisioned. He also suggested improvements that enhanced the user experience.",
      image: "/images/testimonials/amaka.jpg",
    },
  ];

  return (
    <section
      className={`
        bg-white py-24 px-6 lg:px-12
        ${isRounded ? "rounded-t-2xl" : ""}
        border-t border-gray-100
      `}
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <span className="text-sm font-mono text-gray-400 tracking-wider block">
            (05) — Testimonials
          </span>
          
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 max-w-2xl mx-auto leading-relaxed">
            Kind words from
            <span className="font-medium block mt-2">people I've worked with</span>
          </h2>
          
          <p className="text-gray-400 text-sm max-w-md mx-auto font-mono">
            Don't just take my word for it
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative overflow-hidden py-8">
          {/* Gradient Overlays for Fade Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          
          {/* Scrolling Container */}
          <div className="flex animate-scroll">
            {[...comments, ...comments].map((comment, index) => (
              <div
                key={`${comment.id}-${index}`}
                className="flex-none w-[350px] lg:w-[400px] mx-4"
              >
                <Comment {...comment} />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex justify-center gap-12 pt-8">
          <div className="text-center">
            <div className="text-3xl font-light text-gray-900">15+</div>
            <div className="text-sm text-gray-400 mt-1 font-mono">Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-gray-900">25+</div>
            <div className="text-sm text-gray-400 mt-1 font-mono">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-gray-900">4.9★</div>
            <div className="text-sm text-gray-400 mt-1 font-mono">Rating</div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 2));
          }
        }
        
        .animate-scroll {
          animation: scroll 40s linear infinite;
          width: fit-content;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}