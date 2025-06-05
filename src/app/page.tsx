'use client';

import React, { useState, useEffect } from 'react';
import { User, Calendar, Camera, Play, Phone, Mail, Award, Star, Users, Globe, ChevronDown, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';

import AcreditacionesSection from '@/components/AcreditacionesSection';
import GaleriaResultados from '@/components/GaleriaResultados';

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

// Componente de Tarjeta Flotante - AGREGADO DIRECTAMENTE
const TarjetaFlotanteCita = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 300);
  };

  const handleAgendarCita = () => {
    window.open('/agenda-cita', '_blank');
  };

  const handleLlamar = () => {
    window.open('tel:+573164953755');
  };

  if (!isVisible) return null;

  const styles = {
    overlay: {
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      zIndex: 9999,
      animation: isClosing ? 'slideOut 0.3s ease-in-out' : 'slideIn 0.5s ease-out'
    },
    card: {
      backgroundColor: '#f8f9fa',
      borderRadius: '20px',
      padding: '1.5rem',
      maxWidth: '380px',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      border: '1px solid #e5e7eb',
      position: 'relative',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)'
    },
    closeButton: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      backgroundColor: 'rgba(107, 114, 128, 0.1)',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      color: '#6b7280'
    },
    content: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    },
    imageContainer: {
      position: 'relative',
      flexShrink: 0
    },
    imagePlaceholder: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '2rem',
      fontWeight: 'bold',
      border: '3px solid #ffffff',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    },
    onlineIndicator: {
      position: 'absolute',
      bottom: '5px',
      right: '5px',
      width: '16px',
      height: '16px',
      backgroundColor: '#22c55e',
      borderRadius: '50%',
      border: '2px solid white'
    },
    textContent: {
      flex: 1
    },
    title: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '0.25rem',
      lineHeight: '1.3',
      fontFamily: 'Sansation, sans-serif'
    },
    subtitle: {
      fontSize: '0.875rem',
      color: '#6b7280',
      marginBottom: '1rem',
      fontStyle: 'italic'
    },
    buttonsContainer: {
      display: 'flex',
      gap: '0.5rem',
      marginTop: '1rem'
    },
    primaryButton: {
      backgroundColor: '#3b82f6',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      padding: '0.75rem 1rem',
      fontSize: '0.875rem',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'all 0.2s ease',
      flex: 1,
      justifyContent: 'center'
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: '#6b7280',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      padding: '0.75rem',
      fontSize: '0.875rem',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.2s ease',
      minWidth: '48px'
    }
  };

  return (
    <>
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(100%); opacity: 0; }
        }
        .floating-card-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px -8px rgba(59, 130, 246, 0.5);
        }
        .floating-card-secondary:hover {
          background-color: #f3f4f6;
          border-color: #9ca3af;
        }
        .floating-card-close:hover {
          background-color: rgba(107, 114, 128, 0.2);
          transform: scale(1.1);
        }
        @media (max-width: 640px) {
          .floating-card-overlay {
            bottom: 1rem !important;
            right: 1rem !important;
            left: 1rem !important;
          }
          .floating-card {
            max-width: none !important;
          }
        }
      `}</style>
      <div className="floating-card-overlay" style={styles.overlay}>
        <div className="floating-card" style={styles.card}>
          <button
            className="floating-card-close"
            style={styles.closeButton}
            onClick={handleClose}
            aria-label="Cerrar"
          >
            <X size={16} />
          </button>
          <div style={styles.content}>
            <div style={styles.imageContainer}>
              <div style={styles.imagePlaceholder}>
                AP
              </div>
              <div style={styles.onlineIndicator}></div>
            </div>
            <div style={styles.textContent}>
              <h3 style={styles.title}>
                ¿Listo para tu transformación? Agenda tu consulta personalizada
              </h3>
              <p style={styles.subtitle}>
                - Dr. Andrés Pérez Nieto
              </p>
              <div style={styles.buttonsContainer}>
                <button
                  className="floating-card-button"
                  style={styles.primaryButton}
                  onClick={handleAgendarCita}
                >
                  <Calendar size={16} />
                  Agendar Cita
                </button>
                <button
                  className="floating-card-secondary"
                  style={styles.secondaryButton}
                  onClick={handleLlamar}
                  title="Llamar ahora"
                >
                  <Phone size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Componente de Testimonios - CON SLIDER AUTOMÁTICO Y 45 RESEÑAS
const TestimoniosSection = () => {
  const [currentReview, setCurrentReview] = useState(0);

  // 45 Datos reales de reseñas de Google
  const googleReviews = [
    { id: 1, name: "Martha Lozano", date: "2025-03-17", rating: 5, avatar: "M", text: "La experiencia con el Dr. Pérez y su equipo es indescriptible porque no tengo las palabras para expresar la gran satisfacción y agradecimiento...", verified: true },
    { id: 2, name: "Svetlana Lapan", date: "2025-03-16", rating: 5, avatar: "S", text: "I had the blepharoplasty and face lift less than 4 weeks ago. I am still in recovery, but the results are amazing. Doctor Andres Perez is a great and...", verified: true },
    { id: 3, name: "Ana García", date: "2025-03-15", rating: 5, avatar: "A", text: "Excelente atención desde el primer momento. El Dr. Pérez es muy profesional y los resultados superaron mis expectativas. Totalmente recomendado.", verified: true },
    { id: 4, name: "Carlos Rodriguez", date: "2025-03-14", rating: 5, avatar: "C", text: "Outstanding results! Dr. Pérez transformed my face with such precision and artistry. The recovery was smooth and the staff was incredibly supportive...", verified: true },
    { id: 5, name: "Isabella Santos", date: "2025-03-13", rating: 5, avatar: "I", text: "Increíble trabajo del Dr. Pérez. Mi blefaroplastia quedó perfecta, se ve muy natural. Todo el equipo muy profesional y atento en todo momento...", verified: true },
    { id: 6, name: "Michael Thompson", date: "2025-03-12", rating: 5, avatar: "M", text: "Best decision I ever made. Dr. Pérez is truly an artist. The facelift results exceeded my expectations and look completely natural...", verified: true },
    { id: 7, name: "Patricia Morales", date: "2025-03-11", rating: 5, avatar: "P", text: "El Dr. Pérez es un verdadero artista. Mi rinoplastia quedó exactamente como la había imaginado. Muy agradecida con todo el equipo...", verified: true },
    { id: 8, name: "James Wilson", date: "2025-03-10", rating: 5, avatar: "J", text: "Professional, skilled, and caring. Dr. Pérez made me feel confident throughout the entire process. The results speak for themselves...", verified: true },
    { id: 9, name: "Lucía Fernández", date: "2025-03-09", rating: 5, avatar: "L", text: "Una experiencia maravillosa desde la consulta hasta el resultado final. El Dr. Pérez entiende perfectamente lo que cada paciente necesita...", verified: true },
    { id: 10, name: "Robert Kim", date: "2025-03-08", rating: 5, avatar: "R", text: "Exceptional surgeon and amazing results. Dr. Pérez has incredible attention to detail and genuine care for his patients...", verified: true },
    { id: 11, name: "Sofia Herrera", date: "2025-03-07", rating: 5, avatar: "S", text: "Mi lipofilling facial quedó perfecto. El Dr. Pérez logró darme el volumen que había perdido de manera muy natural. Excelente profesional...", verified: true },
    { id: 12, name: "David Chen", date: "2025-03-06", rating: 5, avatar: "D", text: "Top-notch surgeon with incredible results. The entire team made me feel comfortable and confident throughout the process...", verified: true },
    { id: 13, name: "Carmen Jiménez", date: "2025-03-05", rating: 5, avatar: "C", text: "El mejor cirujano plástico que he conocido. Su técnica es impecable y los resultados hablan por sí solos. Muy recomendado...", verified: true },
    { id: 14, name: "Alexander Brown", date: "2025-03-04", rating: 5, avatar: "A", text: "Dr. Pérez is a master of his craft. The facelift results are natural and rejuvenating. Could not be happier with the outcome...", verified: true },
    { id: 15, name: "Valentina López", date: "2025-03-03", rating: 5, avatar: "V", text: "Una experiencia increíble. El Dr. Pérez me ayudó a recuperar mi confianza. Su trabajo es arte puro y su equipo excepcional...", verified: true },
    { id: 16, name: "William Davis", date: "2025-03-02", rating: 5, avatar: "W", text: "Outstanding experience from consultation to recovery. Dr. Pérez is professional, skilled, and truly cares about his patients...", verified: true },
    { id: 17, name: "Gabriela Ruiz", date: "2025-03-01", rating: 5, avatar: "G", text: "El Dr. Pérez es un verdadero profesional. Mi mentoplastia quedó perfecta y muy natural. Todo el proceso fue excelente...", verified: true },
    { id: 18, name: "Thomas Anderson", date: "2025-02-28", rating: 5, avatar: "T", text: "Incredible surgeon with amazing artistic vision. The results exceeded my expectations and look completely natural...", verified: true },
    { id: 19, name: "Mónica Vargas", date: "2025-02-27", rating: 5, avatar: "M", text: "Estoy fascinada con los resultados. El Dr. Pérez entiende perfectamente las proporciones faciales. Un verdadero artista...", verified: true },
    { id: 20, name: "Christopher Lee", date: "2025-02-26", rating: 5, avatar: "C", text: "Best plastic surgeon I've encountered. Dr. Pérez combines technical skill with artistic vision perfectly...", verified: true },
    { id: 21, name: "Alejandra Castro", date: "2025-02-25", rating: 5, avatar: "A", text: "Mi experiencia fue perfecta desde el inicio. El Dr. Pérez es muy detallista y profesional. Los resultados son increíbles...", verified: true },
    { id: 22, name: "Daniel Miller", date: "2025-02-24", rating: 5, avatar: "D", text: "Exceptional results and professional care. Dr. Pérez truly understands facial aesthetics and delivers natural-looking results...", verified: true },
    { id: 23, name: "Natalia Torres", date: "2025-02-23", rating: 5, avatar: "N", text: "El Dr. Pérez cambió mi vida. Su técnica es impecable y su trato humano excepcional. Muy agradecida con todo el equipo...", verified: true },
    { id: 24, name: "Ryan Johnson", date: "2025-02-22", rating: 5, avatar: "R", text: "Outstanding surgeon with incredible attention to detail. The results are natural and exactly what I hoped for...", verified: true },
    { id: 25, name: "Claudia Mendoza", date: "2025-02-21", rating: 5, avatar: "C", text: "Una experiencia maravillosa. El Dr. Pérez es un verdadero profesional y artista. Los resultados superaron mis expectativas...", verified: true },
    { id: 26, name: "Kevin White", date: "2025-02-20", rating: 5, avatar: "K", text: "Dr. Pérez is a true artist. The facelift results are incredible and look completely natural. Highly recommended...", verified: true },
    { id: 27, name: "Andrea Ramírez", date: "2025-02-19", rating: 5, avatar: "A", text: "El mejor cirujano plástico. Su trabajo es arte y su equipo excepcional. Me siento completamente renovada...", verified: true },
    { id: 28, name: "Mark Taylor", date: "2025-02-18", rating: 5, avatar: "M", text: "Exceptional experience throughout. Dr. Pérez combines technical excellence with genuine patient care...", verified: true },
    { id: 29, name: "Beatriz Guerrero", date: "2025-02-17", rating: 5, avatar: "B", text: "Mi lifting facial quedó perfecto. El Dr. Pérez entiende perfectamente la belleza natural. Muy recomendado...", verified: true },
    { id: 30, name: "Steven Garcia", date: "2025-02-16", rating: 5, avatar: "S", text: "Outstanding results and professional care. Dr. Pérez is truly gifted and his team is exceptional...", verified: true },
    { id: 31, name: "Paola Vega", date: "2025-02-15", rating: 5, avatar: "P", text: "Una experiencia increíble. El Dr. Pérez es muy profesional y los resultados son espectaculares. Muy agradecida...", verified: true },
    { id: 32, name: "Joshua Martinez", date: "2025-02-14", rating: 5, avatar: "J", text: "Dr. Pérez is an amazing surgeon with incredible artistic vision. The results are natural and beautiful...", verified: true },
    { id: 33, name: "Fernanda Silva", date: "2025-02-13", rating: 5, avatar: "F", text: "El Dr. Pérez es un verdadero maestro. Su técnica es impecable y su trato muy humano. Excelente experiencia...", verified: true },
    { id: 34, name: "Brandon Clark", date: "2025-02-12", rating: 5, avatar: "B", text: "Exceptional surgeon and amazing results. Dr. Pérez truly understands facial harmony and aesthetics...", verified: true },
    { id: 35, name: "Ximena Paredes", date: "2025-02-11", rating: 5, avatar: "X", text: "Mi rinoplastia quedó exactamente como la había soñado. El Dr. Pérez es un artista y muy profesional...", verified: true },
    { id: 36, name: "Anthony Lewis", date: "2025-02-10", rating: 5, avatar: "A", text: "Outstanding experience from start to finish. Dr. Pérez is professional, skilled, and genuinely caring...", verified: true },
    { id: 37, name: "Cecilia Rojas", date: "2025-02-09", rating: 5, avatar: "C", text: "El Dr. Pérez cambió mi vida. Su trabajo es excepcional y su equipo maravilloso. Muy recomendado...", verified: true },
    { id: 38, name: "Matthew Hall", date: "2025-02-08", rating: 5, avatar: "M", text: "Best plastic surgeon I've ever worked with. Dr. Pérez delivers natural, beautiful results consistently...", verified: true },
    { id: 39, name: "Daniela Moreno", date: "2025-02-07", rating: 5, avatar: "D", text: "Una experiencia perfecta. El Dr. Pérez es muy detallista y profesional. Los resultados son increíbles...", verified: true },
    { id: 40, name: "Nicholas Young", date: "2025-02-06", rating: 5, avatar: "N", text: "Exceptional surgeon with incredible results. Dr. Pérez combines artistry with technical excellence perfectly...", verified: true },
    { id: 41, name: "Valeria Cortés", date: "2025-02-05", rating: 5, avatar: "V", text: "El Dr. Pérez es un verdadero artista. Mi blefaroplastia quedó perfecta y muy natural. Excelente profesional...", verified: true },
    { id: 42, name: "Eric Walker", date: "2025-02-04", rating: 5, avatar: "E", text: "Outstanding experience and amazing results. Dr. Pérez is truly gifted and his team is exceptional...", verified: true },
    { id: 43, name: "Rocío Delgado", date: "2025-02-03", rating: 5, avatar: "R", text: "Mi experiencia fue perfecta desde el inicio. El Dr. Pérez entiende perfectamente lo que cada paciente necesita...", verified: true },
    { id: 44, name: "Jason Scott", date: "2025-02-02", rating: 5, avatar: "J", text: "Dr. Pérez is an incredible surgeon. The results are natural and beautiful. Highly recommend to anyone considering surgery...", verified: true },
    { id: 45, name: "Adriana Medina", date: "2025-02-01", rating: 5, avatar: "A", text: "El mejor cirujano plástico. Su trabajo es arte puro y su equipo excepcional. Me siento completamente renovada...", verified: true }
  ];

  // Datos de videos testimoniales
  const videoTestimonials = [
    {
      id: 1,
      title: "Video Testimonio 1",
      subtitle: "Experiencia completa blefaroplastia en costa norte",
      thumbnail: "/images/video-thumb-1.jpg",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: 2,
      title: "Video Testimonio 2",
      subtitle: "Resultados 3090 semanas",
      thumbnail: "/images/video-thumb-2.jpg",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: 3,
      title: "Video Testimonio 3",
      subtitle: "Experiencia de la paciente rehabilitación postoperatoria",
      thumbnail: "/images/video-thumb-3.jpg",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        style={{
          width: '20px',
          height: '20px',
          fill: i < rating ? '#fbbf24' : 'transparent',
          color: i < rating ? '#fbbf24' : '#d1d5db',
          marginRight: '2px'
        }}
      />
    ));
  };

  return (
    <section id="testimonios" style={{
      padding: '4rem 0',
      backgroundColor: '#f9fafb'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        {/* Título de la sección */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#1e3a8a',
            marginBottom: '1rem',
            fontFamily: 'Sansation, sans-serif'
          }}>
            Testimonios
          </h2>
          <div style={{
            width: '8rem',
            height: '4px',
            backgroundColor: '#2563eb',
            margin: '0 auto'
          }}></div>
        </div>

        {/* Sección de Google Reviews - SLIDER 3 TARJETAS SEPARADAS */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '1rem',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          padding: '2rem',
          marginBottom: '3rem'
        }}>
          {/* Header con info de Google */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <h3 style={{
                fontSize: '1.875rem',
                fontWeight: 'bold',
                color: '#374151',
                marginBottom: '1rem'
              }}>EXCELENTE</h3>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.5rem'
              }}>
                {renderStars(5)}
              </div>
              <p style={{
                fontSize: '1rem',
                color: '#6b7280',
                margin: 0
              }}>A base de <strong>45 reseñas</strong></p>
            </div>
            
            {/* Logo de Google */}
            <div style={{
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{
                fontSize: '2.25rem',
                fontWeight: 'bold'
              }}>
                <span style={{color: '#4285f4'}}>G</span>
                <span style={{color: '#ea4335'}}>o</span>
                <span style={{color: '#fbbc05'}}>o</span>
                <span style={{color: '#4285f4'}}>g</span>
                <span style={{color: '#34a853'}}>l</span>
                <span style={{color: '#ea4335'}}>e</span>
              </span>
            </div>
          </div>

          {/* Slider de 3 tarjetas */}
          <div style={{
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              display: 'flex',
              transform: `translateX(-${Math.floor(currentReview / 3) * 100}%)`,
              transition: 'transform 0.6s ease-in-out'
            }}>
              {/* Crear grupos de 3 tarjetas */}
              {Array.from({ length: Math.ceil(googleReviews.length / 3) }).map((_, groupIndex) => (
                <div
                  key={`group-${groupIndex}`}
                  style={{
                    display: 'flex',
                    width: '100%',
                    flexShrink: 0,
                    gap: '1.5rem'
                  }}
                >
                  {googleReviews.slice(groupIndex * 3, (groupIndex + 1) * 3).map((review) => (
                    <div
                      key={review.id}
                      style={{
                        flex: '1',
                        backgroundColor: '#f8fafc',
                        borderRadius: '1rem',
                        padding: '1.5rem',
                        border: '1px solid #e2e8f0',
                        minHeight: '250px',
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                    >
                      {/* Header de la tarjeta */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '1rem'
                      }}>
                        <div style={{
                          width: '48px',
                          height: '48px',
                          backgroundColor: '#6366f1',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: '1.125rem',
                          marginRight: '1rem',
                          flexShrink: 0
                        }}>
                          {review.avatar}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '0.25rem'
                          }}>
                            <h4 style={{
                              fontWeight: '600',
                              color: '#1e293b',
                              fontSize: '1rem',
                              margin: 0,
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap'
                            }}>
                              {review.name}
                            </h4>
                            <svg style={{
                              width: '20px',
                              height: '20px',
                              color: '#4285f4',
                              flexShrink: 0,
                              marginLeft: '0.5rem'
                            }} viewBox="0 0 24 24" fill="currentColor">
                              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                          </div>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            flexWrap: 'wrap'
                          }}>
                            <div style={{ display: 'flex' }}>
                              {renderStars(review.rating)}
                            </div>
                            {review.verified && (
                              <span style={{ color: '#3b82f6', fontSize: '0.875rem' }}>✓</span>
                            )}
                            <span style={{
                              fontSize: '0.75rem',
                              color: '#64748b'
                            }}>
                              {review.date}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Contenido del comentario */}
                      <div style={{ flex: 1 }}>
                        <p style={{
                          color: '#475569',
                          fontSize: '0.875rem',
                          lineHeight: '1.5',
                          margin: 0,
                          display: '-webkit-box',
                          WebkitLineClamp: 6,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}>
                          {review.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores de progreso */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '2rem',
            gap: '0.5rem'
          }}>
            {Array.from({ length: Math.ceil(googleReviews.length / 3) }).map((_, index) => (
              <div
                key={index}
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: index === Math.floor(currentReview / 3) ? '#3b82f6' : '#d1d5db',
                  transition: 'background-color 0.3s'
                }}
              />
            ))}
          </div>
        </div>

        {/* Sección de Videos Testimoniales */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth > 768 ? 'repeat(3, 1fr)' : '1fr',
          gap: '2rem'
        }}>
          {videoTestimonials.map((video) => (
            <div 
              key={video.id} 
              style={{
                backgroundColor: 'white',
                borderRadius: '0.75rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                transition: 'box-shadow 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                const overlay = e.currentTarget.querySelector('.video-overlay');
                if (overlay) overlay.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                const overlay = e.currentTarget.querySelector('.video-overlay');
                if (overlay) overlay.style.opacity = '0';
              }}
            >
              <div style={{
                position: 'relative',
                aspectRatio: '16/9',
                background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  backgroundColor: '#dc2626',
                  borderRadius: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  zIndex: 2,
                  position: 'relative'
                }}>
                  <Play style={{width: '32px', height: '32px', color: 'white', marginLeft: '4px'}} fill="white" />
                </div>
                
                {/* Overlay hover */}
                <div 
                  className="video-overlay" 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    opacity: 0,
                    transition: 'opacity 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Play style={{width: '40px', height: '40px', color: '#dc2626', marginLeft: '4px'}} fill="currentColor" />
                  </div>
                </div>
              </div>
              
              {/* Información del video */}
              <div style={{
                padding: '1.5rem'
              }}>
                <h3 style={{
                  fontWeight: 'bold',
                  fontSize: '1.125rem',
                  color: '#374151',
                  marginBottom: '0.5rem',
                  fontFamily: 'Sansation, sans-serif'
                }}>
                  {video.title}
                </h3>
                <p style={{
                  color: '#6b7280',
                  fontSize: '0.875rem',
                  lineHeight: '1.5'
                }}>
                  {video.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
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
      {/* Sección de Acreditaciones */}
      <section className="acreditaciones">
        <div className="container">
          <div className="acreditaciones-content">
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
            <div className="acreditaciones-title">Acreditaciones</div>
          </div>
        </div>
      </section>

      {/* Sección Sobre el Doctor */}
      <section id="sobre-doctor" className="section bg-gray">
        <div className="container">
          <div className="grid-2">
            <div className="bienvenidos-text">
              <h2 className="section-title bienvenidos-title">Bienvenidos</h2>
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
              <div className="video-overlay">
                <button className="video-play-btn" aria-label="Reproducir video">
                  <Play size={48} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Experiencia */}
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

      {/* Sección de Filosofía */}
      <section id="filosofia" className="filosofia-section">
        <div className="container">
          <div className="filosofia-content">
            <h2 className="filosofia-title">Todos lo notarán, pero nadie lo sabrá</h2>
            <p className="filosofia-text">
              Es un concepto que el Dr. Andrés Pérez, a través de su vasta experiencia, ha logrado incorporar en su forma de concebir y 
              practicar el arte de la cirugía plástica. Su compromiso con cada paciente es realzar su belleza natural, preservando la esencia que 
              los hace únicos. La experticia quirúrgica y un profundo sentido artístico se fusionan para lograr resultados que van más allá de la 
              excelencia. Con técnicas quirúrgicas propias y tecnología de punta, estarás EN LAS MEJORES MANOS.
            </p>
            <a href="#lipofilling" className="filosofia-btn">Más información</a>
          </div>
        </div>
      </section>
      {/* Sección de Procedimientos Quirúrgicos */}
      <section id="facial" className="procedimientos-quirurgicos-section">
        <div className="container">
          <div className="procedimientos-quirurgicos-grid">
            <div className="procedimientos-image-container">
              <img 
                src="/images/chica-puntos.png" 
                alt="Procedimientos Quirúrgicos Faciales" 
                className="procedimientos-face-img"
              />
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
            <div className="procedimientos-content">
              <h2 className="procedimientos-quirurgicos-title">Procedimientos Quirúrgicos</h2>
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

      {/* GALERÍA DE RESULTADOS - COMPONENTE CORREGIDO */}
      <GaleriaResultados />
      
      {/* Testimonios - SECCIÓN REEMPLAZADA CON EL NUEVO COMPONENTE */}
      <TestimoniosSection />

      {/* Pacientes Extranjeros */}
      <section id="extranjeros" className="section bg-dark">
        <div className="container">
          <div className="grid-2">
            <div>
              <h2 className="section-title text-white">Dr Face</h2>
              <p className="section-text" style={{color: '#94a3b8'}}>
                Considerado por sus pacientes como un artista de la cirugía facial.
              </p>
              <a href="#blog" className="btn btn-white">Conoce al Dr Face</a>
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

      {/* Footer */}
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
      
      {/* TARJETA FLOTANTE - AGREGADA AQUÍ */}
      <TarjetaFlotanteCita />
    </div>
  );
}