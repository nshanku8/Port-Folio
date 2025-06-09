import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Eye } from 'lucide-react'
import { useState } from 'react'

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      description: "A modern e-commerce platform built with React and Node.js, featuring payment integration and admin dashboard.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      category: "mobile",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "Firebase", "Redux"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Restaurant Website",
      category: "design",
      description: "A beautiful restaurant website with online ordering system and table reservation functionality.",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "GSAP", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Finance Dashboard",
      category: "web",
      description: "An intuitive finance dashboard with data visualization and portfolio tracking capabilities.",
      image: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "D3.js", "Express", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Brand Identity",
      category: "design",
      description: "Complete brand identity design for a tech startup including logo, guidelines, and marketing materials.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Adobe Illustrator", "Figma", "Adobe Photoshop"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Fitness Tracker",
      category: "mobile",
      description: "A comprehensive fitness tracking app with workout plans and progress monitoring.",
      image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'Design' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

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

  return (
    <section id="portfolio" className="portfolio" ref={ref}>
      <div className="container">
        <motion.div
          className="portfolio-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title">My Portfolio</h2>
            <p className="section-subtitle">
              A showcase of my recent work and creative projects
            </p>
          </motion.div>

          <motion.div className="portfolio-filters" variants={itemVariants}>
            {filters.map((filterItem) => (
              <motion.button
                key={filterItem.id}
                className={`filter-btn ${filter === filterItem.id ? 'active' : ''}`}
                onClick={() => setFilter(filterItem.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filterItem.label}
                {filter === filterItem.id && (
                  <motion.div
                    className="filter-indicator"
                    layoutId="filterIndicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          <motion.div 
            className="projects-grid"
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                variants={itemVariants}
                layout
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-actions">
                      <motion.a
                        href={project.liveUrl}
                        className="action-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Eye size={18} />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        className="action-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={18} />
                      </motion.a>
                      <motion.a
                        href={project.liveUrl}
                        className="action-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio