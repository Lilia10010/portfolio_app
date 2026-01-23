import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";
import { Mail, Github, Linkedin, Twitter, Send, Radio } from "lucide-react";
import GlitchText from "./GlitchText";

const Contact = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: t("contact.socialLabels.github"),
      url: "https://github.com",
      color: "var(--neon-purple)",
    },
    {
      icon: <Linkedin size={24} />,
      label: t("contact.socialLabels.linkedin"),
      url: "https://linkedin.com",
      color: "var(--neon-cyan)",
    },
    {
      icon: <Twitter size={24} />,
      label: t("contact.socialLabels.twitter"),
      url: "https://twitter.com",
      color: "var(--neon-pink)",
    },
    {
      icon: <Mail size={24} />,
      label: t("contact.socialLabels.email"),
      url: "mailto:seu@email.com",
      color: "var(--neon-orange)",
    },
  ];

  return (
    <section
      className="section"
      id="contact"
      ref={ref}
      style={{
        background:
          "linear-gradient(180deg, #000000 0%, #1a0033 50%, #000000 100%)",
        minHeight: "80vh",
        position: "relative",
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          {/* Title/Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: "var(--spacing-2xl)" }}
          >
            <div
              className="hex-code"
              style={{ marginBottom: "var(--spacing-sm)" }}
            >
              {t("contact.sectionCode")}
            </div>

            <div className="flex flex-col items-center justify-center gap-4 !mb-6">
              <Radio size={32} className="neon-pink pulse" />

              <GlitchText as="h2" className="neon-pink">
                {t("contact.title").split("<1>")[0]}
                <br />
                <span className="neon-pink">
                  {t("contact.title").split("<1>")[1].split("</1>")[0]}
                </span>
              </GlitchText>
            </div>

            <p
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--neon-green)",
                fontSize: "var(--font-size-sm)",
              }}
            >
              <span className="neon-cyan">&gt;</span>{" "}
              {t("contact.statusPrefix")}{" "}
              <span className="pulse">{t("contact.statusValue")}</span>
            </p>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="holo-card"
            style={{
              padding: "var(--spacing-2xl) var(--spacing-md)",
              marginBottom: "var(--spacing-2xl)",
            }}
          >
            <p
              style={{
                fontSize: "var(--font-size-lg)",
                color: "rgba(0, 243, 255, 0.9)",
                marginBottom: "var(--spacing-lg)",
                lineHeight: 1.8,
              }}
            >
              {t("contact.message").split("<1>")[0]}
              <span className="neon-pink">
                {t("contact.message").split("<1>")[1].split("</1>")[0]}
              </span>
              {t("contact.message").split("</1>")[1].split("<2>")[0]}
              <span className="neon-cyan">
                {t("contact.message").split("<2>")[1].split("</2>")[0]}
              </span>
              {t("contact.message").split("</2>")[1]}
            </p>

            <div
              className="terminal-text"
              style={{
                fontSize: "var(--font-size-lg)",
                color: "var(--neon-purple)",
                fontStyle: "italic",
                fontWeight: "600",
              }}
            >
              {t("contact.quote")}
            </div>
          </motion.div>

          {/* Social Links Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "var(--spacing-lg)",
              marginBottom: "var(--spacing-2xl)",
            }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="holo-card"
                style={{
                  padding: "var(--spacing-lg)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "var(--spacing-sm)",
                  textDecoration: "none",
                  color: social.color,
                  border: `1px solid ${social.color}`,
                  position: "relative",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 0 30px ${social.color}, 0 0 60px ${social.color}`,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div style={{ color: social.color }}>{social.icon}</div>
                <span
                  style={{
                    fontSize: "var(--font-size-sm)",
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {social.label}
                </span>

                {/* Corner accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "15px",
                    height: "15px",
                    borderTop: `2px solid ${social.color}`,
                    borderRight: `2px solid ${social.color}`,
                  }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{ marginBottom: "var(--spacing-2xl)" }}
          >
            <a
              href="mailto:seu@email.com"
              className="btn-neon"
              style={{
                fontSize: "var(--font-size-lg)",
                padding: "var(--spacing-md) var(--spacing-2xl)",
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--spacing-sm)",
                borderColor: "var(--neon-pink)",
                color: "var(--neon-pink)",
              }}
            >
              <Send size={20} />
              {t("contact.btnSend")}
            </a>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--font-size-sm)",
              color: "rgba(0, 243, 255, 0.5)",
            }}
          >
            <p>
              {t("contact.footer").split("<1>")[0]}
              <span className="neon-pink">
                {t("contact.footer").split("<1>")[1].split("</1>")[0]}
              </span>
              {t("contact.footer").split("</1>")[1]}
            </p>
            <div
              className="hex-code"
              style={{ marginTop: "var(--spacing-sm)" }}
            >
              {t("contact.eof")}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Transmission lines decoration */}
      <div
        className="top-[53%] sm:top-[56%]"
        style={{
          position: "absolute",

          left: "50%",
          width: "350px",
          height: "75px",
          transform: "translate(-50%, -50%)",
          border: "5px solid var(--neon-pink)",
          borderRadius: "50%",
          opacity: 0.051,
          animation: "pulse-glow 1.5s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <div
        className="top-[53%] sm:top-[56%]"
        style={{
          position: "absolute",

          left: "50%",
          width: "170px",
          height: "170px",
          transform: "translate(-50%, -50%)",
          border: "3px solid var(--neon-cyan)",
          borderRadius: "50%",
          opacity: 0.05,
          animation: "pulse-glow 2s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
    </section>
  );
};

export default Contact;
