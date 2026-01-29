import { useTranslation } from "react-i18next";

const { t } = useTranslation();
export const projects = [
  {
    title: t("projects.ecommerce.title"),
    description: t("projects.ecommerce.description"),
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    challenge: t("projects.ecommerce.challenge"),
    impact: t("projects.ecommerce.impact"),
    emoji: "🛍️",
    color: "var(--neon-cyan)",
  },
  {
    title: t("projects.dashboard.title"),
    description: t("projects.dashboard.description"),
    technologies: ["Next.js", "TypeScript", "D3.js", "PostgreSQL"],
    challenge: t("projects.dashboard.challenge"),
    impact: t("projects.dashboard.impact"),
    emoji: "📊",
    color: "var(--neon-pink)",
  },
  {
    title: t("projects.social.title"),
    description: t("projects.social.description"),
    technologies: ["React Native", "Firebase", "Redux", "WebSockets"],
    challenge: t("projects.social.challenge"),
    impact: t("projects.social.impact"),
    emoji: "💬",
    color: "var(--neon-purple)",
  },
];
