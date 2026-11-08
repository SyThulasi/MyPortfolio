import type { Project } from "./types";

const repo = (name: string, owner = "SyThulasi") => `https://github.com/${owner}/${name}`;

export const projects: Project[] = [
  {
    slug: "cinema-app",
    title: "Cinema Reservation Platform",
    kind: "Backend · Microservices",
    team: "Solo",
    year: "2023",
    summary:
      "Cinema profiles, movie scheduling, per-showtime seat inventory and validated reservations — built as independent Spring Boot services during my ISA internship.",
    stack: ["Spring Boot", "Kafka", "PostgreSQL", "React"],
    repo: repo("CinemaApp"),
  },
  {
    slug: "medical-annotation",
    title: "Medical Image Annotation",
    kind: "Research · ML",
    team: "Team",
    year: "2024",
    summary:
      "Final-year research: few-shot semantic segmentation that learns from a handful of annotated images to label dental image datasets, with optional text prompting.",
    stack: ["Python", "ML", "Segmentation"],
    repo: repo("e18-4yp-Automated-Medical-Image-Annotation-for-Dataset-Building"),
    website:
      "https://projects.ce.pdn.ac.lk/4yp/e18/Automated-Medical-Image-Annotation-for-Dataset-Building/",
  },
  {
    slug: "corals-protector",
    title: "Corals Protector",
    kind: "Full-stack",
    team: "Team",
    year: "2023",
    summary:
      "Analyses the factors affecting coral growth and human impact on reefs, delivered as a web application on AWS EC2 with controlled access to sensitive data.",
    stack: ["React", "Node.js", "MongoDB", "AWS"],
    repo: repo("e18-3yp-Corals-Protector"),
  },
  {
    slug: "sinhala-tamil-ocr",
    title: "Sinhala → Tamil OCR",
    kind: "Full-stack · NLP",
    team: "Team",
    year: "2023",
    summary:
      "Reads printed Sinhala documents with OCR, converts them to editable text and translates them into Tamil.",
    stack: ["React", "Node.js", "OCR", "NLP"],
    repo: repo(
      "e18-6sp-Optical-Character-Recognition-and-Translation-from-Sinhala-to-Tamil-for-Printed-Documents",
    ),
  },
  {
    slug: "secured-vision",
    title: "Secured Vision Surveillance",
    kind: "IoT · Mobile",
    team: "Team",
    year: "2023",
    summary:
      "Detects unauthorised access, switches on the lights and captures images of intruders, with a dashboard for real-time monitoring.",
    stack: ["Flutter", "Firebase", "IoT"],
    repo: repo("e18-co326-Secured-Vision-Camera-Surveillance-System-with-Automated-Lighting"),
  },
  {
    slug: "snat",
    title: "SnaT — Meal Tracking",
    kind: "Mobile",
    team: "Team",
    year: "2022",
    summary: "A meal-tracking app built with a food-science research team from Wayamba University.",
    stack: ["Flutter", "Firebase"],
    repo: repo("SnaT-meal-tracking-app", "cepdnaclk"),
  },
  {
    slug: "crypto-bidding",
    title: "Cryptocurrency Bidding",
    kind: "Mobile",
    team: "Team",
    year: "2022",
    summary: "Buy and sell cryptocurrency through real-time auctions.",
    stack: ["Java", "Firebase"],
    repo: repo("CryptoCurrency-Bidding-App"),
  },
];
