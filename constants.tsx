
import { Project, Skill, Education, Certification, Experience } from './types';

export const PERSONAL_DETAILS = {
  name: "Prashantha D",
  brand: "Prashantha D",
  role: "Software Developer",
  education: "Final-Year Information Science & Engineering Student",
  location: "Bengaluru, Karnataka, India",
  email: "dpsomasamudra@gmail.com",
  phone: "+91 6366726829",
  github: "https://github.com/dpsomasamudra",
  linkedin: "https://linkedin.com/in/prashantha-d6366",
  resumeUrl: "/Prashantha_D_Resume.pdf"
};

export const SKILLS: Skill[] = [
  { name: "Java", level: "Intermediate", category: "Languages" },
  { name: "Python", level: "Intermediate", category: "Languages" },
  { name: "C", level: "Intermediate", category: "Languages" },
  { name: "SQL", level: "Intermediate", category: "Database" },
  { name: "JavaScript", level: "Intermediate", category: "Languages" },
  { name: "React", level: "Beginner", category: "Frontend" },
  { name: "Node.js", level: "Beginner", category: "Backend" },
  { name: "Express", level: "Beginner", category: "Backend" },
  { name: "MongoDB", level: "Intermediate", category: "Database" },
  { name: "HTML & CSS", level: "Advanced", category: "Frontend" },
  { name: "Git & GitHub", level: "Intermediate", category: "Tools" },
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Intern",
    company: "Dyashin Technosoft Pvt Ltd",
    duration: "JUN 2025",
    points: [
      "Gained hands-on experience in Python programming and data analytics while working on real-world datasets.",
      "Improved skills in problem-solving, data processing, and analytical thinking.",
      "Applied technical knowledge in a professional work environment to contribute to practical case studies."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "finsmart",
    title: "FinSmart Stock Analysis",
    problem: "Stock market trends are difficult to predict without leveraging advanced analytical models and historical data.",
    solution: "Implemented ML models (Linear Regression, Random Forest, LSTM) using technical indicators and historical stock data to predict market trends.",
    techStack: ["Python", "ML", "LSTM", "Data Science"],
    githubUrl: "https://github.com/dpsomasamudra",
    images: ["https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=800"]
  },
  {
    id: "honeypot",
    title: "Honeypot Security System",
    problem: "Unauthorized access attempts often go undetected without specialized deception-based security tools.",
    solution: "Built a Python-based honeypot to detect and log unauthorized access attempts. Captured attacker details (IP, ports, payloads) for analysis and reporting, improving security visibility.",
    techStack: ["Python", "Networking", "Security Logs"],
    githubUrl: "https://github.com/dpsomasamudra",
    images: ["https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"]
  },
  {
    id: "emergency-doctor",
    title: "Emergency Doctor Contact System",
    problem: "Immediate access to medical professionals during emergencies is often hampered by slow communication channels.",
    solution: "Engineered a rapid-response system to connect patients with available specialized doctors based on proximity and urgency.",
    techStack: ["React", "Firebase", "Geolocation"],
    githubUrl: "https://github.com/dpsomasamudra",
    images: ["https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800"]
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    degree: "B.E. in Information Science & Engineering",
    institution: "Sri Sairam College of Engineering, Bengaluru, KA",
    duration: "2022 - 2026",
    details: [
      "CGPA: 7.65",
      "Specialization: Computer Science",
      "Core focus on Software Development"
    ]
  },
  {
    degree: "II PUC (Science)",
    institution: "Karnataka Pre-University Education Board",
    duration: "2021",
    details: ["Score: 90.5%"]
  },
  {
    degree: "SSLC",
    institution: "Karnataka Secondary Board",
    duration: "2019",
    details: ["Score: 86.06%"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Front End Web Developer Certification", issuer: "Infosys Springboard", year: "2025" },
  { name: "Google Cybersecurity Professional Certificate (8 Courses)", issuer: "Google/Coursera", year: "2025" },
  { name: "Mastering Authentication Vulnerabilities - Ultimate Course", issuer: "Udemy", year: "2025" },
  { name: "Financial Markets", issuer: "Yale University/Coursera", year: "2024" },
  { name: "SEBI - Investor Certification Examination", issuer: "NISM", year: "2024" }
];
