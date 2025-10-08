import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Smartphone, Server, Cloud, Package, GitBranch, ChevronLeft, ChevronRight, Menu, X, Download, Send, MapPin } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

export default function Portfolio() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      name: "HealthConnect Pro",
      type: "Full Stack App",
      category: "fullstack",
      tech: ["Django", "DRF", "React", "PostgreSQL", "AWS"],
      description: "Complete telemedicine platform with video consultations, appointment management, and prescription system.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      demo: "#",
      github: "#"
    },
    {
      id: 2,
      name: "FitTracker Mobile",
      type: "Android App",
      category: "mobile",
      tech: ["React Native", "Django", "Redux", "Firebase"],
      description: "Fitness tracking app with workout plans, progress analytics, and social features for 50K+ users.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",
      demo: "#",
      github: "#"
    },
    {
      id: 3,
      name: "ShopEase E-commerce",
      type: "Full Stack App",
      category: "fullstack",
      tech: ["React", "Django", "Stripe", "AWS S3", "Docker"],
      description: "Modern e-commerce platform with real-time inventory, secure payments, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      demo: "#",
      github: "#"
    },
    {
      id: 4,
      name: "TaskFlow Manager",
      type: "Android App",
      category: "mobile",
      tech: ["React Native", "FastAPI", "MongoDB", "WebSocket"],
      description: "Project management app with team collaboration, real-time updates, and kanban boards.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      demo: "#",
      github: "#"
    },
    {
      id: 5,
      name: "FoodDelivery Pro",
      type: "Android App",
      category: "mobile",
      tech: ["React Native", "Google Maps", "Stripe", "Firebase"],
      description: "Food delivery app with real-time tracking, multiple payment options, and restaurant integration.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop",
      demo: "#",
      github: "#"
    },
    {
      id: 6,
      name: "LearnHub LMS",
      type: "Full Stack App",
      category: "fullstack",
      tech: ["React", "Django", "DRF", "AWS", "Redis"],
      description: "Online learning platform with video streaming, quizzes, progress tracking, and certifications.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
      demo: "#",
      github: "#"
    },
    {
      id: 7,
      name: "WeatherNow",
      type: "Android App",
      category: "mobile",
      tech: ["React Native", "OpenWeather API", "Redux"],
      description: "Beautiful weather app with detailed forecasts, alerts, and location-based updates.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
      demo: "#",
      github: "#"
    },
    {
      id: 8,
      name: "PropertyHub",
      type: "Web App",
      category: "web",
      tech: ["React", "Django", "PostgreSQL", "Google Maps"],
      description: "Real estate platform with advanced search, virtual tours, and agent management system.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      demo: "#",
      github: "#"
    },
    {
      id: 9,
      name: "ExpenseTracker",
      type: "Android App",
      category: "mobile",
      tech: ["React Native", "Django", "Chart.js"],
      description: "Personal finance app with expense tracking, budgeting, and financial insights.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
      demo: "#",
      github: "#"
    },
    {
      id: 10,
      name: "API Gateway Service",
      type: "DevOps Project",
      category: "devops",
      tech: ["FastAPI", "Docker", "Kubernetes", "AWS", "Redis"],
      description: "Microservices API gateway with rate limiting, authentication, and load balancing.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      demo: "#",
      github: "#"
    },
    {
      id: 11,
      name: "ChatApp Realtime",
      type: "Cross-Platform",
      category: "utility",
      tech: ["React Native", "Django Channels", "WebSocket", "Redis"],
      description: "Real-time messaging app with group chats, media sharing, and end-to-end encryption.",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=600&fit=crop",
      demo: "#",
      github: "#"
    },
    {
      id: 12,
      name: "CI/CD Pipeline Automation",
      type: "DevOps Project",
      category: "devops",
      tech: ["Docker", "GitHub Actions", "AWS", "Terraform"],
      description: "Automated deployment pipeline with testing, building, and infrastructure as code.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop",
      demo: "#",
      github: "#"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, HealthTech Solutions",
      content: "Aditya delivered our telemedicine platform ahead of schedule. His expertise in Django and React Native was instrumental in our success. The app has been running flawlessly for 6 months.",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Founder, FitLife App",
      content: "Working with Aditya was a game-changer. He built a robust fitness tracking app that handles 50K+ users seamlessly. His code quality and attention to detail are exceptional.",
      avatar: "MC"
    },
    {
      name: "Priya Sharma",
      role: "CTO, ShopEase",
      content: "Aditya's full-stack expertise helped us launch our e-commerce platform in record time. His AWS deployment and optimization skills saved us significant costs. Highly recommended!",
      avatar: "PS"
    }
  ];

  const skills = [
    { name: "Django & DRF", icon: <Server className="w-6 h-6" />, color: "from-green-500 to-emerald-600" },
    { name: "React.js", icon: <Code2 className="w-6 h-6" />, color: "from-blue-500 to-cyan-600" },
    { name: "React Native", icon: <Smartphone className="w-6 h-6" />, color: "from-cyan-500 to-blue-600" },
    { name: "JavaScript", icon: <Code2 className="w-6 h-6" />, color: "from-yellow-500 to-orange-600" },
    { name: "Python", icon: <Code2 className="w-6 h-6" />, color: "from-blue-600 to-indigo-700" },
    { name: "AWS Cloud", icon: <Cloud className="w-6 h-6" />, color: "from-orange-500 to-red-600" },
    { name: "Docker", icon: <Package className="w-6 h-6" />, color: "from-blue-400 to-blue-600" },
    { name: "Git", icon: <GitBranch className="w-6 h-6" />, color: "from-gray-600 to-gray-800" }
  ];

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission (integrate with Formspree/EmailJS)
  //   console.log('Form submitted:', formData);

  //   alert('Thank you! I will get back to you soon.');
  //   setFormData({ name: '', email: '', message: '' });
  // };

  const handleSubmit = (e) => {
  e.preventDefault();

  const subject = encodeURIComponent(`Message from ${formData.name}`);
  const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);

  // Replace with your own email address
  const recipient = "aditya123905@gmail.com";

  // Gmail compose link
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;

  // Open Gmail compose in new tab
  window.open(gmailUrl, "_blank");

  // Reset form after redirect
  setFormData({ name: "", email: "", message: "" });
 };


  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white font-sans">
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-950/80 backdrop-blur-xl z-50 border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              <img src="/favicon.svg" alt=""  className='h-12 w-12'/>                      
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-10 text-sm">
              <a href="#home" className="hover:text-emerald-400 transition-colors duration-300">Home</a>
              <a href="#about" className="hover:text-emerald-400 transition-colors duration-300">About</a>
              <a href="#projects" className="hover:text-emerald-400 transition-colors duration-300">Projects</a>
              <a href="#testimonials" className="hover:text-emerald-400 transition-colors duration-300">Testimonials</a>
              <a href="#contact" className="hover:text-emerald-400 transition-colors duration-300">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-6 space-y-4 border-t border-slate-800">
              <a href="#home" className="block hover:text-emerald-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#about" className="block hover:text-emerald-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#projects" className="block hover:text-emerald-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Projects</a>
              <a href="#testimonials" className="block hover:text-emerald-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
              <a href="#contact" className="block hover:text-emerald-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">Full-stack & Mobile Developer</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Aditya Chaudhary
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
            I build <span className="text-emerald-400 font-semibold">web</span> and <span className="text-cyan-400 font-semibold">mobile apps </span> 
            that <span className="text-blue-400 font-semibold">solve problems</span> and 
            <span className="text-purple-400 font-semibold"> grow businesses</span>.
          </p>


          <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
          <span className="text-blue-400 font-semibold">Your vision </span> our 
            <span className="text-purple-400 font-semibold"> creation</span>. 
          </p>

          <p>
            <br />
          </p>

          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <a href="#contact" className="group relative bg-gradient-to-r from-emerald-500 to-cyan-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/30 hover:scale-105">
              <span className="relative z-10">Hire Me</span>
            </a>

            <a href="#projects" className="group border-2 border-slate-700 hover:border-emerald-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-emerald-500/10 flex items-center gap-2 justify-center">

              <Code2 className="w-5 h-5" />
              View Craft
            </a>


            

          </div>
          
          {/* <div className="flex justify-center gap-8 opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110">
              <Github className="w-7 h-7" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110">
              <Linkedin className="w-7 h-7" />
            </a>



            <a href="mailto:aditya123905@gmail.com" className="text-slate-400 hover:text-purple-400 transition-all duration-300 hover:scale-110">
              <Mail className="w-7 h-7" />
            </a>

            <a
                href="https://wa.me/919876543210"  // ← replace with your number (include country code, no +)
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-green-500 transition-all duration-300 hover:scale-110"
              >
                <FaWhatsapp className="w-7 h-7" />
              </a>
          </div> */}

          <div className="flex justify-center items-center gap-8 opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <a
              href="mailto:aditya123905@gmail.com"
              className="flex items-center justify-center text-slate-400 hover:text-purple-400 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-8 h-8" />
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-slate-400 hover:text-green-500 transition-all duration-300 hover:scale-110"
            >
              <FaWhatsapp className="w-8 h-8" />
            </a>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative" data-animate>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <p>
                  Hi! I'm <span className="text-white font-semibold">Aditya Chaudhary</span>, a passionate <span className="text-cyan-400"> developer</span> specializing in building scalable web and mobile applications.
                </p>
                <p>
                  With expertise in <span className="text-white font-medium">Django, DRF, React, and React Native</span>, I've delivered 12+ successful projects ranging from telemedicine platforms to e-commerce solutions, serving thousands of users worldwide.
                </p>
                <p>
                  I'm passionate about clean code, modern architecture, and creating seamless user experiences. Currently open to exciting freelance opportunities and full-time roles.
                </p>
              </div>

              {/* Skills Grid */}
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {skills.map((skill, idx) => (
                  <div key={idx} className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-4 rounded-xl border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      {skill.icon}
                    </div>
                    <h3 className="text-sm font-semibold text-slate-300">{skill.name}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-300 ${isVisible.about ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700/50">
                  <div className="aspect-square bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-2xl flex items-center justify-center">
                    <div className="text-9xl font-bold bg-gradient-to-br from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                      <img src="/favicon.svg" alt=""  className='h-40 w-40'/>                      
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <div className="flex items-center justify-center gap-2 text-slate-400">
                      <MapPin className="w-4 h-4" />
                      <span>Ahmedabad, Gujarat</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-slate-900/30" data-animate>
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A showcase of end-to-end applications spanning mobile, web, and DevOps solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={project.id} 
                className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  {/* Hover Overlay */}
                  {/* <div className="absolute inset-0 bg-slate-950/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                    <a href={project.demo} className="bg-emerald-500 hover:bg-emerald-600 p-3 rounded-lg transition-all duration-300 hover:scale-110">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a href={project.github} className="bg-slate-700 hover:bg-slate-600 p-3 rounded-lg transition-all duration-300 hover:scale-110">
                      <Github className="w-5 h-5" />
                    </a>
                  </div> */}
                </div>

                <div className="p-6">
                  <div className="text-xs font-semibold text-emerald-400 mb-2 uppercase tracking-wider">{project.type}</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors duration-300">{project.name}</h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-full border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 px-6" data-animate>
        <div className="max-w-5xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              Client Testimonials
            </h2>
            <p className="text-xl text-slate-400">
              What clients say about working with me
            </p>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${isVisible.testimonials ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-10 md:p-16 rounded-3xl border border-slate-700/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
              
              <div className="relative">
                <div className="text-emerald-400 text-6xl mb-6 opacity-20">"</div>
                <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed">
                  {testimonials[activeTestimonial].content}
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-600 flex items-center justify-center text-xl font-bold">
                    {testimonials[activeTestimonial].avatar}
                  </div>
                  <div>
                    <div className="font-bold text-lg">{testimonials[activeTestimonial].name}</div>
                    <div className="text-slate-400 text-sm">{testimonials[activeTestimonial].role}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button 
                onClick={prevTestimonial}
                className="bg-slate-800 hover:bg-slate-700 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="bg-slate-800 hover:bg-slate-700 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeTestimonial ? 'w-8 bg-emerald-500' : 'w-2 bg-slate-700'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-slate-900/30" data-animate>
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-slate-400">
              Available for freelance projects and full-time opportunities
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible.contact ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-slate-700/50 space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">Message</label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-cyan-600 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/30 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>

            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
              {/* <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a> */}

              <a
                href="mailto:aditya123905@gmail.com"  // ← replace with your email
                className="flex items-center justify-center gap-2 bg-slate-800  px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-5 h-5 text-red-400" />
                Gmail
              </a>

              <a 
                href="https://wa.me/919327748938"   // ← replace with your phone number, include country code (no +)
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                <FaWhatsapp className="w-5 h-5 text-green-500" />
                WhatsApp
              </a>

{/* 

              <a 
                href="https://upwork.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                <ExternalLink className="w-5 h-5" />
                Upwork
              </a> */}



            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-slate-400 text-center md:text-left">
              <p>© 2025 Aditya Chaudhary</p>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <MapPin className="w-4 h-4" />
              <span>Based in Ahmedabad, Gujarat | Open to Remote Work</span>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}