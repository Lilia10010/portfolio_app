import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SynthwaveGrid from "./3D/SynthwaveGrid";
import NeonSun from "./3D/NeonSun";
import FloatingGeometry from "./3D/FloatingGeometry";
import GlitchText from "./GlitchText";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      className="section"
      id="hero"
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, #000000 0%, #1a0033 50%, #000000 100%)",
        minHeight: "100vh",
      }}
    >
      {/* 3D Background Scene */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      >
        <Canvas
          camera={{ position: [0, 5, 30], fov: 75 }}
          style={{ background: "transparent" }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.3} />
            <NeonSun />

            <SynthwaveGrid />
            <FloatingGeometry />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            textAlign: "center",
          }}
        >
          {/* HUD Decoration - Top */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            // style={{
            //   display: "flex",
            //   gap: "1rem",
            //   marginBottom: "2rem",
            //   flexWrap: "wrap",
            //   justifyContent: "center",
            // }}
            className="flex gap-4 !mb-10 flex-wrap justify-center"
          >
            <div className="hud-element hex-code">0xFF006E</div>
            <div className="hud-element hex-code">0x00F3FF</div>
            <div className="hud-element hex-code">0x9D00FF</div>
          </motion.div>

          {/* Main Title with Glitch */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlitchText
              as="h1"
              className="neon-cyan !text-[1.7rem] md:!text-7xl"
            >
              {t("hero.title")}
            </GlitchText>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="neon-pink !mb-8 md:!text-3xl !mt-8 sm:!mt-6 mb-8"
          >
            {t("hero.subtitle")}
          </motion.h3>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              maxWidth: "700px",
              marginBottom: "var(--spacing-2xl)",
            }}
          >
            <p
              className="terminal-text"
              style={{ marginBottom: "var(--spacing-sm)" }}
            >
              {t("hero.systemInit")}
            </p>
            <p className="!text-xl leading-8 font-semibold">
              {t("hero.description").split("<1>")[0]}
              <span className="neon-pink">
                {t("hero.description").split("<1>")[1].split("</1>")[0]}
              </span>
              {t("hero.description").split("</1>")[1]}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{
              display: "flex",
              gap: "var(--spacing-lg)",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <a href="#projects" className="btn-neon">
              {t("hero.btnProjects")}
            </a>
            <a
              href="#contact"
              className="btn-neon"
              style={{
                borderColor: "var(--neon-cyan)",
                color: "var(--neon-cyan)",
              }}
            >
              {t("hero.btnContact")}
            </a>
          </motion.div>

          {/* HUD Decoration - Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            style={{
              marginTop: "var(--spacing-2xl)",
              display: "flex",
              gap: "2rem",
              fontSize: "var(--font-size-sm)",
              fontFamily: "var(--font-mono)",
              color: "var(--neon-purple)",
              opacity: 0.6,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div>
              {t("hero.statusLabel")}{" "}
              <span className="neon-green">{t("hero.statusValue")}</span>
            </div>
            <div>
              {t("hero.latencyLabel")}{" "}
              <span className="neon-cyan">{t("hero.latencyValue")}</span>
            </div>
            <div>
              {t("hero.systemLabel")}{" "}
              <span className="neon-pink">{t("hero.systemValue")}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Lines - Decorative HUD Elements */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "100px",
          height: "2px",
          background: "linear-gradient(90deg, var(--neon-cyan), transparent)",
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "100px",
          height: "2px",
          background: "linear-gradient(270deg, var(--neon-pink), transparent)",
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: "2px",
          height: "100px",
          background:
            "linear-gradient(180deg, transparent, var(--neon-purple))",
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "2px",
          height: "100px",
          background: "linear-gradient(0deg, transparent, var(--neon-cyan))",
          zIndex: 2,
        }}
      />
    </section>
  );
};

export default Hero;
