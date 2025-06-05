import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone } from 'lucide-react';

const TarjetaFlotanteDebug = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [debugInfo, setDebugInfo] = useState('Inicializando...');

    useEffect(() => {
        console.log('🔍 TarjetaFlotante: Componente montado');
        setDebugInfo('Esperando 3 segundos...');

        const timer = setTimeout(() => {
            console.log('⏰ TarjetaFlotante: Mostrando tarjeta');
            setIsVisible(true);
            setDebugInfo('Tarjeta visible');
        }, 3000);

        return () => {
            console.log('🧹 TarjetaFlotante: Limpiando timer');
            clearTimeout(timer);
        };
    }, []);

    const handleClose = () => {
        console.log('❌ TarjetaFlotante: Cerrando tarjeta');
        setIsVisible(false);
    };

    const handleAgendarCita = () => {
        console.log('📅 TarjetaFlotante: Agendar cita clicked');
        // window.open('/agenda-cita', '_blank');
        alert('Función Agendar Cita - Funciona correctamente!');
    };

    const handleLlamar = () => {
        console.log('📞 TarjetaFlotante: Llamar clicked');
        // window.open('tel:+573164953755');
        alert('Función Llamar - Funciona correctamente!');
    };

    // Debug: Mostrar siempre información
    console.log('🎯 TarjetaFlotante render:', { isVisible, debugInfo });

    return (
        <>
            {/* Debug info - temporal */}
            <div style={{
                position: 'fixed',
                top: '10px',
                left: '10px',
                background: 'black',
                color: 'white',
                padding: '10px',
                borderRadius: '5px',
                zIndex: 10000,
                fontSize: '12px'
            }}>
                Debug: {debugInfo} | Visible: {isVisible ? 'SÍ' : 'NO'}
            </div>

            {/* Tarjeta flotante */}
            {isVisible && (
                <div
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        zIndex: 9999,
                        backgroundColor: '#ffffff',
                        borderRadius: '20px',
                        padding: '20px',
                        maxWidth: '380px',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
                        border: '2px solid #3b82f6',
                        animation: 'slideIn 0.5s ease-out'
                    }}
                >
                    <style>{`
            @keyframes slideIn {
              from { 
                transform: translateX(100%); 
                opacity: 0; 
              }
              to { 
                transform: translateX(0); 
                opacity: 1; 
              }
            }
            .btn-hover:hover {
              transform: translateY(-2px);
              box-shadow: 0 8px 25px -8px rgba(59, 130, 246, 0.5);
            }
          `}</style>

                    {/* Botón cerrar */}
                    <button
                        onClick={handleClose}
                        style={{
                            position: 'absolute',
                            top: '15px',
                            right: '15px',
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            backgroundColor: '#f3f4f6',
                            border: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: '#6b7280'
                        }}
                    >
                        <X size={16} />
                    </button>

                    {/* Contenido */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        {/* Avatar */}
                        <div style={{
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
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                            position: 'relative'
                        }}>
                            AP
                            {/* Indicador online */}
                            <div style={{
                                position: 'absolute',
                                bottom: '5px',
                                right: '5px',
                                width: '16px',
                                height: '16px',
                                backgroundColor: '#22c55e',
                                borderRadius: '50%',
                                border: '2px solid white'
                            }}></div>
                        </div>

                        {/* Texto */}
                        <div style={{ flex: 1 }}>
                            <h3 style={{
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                color: '#1f2937',
                                marginBottom: '5px',
                                lineHeight: '1.3'
                            }}>
                                Vive sin límites: medicina de precisión para resultados excepcionales
                            </h3>
                            <p style={{
                                fontSize: '0.875rem',
                                color: '#6b7280',
                                marginBottom: '15px',
                                fontStyle: 'italic'
                            }}>
                                - Dr. Andrés Pérez Nieto
                            </p>

                            {/* Botones */}
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button
                                    className="btn-hover"
                                    onClick={handleAgendarCita}
                                    style={{
                                        backgroundColor: '#3b82f6',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '8px',
                                        padding: '10px 15px',
                                        fontSize: '0.875rem',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        transition: 'all 0.2s ease',
                                        flex: 1,
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Calendar size={16} />
                                    Agendar Cita
                                </button>
                                <button
                                    onClick={handleLlamar}
                                    style={{
                                        backgroundColor: 'transparent',
                                        color: '#6b7280',
                                        border: '1px solid #d1d5db',
                                        borderRadius: '8px',
                                        padding: '10px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.2s ease'
                                    }}
                                    title="Llamar ahora"
                                >
                                    <Phone size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default TarjetaFlotanteDebug;