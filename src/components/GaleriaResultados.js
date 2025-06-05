'use client';

import React, { useState } from 'react';
import { X, Calendar, Camera, ChevronLeft, ChevronRight } from 'lucide-react';

const GaleriaResultados = () => {
  const [selectedPaciente, setSelectedPaciente] = useState(null);

  const pacientes = [
    {
      id: 1,
      nombre: "Sandra",
      imagenPrincipal: "/images/lovely-woman-white-dress (1).jpeg",
      imagenAntes: "/images/antes-sandra.jpg",
      imagenDespues: "/images/despues-sandra.jpg",
      procedimiento: "Rinoplastia + Lipofilling Facial",
      descripcion: "Procedimiento de rinoplastia ultrasónica combinado con lipofilling facial para armonizar las proporciones del rostro y restaurar volumen natural. Sandra logró un resultado completamente natural que realza su belleza única sin signos evidentes de cirugía.",
      edad: "28 años",
      tiempoRecuperacion: "2 semanas",
      satisfaccion: "100%",
      concerns: ['FLACIDEZ FACIAL', 'PÉRDIDA DE VOLUMEN', 'LÍNEAS DE EXPRESIÓN', 'ASIMETRÍA FACIAL']
    },
    {
      id: 2,
      nombre: "Nubia",
      imagenPrincipal: "/images/fonto-negro.png",
      imagenAntes: "/images/antes-nubia.jpg",
      imagenDespues: "/images/despues-nubia.jpg",
      procedimiento: "Lifting Facial + Blefaroplastia",
      descripcion: "Lifting facial completo con blefaroplastia superior e inferior. Técnicas avanzadas que logran un rejuvenecimiento natural sin signos evidentes de cirugía.",
      edad: "45 años",
      tiempoRecuperacion: "3 semanas",
      satisfaccion: "100%",
      concerns: ['FLACIDEZ FACIAL', 'PÁRPADOS CAÍDOS', 'LÍNEAS DE EXPRESIÓN', 'PÉRDIDA DE VOLUMEN']
    },
    {
      id: 3,
      nombre: "Angelica",
      imagenPrincipal: "/images/slider1.jpeg",
      imagenAntes: "/images/antes-angelica.jpg",
      imagenDespues: "/images/despues-angelica.jpg",
      procedimiento: "Rinoplastia Estructural",
      descripcion: "Rinoplastia estructural que corrigió tanto aspectos funcionales como estéticos. Se logró una nariz armónica con el rostro.",
      edad: "32 años",
      tiempoRecuperacion: "10 días",
      satisfaccion: "100%",
      concerns: ['DEFORMIDAD NASAL', 'DIFICULTAD RESPIRATORIA', 'ASIMETRÍA', 'PROPORCIÓN FACIAL']
    },
    {
      id: 4,
      nombre: "Angela",
      imagenPrincipal: "/images/slider2.jpg",
      imagenAntes: "/images/antes-angela.jpg",
      imagenDespues: "/images/despues-angela.jpg",
      procedimiento: "Rejuvenecimiento Facial Integral",
      descripcion: "Combinación de lifting facial, lipofilling y tratamientos complementarios. Angela logró un rejuvenecimiento integral.",
      edad: "50 años",
      tiempoRecuperacion: "4 semanas",
      satisfaccion: "100%",
      concerns: ['ENVEJECIMIENTO FACIAL', 'FLACIDEZ', 'PÉRDIDA VOLUMEN', 'LÍNEAS PROFUNDAS']
    }
  ];

  const abrirModal = (paciente) => {
    setSelectedPaciente(paciente);
    document.body.style.overflow = 'hidden';
  };

  const cerrarModal = () => {
    setSelectedPaciente(null);
    document.body.style.overflow = 'auto';
  };

  const navegarPaciente = (direccion) => {
    const currentIndex = pacientes.findIndex(p => p.id === selectedPaciente.id);
    let nextIndex;
    
    if (direccion === 'next') {
      nextIndex = (currentIndex + 1) % pacientes.length;
    } else {
      nextIndex = (currentIndex - 1 + pacientes.length) % pacientes.length;
    }
    
    setSelectedPaciente(pacientes[nextIndex]);
  };

  return (
    <>
      <section id="galeria" style={{
        padding: '100px 0',
        backgroundColor: '#f8fafc',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          
          <div style={{
            textAlign: 'center',
            marginBottom: '80px'
          }}>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 'bold',
              color: '#1e40af',
              marginBottom: '8px',
              fontFamily: 'inherit',
              lineHeight: 1.1
            }}>
              Más de 5k
            </h2>
            <h3 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 'bold',
              color: '#1e40af',
              marginBottom: '30px',
              fontFamily: 'inherit',
              lineHeight: 1.1
            }}>
              Resultados naturales
            </h3>
            <div style={{
              width: '100px',
              height: '4px',
              backgroundColor: '#3b82f6',
              margin: '0 auto 30px auto',
              borderRadius: '2px'
            }}></div>
            <p style={{
              fontSize: '1.2rem',
              color: '#64748b',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Cada procedimiento refleja nuestro compromiso con la excelencia y la belleza natural
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px',
            marginBottom: '60px'
          }}>
            {pacientes.map((paciente) => (
              <div
                key={paciente.id}
                onClick={() => abrirModal(paciente)}
                style={{
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  textAlign: 'center',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.querySelector('.paciente-image').style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.querySelector('.paciente-image').style.transform = 'scale(1)';
                }}
              >
                <div style={{
                  width: '100%',
                  height: '350px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  marginBottom: '25px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                  position: 'relative',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                }}>
                  <img
                    className="paciente-image"
                    src={paciente.imagenPrincipal}
                    alt={paciente.nombre}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div style={{
                    display: 'none',
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#e5e7eb',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#9ca3af',
                    flexDirection: 'column',
                    gap: '10px'
                  }}>
                    <Camera size={50} />
                    <span style={{fontSize: '0.9rem'}}>Imagen no disponible</span>
                  </div>
                </div>
                
                <h4 style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: '#1e40af',
                  margin: '0 0 8px 0',
                  fontFamily: 'inherit'
                }}>
                  {paciente.nombre}
                </h4>
                
                <p style={{
                  fontSize: '1rem',
                  color: '#64748b',
                  margin: 0,
                  fontWeight: '500'
                }}>
                  {paciente.procedimiento}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            textAlign: 'center'
          }}>
            <button
              onClick={() => {
                document.getElementById('galeria').scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                padding: '18px 50px',
                backgroundColor: 'transparent',
                border: '3px solid #1e40af',
                borderRadius: '50px',
                color: '#1e40af',
                fontSize: '18px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'inherit',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#1e40af';
                e.target.style.color = '#ffffff';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 10px 25px rgba(30, 64, 175, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#1e40af';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Ver galería de resultados
            </button>
          </div>
        </div>
      </section>

      {selectedPaciente && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)',
          backdropFilter: 'blur(8px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }} onClick={cerrarModal}>
          
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            overflow: 'hidden',
            maxWidth: '900px',
            width: '100%',
            maxHeight: '85vh',
            overflowY: 'auto',
            position: 'relative',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
            border: '1px solid #e5e7eb'
          }} onClick={(e) => e.stopPropagation()}>
            
            <button
              onClick={cerrarModal}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                backgroundColor: '#ffffff',
                color: '#374151',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}
            >
              <X size={18} />
            </button>

            <button
              onClick={() => navegarPaciente('prev')}
              style={{
                position: 'absolute',
                left: '15px',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: '#6b7280',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                cursor: 'pointer',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                opacity: 0.7
              }}
              onMouseEnter={(e) => {
                e.target.style.opacity = '1';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 1)';
                e.target.style.transform = 'translateY(-50%) scale(1.1)';
                e.target.style.color = '#374151';
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = '0.7';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                e.target.style.transform = 'translateY(-50%) scale(1)';
                e.target.style.color = '#6b7280';
              }}
            >
              <ChevronLeft size={18} />
            </button>
            
            <button
              onClick={() => navegarPaciente('next')}
              style={{
                position: 'absolute',
                right: '15px',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: '#6b7280',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                cursor: 'pointer',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                opacity: 0.7
              }}
              onMouseEnter={(e) => {
                e.target.style.opacity = '1';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 1)';
                e.target.style.transform = 'translateY(-50%) scale(1.1)';
                e.target.style.color = '#374151';
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = '0.7';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                e.target.style.transform = 'translateY(-50%) scale(1)';
                e.target.style.color = '#6b7280';
              }}
            >
              <ChevronRight size={18} />
            </button>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              backgroundColor: '#f8fafc',
              position: 'relative'
            }}>
              <div style={{
                position: 'relative',
                height: '320px',
                backgroundColor: '#ffffff',
                border: '2px solid #e5e7eb'
              }}>
                <img
                  src={selectedPaciente.imagenAntes}
                  alt={`${selectedPaciente.nombre} - Antes`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div style={{
                  display: 'none',
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#f3f4f6',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#9ca3af',
                  flexDirection: 'column',
                  gap: '10px'
                }}>
                  <Camera size={30} />
                  <span style={{fontSize: '0.8rem'}}>Imagen no disponible</span>
                </div>
              </div>

              <div style={{
                position: 'relative',
                height: '320px',
                backgroundColor: '#ffffff',
                border: '2px solid #e5e7eb',
                borderLeft: '1px solid #e5e7eb'
              }}>
                <img
                  src={selectedPaciente.imagenDespues}
                  alt={`${selectedPaciente.nombre} - Después`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div style={{
                  display: 'none',
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#f3f4f6',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#9ca3af',
                  flexDirection: 'column',
                  gap: '10px'
                }}>
                  <Camera size={30} />
                  <span style={{fontSize: '0.8rem'}}>Imagen no disponible</span>
                </div>
              </div>

              <div style={{
                position: 'absolute',
                top: '15px',
                left: '15px',
                backgroundColor: 'rgba(220, 38, 38, 0.9)',
                color: '#ffffff',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                boxShadow: '0 2px 8px rgba(220, 38, 38, 0.3)',
                backdropFilter: 'blur(4px)'
              }}>
                ANTES
              </div>
              
              <div style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                backgroundColor: 'rgba(22, 163, 74, 0.9)',
                color: '#ffffff',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                boxShadow: '0 2px 8px rgba(22, 163, 74, 0.3)',
                backdropFilter: 'blur(4px)'
              }}>
                DESPUÉS
              </div>
            </div>

            <div style={{
              padding: '25px',
              backgroundColor: '#ffffff'
            }}>
              {/* Encabezado compacto */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '20px',
                paddingBottom: '15px',
                borderBottom: '1px solid #e5e7eb'
              }}>
                <div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#1f2937',
                    margin: '0 0 5px 0'
                  }}>
                    {selectedPaciente.nombre}
                  </h3>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#64748b',
                    margin: 0
                  }}>
                    {selectedPaciente.procedimiento}
                  </p>
                </div>
                <span style={{
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  padding: '6px 12px',
                  borderRadius: '15px',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}>
                  AGE: {selectedPaciente.edad.replace(' años', '')}
                </span>
              </div>

              {/* Descripción compacta */}
              <div style={{
                backgroundColor: '#f8fafc',
                padding: '15px',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                marginBottom: '20px'
              }}>
                <p style={{
                  color: '#475569',
                  fontSize: '13px',
                  lineHeight: 1.5,
                  margin: 0
                }}>
                  {selectedPaciente.descripcion.length > 200 
                    ? selectedPaciente.descripcion.substring(0, 200) + '...'
                    : selectedPaciente.descripcion
                  }
                </p>
              </div>

              {/* Botones compactos */}
              <div style={{
                display: 'flex',
                gap: '10px',
                justifyContent: 'center'
              }}>
                <a
                  href="#galeria"
                  onClick={(e) => {
                    e.preventDefault();
                    cerrarModal();
                    setTimeout(() => {
                      document.getElementById('galeria').scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 20px',
                    backgroundColor: '#3b82f6',
                    color: '#ffffff',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: '600',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Camera size={14} />
                  Ver Más Casos
                </a>

                <a
                  href="/agenda-cita"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 20px',
                    backgroundColor: '#ffffff',
                    color: '#3b82f6',
                    textDecoration: 'none',
                    border: '2px solid #3b82f6',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: '600',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Calendar size={14} />
                  Agendar Cita
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GaleriaResultados;