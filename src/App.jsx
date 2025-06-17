import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.jsx'
import { 
  Menu, 
  X, 
  ChevronDown, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Code,
  Palette,
  Zap,
  MessageCircle,
  Send,
  Bot,
  User,
  Sparkles,
  ArrowRight,
  Download,
  Eye,
  Star,
  Heart,
  Coffee,
  Briefcase,
  GraduationCap,
  Award,
  MapPin,
  Calendar,
  Globe
} from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: 'bot',
      message: "Hi! I'm your AI assistant. I can help you learn more about this portfolio, answer questions about the projects, or discuss potential collaborations. What would you like to know?"
    }
  ])
  const [newMessage, setNewMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return

    const userMessage = {
      id: Date.now(),
      type: 'user',
      message: newMessage
    }

    setChatMessages(prev => [...prev, userMessage])
    setNewMessage('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "That's a great question! Based on the portfolio, I can see this developer has strong expertise in modern web technologies like React, Node.js, and AI integration.",
        "I'd be happy to elaborate on that project! It showcases innovative UI design patterns and demonstrates proficiency in full-stack development.",
        "Absolutely! The portfolio demonstrates a perfect blend of technical skills and creative design thinking. Would you like to know more about any specific project?",
        "Great observation! The AI integration you see here is just one example of how modern technologies can enhance user experience. This developer clearly stays current with emerging trends.",
        "That project particularly stands out for its innovative approach to user interaction and clean, modern design aesthetic."
      ]
      
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        message: responses[Math.floor(Math.random() * responses.length)]
      }
      
      setChatMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const projects = [
    {
      id: 1,
      title: "AI-Powered E-commerce Platform",
      description: "A modern e-commerce solution with AI-driven product recommendations and intelligent search capabilities.",
      image: "/api/placeholder/600/400",
      tech: ["React", "Node.js", "TensorFlow", "MongoDB"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      id: 2,
      title: "Smart Dashboard Analytics",
      description: "Real-time analytics dashboard with interactive data visualizations and predictive insights.",
      image: "/api/placeholder/600/400",
      tech: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      id: 3,
      title: "Creative Portfolio Website",
      description: "A stunning portfolio website with innovative animations and AI-powered chat assistant.",
      image: "/api/placeholder/600/400",
      tech: ["React", "Framer Motion", "Tailwind CSS", "OpenAI API"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      id: 4,
      title: "Mobile Fitness App",
      description: "Cross-platform mobile app for fitness tracking with social features and AI coaching.",
      image: "/api/placeholder/600/400",
      tech: ["React Native", "Firebase", "TensorFlow Lite"],
      github: "#",
      live: "#",
      featured: false
    }
  ]

  const skills = [
    { name: "React", level: 95, category: "Frontend" },
    { name: "Node.js", level: 90, category: "Backend" },
    { name: "TypeScript", level: 85, category: "Language" },
    { name: "Python", level: 88, category: "Language" },
    { name: "AI/ML", level: 80, category: "Emerging" },
    { name: "UI/UX Design", level: 85, category: "Design" },
    { name: "MongoDB", level: 82, category: "Database" },
    { name: "AWS", level: 78, category: "Cloud" },
    { name: "AutoCAD", level: 92, category: "3D/CAD" },
    { name: "Rhino", level: 88, category: "3D/CAD" },
    { name: "Blender", level: 85, category: "3D/CAD" },
    { name: "SketchUp", level: 90, category: "3D/CAD" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Portfolio
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === item
                      ? 'text-purple-400'
                      : 'text-white hover:text-purple-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/40 backdrop-blur-md"
            >
              <div className="px-4 py-4 space-y-4">
                {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left capitalize text-white hover:text-purple-300 transition-colors duration-200"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Avatar className="w-32 h-32 mx-auto mb-8 ring-4 ring-purple-400/50">
              <AvatarImage src="/api/placeholder/128/128" alt="Profile" />
              <AvatarFallback className="text-2xl bg-gradient-to-br from-purple-500 to-pink-500">
                JD
              </AvatarFallback>
            </Avatar>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Creative Developer
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Crafting innovative digital experiences with AI-powered solutions and cutting-edge design
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
                <ArrowRight className="ml-2" size={20} />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
                <Mail className="ml-2" size={20} />
              </Button>
            </div>

            <div className="flex justify-center space-x-6">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="text-purple-400" size={32} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate about creating digital experiences that blend creativity with cutting-edge technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  I'm a creative developer with a passion for building innovative web applications that push the boundaries of what's possible. With expertise in modern frameworks and AI integration, I create solutions that are both beautiful and intelligent.
                </p>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  My journey in tech has led me to specialize in full-stack development, with a particular focus on React, Node.js, and emerging AI technologies. I believe in the power of good design and clean code to create memorable user experiences.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-purple-400" size={20} />
                    <span className="text-gray-300">San Francisco, CA</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-purple-400" size={20} />
                    <span className="text-gray-300">5+ Years Experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="text-purple-400" size={20} />
                    <span className="text-gray-300">CS Degree</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="text-purple-400" size={20} />
                    <span className="text-gray-300">50+ Projects</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Code className="mr-2 text-purple-400" size={24} />
                    Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Full-stack development with modern frameworks and best practices
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Palette className="mr-2 text-purple-400" size={24} />
                    Design
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    UI/UX design with focus on user experience and visual appeal
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Zap className="mr-2 text-purple-400" size={24} />
                    Innovation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    AI integration and emerging technologies for next-gen solutions
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of my latest work combining creativity, technology, and innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                      <Sparkles className="text-purple-400" size={48} />
                    </div>
                    {project.featured && (
                      <Badge className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500">
                        Featured
                      </Badge>
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <Button size="sm" variant="secondary">
                        <Eye size={16} className="mr-2" />
                        View
                      </Button>
                      <Button size="sm" variant="secondary">
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-white">{project.title}</CardTitle>
                    <CardDescription className="text-gray-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-purple-500/20 text-purple-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <Button variant="outline" size="sm" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </Button>
                      <Button variant="outline" size="sm" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                        <Github size={16} className="mr-2" />
                        Source
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-white font-semibold">{skill.name}</h3>
                      <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                        {skill.category}
                      </Badge>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                      />
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Proficiency</span>
                      <span className="text-purple-400 font-semibold">{skill.level}%</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                <p className="text-gray-300 text-lg mb-8">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-300">hello@portfolio.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Location</p>
                    <p className="text-gray-300">San Francisco, CA</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Coffee className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Availability</p>
                    <p className="text-gray-300">Open to new opportunities</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-6 pt-6">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-200"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-200"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-200"
                >
                  <Globe size={20} />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Send a Message</CardTitle>
                  <CardDescription className="text-gray-300">
                    I'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-white text-sm font-medium mb-2 block">First Name</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="text-white text-sm font-medium mb-2 block">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">Subject</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                    Send Message
                    <Send className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Chat Assistant */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="mb-4 w-80 h-96 bg-black/90 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl"
            >
              <div className="flex items-center justify-between p-4 border-b border-white/20">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Bot className="text-white" size={16} />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">AI Assistant</p>
                    <p className="text-gray-400 text-xs">Online</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="h-64 overflow-y-auto p-4 space-y-4">
                {chatMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                        message.type === 'user'
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                          : 'bg-white/10 text-gray-300'
                      }`}
                    >
                      {message.message}
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white/10 text-gray-300 px-3 py-2 rounded-lg text-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4 border-t border-white/20">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ask me anything..."
                    className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                  />
                  <Button
                    size="sm"
                    onClick={handleSendMessage}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  >
                    <Send size={16} />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-shadow duration-200"
        >
          {isChatOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </motion.button>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-black/40 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Portfolio. All rights reserved.
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Made with</span>
              <Heart className="text-red-400" size={16} />
              <span className="text-gray-400 text-sm">and</span>
              <Sparkles className="text-purple-400" size={16} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

