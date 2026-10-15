import { createElement } from "react";
import {
  TbBrandCss3,
  TbBrandHtml5,
  TbBrain,
  TbDatabase,
  TbApi,
  TbCode,
} from "react-icons/tb";
import {
  SiPython,
  SiJavascript,
  SiOpenjdk,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiSpringboot,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiBootstrap,
  SiVite,
  SiFlask,
  SiFastapi,
  SiDocker,
  SiGit,
  SiPostman,
  SiApachemaven,
  SiIntellijidea,
  SiVisualstudiocode,
  SiOpenai,
  SiC,
} from "react-icons/si";
import { MdWorkOutline, MdSchool, MdSecurity, MdScience } from "react-icons/md";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Skills", hash: "#skills" },
  { name: "Projects", hash: "#projects" },
  { name: "Experience", hash: "#experience" },
  { name: "Education", hash: "#education" },
  { name: "Contact", hash: "#contact" },
] as const;

export const skillsGroups = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: createElement(SiOpenjdk) },
      { name: "C", icon: createElement(SiC) },
      { name: "Python", icon: createElement(SiPython) },
      { name: "JavaScript", icon: createElement(SiJavascript) },
      { name: "SQL", icon: createElement(TbDatabase) },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: createElement(TbBrandHtml5) },
      { name: "CSS", icon: createElement(TbBrandCss3) },
      { name: "React", icon: createElement(SiReact) },
      { name: "Vite", icon: createElement(SiVite) },
      { name: "Tailwind CSS", icon: createElement(SiTailwindcss) },
      { name: "Bootstrap", icon: createElement(SiBootstrap) },
      { name: "Node.js", icon: createElement(SiNodedotjs) },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Spring Boot", icon: createElement(SiSpringboot) },
      { name: "Spring Web", icon: createElement(SiSpringboot) },
      { name: "Spring Security", icon: createElement(MdSecurity) },
      { name: "Spring Data JPA", icon: createElement(TbDatabase) },
      { name: "Flask", icon: createElement(SiFlask) },
      { name: "FastAPI", icon: createElement(SiFastapi) },
      { name: "REST APIs", icon: createElement(TbApi) },
      { name: "SQLAlchemy", icon: createElement(TbDatabase) },
      { name: "JWT", icon: createElement(MdSecurity) },
      { name: "RBAC", icon: createElement(MdSecurity) },
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "Machine Learning", icon: createElement(MdScience) },
      { name: "NLP", icon: createElement(TbBrain) },
      { name: "RAG", icon: createElement(TbBrain) },
      { name: "scikit-learn", icon: createElement(MdScience) },
      { name: "TF-IDF", icon: createElement(TbCode) },
      { name: "Logistic Regression", icon: createElement(TbCode) },
      { name: "OpenAI API", icon: createElement(SiOpenai) },
      { name: "ChromaDB", icon: createElement(TbDatabase) },
      { name: "Embeddings", icon: createElement(TbBrain) },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: createElement(SiMysql) },
      { name: "PostgreSQL", icon: createElement(SiPostgresql) },
      { name: "SQLite", icon: createElement(SiSqlite) },
      { name: "ChromaDB", icon: createElement(TbDatabase) },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: createElement(SiDocker) },
      { name: "Docker Compose", icon: createElement(SiDocker) },
      { name: "Maven", icon: createElement(SiApachemaven) },
      { name: "Git", icon: createElement(SiGit) },
      { name: "Flyway", icon: createElement(TbDatabase) },
      { name: "Alembic", icon: createElement(TbDatabase) },
      { name: "Postman", icon: createElement(SiPostman) },
      { name: "VS Code", icon: createElement(SiVisualstudiocode) },
      { name: "IntelliJ IDEA", icon: createElement(SiIntellijidea) },
    ],
  },
];

export const skillsData = skillsGroups.flatMap((g) => g.skills);

export const experiencesData = [
  {
    title: "Java Backend Developer Intern",
    location: "NxtGenAI  Bangalore, Karnataka",
    description:
      "Developed and maintained RESTful APIs using Java and Spring Boot for an enterprise-level application following a layered architecture. Built and maintained REST endpoints with Spring MVC annotations such as @RestController, @RequestMapping, and @PathVariable; explored asynchronous processing with @EnableAsync and ThreadPoolTaskExecutor, and debugged existing backend features following coding standards and best practices.",
    icon: createElement(MdWorkOutline),
    date: "Jan 2026 - June 2026",
  },
] as const;

export const educationData = [
  {
    title: "St Joseph College of Engineering",
    location: "Mangalore, India",
    description:
      "B.E. in Computer Science and Business Systems (2022 - 2026).",
    icon: createElement(MdSchool),
    date: "2022 - 2026",
  },
] as const;

export const projectsData = [
  {
    title: "OrionX - AI Educational Platform",
    subtitle: "AI-powered learning platform",
    description:
      "Transforms static educational materials into interactive, citation-backed conversations using RAG. Ingests PDF/DOCX/TXT, retrieves relevant chunks, and grounds LLM answers in source material with citations.",
    tech: ["Python", "RAG", "Machine Learning", "NLP", "FastAPI", "ChromaDB", "OpenAI"],
    year: "2025",
    link: "https://github.com/OJonathanO/OrionX-AI-Educational-Platform/tree/master",
    dlink: "https://github.com/OJonathanO/OrionX-AI-Educational-Platform/blob/master/README.md",

  },
  {
    title: "Message Fraud Detection System",
    subtitle: "ML-powered spam & fraud classifier",
    description:
      "Full-stack application that classifies text messages as spam or legitimate using TF-IDF + Logistic Regression, with risk levels, explainability, prediction history, CSV export, and an analytics dashboard.",
    tech: ["Flask", "React", "NLP", "Machine Learning", "scikit-learn", "Vite"],
    year: "2024",
    link: "https://github.com/OJonathanO/Message-Fraud-Detection-System/tree/master",
    dlink: "https://github.com/OJonathanO/Message-Fraud-Detection-System/blob/master/README.md",
  },
  {
    title: "Library Management System",
    subtitle: "Enterprise library automation",
    description:
      "Full-stack library system with JWT auth and role-based access for admins and users: books, authors, categories, borrow requests, returns, reservations, fines, payments, notifications, audit logs, and dashboard analytics.",
    tech: ["Java", "Spring Boot", "MySQL", "JWT", "Flyway", "Bootstrap"],
    year: "2023",
    link: "https://github.com/OJonathanO/Library-Management-System/tree/master",
    dlink: "https://github.com/OJonathanO/Library-Management-System/blob/master/README.md",
  },
] as const;