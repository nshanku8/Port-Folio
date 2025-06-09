import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
  }
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Neela_Shashank_CV.pdf'; 
    link.download = 'Neela_Shashank_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <section id="home" className="hero" ref={ref}>
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="hero-content">
        <motion.div
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="hero-greeting" variants={itemVariants}>
            <span>👋 Hello, I'm</span>
          </motion.div>
          
          <motion.h1 className="hero-name" variants={itemVariants}>
            Neela Shashank
          </motion.h1>
          
          <motion.h2 className="hero-title" variants={itemVariants}>
            Code Crafter &
            <span className="gradient-text"> Problem Solver</span>
          </motion.h2>
          
          <motion.p className="hero-description" variants={itemVariants}>
            I engineer thoughtful digital experiences where data meets design. 
            With every line of code, I strive to blend analytical precision with visual storytelling — crafting 
            interfaces that not only respond intuitively but also think intelligently. From scalable systems to 
            pixel-perfect visuals, I bridge the art of aesthetics with the science of technology.
          </motion.p>
          
          <motion.div className="hero-cta" variants={itemVariants}>
            <motion.button
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
            >
              View My Work
            </motion.button>
            
            <motion.button
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadCV}
            >
              Download CV

            </motion.button>
          </motion.div>
          
          <motion.div className="hero-social" variants={itemVariants}>
            {[
              { icon: Github, href: "https://github.com/nshanku8" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/nshanku2841/" },
              { icon: Mail, href: "mailto:nshanku8@gmaill.com" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="social-link"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div
          className="hero-image"
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            delay: 0.5
          }}
        >
          <div className="profile-image">
            <img 
              src="/img.jpg"
              alt="Shashank Neela"
            />
          </div>
        </motion.div>
      </div>
      
      <motion.div
        className="scroll-indicator"
        initial={{ y: -10, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: -10, opacity: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={scrollToAbout}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero