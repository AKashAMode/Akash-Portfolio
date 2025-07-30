
import React, { useState, useEffect, useRef } from 'react'; 
import { Github, Linkedin, Twitter, Instagram, Mail, MapPin,PhoneCall, Clock, Download, Send, ExternalLink, Code } from 'lucide-react';
import HTMLIcon from "../assets/html.png";
import CSSIcon from "../assets/css-3.png";
import JavaScriptIcon from "../assets/js.png";
import ReactIcon from "../assets/science.png";
import JavaIcon from "../assets/java.png";
import SpringbootIcon from "../assets/spring-boot.png";
import MysqlIcon from "../assets/mysql.png";
import TelwindCssIcon from "../assets/Tailwind-CSS.png";
import FrontEndIntCertificate from "../assets/front-end-intern.jpg";
import JavaDevCertificate from "../assets/java-developer.jpg";
import './PortfolioPage.css';
import EcoSwapProject from "../assets/Eco-swap-project.png";
import FaceSearch from "../assets/face-search.png";

const PortfolioPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [showNavbar, setShowNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleElements, setVisibleElements] = useState(new Set());
  
  const observerRef = useRef(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  // Initial loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    // Observe all animated elements
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isLoading]);

  // Navbar scroll logic

  useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY === 0) {
      setShowNavbar(true);
      return;
    }
    
    if (currentScrollY > lastScrollY) {
      setShowNavbar(false); // scrolling down → hide
    } else {
      setShowNavbar(true); // scrolling up → show
    }
    
    setLastScrollY(currentScrollY);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [lastScrollY]);


  

  const skills = [
    { name: 'HTML', icon: HTMLIcon },
    { name: 'CSS', icon: CSSIcon },
    { name: 'JavaScript', icon: JavaScriptIcon },
    { name: 'ReactJs', icon: ReactIcon },
    { name: 'Java', icon: JavaIcon },
    { name: 'Spring Boot', icon: SpringbootIcon },
    { name: 'My Sql', icon: MysqlIcon },
    { name: 'Tailwind', icon: TelwindCssIcon }
  ];

  const projects = [
    {
      title: 'EcoSwap Market Place',
      description: 'EcoSwap is a responsive online marketplace that promotes sustainable shopping by connecting buyers and sellers of pre-loved items. Built with HTML, CSS, and JavaScript, the platform makes it easy to trade second-hand products—from fashion and electronics to collectibles—at affordable prices. Designed to encourage eco-friendly practices, EcoSwap provides a seamless user experience where one person’s unused item becomes another’s valuable find.',
      bgGradient: 'purple-pink',
      subtitle: 'EcoSwap – A sustainable marketplace',
      tagline: 'EcoSwap is a responsive online marketplace',
      sourceUrl: 'https://github.com/AKashAMode/icp9.0-javascript-github-group-project-3',
      liveUrl: 'https://quiet-muffin-a46fa4.netlify.app/',
      image: EcoSwapProject,
      skills: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'FaceSearch AI ',
      description: 'An AI-powered platform designed to let users search for their look-alikes worldwide. Currently featuring a sleek UI interface with an integrated Stripe payment gateway for subscription testing, including a fully functional subscription plan card.',
      bgGradient: 'blue-purple',
      subtitle: 'Discover Your Digital Twin',
      tagline: 'Explore the world to find your look-alike ',
      sourceUrl: 'https://github.com/AKashAMode/faceSearchAi-web',
      liveUrl: 'https://sage-kringle-c3ed44.netlify.app/',
      image: FaceSearch,
      skills: ['HTML', 'CSS', 'JavaScript','Stripe']
    },
    {
      title: 'CoinEcho',
      description: 'Stay informed with real-time cryptocurrency updates, expert opinions, and in-depth analysis. CoinEcho brings the world of crypto to your fingertips.',
      bgGradient: 'green-blue',
      subtitle: 'Explore the Cryptoeconomy',
      tagline: 'Real-time crypto insights',
      sourceUrl: '#',
      liveUrl: '#',
      image: EcoSwapProject,
      skills: ['React', 'Spring Boot', 'MySQL']
    }
  ];

  
  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-spinner"></div>
          <div className="loading-text">Loading Portfolio...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="portfolio-container" id='portfolio-container'>
      
      {/* Fixed Navbar */}
      <nav className={`fixed-navbar ${showNavbar ? 'navbar-visible' : 'navbar-hidden'}`}>
        <div className="navbar-bg">
          <div className="navbar-content">
            <div className="navbar-links">
              <a href="#hero" className="nav-link">Home</a>
              <a href="#journey" className="nav-link">About</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
 
<div className="hero-section" 
  style={{
    backgroundImage: `
      linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px),
      radial-gradient(circle, rgba(51,65,85,0.4) 1px, transparent 1px)
    `,
    backgroundSize: "20px 20px",
  }}
>
     <section id="hero" className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm Akash Amode, a Self Taught
          </h1>
          <div className="hero-badge">
         <span className="badge-text">Software Developer</span>
          </div>
          <p className="hero-description">
            Based in Maharashtra, India,<br />
            Specialized in <span className="skill-tag">React</span> and <span className="skill-tag">Springboot</span>
          </p>
          <div className="hero-buttons">
            <button className="hero-btn">
              Say Hi <Send size={20} />
            </button>
            <button className="hero-btn">
              Resume <Download size={20} />
            </button>
          </div>
        </div>
      </section>
</div>






      {/* My Journey Section */}
      <section id="journey" className="journey-section">
        <div className="section-container">
          <h2 
            data-animate 
            id="journey-title"
            className={`section-title ${visibleElements.has('journey-title') ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}
          >
            MY JOURNEY
          </h2>
          
          <div 
            data-animate
            id="journey-card"
            className={`journey-card ${visibleElements.has('journey-card') ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}
          >
            <div className="journey-content">
              
              
              <div className="journey-text">
                <p className="journey-paragraph">
                  I am an enthusiastic and result-driven Java Developer with a B.Tech in Information Technology from Nagpur University (2024), passionate about creating efficient and scalable software solutions. I have hands-on experience in Java, Spring Boot, Hibernate, and MySQL, where I have developed backend systems and optimized RESTful APIs to improve performance and reliability. My front-end expertise in HTML, CSS, JavaScript, and React.js allows me to build engaging and responsive user interfaces that enhance user experience.
                </p>
                <p className="journey-paragraph">
                  Through my internships, I gained valuable experience collaborating with cross-functional teams using Git, Jira, and agile methodologies. I am known for my strong problem-solving abilities, adaptability, and eagerness to learn. My goal is to contribute my technical expertise to innovative projects, deliver impactful solutions, and grow into a valuable asset for the organization.
                </p>
                <p className="journey-motto">
                  STRONGLY BELIEVE IN KARMA
                </p>
              </div>
              
              {/* Right Side - Image */}
              <div className="journey-image">
                <div className="journey-image-container">
                  <div className="journey-image-content">
                    <div className="journey-avatar">
                      <span>👨‍💻</span>
                    </div>
                    <p className="journey-image-text">Coding Journey Since 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career History Section */}
      <section className="career-section">
        <div className="section-container">
          <h2 
            data-animate 
            id="career-title"
            className={`section-title ${visibleElements.has('career-title') ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}
          >
            Career History
          </h2>
          <div className="career-timeline">
            
            {/* Current Role */}
            <div 
              data-animate
              id="current-role"
              className={`timeline-item current-role ${visibleElements.has('current-role') ? 'animate-slide-in-right' : 'opacity-0 translate-x-10'}`}
            >
              <div className="timeline-dot current-dot"></div>
              <div className="timeline-header">
                <div className="timeline-company">
                  <span className="company-name">Dnextgen</span>
                  <span className="timeline-date">20-Jan-2025 - 20-Jun-2025</span>
                </div>
                <h3 className="timeline-position">Full Stack Java Developer Internship</h3>
              </div>
              <p className="timeline-company-full">Dnext generation Technology</p>
              <ul className="timeline-responsibilities">
                <li>• Developed and maintained scalable backend modules using Java, Spring Boot, and Hibernate, improving overall system performance by 25%.</li>
                <li>• Designed and integrated RESTful APIs, reducing response time and enhancing application efficiency by 30%.</li>
                <li>• Built responsive front-end components with HTML, CSS, JavaScript, and React.js, ensuring a seamless user experience.</li>
                <li>• Collaborated with cross-functional teams using Git, GitHub, and Jira to manage versions and streamline project workflows.</li>
                <li>• Implemented clean code practices and database optimization in MySQL, ensuring reliable and efficient data handling.</li>
              </ul>
            </div>

            {/* Previous Role */}
            <div 
              data-animate
              id="previous-role"
              className={`timeline-item previous-role ${visibleElements.has('previous-role') ? 'animate-slide-in-right' : 'opacity-0 translate-x-10'}`}
            >
              <div className="timeline-dot previous-dot"></div>
              <div className="timeline-header">
                <div className="timeline-company">
                  <span className="company-name">Him Village(NGO)</span>
                  <span className="timeline-date">Dec 2024 - Jan 2025</span>
                </div>
                <h3 className="timeline-position">Front End Developer Internship</h3>
              </div>
              <p className="timeline-company-full">Him Village E-Prahari (NGO)</p>
              <ul className="timeline-responsibilities">
                <li>• Designed and developed responsive web pages using HTML, CSS, and JavaScript, enhancing accessibility and user engagement.</li>
                <li>• Implemented clean and sustainable UI designs to provide a smooth user experience across devices.</li>
                <li>• Collaborated with the NGO team to improve digital outreach and support their community-focused initiatives.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Auto-sliding Skills Section */}
      <section className="skills-section">
        <div className="section-container">
          <h2 
            data-animate 
            id="skills-title"
            className={`section-title ${visibleElements.has('skills-title') ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}
          >
            Expertise
          </h2>
          <div 
            data-animate
            id="skills-container"
            className={`skills-container ${visibleElements.has('skills-container') ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}
          >
            <div className="skills-slider">
              {[...skills, ...skills].map((tech, index) => (
                <div 
                  key={index} 
                  className="skill-card"
                >
                  <div className="skill-icon">
                    <img src={tech.icon} className='icon-style' />
                  </div>
                  <p className="skill-name">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section">
        <div className="section-container">
          <h2 
            data-animate 
            id="cert-title"
            className={`section-title ${visibleElements.has('cert-title') ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}
          >
            Certifications
          </h2>
          <div className="certifications-grid">
            <div 
              data-animate
              id="cert-1"
              className={`cert-card ${visibleElements.has('cert-1') ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}
            >
              <img src={FrontEndIntCertificate} className='intern-certificate' alt="intern certificate" />
            </div>
            
            <div 
              data-animate
              id="cert-2"
              className={`cert-card ${visibleElements.has('cert-2') ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}
            >
          <img src={JavaDevCertificate} className='intern-certificate' alt="intern certificate" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-container">
          <h2 
            data-animate 
            id="projects-title"
            className={`section-title ${visibleElements.has('projects-title') ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}
          >
            A Small Selection of Recent Projects
          </h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                key={index} 
                data-animate
                id={`project-${index}`}
                className={`project-card ${visibleElements.has(`project-${index}`) ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`project-header ${project.bgGradient}`}>
                  <div className='project-image-container'>
                   <img src={project.image} 
                   alt={project.title} 
                   className='project-image'
                   />
        
                  <div className="project-header-content">
                    <h3 className="project-subtitle">{project.subtitle}</h3>
                    <p className="project-tagline">{project.tagline}</p>
                  </div>
                   </div>
                </div>
                <div className="project-body">
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">
                      {project.description}
                    </p>
                  </div>

                <div className="project-skills">
                 <h4 className="skills-heading">Built With:</h4>
                <div className="skills-list">
                {project.skills.map((skill, index) => (
                <span key={index} className="skill-badge">
                   {skill}
                 </span>
                  ))}
                  </div>
                    </div>




                  <div className="project-actions">
                    <a 
                      href={project.sourceUrl}
                      className="project-btn source-btn"
                    >
                      <Code size={16} />
                      Source Code
                    </a>
                    <a 
                      href={project.liveUrl}
                      className="project-btn live-btn"
                    >
                      <ExternalLink size={16} />
                      Live Site
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <h2 
            data-animate 
            id="contact-title"
            className={`section-title ${visibleElements.has('contact-title') ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}
          >
            Let's Have a Chat
          </h2>
          <div className="contact-grid">
            
            {/* Contact Info */}
            <div 
              data-animate
              id="contact-info"
              className={`contact-info ${visibleElements.has('contact-info') ? 'animate-slide-in-left' : 'opacity-0 -translate-x-10'}`}
            >
              <div className="contact-info-card">
                <div className="contact-info-bg"></div>
                <div className="contact-info-content">
                  <div className="contact-avatar-section">
                    <div className="contact-avatar">
                      <span>💻</span>
                    </div>
                    <p className="contact-setup-text">Development Setup</p>
                  </div>
                  
                  <div className="contact-details">
                    <div className="contact-motto">
                      <h3>BELIEVE IN KARMA</h3>
                    </div>
                    
                    <div className="contact-items">
                      <div className="contact-item">
                        <Mail className="contact-icon" size={24} />
                        <div className="contact-item-content">
                          <p className="contact-label">EMAIL</p>
                          <p className="contact-value">hello@imabhishek.online</p>
                        </div>
                      </div>
                      
                      <div className="contact-item">
                        <PhoneCall className="contact-icon" size={24} />
                        <div className="contact-item-content">
                          <p className="contact-label">Contact No</p>
                          <p className="contact-value">9356300462</p>
                        </div>
                      </div>
                      
                      <div className="contact-item">
                        <MapPin className="contact-icon" size={24} />
                        <div className="contact-item-content">
                          <p className="contact-label">ADDRESS</p>
                          <p className="contact-value">Maharashtra, India</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="social-links">
                      <a href="#" className="social-link">
                        <Github size={24} />
                      </a>
                      <a href="#" className="social-link">
                        <Linkedin size={24} />
                      </a>
                      <a href="#" className="social-link">
                        <Twitter size={24} />
                      </a>
                      <a href="#" className="social-link">
                        <Instagram size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div 
              data-animate
              id="contact-form"
              className={`contact-form-container ${visibleElements.has('contact-form') ? 'animate-slide-in-right' : 'opacity-0 translate-x-10'}`}
            >
              <p className="form-description">
                Leave your email and I will get back to you within 24 hours
              </p>
              <div className="contact-form">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Akash Amode"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="hello@imakash.online"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Want to build a website"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="form-textarea"
                    placeholder="Looking for a proficient software developer skilled in React for a specific project"
                  />
                </div>
                
                <button
                  onClick={handleSubmit}
                  className="form-submit-btn"
                >
                  Submit <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;