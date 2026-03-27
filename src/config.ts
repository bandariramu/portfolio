// Site configuration
// Ram Bandari - Personal Portfolio

export interface SiteConfig {
  language: string;
  title: string;
  description: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  title: "Ram Bandari | AI & ML Student & Developer",
  description: "Personal portfolio of Ram Bandari - Aspiring AI & ML student with expertise in Python, Web Development, and Data Engineering. B.Tech at KITS(S).",
};

// Navigation configuration
export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  links: NavLink[];
  contactLabel: string;
  contactHref: string;
}

export const navigationConfig: NavigationConfig = {
  logo: "RAM.",
  links: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#services" },
    { label: "Projects", href: "#portfolio" },
    { label: "Resume", href: "#cta" },
  ],
  contactLabel: "Contact Me",
  contactHref: "mailto:bramu0158@gmail.com",
};

// Hero section configuration
export interface HeroConfig {
  name: string;
  roles: string[];
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  name: "RAM BANDARI",
  roles: [
    "AI & ML Student",
    "Full Stack Developer",
    "Data Engineer",
    "UI/UX Designer",
    "Content Creator",
  ],
  backgroundImage: "/images/hero-bg.jpg",
};

// About section configuration
export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutImage {
  src: string;
  alt: string;
}

export interface AboutConfig {
  label: string;
  description: string;
  experienceValue: string;
  experienceLabel: string;
  stats: AboutStat[];
  images: AboutImage[];
}

export const aboutConfig: AboutConfig = {
  label: "About Me",
  description: "I'm Ram Bandari, an aspiring Artificial Intelligence and Machine Learning student at Kakatiya Institute of Technology & Science (KITS). With a solid foundation in programming, web development, and data engineering, I'm passionate about applying my knowledge to real-world projects. I have hands-on experience with AWS cloud services, full-stack development, and building data pipelines. Currently pursuing my B.Tech with a CGPA of 7.4, I'm constantly learning and growing in the tech field.",
  experienceValue: "2+",
  experienceLabel: "Years of\nLearning",
  stats: [
    { value: "7.4", label: "Current CGPA" },
    { value: "10", label: "SSC GPA" },
    { value: "72.6%", label: "Intermediate" },
  ],
  images: [
    { src: "/images/about-1.jpg", alt: "Modern workspace" },
    { src: "/images/about-2.jpg", alt: "Coding" },
    { src: "/images/about-3.jpg", alt: "AI & ML" },
    { src: "/images/about-4.jpg", alt: "Cloud computing" },
  ],
};

// Services section configuration (Skills)
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
  image: string;
}

export interface ServicesConfig {
  label: string;
  heading: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  label: "My Skills",
  heading: "Technologies & Expertise",
  services: [
    {
      iconName: "Code",
      title: "Python Programming",
      description: "Proficient in Python with experience in data manipulation, scripting, and building applications. Strong foundation in core programming concepts.",
      image: "/images/service-1.jpg",
    },
    {
      iconName: "Layout",
      title: "Web Development",
      description: "Full-stack web development using HTML5, CSS3, and JavaScript. Experience building responsive and interactive web applications with modern UI/UX principles.",
      image: "/images/service-2.jpg",
    },
    {
      iconName: "Database",
      title: "Database & SQL",
      description: "Skilled in SQL for data handling, complex queries, and database management. Experience with data modeling and ETL processes.",
      image: "/images/service-3.jpg",
    },
    {
      iconName: "Brain",
      title: "AI & Machine Learning",
      description: "Studying Artificial Intelligence and Machine Learning with focus on neural networks, data analysis, and predictive modeling. Passionate about cutting-edge AI technologies.",
      image: "/images/service-4.jpg",
    },
  ],
};

// Portfolio section configuration (Projects)
export interface ProjectItem {
  title: string;
  category: string;
  year: string;
  image: string;
  featured?: boolean;
}

export interface PortfolioCTA {
  label: string;
  heading: string;
  linkText: string;
  linkHref: string;
}

export interface PortfolioConfig {
  label: string;
  heading: string;
  description: string;
  projects: ProjectItem[];
  cta: PortfolioCTA;
  viewAllLabel: string;
}

