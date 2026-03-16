// data/projects.ts
import { ProjectDetails } from "@/types/project.types";

export const projectsData: ProjectDetails[] = [
{
  _id: "project-1",
  name: "GeeftMe",
  tag: "Web Application",
  roles: ["Frontend Developer"],
  client: "Geeftme.",
  industry: "Fintech/Crowdfunding",
  duration: "6 months",
  bgImage: {
    url: "/images/geeftmeproject.png"
  },
  overview: "A crowdfunding platform that enables individuals and organizations to raise funds for personal causes, community projects, and charitable initiatives.",
  overviewThumbnail: {
    url: "/images/geeftmeanalytics.png"
  },
  overviewLinks: {
    liveWebsite: "https://geeftme.com"
  },
  prototype: {
    url: "/images/fitness-prototype.jpg"
  },
  testimonial: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  extraImages: [
    { url: "/images/geefme1.png" },
    { url: "/images/geefme2.png" },
    { url: "/images/geefme3.png" },
    { url: "/images/geefme4.png" },
  ],
  problems: {
    description: "The platform needed a responsive, fast, and user-friendly interface that allows users to easily create campaigns, donate securely, and manage fundraising activities.",
    lists: [
      "Complex campaign creation flow for new users",
      "Ensuring responsive UI across mobile, tablet, and desktop devices",
      "Handling dynamic campaign data and updates efficiently",
      "Providing clear navigation for donors and campaign creators"
    ]
  },
  goals: {
    description: "Develop an intuitive and performant frontend interface that simplifies campaign creation and donation while improving overall user experience.",
    lists: [
      "Build responsive and accessible UI components for the fundraising platform",
      "Implement smooth navigation and user flows for campaign creation and donations",
      "Integrate frontend with backend APIs for campaign data, authentication, and payments",
      "Optimize performance and loading speed across devices"
    ]
  },
  target: {
    description: "Individuals, communities, and organizations looking for an easy way to raise funds or support meaningful causes online.",
    lists: [
      "Individuals raising funds for personal causes",
      "Charitable organizations and community projects",
      "Donors looking to support verified campaigns",
      "Users who prefer simple and secure online donation experiences"
    ]
  },
  role: {
    description: "Worked as the Frontend Developer responsible for implementing the user interface and ensuring a smooth user experience across the platform.",
    lists: [
      "Developed responsive user interfaces using modern frontend technologies",
      "Integrated frontend components with backend APIs for campaign and user data",
      "Implemented campaign browsing, donation flows, and user dashboard features",
      "Collaborated with backend developers and designers to deliver a cohesive product",
      "Implemented facial, business and document verification using Dojah and SmileId"
    ]
  },
  accessibility: {
    description: "Focused on creating an accessible and responsive interface to ensure usability across devices and for a diverse range of users.",
    images: [
      { url: "/images/geef.png" },
      { url: "/images/geef2.png" },
    ]
  },
  // 🚀 NEW ARCHITECTURE SECTION FOR GEEFTME
  architecture: {
    overview: "GeeftMe is built with a modern React frontend using Vite for optimal performance, integrated with multiple third-party services for verification and payments.",
      image: {
    url: "/images/geef-architecture.png", // Replace with your actual image path
    caption: "GeeftMe System Architecture Diagram"
  },
    stack: [
      {
        category: "Frontend",
        technologies: ["React", "Vite", "TailwindCSS", "React Router", "React Context API"],
        description: "Fast, responsive UI with component-based architecture"
      },
      {
        category: "Verification Services",
        technologies: ["Dojah", "SmileID", "Custom Verification Hooks"],
        description: "Multi-level verification system for identity, business, and documents"
      },
      {
        category: "Image Processing",
        technologies: ["Custom Widget System", "React Dropzone"],
        description: "Custom-built image editor for campaign media with shadow effects and filters"
      },
      {
        category: "State Management",
        technologies: ["React Context", "Local Storage", "Session Management"],
        description: "Efficient state handling for user sessions and campaign data"
      }
    ],
    keyComponents: [
      {
        name: "Verification System",
        description: "Multi-step verification flow with document upload and facial recognition",
        features: ["Facial verification", "Business document upload", "Identity validation"]
      },
      {
        name: "Campaign Editor",
        description: "Rich media editor for campaign images with custom widgets",
        features: ["Image upload", "Shadow effects", "Filters", "Preview mode"]
      },
      {
        name: "Donation Module",
        description: "Secure donation processing with multiple payment options",
        features: ["One-time donations", "Recurring contributions", "Payment gateway integration"]
      },
      {
        name: "User Dashboard",
        description: "Personalized dashboard for campaign management and tracking",
        features: ["Campaign analytics", "Donation history", "Profile management"]
      }
    ],
    dataFlow: [
      {
        step: "User Authentication",
        flow: "Login/Signup → Verification Check → Dashboard Access"
      },
      {
        step: "Campaign Creation",
        flow: "Create Campaign → Upload Media → Edit Images → Publish Campaign"
      },
      {
        step: "Donation Process",
        flow: "Browse Campaigns → Select Amount → Process Payment → Confirmation"
      }
    ]
  }
},
{
  _id: "project-3",
  name: "MyArtStock",
  tag: "Web Application",
  roles: ["Frontend Developer"],
  client: "MyArtStock",
  industry: "Art Marketplace / E-commerce",
  duration: "8 months",
  bgImage: {
    url: "/images/myartstockproject.png"
  },
  overview: "MyArtStock is an online marketplace where artists and contributors can upload and sell their artworks while buyers can browse, customize, and purchase creative products.",
  overviewThumbnail: {
    url: "/images/myartstock-overview.jpg"
  },
  overviewLinks: {
    liveWebsite: "https://myartstock.com"
  },
  prototype: {
    url: "/images/myartstock-prototype.jpg"
  },
  testimonial: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  extraImages: [
    { url: "/images/myartstock-extra-1.jpg" },
    { url: "/images/myartstock-extra-2.jpg" }
  ],
  problems: {
    description: "The platform required a robust and interactive interface for managing artworks, contributors, and purchases while also supporting real-time visual customization of products.",
    lists: [
      "Creating a scalable frontend for multiple user roles (admin, contributors, vendors, and buyers)",
      "Displaying large volumes of artwork and product listings efficiently",
      "Building an interactive product customization feature for users",
      "Ensuring responsive and smooth UI across different devices"
    ]
  },
  goals: {
    description: "Build a modern art marketplace interface that allows artists to upload their work easily and enables users to preview artworks on real products before purchasing.",
    lists: [
      "Develop user-friendly dashboards for admins, vendors, and contributors",
      "Create responsive product browsing and purchasing flows",
      "Implement the 'Frame My Art' feature to preview artwork on real products",
      "Ensure fast loading and optimized rendering of images across the platform"
    ]
  },
  target: {
    description: "Artists and contributors looking to sell their work online, as well as buyers searching for unique artwork and customized products.",
    lists: [
      "Artists and designers uploading digital artwork",
      "Contributors managing and monetizing their creative content",
      "Buyers interested in art prints and customized products",
      "Users who want to preview artwork on items like mugs, throw pillows, and frames before purchasing"
    ]
  },
  role: {
    description: "Worked as the Frontend Developer responsible for building the entire frontend interface and implementing a custom image preview feature.",
    lists: [
      "Developed the complete frontend of the marketplace including user, contributor, vendor, and admin panels",
      "Integrated frontend with backend APIs for artwork uploads, product listings, and purchases",
      "Implemented the 'Frame My Art' feature allowing users to preview uploaded images on products such as mugs and throw pillows",
      "Built the image processing functionality using Node.js and the Sharp library to dynamically generate product previews"
    ]
  },
  accessibility: {
    description: "Focused on building responsive layouts and clear UI structures to ensure usability across various screen sizes and devices.",
    images: [
      { url: "/images/myartstock-accessibility-1.jpg" }
    ]
  },
  // 🚀 NEW ARCHITECTURE SECTION FOR MYARTSTOCK
  architecture: {
    overview: "MyArtStock is a full-stack art marketplace with React frontend and Node.js backend, featuring role-based dashboards and advanced image processing capabilities.",
      image: {
    url: "/images/myartstock-architecture.png", // Replace with your actual image path
    caption: "MyArtStock Multi-Role Architecture Diagram"
  },
    stack: [
      {
        category: "Frontend",
        technologies: ["React", "Next.js", "TailwindCSS", "React Query", "Framer Motion", "Redux"],
        description: "Multi-role interface with server-side rendering for SEO optimization"
      },
      {
        category: "Backend",
        technologies: ["Node.js", "Express", "Sharp Library"],
        description: "Image processing API with Sharp for merchandise previews"
      },
      {
        category: "Role Management",
        technologies: ["Role-based Access Control", "Multi-dashboard Architecture"],
        description: "Separate interfaces for contributors, vendors, and administrators"
      },
      {
        category: "Payment Processing",
        technologies: ["PayStack", "Escrow System", "Automated Payouts"],
        description: "Secure payment handling with automated revenue sharing"
      }
    ],
    keyComponents: [
      {
        name: "Frame My Art Feature",
        description: "Real-time image preview on merchandise using Sharp processing",
        features: ["Image upload", "Product mockup generation", "Position adjustment", "Preview rendering"]
      },
      {
        name: "Multi-Role Dashboard",
        description: "Role-specific interfaces with tailored functionality",
        features: [
          "Contributor: Artwork upload, sales tracking, withdrawals",
          "Vendor: Order management, production tracking, payment requests",
          "Admin: Approval system, percentage configuration, user management"
        ]
      },
      {
        name: "Revenue Sharing System",
        description: "Automated percentage distribution across stakeholders",
        features: ["Configurable percentages", "Automatic calculations", "Withdrawal requests", "Transaction history"]
      },
      {
        name: "Marketplace Engine",
        description: "Product listing and discovery with advanced filtering",
        features: ["Artwork browsing", "Category filtering", "Search functionality", "Purchase flow"]
      }
    ],
    dataFlow: [
      {
        step: "Artwork Upload",
        flow: "Contributor Upload → Admin Approval → Marketplace Listing"
      },
      {
        step: "Order Processing",
        flow: "Customer Purchase → Vendor Assignment → Production → Delivery → Payment Release"
      },
      {
        step: "Revenue Distribution",
        flow: "Sale Complete → Calculate Percentages → Distribute to Wallets → Withdrawal Available"
      }
    ]
  }
},
{
  _id: "project-2",
  name: "Cloverleaf",
  tag: "Mobile Application",
  roles: ["Frontend Developer"],
  client: "Cloverleaf",
  industry: "Fintech",
  duration: "5 months",
  bgImage: {
    url: "/images/cloverleafproject.png"
  },
  overview: "Cloverleaf is a digital fintech platform that allows users to manage their finances through secure money transfers, savings accounts, and loan services. The application also includes advanced security features such as facial login, BVN verification, and automatic logout after inactivity.",
  
  overviewThumbnail: {
    url: "/images/cloverleaf-overview.jpg"
  },
  overviewLinks: {},
  prototype: {
    url: "/images/cloverleaf-prototype.jpg"
  },
  testimonial: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  extraImages: [
    { url: "/images/cloverleaf-extra-1.jpg" },
    { url: "/images/cloverleaf-extra-2.jpg" }
  ],
  problems: {
    description: "The platform required a secure and user-friendly interface capable of handling sensitive financial operations while maintaining smooth performance and strong authentication mechanisms.",
    lists: [
      "Ensuring secure authentication and user verification",
      "Designing intuitive flows for financial transactions",
      "Handling inactivity timeout for enhanced security",
      "Integrating multiple financial services such as loans, transfers, and savings accounts"
    ]
  },
  goals: {
    description: "Develop a secure and reliable fintech interface that simplifies financial management while maintaining high security standards.",
    lists: [
      "Implement seamless money transfer and transaction flows",
      "Integrate BVN verification for secure identity validation",
      "Enable facial recognition login for faster authentication",
      "Improve account security with automatic logout after inactivity"
    ]
  },
  target: {
    description: "Individuals looking for a secure digital platform to manage their daily financial activities.",
    lists: [
      "Users who want to send and receive money easily",
      "Individuals interested in digital savings accounts",
      "Customers looking for quick access to loans",
      "Users who prioritize secure authentication methods"
    ]
  },
  role: {
    description: "Worked as a Frontend Developer implementing key fintech features and integrating them with backend services.",
    lists: [
      "Developed secure and responsive user interfaces for core fintech features",
      "Implemented money transfer, loan request, and savings account interfaces",
      "Integrated BVN verification to validate user identity",
      "Implemented facial login authentication and inactivity auto-logout functionality",
      "Collaborated with backend developers to integrate APIs for financial operations"
    ]
  },
  accessibility: {
    description: "Ensured the application interface is responsive and accessible across various devices while maintaining clarity in financial transaction flows.",
    images: [
      { url: "/images/cloverleaf-accessibility-1.jpg" }
    ]
  },
  // 🚀 NEW ARCHITECTURE SECTION FOR CLOVERLEAF
  architecture: {
    overview: "Cloverleaf is a React Native mobile application with robust security features and comprehensive financial service integration.",
      image: {
    url: "/images/cloverleaf-architecture.png", // Replace with your actual image path
    caption: "Cloverleaf Fintech Security Architecture"
  },
    stack: [
      {
        category: "Mobile Framework",
        technologies: ["React Native", "React Navigation", "Redux Toolkit"],
        description: "Cross-platform mobile app with native performance"
      },
      {
        category: "Security & Authentication",
        technologies: ["React Native Biometrics", "LocalAuthentication", "BVN Verification API", "Secure Storage"],
        description: "Multi-layer security with biometric and identity verification"
      },
      {
        category: "Financial Services",
        technologies: ["Payment Gateway API", "Loan Processing Engine", "Savings Calculator"],
        description: "Integrated financial services with real-time processing"
      },
      {
        category: "Risk Management",
        technologies: ["Transaction Monitoring", "Risk Scoring Algorithms", "Auto-logout System"],
        description: "Automated risk detection and security enforcement"
      }
    ],
    keyComponents: [
      {
        name: "Biometric Authentication",
        description: "Secure login using device biometrics with platform-specific implementations",
        features: [
          "Android BiometricPrompt integration",
          "iOS LocalAuthentication framework",
          "Fallback PIN authentication",
          "Session management with auto-logout"
        ]
      },
      {
        name: "Financial Transaction Hub",
        description: "Core financial operations with security controls",
        features: [
          "Money transfers with beneficiary management",
          "Loan application and repayment tracking",
          "Savings goals with progress monitoring",
          "Transaction history and receipts"
        ]
      },
      {
        name: "Identity Verification",
        description: "Comprehensive KYC compliance through BVN verification",
        features: [
          "BVN validation and matching",
          "Identity document verification",
          "Risk condition assessment",
          "User tier assignment based on verification level"
        ]
      }
    ],
    dataFlow: [
      {
        step: "User Authentication",
        flow: "App Launch → Biometric Prompt → Verification → Session Creation → Dashboard"
      },
      {
        step: "Money Transfer",
        flow: "Select Beneficiary → Enter Amount → Risk Check → Biometric Confirm → Process Transaction"
      },
      {
        step: "Loan Application",
        flow: "Check Eligibility → Apply → Risk Assessment → Approval → Disbursement"
      }
    ]
  }
},
{
  _id: "project-4",
  name: "Dine",
  tag: "Web Application",
  roles: ["Frontend Developer"],
  client: "Dine",
  industry: "Hospitality / Food Ordering",
  duration: "5 months",
  bgImage: {
    url: "/images/dineproject.png"
  },
  overview: "Dine is a restaurant management and food ordering platform that allows restaurants to create their own pages, showcase menus, accept orders, and manage reservations while customers can easily browse restaurants, order food, and book delivery.",
  overviewThumbnail: {
    url: "/images/dine-overview.jpg"
  },
  overviewLinks: {},
  prototype: {
    url: "/images/dine-prototype.jpg"
  },
  testimonial: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  extraImages: [
    { url: "/images/dine-extra-1.jpg" },
    { url: "/images/dine-extra-2.jpg" }
  ],
  problems: {
    description: "Restaurants needed a centralized platform to manage menus, orders, and reservations while providing customers with an easy way to discover restaurants and place orders online.",
    lists: [
      "Creating dynamic restaurant pages for multiple vendors",
      "Designing intuitive ordering and reservation flows for customers",
      "Handling real-time order management for restaurant owners",
      "Ensuring the platform remains responsive across devices"
    ]
  },
  goals: {
    description: "Develop a scalable and user-friendly frontend platform that simplifies restaurant management and improves the food ordering experience for customers.",
    lists: [
      "Allow restaurants to create and manage their own pages and menus",
      "Enable customers to browse restaurants and place food orders easily",
      "Implement reservation booking and delivery request features",
      "Ensure responsive and fast UI performance across devices"
    ]
  },
  target: {
    description: "Restaurants looking for an online presence and customers who want to easily order food or book restaurant services.",
    lists: [
      "Restaurant owners managing menus, orders, and reservations",
      "Customers searching for nearby restaurants and food options",
      "Users placing food delivery or pickup orders",
      "Customers booking tables or making reservations online"
    ]
  },
  role: {
    description: "Worked as the Frontend Developer responsible for building the user-facing platform and restaurant management interfaces using React and Next.js.",
    lists: [
      "Developed responsive user interfaces using React and Next.js",
      "Built dynamic restaurant pages displaying menus, details, and ordering options",
      "Implemented ordering, delivery booking, and reservation interfaces for customers",
      "Developed the restaurant admin dashboard for managing menus, orders, and reservations",
      "Integrated frontend components with backend APIs for real-time restaurant and order data"
    ]
  },
  accessibility: {
    description: "Focused on creating a responsive and easy-to-navigate interface that ensures restaurant owners and customers can access the platform seamlessly across devices.",
    images: [
      { url: "/images/dine-accessibility-1.jpg" }
    ]
  },
  // 🚀 NEW ARCHITECTURE SECTION FOR DINE
  architecture: {
    overview: "Dine is a comprehensive restaurant management platform built with Next.js, featuring real-time order processing and multi-tenant architecture.",
    stack: [
      {
        category: "Frontend",
        technologies: ["Next.js", "React", "TailwindCSS", "WebSocket", "Redux"],
        description: "Server-side rendered pages with real-time updates"
      },
      {
        category: "Real-time Notification",
        technologies: ["WebSocket", "Socket.io", "Server-Sent Events"],
        description: "Instant order updates between customers, kitchen, and staff"
      },
      {
        category: "QR Code System",
        technologies: ["QR Code Generator API", "Dynamic QR Management"],
        description: "Table-specific QR codes with session-based ordering"
      },
      {
        category: "Order Management",
        technologies: ["State Machines", "Order Queue", "Kitchen Display System"],
        description: "Structured order flow from placement to fulfillment"
      }
    ],
    keyComponents: [
      {
        name: "Multi-tenant Restaurant Pages",
        description: "Dynamic restaurant profiles with customizable menus",
        features: [
          "Restaurant-specific branding",
          "Menu management with categories",
          "Operating hours and availability",
          "Special offers and promotions"
        ]
      },
      {
        name: "QR Code Ordering System",
        description: "Table-specific ordering via QR code scanning",
        features: [
          "Dynamic QR generation per table",
          "Session-based ordering",
          "Table identification",
          "Split bill functionality"
        ]
      },
      {
        name: "Kitchen Display System",
        description: "Real-time order management for kitchen staff",
        features: [
          "Order prioritization",
          "Preparation time tracking",
          "Status updates (pending, preparing, ready)",
          "Delay notifications"
        ]
      },
      {
        name: "Reservation Management",
        description: "Compatible table booking system",
        features: [
          "Time slot selection",
          "Table assignment",
          "Waitlist management",
          "Automated confirmations"
        ]
      }
    ],
    dataFlow: [
      {
        step: "Customer Ordering",
        flow: "Scan QR → Browse Menu → Add to Cart → Place Order → Track Status → Pay"
      },
      {
        step: "Kitchen Processing",
        flow: "Order Received → Preparation Started → Ready for Pickup → Served"
      },
      {
        step: "Reservation Booking",
        flow: "Select Date/Time → Choose Party Size → Confirm → Receive Confirmation → Table Assigned on Arrival"
      }
    ]
  }
}
];