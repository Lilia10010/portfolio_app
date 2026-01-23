import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Code2, Database, Wrench, Sparkles } from "lucide-react";

const Skills = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillsData = [
    {
      category: "FRONTEND",
      icon: <Code2 size={32} />,
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "Angular", level: 30 },
        { name: "Zustand", level: 88 },
        { name: "Tailwind", level: 85 },
        { name: "Styled Components", level: 85 },
        { name: "End more ...", level: 85 },
      ],
      color: "var(--neon-cyan)",
    },
    {
      category: "CORE",
      icon: <Database size={32} />,
      skills: [
        { name: "JavaScript", level: 92 },
        { name: "TypeScript", level: 85 },
        { name: "c", level: 88 },
        { name: "c++", level: 87 },
        { name: "Shell", level: 87 },
        { name: "Linux", level: 87 },
        { name: "End more ...", level: 85 },
      ],
      color: "var(--neon-pink)",
    },
    {
      category: "TOOLS",
      icon: <Wrench size={32} />,
      skills: [
        { name: "Git", level: 95 },
        { name: "Docker", level: 82 },
        { name: "API REST", level: 80 },
        { name: "GraphQL", level: 90 },
        { name: "JWT", level: 90 },
        { name: "End more ...", level: 85 },
      ],
      color: "var(--neon-purple)",
    },
    {
      category: "DESIGN",
      icon: <Sparkles size={32} />,
      skills: [
        { name: "UI/UX Design", level: 90 },
        { name: "Animation", level: 92 },
        { name: "Creative Code", level: 88 },
        { name: "Frame motion", level: 92 },
        { name: "Figma", level: 92 },
        { name: "End more ...", level: 85 },
      ],
      color: "var(--neon-orange)",
    },
  ];

  return (
    <section
      className="section"
      id="skills"
      ref={ref}
      style={{
        background:
          "linear-gradient(180deg, #000000 0%, #2d0a4e 50%, #000000 100%)",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center !mb-14 sm:!mb-20"
        >
          <div
            className="hex-code"
            style={{ marginBottom: "var(--spacing-sm)" }}
          >
            {t("skills.sectionComment")}
          </div>
          <h2 className="neon-pink">{t("skills.title")}</h2>
          <div
            style={{
              height: "2px",
              width: "100px",
              background:
                "linear-gradient(90deg, transparent, var(--neon-cyan), transparent)",
              margin: "var(--spacing-md) auto 0",
            }}
          />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="holo-card"
              style={{
                position: "relative",
              }}
            >
              {/* Category Header */}
              <div
                className="flex items-center gap-4 !mb-4 sm:!mb-6"
                // style={{
                //   display: "flex",
                //   alignItems: "center",
                //   gap: "var(--spacing-sm)",
                //   marginBottom: "var(--spacing-lg)",
                //   color: category.color,
                // }}
              >
                {category.icon}
                <h3
                  style={{
                    fontFamily: "var(--font-primary)",
                    fontSize: "var(--font-size-xl)",
                    color: category.color,
                    textShadow: `0 0 20px ${category.color}`,
                  }}
                >
                  {category.category}
                </h3>
              </div>

              {/* Skills Bars */}
              <div className="flex flex-col gap-4 sm:gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",

                        fontFamily: "var(--font-mono)",
                        fontSize: "var(--font-size-sm)",
                        color: "var(--neon-cyan)",
                      }}
                    >
                      <span>{skill.name}</span>
                      {/* <span className="hex-code">{skill.level}%</span> */}
                    </div>

                    {/* Progress Bar */}
                    <div
                      style={{
                        width: "100%",
                        height: "6px",
                        background: "rgba(0, 243, 255, 0.1)",
                        position: "relative",
                        overflow: "hidden",
                        border: "1px solid rgba(0, 243, 255, 0.3)",
                      }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          isInView ? { width: `${skill.level}%` } : { width: 0 }
                        }
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        style={{
                          height: "100%",
                          background: `linear-gradient(90deg, ${category.color}, transparent)`,
                          boxShadow: `0 0 10px ${category.color}`,
                          position: "relative",
                        }}
                      >
                        {/* Animated stripe */}
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `repeating-linear-gradient(
                              90deg,
                              transparent,
                              transparent 10px,
                              rgba(255, 255, 255, 0.1) 10px,
                              rgba(255, 255, 255, 0.1) 20px
                            )`,
                            animation: "slide 1s linear infinite",
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Corner decorations */}
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  width: "20px",
                  height: "20px",
                  borderTop: `2px solid ${category.color}`,
                  borderRight: `2px solid ${category.color}`,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  width: "20px",
                  height: "20px",
                  borderBottom: `2px solid ${category.color}`,
                  borderLeft: `2px solid ${category.color}`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(20px);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