export const portfolioConfig: PortfolioConfig = {
  label: "My Projects",
  heading: "Featured Work",
  description: "A showcase of my academic projects and hands-on experience in web development, data engineering, and software development.",
  projects: [
    {
      title: "Restaurant Management Website",
      category: "Web Development",
      year: "2024",
      image: "/images/portfolio-1.jpg",
      featured: true,
    },
    {
      title: "AWS Data Pipeline",
      category: "Data Engineering",
      year: "2024",
      image: "/images/portfolio-2.jpg",
    },
    {
      title: "Mobile App Interface",
      category: "UI/UX Design",
      year: "2024",
      image: "/images/portfolio-3.jpg",
    },
    {
      title: "E-Commerce Dashboard",
      category: "Full Stack",
      year: "2024",
      image: "/images/portfolio-4.jpg",
    },
    {
      title: "Content Creation Platform",
      category: "Digital Marketing",
      year: "2024",
      image: "/images/portfolio-5.jpg",
    },
  ],
  cta: {
    label: "Have a project in mind?",
    heading: "Let's Work Together",
    linkText: "Get in Touch",
    linkHref: "mailto:bramu0158@gmail.com",
  },
  viewAllLabel: "View All Projects",
};

// Testimonials section configuration
export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}

export interface TestimonialsConfig {
  label: string;
  heading: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  label: "Testimonials",
  heading: "What People Say",
  testimonials: [
    {
      quote: "Ram demonstrated exceptional skills during the AWS Data Engineering internship. His ability to design and implement data pipelines was impressive.",
      author: "AWS Academy",
      role: "Mentor",
      company: "Amazon Web Services",
      image: "/images/profile.jpg",
      rating: 5,
    },
    {
      quote: "A dedicated student with strong problem-solving abilities. Ram's Restaurant Management project showed great attention to detail and UI/UX skills.",
      author: "Faculty Member",
      role: "Professor",
      company: "KITS",
      image: "/images/profile.jpg",
      rating: 5,
    },
    {
      quote: "Ram's content creation skills and digital marketing knowledge have helped grow our online presence significantly. Highly recommended!",
      author: "Vibe Clicks",
      role: "Collaborator",
      company: "Instagram",
      image: "/images/profile.jpg",
      rating: 5,
    },
  ],
};

// CTA section configuration (Contact/Resume)
export interface CTAConfig {
  tags: string[];
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  email: string;
  backgroundImage: string;
}

export const ctaConfig: CTAConfig = {
  tags: ["AI & ML Student", "Full Stack Developer", "Data Engineer", "UI/UX Designer"],
  heading: "Let's Build Something Amazing Together",
  description: "I'm currently open to internship opportunities and collaborative projects. Whether you need a developer, data engineer, or creative problem solver, I'd love to hear from you!",
  buttonText: "Download Resume",
  buttonHref: "/Ramu_Bandari_Resume.pdf",
  email: "bramu0158@gmail.com",
  backgroundImage: "/images/cta-bg.jpg",
};

// Footer section configuration
export interface FooterLinkColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterConfig {
  logo: string;
  description: string;
  columns: FooterLinkColumn[];
  socialLinks: SocialLink[];
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  newsletterPlaceholder: string;
  copyright: string;
  credit: string;
}

export const footerConfig: FooterConfig = {
  logo: "RAM.",
  description: "Aspiring AI & ML student passionate about building innovative solutions. Currently pursuing B.Tech at KITS(S) with expertise in Python, Web Development, and Data Engineering.",
  columns: [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "#hero" },
        { label: "About", href: "#about" },
        { label: "Skills", href: "#services" },
        { label: "Projects", href: "#portfolio" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "bramu0158@gmail.com", href: "mailto:bramu0158@gmail.com" },
        { label: "+91 93926 55813", href: "tel:+919392655813" },
        { label: "Uppal, Telangana, India", href: "#" },
      ],
    },
    {
      title: "Social",
      links: [
        { label: "Instagram: vibeclicks.in", href: "https://instagram.com/vibeclicks.in" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/ramu-bandari-81a241352" },
        { label: "GitHub", href: "https://github.com/rambandari" },
      ],
    },
  ],
  socialLinks: [
    { iconName: "Instagram", href: "https://instagram.com/vibeclicks.in", label: "Instagram" },
    { iconName: "Linkedin", href: "https://www.linkedin.com/in/ramu-bandari-81a241352", label: "LinkedIn" },
    { iconName: "Github", href: "https://github.com/rambandari", label: "GitHub" },
    { iconName: "Mail", href: "mailto:bramu0158@gmail.com", label: "Email" },
  ],
  newsletterHeading: "Stay Updated",
  newsletterDescription: "Subscribe to get updates on my latest projects and achievements.",
  newsletterButtonText: "Subscribe",
  newsletterPlaceholder: "Enter your email",
  copyright: "© 2024 Ram Bandari. All rights reserved.",
  credit: "Built with passion and code.",
};
