
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
    id: "ai-financial-dashboard",
    title: "AI-Powered Financial Analysis and Predictor Dashboard",
    problem: "Stock market trends and risk metrics are difficult to analyze without comprehensive, real-time data integration and predictive modeling.",
    solution: "Developed a Flask web application that analyzes and predicts stock prices for input ticker symbols. Integrated real-time stock analysis with Yahoo Finance API, sentiment analysis via NewsAPI, stock trend indicators (SMA, RSI, MACD), and risk metrics (Sharpe ratio, beta, VaR). Created interactive candlestick charts with buy/sell signals using Plotly and 5-day price predictions via Linear Regression ML model.",
    techStack: ["Flask", "Python", "ML", "Yahoo Finance API", "NewsAPI", "Plotly"],
    githubUrl: "https://github.com/dpsomasamudra",
    images: ["https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=800"]
  },
  {
    id: "patient-management-microservices",
    title: "Patient Management System – Microservices Architecture",
    problem: "Traditional monolithic patient management systems lack scalability and flexibility for modern healthcare needs.",
    solution: "Built production-ready patient management platform using Java Spring Boot microservices architecture deployed on AWS. Implemented scalable backend services with RESTful APIs, JWT authentication, and role-based access control via secure token processing. Integrated MySQL database with optimized queries and deployed containerized services on AWS for high availability and performance. Designed service-to-service communication patterns and implemented comprehensive error handling and logging mechanisms.",
    techStack: ["Java", "Spring Boot", "AWS", "MySQL", "JWT", "Microservices"],
    githubUrl: "https://github.com/dpsomasamudra",
    images: ["https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"]
  },
  {
    id: "honeypot-security",
    title: "Honeypot Security System",
    problem: "Unauthorized access attempts often go undetected without specialized deception-based security monitoring tools.",
    solution: "Built Python-based honeypot to detect and log unauthorized access attempts for security monitoring. Captured attacker behavior including IP addresses, timestamps, and payload data for security analysis and incident response. Improved security visibility by identifying suspicious activity patterns and potential attack vectors.",
    techStack: ["Python", "Networking", "Security", "Logging"],
    githubUrl: "https://github.com/dpsomasamudra",
    images: ["https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"]
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
  { name: "Meta Front-End Developer", issuer: "Meta", year: "2024" },
  { name: "Meta Back-End Developer", issuer: "Meta", year: "2024" },
  { name: "Microsoft Azure Fundamentals", issuer: "Microsoft", year: "2024" },
  { name: "Meta Database Engineer", issuer: "Meta", year: "2024" },
  { name: "Google Cybersecurity", issuer: "Google", year: "2025" }
];
