'use client';

import React, { useState, useEffect } from 'react';
import { User, Calendar, Camera, Play, Phone, Mail, Award, Star, Users, Globe, ChevronDown, Menu, X } from 'lucide-react';
import AcreditacionesSection from '@/components/AcreditacionesSection';

// Component para manejar la hidratación del slider
const ClientOnlySlider = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    // Renderizado inicial del servidor - versión estática
    return (
      <section id="inicio" className="hero">
        <div className="hero-slider-container">
          <div className="hero-slide active" style={{
            backgroundImage: "url(/images/slider1.jpeg)",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}>
            <div className="hero-container">
              <div className="hero-content">
                <h1 className="hero-title">
                  Dr. Andrés Pérez Nieto
                </h1>
                
                <div className="hero-subtitle-line"></div>
                
                <p className="hero-subtitle">
                  International Plastic Surgeon
                </p>
                
                <p className="hero-description">
                  La experiencia que hace la diferencia.
                </p>

                <div className="quick-access">
                  <a href="#sobre-doctor" className="quick-btn">
                    <User size={72} className="quick-btn-icon" />
                    <div className="quick-btn-text">Dr. Pérez</div>
                  </a>
                  <a href="/consulta-virtual" className="quick-btn">
                    <Play size={72} className="quick-btn-icon" />
                    <div className="quick-btn-text">Consulta Virtual</div>
                  </a>
                  <a href="/agenda-cita" className="quick-btn">
                    <Calendar size={72} className="quick-btn-icon" />
                    <div className="quick-btn-text">Agenda tu cita</div>
                  </a>
                  <a href="#galeria" className="quick-btn">
                    <Camera size={72} className="quick-btn-icon" />
                    <div className="quick-btn-text">Galería</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return children;
};

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  const handleLinkClick = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
    closeDropdown();
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#inicio" 
              className="logo"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#inicio');
              }}
            >
              <img 
                src="/images/firma-2.png"
                alt="Andrés Pérez Nieto" 
                style={{
                  height: '12rem',
                  width: 'auto',
                  maxWidth: '400px',
                  filter: 'brightness(0) invert(1)'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'block';
                }}
              />
              
              <div style={{
                display: 'none',
                color: 'white', 
                fontSize: '3rem', 
                fontStyle: 'italic', 
                fontWeight: '300'
              }}>
                Andrés Pérez Nieto
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav">
            
            <a 
              href="#inicio" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#inicio');
              }}
            >
              INICIO
            </a>

            <div className="relative">
              <button
                onClick={() => toggleDropdown('doctor')}
                className="nav-button"
              >
                DR. PÉREZ
                <ChevronDown 
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                    openDropdown === 'doctor' ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <div className={`dropdown-menu ${openDropdown === 'doctor' ? 'show' : ''}`}>
                <a 
                  href="#sobre-doctor" 
                  className="dropdown-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#sobre-doctor');
                  }}
                >
                  Sobre el Doctor
                </a>
                <a 
                  href="#experiencia" 
                  className="dropdown-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#experiencia');
                  }}
                >
                  Experiencia
                </a>
                <a 
                  href="#filosofia" 
                  className="dropdown-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#filosofia');
                  }}
                >
                  Filosofía
                </a>
              </div>
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown('procedimientos')}
                className="nav-button"
              >
                PROCEDIMIENTOS
                <ChevronDown 
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                    openDropdown === 'procedimientos' ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <div className={`dropdown-menu ${openDropdown === 'procedimientos' ? 'show' : ''}`}>
                <a 
                  href="#facial" 
                  className="dropdown-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#facial');
                  }}
                >
                  Cirugía Facial
                </a>
                <a 
                  href="#lipofilling" 
                  className="dropdown-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#lipofilling');
                  }}
                >
                  Lipofilling con Células Madre
                </a>
                <a 
                  href="#galeria" 
                  className="dropdown-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#galeria');
                  }}
                >
                  Ver Resultados
                </a>
              </div>
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown('galeria')}
                className="nav-button"
              >
                GALERÍA
                <ChevronDown 
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                    openDropdown === 'galeria' ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <div className={`dropdown-menu ${openDropdown === 'galeria' ? 'show' : ''}`}>
                <a 
                  href="#galeria" 
                  className="dropdown-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#galeria');
                  }}
                >
                  Antes y Después
                </a>
                <a 
                  href="#testimonios" 
                  className="dropdown-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#testimonios');
                  }}
                >
                  Testimonios
                </a>
                <a 
                  href="#casos" 
                  className="dropdown-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#casos');
                  }}
                >
                  Casos Destacados
                </a>
              </div>
            </div>

            <a 
              href="#extranjeros" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#extranjeros');
              }}
            >
              PACIENTES EXTRANJEROS
            </a>

            <a 
              href="#blog" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#blog');
              }}
            >
              BLOG
            </a>

            <div className="relative">
              <button
                onClick={() => toggleDropdown('recursos')}
                className="nav-button"
              >
                RECURSOS
                <ChevronDown 
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                    openDropdown === 'recursos' ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <div className={`dropdown-menu ${openDropdown === 'recursos' ? 'show' : ''}`}>
                <a 
                  href="#preparacion" 
                  className="dropdown-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#preparacion');
                  }}
                >
                  Preparación Pre-operatoria
                </a>
                <a 
                  href="#cuidados" 
                  className="dropdown-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#cuidados');
                  }}
                >
                  Cuidados Post-operatorios
                </a>
                <a 
                  href="#preguntas" 
                  className="dropdown-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#preguntas');
                  }}
                >
                  Preguntas Frecuentes
                </a>
              </div>
            </div>
          </nav>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          <a 
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#inicio');
            }}
          >
            INICIO
          </a>
          <a 
            href="#sobre-doctor"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#sobre-doctor');
            }}
          >
            DR. PÉREZ
          </a>
          <a 
            href="#facial"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#facial');
            }}
          >
            PROCEDIMIENTOS
          </a>
          <a 
            href="#galeria"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#galeria');
            }}
          >
            GALERÍA
          </a>
          <a 
            href="#extranjeros"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#extranjeros');
            }}
          >
            PACIENTES EXTRANJEROS
          </a>
          <a 
            href="#blog"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#blog');
            }}
          >
            BLOG
          </a>
          <a 
            href="#testimonios"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#testimonios');
            }}
          >
            RECURSOS
          </a>
        </div>
      )}

      {openDropdown && (
        <div 
          className="fixed inset-0 z-40"
          onClick={closeDropdown}
        ></div>
      )}
    </header>
  );
};

