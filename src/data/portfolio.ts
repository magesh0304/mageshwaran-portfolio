export const personalInfo = {
  name: "Mageshwaran M",
  roles: [
    "Junior Full Stack Developer",
    "AI Enthusiast",
    "Web Developer",
    "Prompt Engineer",
  ],
  tagline: "Crafting intelligent digital experiences with AI & code",
  resumeUrl: "/resume.pdf",
  email: "mrmageshwaran03@gmail.com",
  phone: "+91 93425 49902",
  linkedin: "https://www.linkedin.com/in/mageshwaran-m03-",
  github: "https://github.com/mageshwaran",
  whatsapp: "https://wa.me/919342549902",
};

export const aboutData = {
  title: "About Me",
  paragraphs: [
    "I'm Mageshwaran M, a passionate MCA student at SRM Institute of Science and Technology, driven by a deep fascination for Artificial Intelligence and futuristic technologies.",
    "With a strong foundation in full-stack web development, I specialize in building intelligent, responsive, and visually stunning digital experiences. My journey blends creativity with technical expertise — from crafting pixel-perfect interfaces to integrating machine learning models.",
    "As a quick learner and innovative thinker, I thrive on solving complex problems and transforming ideas into impactful applications. I'm particularly passionate about AI-powered solutions, prompt engineering, and creating immersive user experiences that push the boundaries of what's possible on the web.",
  ],
  highlights: [
    { label: "University", value: "SRM Institute of Science and Technology" },
    { label: "Program", value: "Master of Computer Applications (MCA)" },
    { label: "Focus", value: "AI & Full Stack Development" },
    { label: "Location", value: "India" },
  ],
};

export const skills = [
  { name: "Python", level: 85, category: "Languages", icon: "🐍" },
  { name: "Django", level: 75, category: "Frameworks", icon: "🎯" },
  { name: "JavaScript", level: 80, category: "Languages", icon: "⚡" },
  { name: "HTML", level: 95, category: "Frontend", icon: "🌐" },
  { name: "CSS", level: 90, category: "Frontend", icon: "🎨" },
  { name: "PHP", level: 70, category: "Languages", icon: "🐘" },
  { name: "MySQL", level: 78, category: "Database", icon: "🗄️" },
  { name: "Git", level: 80, category: "Tools", icon: "📦" },
  { name: "VS Code", level: 92, category: "Tools", icon: "💻" },
  { name: "Canva", level: 85, category: "Design", icon: "🖌️" },
  { name: "AI Tools", level: 88, category: "AI", icon: "🤖" },
  { name: "Prompt Engineering", level: 90, category: "AI", icon: "✨" },
];

export const experience = [
  {
    id: 1,
    role: "Web Development Intern",
    company: "Syscom Infotech",
    location: "Dindigul, India",
    period: "2024",
    description:
      "Gained hands-on experience in full-stack web development, building production-ready websites and web applications.",
    responsibilities: [
      "Developed static and dynamic websites using modern web technologies",
      "Worked extensively with HTML, CSS, JavaScript, PHP, and MySQL",
      "Built responsive frontend interfaces with cross-browser compatibility",
      "Integrated MySQL databases for dynamic content management",
      "Implemented responsive design patterns for multi-device support",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Movie Success Prediction System",
    description:
      "An AI-powered system that predicts movie success using machine learning algorithms. Features advanced data analysis, box-office prediction models, and an interactive dashboard for visualizing trends.",
    technologies: ["Python", "Django", "Machine Learning", "MySQL"],
    features: [
      "AI-based movie success prediction engine",
      "Box-office revenue analysis & forecasting",
      "Interactive data visualization dashboard",
      "Real-time trend analysis",
      "User-friendly responsive interface",
    ],
    liveUrl: "#",
    githubUrl: "#",
    image: "/projects/movie-prediction.jpg",
    featured: true,
  },
];

export const featuredCertifications = [
  {
    id: "aws",
    title: "AWS re/Start Cloud Practitioner",
    subtitle: "Certified by TN Skill Corporation",
    name: "Mageshwaran M",
    description:
      "Successfully completed the AWS re/Start Cloud Practitioner program with skill competency certification in Cloud Computing and IT-enabled services.",
    image: "/images/cert-aws-restart.jpg",
    year: "2025",
    skills: ["Cloud Computing", "AWS Services", "IT Infrastructure", "Networking", "Security"],
    accent: "#FFB700",
  },
  {
    id: "syscom",
    title: "Web Design & Development Internship",
    subtitle: "Certified by Syscom Infotech",
    name: "Mageshwaran M",
    description:
      "Successfully completed the Web Design & Development Internship Program at Syscom Infotech from 20.12.2024 to 20.01.2025.",
    image: "/images/cert-syscom-internship.jpg",
    year: "2025",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    accent: "#00d4ff",
  },
];

export const certifications = [
  {
    id: 1,
    title: "AWS re/Start Cloud Practitioner",
    issuer: "TN Skill Corporation",
    year: "2025",
    icon: "☁️",
  },
  {
    id: 2,
    title: "Web Design & Development Internship",
    issuer: "Syscom Infotech",
    year: "2025",
    icon: "💻",
  },
  {
    id: 3,
    title: "Be10x AI Tools & ChatGPT Workshop",
    issuer: "Be10x",
    year: "2024",
    icon: "🤖",
  },
  {
    id: 4,
    title: "HTML Certification",
    issuer: "Great Learning",
    year: "2024",
    icon: "🌐",
  },
  {
    id: 5,
    title: "Data Science Workshop",
    issuer: "Workshop Certificate",
    year: "2024",
    icon: "📊",
  },
];

export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];
