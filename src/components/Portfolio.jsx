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
      title: "Tic Tac Toe - 2D Board Game",
      category: "web",
      description: "A 2D Tic-Tac-Toe game in Python applying Object-Oriented Programming concepts with interactive gameplay and automated win detection.",
      image: "/ttt.jpg",
      technologies: ["Python", "OOPS", "2D Lists", "Control Flow"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Minimal Calc",
      category: "mobile",
      description: "A simple calculator built only using HTML and CSS",
      image: "/calc.jpg",
      technologies: ["HTML", "CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Online Food Ordering System",
      category: "web",
      description: "An Online Food Ordering System using Django, HTML/CSS, and PostgreSQL for backend data management.",
      image: "/fos.jpg",
      technologies: ["Django", "Postgre SQL", "HTML/CSS", "Python"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Exploratory Data Analysis",
      category: "web",
      description: "Performed Exploratory Data Analysis on housing prices to uncover key factors influencing property values and market trends.",
      image: "/eda.jpg",
      technologies: ["Python", "Pandas", "Matplotlib"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Web Scraping and Geospatial Data Exploration",
      category: "design",
      description: "Extracted location data from HTML pages using BeautifulSoup and processed it in GeoJSON format to analyze map-based information.",
      image: "/bs4.jpg",
      technologies: ["BeautifulSoup", "Python", "GeoJSON"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Crave Shoots",
      category: "mobile",
      description: "A React based webpage for a photographic startup.",
      image: "/csw.jpg",
      technologies: ["React Native", "JavaScript", "HTML/CSS"],
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