// Componente principal con slider funcional
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/images/slider1.jpeg",
      title: "Dr. Andrés Pérez Nieto",
      subtitle: "International Plastic Surgeon",
      description: "La experiencia que hace la diferencia.",
      showButtons: true
    },
    {
      id: 2,
      image: "/images/slider2.jpg",
      title: "Dr. Andrés Pérez Nieto", 
      subtitle: "International Plastic Surgeon",
      description: "La experiencia que hace la diferencia.",
      showButtons: false
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      <Header />
   
      {/* Hero Section - Slider CON SOLUCIÓN DE HIDRATACIÓN */}
      <ClientOnlySlider>
      
        <section id="inicio" className="hero">
          <div className="hero-slider-container">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                style={{
                  backgroundImage: slide.image ? `url(${slide.image})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="hero-container">
                  <div className="hero-content">
                    <h1 className="hero-title">
                      {slide.title}
                    </h1>
                    
                    <div className="hero-subtitle-line"></div>
                    
                    <p className="hero-subtitle">
                      {slide.subtitle}
                    </p>
                    
                    <p className="hero-description">
                      {slide.description}
                    </p>

                    {/* Botones con iconos - EN AMBOS SLIDES */}
                    <div className="quick-access">
                      <a href="#sobre-doctor" className="quick-btn">
                        <User size={72} className="quick-btn-icon" />
                        <div className="quick-btn-text">Dr. Pérez</div>
                      </a>
                      <a href="/consulta-virtual" className="quick-btn">
                        <Play size={72} className="quick-btn-icon" />
                        <div className="quick-btn-text">Consulta Virtual</div>
                      </a>
                      <a href="/agenda-cita" className="quick-btn">
                        <Calendar size={72} className="quick-btn-icon" />
                        <div className="quick-btn-text">Agenda tu cita</div>
                      </a>
                      <a href="#galeria" className="quick-btn">
                        <Camera size={72} className="quick-btn-icon" />
                        <div className="quick-btn-text">Galería</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Navigation */}
          <div className="slider-navigation">
            <div className="slider-dots">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Ir al slide ${index + 1}`}
                />
              ))}
            </div>

            <button 
              className="slider-arrow prev" 
              onClick={prevSlide}
              aria-label="Slide anterior"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <button 
              className="slider-arrow next" 
              onClick={nextSlide}
              aria-label="Siguiente slide"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </section>
      </ClientOnlySlider>
<section className="acreditaciones">
  <div className="container">
    <div className="acreditaciones-content">
      {/* PRIMERO: logos */}
      <div className="logos">
        {[
          { name: "ISAPS", image: "/images/acreditaciones/isaps-logo.png", url: "https://www.isaps.org/" },
          { name: "ASPS", image: "/images/acreditaciones/asps-logo.png", url: "https://www.plasticsurgery.org/" },
          { name: "SCCP", image: "/images/acreditaciones/sccp-logo.png", url: "https://www.cirugiaplastica.org.co/" },
          { name: "FILACP", image: "/images/acreditaciones/filacp-logo.png", url: "https://www.filacp.org/" }
        ].map((logo, index) => (
          <a key={index} href={logo.url} target="_blank" rel="noopener noreferrer" className="logo-link">
            <img src={logo.image} alt={logo.name} className="logo-image" />
          </a>
        ))}
      </div>
      
      {/* DESPUÉS: título */}
      <div className="acreditaciones-title">Acreditaciones</div>
    </div>
  </div>
</section>

 <section id="sobre-doctor" className="section bg-gray">
        <div className="container">
          <div className="grid-2">
            <div className="bienvenidos-text">
              <h2 className="section-title bienvenidos-title">
                Bienvenidos
              </h2>
              
              <p className="section-text bienvenidos-description">
                Gracias por visitar mi sitio web. Como especialista en cirugía plástica, estoy comprometido a ofrecer 
                los más altos estándares de atención y resultados excepcionales. Te invito a conocer más sobre mis 
                servicios y filosofía de trabajo.
              </p>

              <div className="bienvenidos-buttons">
  <a href="/agenda-cita" className="btn btn-outline-primary">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 1v6m6-6v6"/>
    </svg>
    Agenda tu cita
  </a>
  <a href="/consulta-virtual" className="btn btn-outline-secondary">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8"/>
      <path d="M21 21l-4.35-4.35"/>
    </svg>
    Consulta Virtual
  </a>
