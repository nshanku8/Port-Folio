import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "Framer Motion", level: 85 },
        { name: "HTML & CSS", level: 90 },
        { name: "Bootstrap", level: 88 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Python", level: 85 },
        { name: "Django", level: 80 },
        { name: "Node JS", level: 75 },
        { name: "Java", level: 70 },
        { name: "MySQL", level: 90 }
      ]
    },
    {
      title: "Data Science & Analytics",
      skills: [
        { name: "Python", level: 90 },
        { name: "EDA", level: 70 },
        { name: "Matplotlib, Seaborn, Plotly", level: 65 },
        { name: "Pandas, NumPy", level: 85 },
        { name: "Jupyter", level: 80 }
      ]
    }
  ]

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">Skills & Expertise</h2>
            <p className="section-subtitle">
              Technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="skill-category"
                variants={itemVariants}
              >
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skill-item"
                      variants={itemVariants}
                    >
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="certifications" variants={itemVariants}>
            <h3>Certifications & Learning</h3>
            <div className="cert-list">
              {[
                "Amazon Web Services - Cloud Practitioner Certified",
                "Oracle Cloud Infrastructure - Certified Architect Associate",
                "Automation Anywhere - Essential Automation Professional Certified",
                "Cambridge - LinguaSkill Examination"
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  className="cert-item"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {cert}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills