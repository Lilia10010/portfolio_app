import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

const TypeWriter = ({ text, delay = 0, speed = 50 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span>
      {displayText}
      <span className="cursor-blink"></span>
    </span>
  );
};

const About = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    {
      label: t("about.stats.experience"),
      value: "05+",
      color: "var(--neon-cyan)",
    },
    {
      label: t("about.stats.projects"),
      value: "50+",
      color: "var(--neon-pink)",
    },
    {
      label: t("about.stats.dedication"),
      value: "100%",
      color: "var(--neon-purple)",
    },
  ];

  return (
    <section
      className="section"
      id="about"
      ref={ref}
      style={{
        background:
          "linear-gradient(180deg, #000000 0%, #001a33 50%, #000000 100%)",
        position: "relative",
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: "1000px", margin: "0 auto" }}
        >
          {/* Terminal Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            style={{
              marginBottom: "var(--spacing-xl)",
              paddingBottom: "var(--spacing-md)",
              borderBottom: "2px solid var(--neon-cyan)",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                marginBottom: "var(--spacing-sm)",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "#ff006e",
                }}
              />
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "#ffaa00",
                }}
              />
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "#39ff14",
                }}
              />
            </div>
            <h2 className="neon-cyan">
              <span
                className="hex-code"
                style={{ marginRight: "1rem", opacity: 0.5 }}
              >
                ~/
              </span>
              {t("about.title")}
            </h2>
          </motion.div>

          {/* Terminal Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="!p-8 sm:!p-10"
            style={{
              background: "rgba(0, 26, 51, 0.3)",
              border: "1px solid var(--neon-cyan)",

              fontFamily: "var(--font-mono)",
              fontSize: "var(--font-size-base)",
              lineHeight: 2,
            }}
          >
            <p className="terminal-text" style={{ color: "var(--neon-green)" }}>
              {isInView && (
                <TypeWriter text={t("about.initializing")} speed={30} />
              )}
            </p>

            {/* <p
              style={{
                marginTop: "var(--spacing-md)",
                color: "rgba(0, 243, 255, 0.9)",
              }}
            >
              <span className="neon-cyan">&gt;&gt;</span> {t('about.paragraph2')}
            </p> */}

            <p
              style={{
                marginTop: "var(--spacing-md)",
                color: "rgba(0, 243, 255, 0.9)",
              }}
            >
              <span className="neon-cyan">&gt;&gt;</span>{" "}
              {t("about.paragraph1").split("<1>")[0]}
              <span className="neon-pink">
                {t("about.paragraph1").split("<1>")[1].split("</1>")[0]}
              </span>
              {t("about.paragraph1").split("</1>")[1].split("<2>")[0]}
              <span className="neon-cyan">
                {t("about.paragraph1").split("<2>")[1].split("</2>")[0]}
              </span>
              {t("about.paragraph1").split("</2>")[1]}
            </p>

            <p
              className="terminal-text"
              style={{
                marginTop: "var(--spacing-lg)",
                color: "var(--neon-green)",
              }}
            >
              <span className="neon-cyan">&gt;</span> {t("about.profileLoaded")}
            </p>
          </motion.div>

          {/* Stats - HUD Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              marginTop: "var(--spacing-2xl)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "var(--spacing-lg)",
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="holo-card"
                style={{
                  textAlign: "center",
                  padding: "var(--spacing-xl)",
                  position: "relative",
                  overflow: "hidden",
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <div
                  className="hex-code"
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    fontSize: "0.6rem",
                  }}
                >
                  {`0x${index}${index}${index}`}
                </div>

                <div
                  className="text-5xl sm:text-[4rem]"
                  style={{
                    fontFamily: "var(--font-primary)",
                    color: stat.color,
                    textShadow: `0 0 20px ${stat.color}, 0 0 40px ${stat.color}`,
                    marginBottom: "var(--spacing-sm)",
                    fontWeight: 900,
                  }}
                >
                  {stat.value}
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--neon-cyan)",
                    fontSize: "var(--font-size-sm)",
                    letterSpacing: "0.2em",
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
