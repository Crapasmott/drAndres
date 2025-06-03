'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, User, Video, Calendar, Camera } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(() => {
      setCurrentSlide(prev => prev === 0 ? 1 : 0);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide(prev => prev === 0 ? 1 : 0);
  const prevSlide = () => setCurrentSlide(prev => prev === 0 ? 1 : 0);

  const textStyle = {
    position: 'absolute',
    top: '15%',
    left: '25%',
    color: 'white',
    zIndex: 15
  };

  const iconsStyle = {
    position: 'absolute',
    bottom: '12%',
    left: '25%',
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  };

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
      overflow: 'hidden',
      zIndex: 5
    }}>
      
      {/* SLIDE 1 - DOCTOR FORMAL */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(ellipse 60% 50% at 30% 50%, #D2D2D2 0%, #A8A8A8 25%, #969696 50%, #747474 75%, #303030 100%)',
        backgroundImage: 'url(/slide1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: currentSlide === 0 ? 1 : 0,
        transition: 'opacity 1s ease-in-out',
        zIndex: currentSlide === 0 ? 10 : 1
      }}>
        {/* TEXTOS SLIDE 1 */}
        <div style={textStyle}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: '300',
            margin: 0,
            lineHeight: '1.2',
            marginBottom: '0.5rem'
          }}>
            Dr. Andrés Pérez Nieto
          </h1>
          
          <div style={{
            width: '200px',
            height: '2px',
            backgroundColor: 'white',
            margin: '1rem 0'
          }}></div>
          
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '300',
            margin: 0,
            marginBottom: '2rem',
            opacity: 0.9
          }}>
            International Plastic Surgeon
          </h2>
          
          <p style={{
            fontSize: '1.2rem',
            fontWeight: '300',
            margin: 0,
            opacity: 0.8
          }}>
            La experiencia que hace la diferencia.
          </p>
        </div>

        {/* ICONOS SLIDE 1 */}
        <div style={iconsStyle}>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '12px',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100px',
            height: '100px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}>
            <User size={32} color="white" style={{ marginBottom: '0.5rem' }} />
            <span style={{ fontSize: '0.85rem', textAlign: 'center', fontWeight: '300' }}>
              Dr. Pérez
            </span>
          </div>
          
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '12px',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100px',
            height: '100px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}>
            <Video size={32} color="white" style={{ marginBottom: '0.5rem' }} />
            <span style={{ fontSize: '0.85rem', textAlign: 'center', fontWeight: '300' }}>
              Consulta Virtual
            </span>
          </div>
          
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '12px',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100px',
            height: '100px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}>
            <Calendar size={32} color="white" style={{ marginBottom: '0.5rem' }} />
            <span style={{ fontSize: '0.85rem', textAlign: 'center', fontWeight: '300' }}>
              Agenda tu cita
            </span>
          </div>
          
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '12px',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100px',
            height: '100px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}>
            <Camera size={32} color="white" style={{ marginBottom: '0.5rem' }} />
            <span style={{ fontSize: '0.85rem', textAlign: 'center', fontWeight: '300' }}>
              Galería
            </span>
          </div>
        </div>
      </div>

      {/* SLIDE 2 - DOCTOR CASUAL */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #8B9DC3 0%, #6B7C9B 25%, #4A5568 50%, #2D3748 75%, #1A202C 100%)',
        backgroundImage: 'url(/slide2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: currentSlide === 1 ? 1 : 0,
        transition: 'opacity 1s ease-in-out',
        zIndex: currentSlide === 1 ? 10 : 1
      }}>
        {/* TEXTOS SLIDE 2 */}
        <div style={textStyle}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: '300',
            margin: 0,
            lineHeight: '1.2',
            marginBottom: '0.5rem'
          }}>
            Dr. Andrés Pérez Nieto
          </h1>
          
          <div style={{
            width: '200px',
            height: '2px',
            backgroundColor: 'white',
            margin: '1rem 0'
          }}></div>
          
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '300',
            margin: 0,
            marginBottom: '2rem',
            opacity: 0.9
          }}>
            International Plastic Surgeon
          </h2>
          
          <p style={{
            fontSize: '1.2rem',
            fontWeight: '300',
            margin: 0,
            opacity: 0.8
          }}>
            La experiencia que hace la diferencia.
          </p>
        </div>

        {/* ICONOS SLIDE 2 */}
        <div style={iconsStyle}>
          <div style={{
            backgroundColor: 'rgba(59, 130, 246, 0.3)',
            borderRadius: '12px',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100px',
            height: '100px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}>
            <User size={32} color="#3B82F6" style={{ marginBottom: '0.5rem' }} />
            <span style={{ fontSize: '0.85rem', textAlign: 'center', fontWeight: '300' }}>
              Dr. Pérez
            </span>
          </div>
          
          <div style={{
            backgroundColor: 'rgba(59, 130, 246, 0.3)',
            borderRadius: '12px',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100px',
            height: '100px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}>
            <Video size={32} color="#3B82F6" style={{ marginBottom: '0.5rem' }} />
            <span style={{ fontSize: '0.85rem', textAlign: 'center', fontWeight: '300' }}>
              Consulta Virtual
            </span>
          </div>
          
          <div style={{
            backgroundColor: 'rgba(59, 130, 246, 0.3)',
            borderRadius: '12px',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100px',
            height: '100px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}>
            <Calendar size={32} color="#3B82F6" style={{ marginBottom: '0.5rem' }} />
            <span style={{ fontSize: '0.85rem', textAlign: 'center', fontWeight: '300' }}>
              Agenda tu cita
            </span>
          </div>
          
          <div style={{
            backgroundColor: 'rgba(59, 130, 246, 0.3)',
            borderRadius: '12px',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100px',
            height: '100px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}>
            <Camera size={32} color="#3B82F6" style={{ marginBottom: '0.5rem' }} />
            <span style={{ fontSize: '0.85rem', textAlign: 'center', fontWeight: '300' }}>
              Galería
            </span>
          </div>
        </div>
      </div>

      {/* FLECHAS DE NAVEGACIÓN */}
      <button 
        onClick={prevSlide}
        style={{
          position: 'absolute',
          left: '30px',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          border: 'none',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          color: 'white',
          cursor: 'pointer',
          zIndex: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={nextSlide}
        style={{
          position: 'absolute',
          right: '30px',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          border: 'none',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          color: 'white',
          cursor: 'pointer',
          zIndex: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ChevronRight size={24} />
      </button>

      {/* INDICADORES */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '15px',
        zIndex: 20
      }}>
        <button
          onClick={() => setCurrentSlide(0)}
          style={{
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: currentSlide === 0 ? 'white' : 'rgba(255, 255, 255, 0.5)',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        />
        <button
          onClick={() => setCurrentSlide(1)}
          style={{
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: currentSlide === 1 ? 'white' : 'rgba(255, 255, 255, 0.5)',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        />
      </div>
    </div>
  );
};

export default HeroSlider;