</div>
            </div>

            <div className="bienvenidos-video-container">
              <video 
                className="bienvenidos-video"
                controls
                poster="/images/video-poster.jpg"
                preload="metadata"
              >
                <source src="/videos/doctor-welcome.mp4" type="video/mp4" />
                <source src="/videos/doctor-welcome.webm" type="video/webm" />
                Tu navegador no soporta el elemento de video.
              </video>
              
              {/* Botón de play personalizado si quieres overlay */}
              <div className="video-overlay">
                <button className="video-play-btn" aria-label="Reproducir video">
                  <Play size={48} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

  <section id="experiencia" className="caracteristicas-section">
        <div className="container">
          <div className="caracteristicas-grid">
            
            <div className="caracteristica-card">
              <div className="caracteristica-icon">
                <img src="/images/icons/doctor-icon.png" alt="Dr. Pérez" className="icon-image" />
              </div>
              <h3 className="caracteristica-title">Dr. Pérez</h3>
              <p className="caracteristica-text">
                Especialista en técnicas avanzadas de rejuvenecimiento facial con resultados naturales.
              </p>
            </div>

            <div className="caracteristica-card">
              <div className="caracteristica-icon">
                <img src="/images/icons/innovation-icon.png" alt="Innovación" className="icon-image" />
              </div>
              <h3 className="caracteristica-title">Innovación</h3>
              <p className="caracteristica-text">
                Tecnología de vanguardia y procedimientos menos invasivos con resultados superiores.
              </p>
            </div>

            <div className="caracteristica-card">
              <div className="caracteristica-icon">
                <img src="/images/icons/experience-icon.png" alt="Experiencia" className="icon-image" />
              </div>
              <h3 className="caracteristica-title">Experiencia</h3>
              <p className="caracteristica-text">
                Más de 15 años de experiencia y formación en centros médicos de prestigio internacional.
              </p>
            </div>

            <div className="caracteristica-card">
              <div className="caracteristica-icon">
                <img src="/images/icons/international-icon.png" alt="Trayectoria Internacional" className="icon-image" />
              </div>
              <h3 className="caracteristica-title">Trayectoria Internacional</h3>
              <p className="caracteristica-text">
                Reconocido por sociedades médicas internacionales y conferencista en congresos mundiales.
              </p>
            </div>
          </div>
        </div>
      </section>

 <section id="filosofia" className="filosofia-section">
        <div className="container">
          <div className="filosofia-content">
            <h2 className="filosofia-title">
              Todos lo notarán, pero nadie lo sabrá
            </h2>
            
            <p className="filosofia-text">
              Es un concepto que el Dr. Andrés Pérez, a través de su vasta experiencia, ha logrado incorporar en su forma de concebir y 
              practicar el arte de la cirugía plástica. Su compromiso con cada paciente es realzar su belleza natural, preservando la esencia que 
              los hace únicos. La experticia quirúrgica y un profundo sentido artístico se fusionan para lograr resultados que van más allá de la 
              excelencia. Con técnicas quirúrgicas propias y tecnología de punta, estarás EN LAS MEJORES MANOS.
            </p>

            <a href="#lipofilling" className="filosofia-btn">
              Más información
            </a>
          </div>
        </div>
      </section>

   <section id="lipofilling" className="procedimientos-section">
        <div className="container">
          <div className="procedimientos-header">
            <h2 className="procedimientos-title">
              Luce tan joven como te sientes
            </h2>
          </div>

          <div className="procedimientos-grid">
            
            <div className="procedimiento-card">
              <div className="procedimiento-image">
                <img 
                  src="/images/procedimientos/regeneracion-celular.jpg" 
                  alt="Regeneración Celular - Lipofilling con Células Madre" 
                  className="procedimiento-img"
                />
              </div>
              
              <div className="procedimiento-content">
                <h3 className="procedimiento-subtitle">Regeneración Celular</h3>
                <h4 className="procedimiento-name">Lipofilling con Células Madre</h4>
                <p className="procedimiento-text">
                  La inyección con células madres obtenidas de tu propia grasa es una 
                  excelente y confiable alternativa para restaurar el volumen de tu rostro y 
                  revitalizar tu piel. La utilidad de este procedimiento se ha expandido y se lleva 
                  a cabo para rejuvenecer el dorso de las manos y reducir las arrugas en ciertas 
                  áreas del rostro.
                </p>
                <a href="#facial" className="procedimiento-btn">
                  Más Información
                </a>
              </div>
            </div>

            <div className="procedimiento-card">
              <div className="procedimiento-image">
                <img 
                  src="/images/procedimientos/rejuvenecimiento-facial.jpg" 
                  alt="Rejuvenecimiento Facial - Lifting Facial en Hamaca" 
                  className="procedimiento-img"
                />
              </div>
              
              <div className="procedimiento-content">
                <h3 className="procedimiento-subtitle">Rejuvenecimiento Facial</h3>
                <h4 className="procedimiento-name">Lifting Facial en Hamaca</h4>
                <p className="procedimiento-text">
                  Te brinda la posibilidad de rejuvenecer tu rostro de manera completamente natural 
                  y perdurable. En esencia, es una combinación de procedimientos quirúrgicos que logran 
                  revertir los signos del envejecimiento facial, devolviendo así la frescura y 
                  lozanía que te hacen lucir joven y bella.
                </p>
                <a href="#facial" className="procedimiento-btn">
                  Más Información
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    <section id="facial" className="procedimientos-quirurgicos-section">
        <div className="container">
          <div className="procedimientos-quirurgicos-grid">
            
            {/* Imagen con puntos interactivos */}
            <div className="procedimientos-image-container">
              <img 
                src="/images/woman-face-procedures.jpg" 
                alt="Procedimientos Quirúrgicos Faciales" 
                className="procedimientos-face-img"
              />
              
              {/* Puntos interactivos */}
              <div className="procedure-point point-1" data-procedure="Lifting de Cejas">
                <div className="point-dot"></div>
                <div className="procedure-tooltip">
                  <h4>Lifting de Cejas</h4>
                  <p>Rejuvenece la mirada elevando las cejas de forma natural</p>
                </div>
              </div>
              
              <div className="procedure-point point-2" data-procedure="Blefaroplastia">
                <div className="point-dot"></div>
                <div className="procedure-tooltip">
                  <h4>Blefaroplastia</h4>
                  <p>Elimina el exceso de piel y grasa de los párpados</p>
                </div>
              </div>
              
              <div className="procedure-point point-3" data-procedure="Rinoplastia">
                <div className="point-dot"></div>
                <div className="procedure-tooltip">
                  <h4>Rinoplastia</h4>
                  <p>Armoniza las proporciones de la nariz con el rostro</p>
                </div>
              </div>
              
              <div className="procedure-point point-4" data-procedure="Lipofilling Facial">
                <div className="point-dot"></div>
                <div className="procedure-tooltip">
                  <h4>Lipofilling Facial</h4>
                  <p>Restaura el volumen perdido con grasa propia</p>
                </div>
              </div>
              
              <div className="procedure-point point-5" data-procedure="Lifting Facial">
                <div className="point-dot"></div>
                <div className="procedure-tooltip">
                  <h4>Lifting Facial</h4>
                  <p>Redefine el contorno facial eliminando la flacidez</p>
                </div>
              </div>
              
              <div className="procedure-point point-6" data-procedure="Mentoplastia">
                <div className="point-dot"></div>
                <div className="procedure-tooltip">
                  <h4>Mentoplastia</h4>
                  <p>Perfecciona la armonía del perfil facial</p>
                </div>
              </div>
            </div>

            {/* Contenido de texto */}
            <div className="procedimientos-content">
              <h2 className="procedimientos-quirurgicos-title">
                Procedimientos Quirúrgicos
              </h2>
              
              <p className="procedimientos-quirurgicos-subtitle">
                Descubre el arte detrás de los resultados armónicos y naturales.
              </p>
              
              <p className="procedimientos-quirurgicos-text">
                El Dr. Pérez combina precisión y arte para lograr resultados que no solo se ven increíbles, sino que 
                también se sienten aún mejor.
              </p>
              
              <p className="procedimientos-quirurgicos-text">
                Explora y conoce de primera mano las técnicas avanzadas y soluciones médicas que él ha desarrollado 
                para ofrecer resultados excepcionales.
              </p>
              
              <p className="procedimientos-interaction-text">
                *Conoce más pasando el cursor sobre los puntos de la imagen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="galeria" className="section bg-gray">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="section-title">
              Más de 5k
            </h2>
            <p style={{fontSize: '1.25rem', color: '#64748b'}}>Resultados naturales</p>
          </div>

          <div className="grid-4">
            {['Sandra', 'Nubia', 'Angelica', 'Angela'].map((name, index) => (
              <div key={index} className="text-center">
                <div className="image-placeholder mb-4" style={{height: '256px'}}>
                  <div>
                    <div style={{fontSize: '3rem', marginBottom: '0.5rem'}}>👩</div>
                    <div>{name}</div>
                  </div>
                </div>
                <h3 className="card-title">{name}</h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a href="#testimonios" className="btn btn-primary">
              Ver galería de resultados
            </a>
          </div>
        </div>
      </section>

      <section id="testimonios" className="section bg-white">
        <div className="container">
          <h2 className="section-title text-center">Testimonios</h2>
          
          <div style={{display: 'grid', gap: '2rem'}}>
            <div className="card" style={{background: '#f8fafc'}}>
              <div className="flex items-center mb-4">
                <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#1e293b'}}>EXCELENTE</div>
                <div className="stars" style={{marginLeft: '1rem'}}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="star-filled" />
                  ))}
                </div>
              </div>
              <div style={{fontSize: '0.9rem', color: '#64748b'}}>Basado en 47 reseñas</div>
              <div style={{marginTop: '1rem', color: '#2563eb', fontWeight: '600'}}>Google</div>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem'}}>
              {['Video Facial 1', 'Video Facial 2', 'Video Facial 3'].map((video, index) => (
                <div key={index}>
                  <div className="video-placeholder">
                    <Play size={24} />
                  </div>
                  <div className="text-center" style={{marginTop: '0.5rem'}}>
                    <div style={{fontSize: '0.9rem', fontWeight: '500', color: '#1e293b'}}>{video}</div>
                    <div style={{fontSize: '0.8rem', color: '#64748b'}}>Mira la experiencia completa de esta paciente</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="extranjeros" className="section bg-dark">
        <div className="container">
          <div className="grid-2">
            
            <div>
              <h2 className="section-title text-white">Dr Face</h2>
              <p className="section-text" style={{color: '#94a3b8'}}>
                Considerado por sus pacientes como un artista de la cirugía facial.
              </p>
              <a href="#blog" className="btn btn-white">
                Conoce al Dr Face
              </a>
            </div>

            <div className="flex justify-center">
              <div className="image-placeholder" style={{width: '320px', height: '384px', background: '#64748b'}}>
                <div style={{color: '#94a3b8'}}>
                  <div style={{fontSize: '3rem', marginBottom: '1rem'}}>👨‍⚕️</div>
                  <div>Dr. Pérez Portrait</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="section bg-gray">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Blog y Recursos</h2>
            <p className="section-text">
              Mantente informado sobre las últimas tendencias en cirugía plástica y cuidados post-operatorios.
            </p>
            <a href="#inicio" className="btn btn-primary">
              Ver artículos
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            
            <div className="footer-section">
              <div className="footer-title">Andrés Pérez Nieto</div>
              
              <div>
                <div style={{fontSize: '0.9rem', marginBottom: '1rem'}}>CONTÁCTANOS:</div>
                <div className="footer-contact flex items-center gap-1">
                  <Phone size={16} />
                  <span>(+57) 601 629 9551</span>
                </div>
                <div className="footer-contact flex items-center gap-1">
                  <Phone size={16} />
                  <span>(+57) 316 495 3755</span>
                </div>
                <div className="footer-contact flex items-center gap-1">
                  <Mail size={16} />
                  <span>info@drandrespereznieto.com</span>
                </div>
                <div className="footer-contact">Calle 119 # 7 – 14 Bogotá, Colombia</div>
              </div>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem'}}>
              <div>
                <div className="footer-nav-title">Navegación</div>
                <div>
                  <a href="#inicio" className="footer-nav-link">Inicio</a>
                  <a href="#sobre-doctor" className="footer-nav-link">Dr. Pérez</a>
                  <a href="#facial" className="footer-nav-link">Procedimientos</a>
                  <a href="#galeria" className="footer-nav-link">Galería</a>
                </div>
              </div>
              <div>
                <div className="footer-nav-title">Recursos</div>
                <div>
                  <a href="#extranjeros" className="footer-nav-link">Pacientes Extranjeros</a>
                  <a href="#blog" className="footer-nav-link">Blog</a>
                  <a href="#testimonios" className="footer-nav-link">Testimonios</a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            Copyright 2025 Andrés Pérez Nieto | Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}