import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Award, Target, Zap, Trophy } from 'lucide-react';

const Achievements = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const achievements = [
    {
      icon: <Award size={40} />,
      title: t('achievements.certifications.title'),
      items: t('achievements.certifications.items', { returnObjects: true })
    },
    {
      icon: <Target size={40} />,
      title: t('achievements.differentials.title'),
      items: t('achievements.differentials.items', { returnObjects: true })
    },
    {
      icon: <Zap size={40} />,
      title: t('achievements.experience.title'),
      items: t('achievements.experience.items', { returnObjects: true })
    },
    {
      icon: <Trophy size={40} />,
      title: t('achievements.recognition.title'),
      items: t('achievements.recognition.items', { returnObjects: true })
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section 
      className="section" 
      id="achievements" 
      ref={ref}
      style={{ background: 'var(--color-black-light)' }}
    >
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          style={{ 
            marginBottom: 'var(--spacing-3xl)', 
            textAlign: 'center' 
          }}
        >
          {t('achievements.title').split('<1>')[0]}
          <span className="neon-text">{t('achievements.title').split('<1>')[1].split('</1>')[0]}</span>
          {t('achievements.title').split('</1>')[1]}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--spacing-lg)'
          }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card"
              style={{
                padding: 'var(--spacing-xl)',
                textAlign: 'center'
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <div style={{
                color: 'var(--color-pink)',
                marginBottom: 'var(--spacing-md)',
                display: 'flex',
                justifyContent: 'center'
              }}>
                {achievement.icon}
              </div>

              <h3 className="neon-text" style={{
                fontSize: 'var(--font-size-xl)',
                marginBottom: 'var(--spacing-md)'
              }}>
                {achievement.title}
              </h3>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {achievement.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    style={{
                      color: 'var(--color-gray)',
                      fontSize: 'var(--font-size-sm)',
                      marginBottom: 'var(--spacing-xs)',
                      paddingBottom: 'var(--spacing-xs)',
                      borderBottom: itemIndex < achievement.items.length - 1 
                        ? '1px solid rgba(255, 0, 110, 0.1)' 
                        : 'none'
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
