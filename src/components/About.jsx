import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Lightbulb, Puzzle, Folder, Users } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const features = [
    {
      icon: Lightbulb,
      title: "Learning & Growth",
      description: "Constantly exploring new tools, frameworks, and ideas to stay ahead in tech"
    },
    {
      icon: Puzzle,
      title: "Problem Solving",
      description: "Enjoy breaking down complex problems into simple, working solutions"
    },
    {
      icon: Folder,
      title: "Projects & Experiments",
      description: "Building projects that turn classroom concepts into real-world applications"
    },
    {
      icon: Users,
      title: "Knowledge Sharing",
      description: "Conducting sessions and workshops to help peers learn automation"
    }
  ]

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Passionate about creating digital experiences that matter
            </p>
          </motion.div>

          <div className="about-grid">
            <motion.div className="about-text" variants={itemVariants}>
              <p> I’m Shashank — a final-year Computer Science student specializing in Data Science 
                and Big Data Analytics. I build intelligent, efficient, and visually appealing digital 
                solutions that blend modern tech with practical purpose. 
              </p> 
              <p> Whether it's developing full-stack applications with Django and MySQL, crafting 
                data-driven insights with Python, or exploring the vast landscape of automation through 
                RPA and Automation Anywhere — I thrive on transforming data into meaning and ideas into impact. 
              </p> 
              <p> I've led workshops, mentored peers, and collaborated on real-world projects that bridge 
                the gap between logic and creativity. I believe technology should feel intuitive, and data 
                should tell a story that sparks action. 
              </p> 
              <p> Outside the terminal, I’m often experimenting with new tools, hosting tech sessions, or 
                diving into cloud platforms — always learning, always building, always curious. 
              </p>

              <div className="stats">
                {[
                  { number: "22+", label: "Workshops Delivered" },
                  { number: "3+", label: "Hackathons Participated" },
                  { number: "5+", label: "Projects Completed" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="stat-item"
                    variants={itemVariants}
                  >
                    <span className="stat-number">{stat.number}</span>
                    <span className="stat-label">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="about-features" variants={itemVariants}>
              <div className="features-grid">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="feature-card"
                    variants={itemVariants}
                    whileHover={{ 
                      y: -5,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                  >
                    <div className="feature-icon">
                      <feature.icon size={24} />
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About