import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "https://github.com/nshanku8", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/nshanku2841/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:nshanku8@gmail.com", label: "Email" }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h3
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ cursor: 'pointer' }}
            >
              Neela Shashank
            </motion.h3>
            <p>Code Crafter & Problem Solver</p>
          </motion.div>

          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="quick-links">
              <h4>Quick Links</h4>
              <ul>
                {['Home', 'About', 'Skills', 'Portfolio', 'Contact'].map((link, index) => (
                  <motion.li
                    key={link}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a 
                      href={`#${link.toLowerCase()}`}
                      onClick={(e) => {
                        e.preventDefault()
                        document.getElementById(link.toLowerCase()).scrollIntoView({ 
                          behavior: 'smooth' 
                        })
                      }}
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="services">
              <h4>Services</h4>
              <ul>
                {['Data Analytics & Visualization', 'Full-Stack Web Development', 'Automation', 'Tech Consultation'].map((service, index) => (
                  <motion.li
                    key={service}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span>{service}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="footer-social"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Connect</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="social-link"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="footer-divider"></div>
          <div className="footer-copyright">
            <p>
              © {currentYear} Neela Shashank. Made with{' '}
              <motion.span
                className="heart"
                animate={{ 
                  scale: [1, 1.2, 1],
                  color: ["#ef4444", "#f87171", "#ef4444"]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart size={16} fill="currentColor" />
              </motion.span>
              {' '}in Hyderabad.
            </p>
            <p>All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer