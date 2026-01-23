import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ExternalLink, Github, Zap } from "lucide-react";
import GlitchText from "./GlitchText";

const Projects = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
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

  return (
    <section
      className="section"
      id="projects"
      ref={ref}
      style={{
        background:
          "linear-gradient(180deg, #000000 0%, #001a33 50%, #000000 100%)",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center !mb-14 sm:!mb-20"
        >
          <div
            className="hex-code"
            style={{ marginBottom: "var(--spacing-sm)" }}
          >
            {t("projects.sectionCode")}
          </div>
          <GlitchText as="h2" className="neon-cyan">
            {t("projects.title")}
          </GlitchText>
          <p
            style={{
              marginTop: "var(--spacing-md)",
              color: "rgba(0, 243, 255, 0.7)",
              fontFamily: "var(--font-mono)",
            }}
          >
            {t("projects.subtitle")}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, minmax(350px, 1fr))",
            gap: "var(--spacing-xl)",
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, rotateX: 0 }
                  : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="holo-card"
              style={{
                padding: "var(--spacing-xl)",
                position: "relative",
                overflow: "hidden",
                transform:
                  hoveredIndex === index
                    ? "translateY(-8px) scale(1.02)"
                    : "none",
                transition: "transform 0.3s ease",
              }}
            >
              {/* Glitch effect overlay on hover */}
              {hoveredIndex === index && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: `linear-gradient(135deg, ${project.color}10, transparent)`,
                    animation: "rgb-shift 0.2s infinite",
                    pointerEvents: "none",
                    zIndex: 1,
                  }}
                />
              )}

              {/* Project Icon */}
              <div
                style={{
                  fontSize: "3rem",
                  marginBottom: "var(--spacing-md)",
                  filter: "grayscale(0.2)",
                }}
              >
                {project.emoji}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-primary)",
                  fontSize: "var(--font-size-xl)",
                  color: project.color,
                  textShadow: `0 0 20px ${project.color}`,
                  marginBottom: "var(--spacing-sm)",
                  letterSpacing: "0.05em",
                }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: "rgba(0, 243, 255, 0.8)",
                  marginBottom: "var(--spacing-md)",
                  lineHeight: 1.6,
                  fontSize: "var(--font-size-sm)",
                }}
              >
                {project.description}
              </p>

              {/* Challenge & Impact */}
              <div
                className="hud-element"
                style={{
                  marginBottom: "var(--spacing-md)",
                  padding: "var(--spacing-sm)",
                  background: "rgba(0, 243, 255, 0.05)",
                }}
              >
                <div style={{ marginBottom: "var(--spacing-xs)" }}>
                  <span style={{ color: "var(--neon-pink)", fontWeight: 600 }}>
                    <Zap
                      size={14}
                      style={{ display: "inline", marginRight: "4px" }}
                    />
                    {t("projects.challengeLabel")}
                  </span>
                  <p
                    style={{
                      fontSize: "var(--font-size-xs)",
                      marginTop: "4px",
                    }}
                  >
                    {project.challenge}
                  </p>
                </div>
                <div>
                  <span style={{ color: "var(--neon-green)", fontWeight: 600 }}>
                    {t("projects.impactLabel")}
                  </span>
                  <span
                    style={{ marginLeft: "8px", color: "var(--neon-cyan)" }}
                  >
                    {project.impact}
                  </span>
                </div>
              </div>

              {/* Technologies */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "var(--spacing-xs)",
                  marginBottom: "var(--spacing-lg)",
                }}
              >
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    style={{
                      padding: "4px 12px",
                      background: `${project.color}20`,
                      border: `1px solid ${project.color}`,
                      borderRadius: "4px",
                      fontSize: "var(--font-size-xs)",
                      color: project.color,
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", gap: "var(--spacing-sm)" }}>
                <button
                  className="btn-neon"
                  style={{
                    fontSize: "var(--font-size-xs)",
                    padding: "var(--spacing-xs) var(--spacing-sm)",
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--spacing-xs)",
                    borderColor: project.color,
                    color: project.color,
                  }}
                >
                  <ExternalLink size={14} />
                  {t("projects.btnDemo")}
                </button>
                <button
                  className="btn-neon"
                  style={{
                    fontSize: "var(--font-size-xs)",
                    padding: "var(--spacing-xs) var(--spacing-sm)",
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--spacing-xs)",
                    borderColor: "var(--neon-cyan)",
                    color: "var(--neon-cyan)",
                  }}
                >
                  <Github size={14} />
                  {t("projects.btnCode")}
                </button>
              </div>

              {/* Scan line effect */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "2px",
                  background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
                  animation:
                    hoveredIndex === index ? "scan 2s linear infinite" : "none",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            top: 0;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
