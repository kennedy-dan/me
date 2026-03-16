// types/project.types.ts
export interface ProjectImage {
  asset?: {
    _ref: string;
  };
  url?: string;
}

export interface OverviewLinks {
  appStore?: string;
  googlePlay?: string;
  liveWebsite?: string;
}

export interface SectionWithLists {
  description?: string;
  lists?: string[];
}

export interface TechnologyStack {
  category: string;
  technologies: string[];
  description: string;
}

export interface KeyComponent {
  name: string;
  description: string;
  features: string[];
}

export interface DataFlow {
  step: string;
  flow: string;
}

export interface ProjectArchitecture {
  overview: string;
  stack: TechnologyStack[];
  keyComponents: KeyComponent[];
  dataFlow: DataFlow[];
  // 🚀 NEW ARCHITECTURE IMAGE FIELD
  image?: {
    url: string;
    caption?: string;
  };
}

export interface ProjectDetails {
  _id: string;
  name: string;
  tag: string;
  roles: string[];
  client: string;
  industry: string;
  duration: string;
  bgImage: ProjectImage;
  overview: string;
  overviewThumbnail: ProjectImage;
  overviewLinks: OverviewLinks;
  prototype: ProjectImage;
  testimonial: string;
  extraImages?: ProjectImage[];
  problems?: SectionWithLists;
  goals?: SectionWithLists;
  target?: SectionWithLists;
  role?: SectionWithLists;
  accessibility?: {
    description: string;
    images?: ProjectImage[];
  };
  architecture?: ProjectArchitecture;
}

export interface ProjectContextType {
  projects: ProjectDetails[];
  fetchProject: () => void;
  isLoading: boolean;
}