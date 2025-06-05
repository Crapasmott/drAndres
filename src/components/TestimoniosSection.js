import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Play } from 'lucide-react';

const TestimoniosSection = () => {
  const [currentReview, setCurrentReview] = useState(0);

  // Datos de reseñas de Google
  const googleReviews = [
    {
      id: 1,
      name: "Martha Lozano",
      date: "2025-03-17",
      rating: 5,
      avatar: "M",
      text: "La experiencia con el Dr. Pérez y su equipo es indescriptible porque no tengo las palabras para expresar la gran satisfacción y agradecimiento co...",
      verified: true
    },
    {
      id: 2,
      name: "Svetlana Lapan",
      date: "2025-03-16",
      rating: 5,
      avatar: "S",
      text: "I had the blepharoplasty and face lift less than 4 weeks ago. I am still in recovery, but the results are amazing. Doctor Andres Perez is a great and...",
      verified: true
    },
    {
      id: 3,
      name: "Ana García",
      date: "2025-03-15",
      rating: 5,
      avatar: "A",
      text: "Excelente atención desde el primer momento. El Dr. Pérez es muy profesional y los resultados superaron mis expectativas. Totalmente recomendado.",
      verified: true
    }
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

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % googleReviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + googleReviews.length) % googleReviews.length);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        style={{
          width: '20px',
          height: '20px',
          fill: i < rating ? '#fbbf24' : 'transparent',
          color: i < rating ? '#fbbf24' : '#d1d5db'
        }}
      />
    ));
  };

  const styles = {
    testimoniosSection: {
      padding: '4rem 0',
      backgroundColor: '#f9fafb'
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    titleContainer: {
      textAlign: 'center',
      marginBottom: '3rem'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#1e3a8a',
      marginBottom: '1rem',
      fontFamily: 'Sansation, sans-serif'
    },
    titleLine: {
      width: '8rem',
      height: '4px',
      backgroundColor: '#2563eb',
      margin: '0 auto'
    },
    reviewsCard: {
      backgroundColor: 'white',
      borderRadius: '1rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      padding: '2rem',
      marginBottom: '3rem'
    },
    reviewsGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '2rem',
      alignItems: 'center'
    },
    ratingPanel: {
      textAlign: 'left'
    },
    excelente: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      color: '#374151',
      marginBottom: '1rem'
    },
    starsContainer: {
      display: 'flex',
      marginBottom: '1rem'
    },
    reviewsCount: {
      fontSize: '1.125rem',
      color: '#6b7280',
      marginBottom: '1.5rem'
    },
    googleLogo: {
      display: 'flex',
      alignItems: 'center'
    },
    googleText: {
      fontSize: '2.25rem',
      fontWeight: 'bold'
    },
    reviewCarousel: {
      position: 'relative'
    },
    reviewCard: {
      backgroundColor: '#f9fafb',
      borderRadius: '0.75rem',
      padding: '1.5rem'
    },
    reviewHeader: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '1rem'
    },
    avatar: {
      width: '48px',
      height: '48px',
      backgroundColor: '#6b7280',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '1.125rem',
      marginRight: '1rem'
    },
    reviewContent: {
      flex: 1
    },
    reviewNameRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '0.5rem'
    },
    reviewName: {
      fontWeight: '600',
      color: '#374151'
    },
    googleIcon: {
      width: '24px',
      height: '24px',
      color: '#3b82f6'
    },
    reviewMeta: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '0.75rem'
    },
    reviewDate: {
      marginLeft: '0.5rem',
      fontSize: '0.875rem',
      color: '#6b7280'
    },
    reviewText: {
      color: '#374151',
      fontSize: '0.875rem',
      lineHeight: '1.5'
    },
    readMore: {
      color: '#2563eb',
      fontSize: '0.875rem',
      marginTop: '0.5rem',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      textDecoration: 'underline'
    },
    navigationControls: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '1rem'
    },
    navButton: {
      width: '40px',
      height: '40px',
      backgroundColor: 'white',
      border: '1px solid #d1d5db',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      transition: 'background-color 0.2s'
    },
    verification: {
      marginTop: '2rem',
      textAlign: 'right'
    },
    verificationBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0.5rem 0.75rem',
      backgroundColor: '#dcfce7',
      color: '#166534',
      fontSize: '0.875rem',
      borderRadius: '9999px'
    },
    verificationDot: {
      width: '8px',
      height: '8px',
      backgroundColor: '#22c55e',
      borderRadius: '50%',
      marginRight: '0.5rem'
    },
    videosGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    },
    videoCard: {
      backgroundColor: 'white',
      borderRadius: '0.75rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      transition: 'box-shadow 0.3s',
      cursor: 'pointer'
    },
    videoThumbnail: {
      position: 'relative',
      aspectRatio: '16/9',
      background: 'linear-gradient(135deg, #ef4444, #dc2626)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    },
    playButton: {
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
    },
    videoOverlay: {
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
    },
    videoInfo: {
      padding: '1.5rem'
    },
    videoTitle: {
      fontWeight: 'bold',
      fontSize: '1.125rem',
      color: '#374151',
      marginBottom: '0.5rem',
      fontFamily: 'Sansation, sans-serif'
    },
    videoSubtitle: {
      color: '#6b7280',
      fontSize: '0.875rem',
      lineHeight: '1.5'
    },
    '@media (max-width: 1024px)': {
      reviewsGrid: {
        gridTemplateColumns: '1fr',
        gap: '2rem'
      },
      ratingPanel: {
        textAlign: 'center'
      }
    },
    '@media (max-width: 768px)': {
      videosGrid: {
        gridTemplateColumns: '1fr'
      },
      title: {
        fontSize: '2rem'
      }
    }
  };

  return (
    <section style={styles.testimoniosSection}>
      <div style={styles.container}>
        {/* Título de la sección */}
        <div style={styles.titleContainer}>
          <h2 style={styles.title}>Testimonios</h2>
          <div style={styles.titleLine}></div>
        </div>

        {/* Sección de Google Reviews */}
        <div style={styles.reviewsCard}>
          <div style={styles.reviewsGrid}>
            {/* Panel de calificación */}
            <div style={styles.ratingPanel}>
              <h3 style={styles.excelente}>EXCELENTE</h3>
              <div style={styles.starsContainer}>
                {renderStars(5)}
              </div>
              <p style={styles.reviewsCount}>A base de <strong>42 reseñas</strong></p>
              
              {/* Logo de Google */}
              <div style={styles.googleLogo}>
                <span style={styles.googleText}>
                  <span style={{color: '#4285f4'}}>G</span>
                  <span style={{color: '#ea4335'}}>o</span>
                  <span style={{color: '#fbbc05'}}>o</span>
                  <span style={{color: '#4285f4'}}>g</span>
                  <span style={{color: '#34a853'}}>l</span>
                  <span style={{color: '#ea4335'}}>e</span>
                </span>
              </div>
            </div>

            {/* Carrusel de reseñas */}
            <div style={styles.reviewCarousel}>
              <div style={styles.reviewCard}>
                <div style={styles.reviewHeader}>
                  <div style={styles.avatar}>
                    {googleReviews[currentReview].avatar}
                  </div>
                  <div style={styles.reviewContent}>
                    <div style={styles.reviewNameRow}>
                      <h4 style={styles.reviewName}>{googleReviews[currentReview].name}</h4>
                      <svg style={styles.googleIcon} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </div>
                    <div style={styles.reviewMeta}>
                      {renderStars(googleReviews[currentReview].rating)}
                      {googleReviews[currentReview].verified && (
                        <span style={{marginLeft: '0.5rem', color: '#3b82f6'}}>✓</span>
                      )}
                      <span style={styles.reviewDate}>{googleReviews[currentReview].date}</span>
                    </div>
                    <p style={styles.reviewText}>{googleReviews[currentReview].text}</p>
                    <button style={styles.readMore}>Leer más</button>
                  </div>
                </div>
              </div>

              {/* Controles de navegación */}
              <div style={styles.navigationControls}>
                <button
                  onClick={prevReview}
                  style={styles.navButton}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#f9fafb'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                >
                  <ChevronLeft style={{width: '20px', height: '20px', color: '#6b7280'}} />
                </button>
                <button
                  onClick={nextReview}
                  style={styles.navButton}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#f9fafb'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                >
                  <ChevronRight style={{width: '20px', height: '20px', color: '#6b7280'}} />
                </button>
              </div>
            </div>
          </div>

          {/* Verificación */}
          <div style={styles.verification}>
            <span style={styles.verificationBadge}>
              <span style={styles.verificationDot}></span>
              Verificado por: Trustindex ⓘ
            </span>
          </div>
        </div>

        {/* Sección de Videos Testimoniales */}
        <div style={styles.videosGrid}>
          {videoTestimonials.map((video) => (
            <div 
              key={video.id} 
              style={styles.videoCard}
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
              <div style={styles.videoThumbnail}>
                <div style={styles.playButton}>
                  <Play style={{width: '32px', height: '32px', color: 'white', marginLeft: '4px'}} fill="white" />
                </div>
                
                {/* Overlay hover */}
                <div className="video-overlay" style={styles.videoOverlay}>
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
              <div style={styles.videoInfo}>
                <h3 style={styles.videoTitle}>{video.title}</h3>
                <p style={styles.videoSubtitle}>{video.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimoniosSection;