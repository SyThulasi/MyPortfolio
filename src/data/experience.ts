import type { Experience } from "./types";

export const experience: Experience[] = [
  {
    id: "zerobeta",
    company: "ZeroBeta",
    title: "Senior Software Engineer",
    period: "Nov 2024 — now",
    current: true,
    roles: [
      { title: "Software Engineer", period: "Nov 2024 — Dec 2025" },
      { title: "Senior Software Engineer", period: "Jan 2026 — now" },
    ],
    summary:
      "I design and build back-end services and APIs for an institutional risk, margin and digital-asset platform — from ISDA SIMM margin calculations to staking and reconciliation services on Ethereum, Solana and Cardano. I own features end to end, help shape architecture and run releases as release manager.",
    tech: ["Java", "Spring Boot", "Node.js", "React", "AWS", "Kubernetes", "Terraform", "Datadog"],
  },
  {
    id: "isa",
    company: "ISA",
    title: "Software Engineering Intern",
    period: "Aug 2023 — Dec 2023",
    summary:
      "Built features in a microservice architecture with Spring Boot, Kafka and gRPC — writing unit tests, fixing bugs and joining code reviews in an agile team. I also delivered a cinema reservation platform as my individual internship project.",
    tech: ["Spring Boot", "Kafka", "gRPC", "PostgreSQL", "Docker", "Jenkins"],
  },
  {
    id: "uop",
    company: "University of Peradeniya",
    title: "Casual Instructor",
    period: "CO226 Database Systems",
    summary:
      "Supported undergraduate database labs, and served on the university Web Consultation Team to improve its web ranking.",
  },
];
