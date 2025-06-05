import React, { useState } from 'react';
import { X, ArrowRight, Calendar } from 'lucide-react';

const ProcedimientosConModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProcedure, setSelectedProcedure] = useState(null);

  const procedimientos = [
    {
      id: 1,
      title: "Regeneración Celular",
      subtitle: "Lipofilling con Células Madre",
      description: "La inyección con células madres obtenidas de tu propia grasa es una excelente y confiable alternativa para restaurar el volumen de tu rostro y revitalizar tu piel.",
      image: "/images/1.jpg",
      beforeImage: "/images/antes/regeneracion-antes.jpg",
      afterImage: "/images/despues/regeneracion-despues.jpg",
      modalDescription: "El lipofilling con células madre rejuvenece tu rostro de manera natural, restaurando el volumen perdido y mejorando la textura de la piel con resultados duraderos y completamente naturales."
    },
    {
      id: 2,
      title: "Rejuvenecimiento Facial",
      subtitle: "Lifting Facial en Hamaca",
      description: "Te brinda la posibilidad de rejuvenecer tu rostro de manera completamente natural y perdurable. Es una combinación de procedimientos quirúrgicos que logran revertir los signos del envejecimiento facial.",
      image: "/images/lovely-woman-white-dress (1).jpeg",
      beforeImage: "/images/antes/lifting-antes.jpg",
      afterImage: "/images/despues/lifting-despues.jpg",
      modalDescription: "El lifting facial en hamaca redefine tu rostro de forma natural y duradera, eliminando la flacidez y devolviendo la firmeza y juventud a tu piel con técnicas avanzadas."
    }
  ];

  const openModal = (procedure) => {
    setSelectedProcedure(procedure);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProcedure(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section id="lipofilling" className="procedimientos-section">
        <div className="container">
          <div className="procedimientos-header">
            <h2 className="procedimientos-title">
              Luce tan joven como te sientes
            </h2>
          </div>

          <div className="procedimientos-grid">
            {procedimientos.map((procedimiento) => (
              <div key={procedimiento.id} className="procedimiento-card">
                <h3 className="procedimiento-subtitle">{procedimiento.title}</h3>
                
                <div 
                  className="procedimiento-image"
                  onClick={() => openModal(procedimiento)}
                  style={{ cursor: 'pointer' }}
                >
                  <img 
                    src={procedimiento.image}
                    alt={`${procedimiento.title} - ${procedimiento.subtitle}`}
                    className="procedimiento-img"
                  />
                  <div className="image-overlay">
                    <span className="click-text">Ver Antes/Después</span>
                  </div>
                </div>
                
                <div className="procedimiento-content">
                  <h4 className="procedimiento-name">{procedimiento.subtitle}</h4>
                  <p className="procedimiento-text">
                    {procedimiento.description}
                  </p>
                  <button 
                    onClick={() => openModal(procedimiento)}
                    className="procedimiento-btn"
                  >
                    Ver Resultados
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Antes/Después */}
      {isModalOpen && selectedProcedure && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Header del Modal */}
            <div className="modal-header">
              <h3 className="modal-title">{selectedProcedure.title}</h3>
              <button className="modal-close" onClick={closeModal}>
                <X size={24} />
              </button>
            </div>

            {/* Contenido del Modal */}
            <div className="modal-body">
              {/* Imágenes Antes/Después */}
              <div className="before-after-container">
                <div className="image-comparison">
                  <div className="before-image">
                    <img 
                      src={selectedProcedure.beforeImage} 
                      alt={`Antes - ${selectedProcedure.title}`}
                      onError={(e) => {
                        e.target.src = selectedProcedure.image;
                      }}
                    />
                    <div className="image-label before-label">ANTES</div>
                  </div>
                  
                  <div className="arrow-separator">
                    <ArrowRight size={32} />
                  </div>
                  
                  <div className="after-image">
                    <img 
                      src={selectedProcedure.afterImage} 
                      alt={`Después - ${selectedProcedure.title}`}
                      onError={(e) => {
                        e.target.src = selectedProcedure.image;
                      }}
                    />
                    <div className="image-label after-label">DESPUÉS</div>
                  </div>
                </div>
              </div>

              {/* Descripción */}
              <div className="modal-description">
                <h4>{selectedProcedure.subtitle}</h4>
                <p>{selectedProcedure.modalDescription}</p>
              </div>

              {/* Botones de Acción */}
              <div className="modal-actions">
                <a href="#galeria" className="modal-btn gallery-btn" onClick={closeModal}>
                  Ir a la Galería
                </a>
                <a href="/agenda-cita" className="modal-btn appointment-btn" onClick={closeModal}>
                  <Calendar size={20} />
                  Agenda tu Cita
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        /* Estilos de la sección */
        .procedimientos-section {
          background-color: #f8fafc;
          padding: 100px 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .procedimientos-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .procedimientos-title {
          font-size: 3rem;
          font-weight: 700;
          color: #1e293b;
          position: relative;
          display: inline-block;
        }

        .procedimientos-title::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 4px;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          border-radius: 2px;
        }

        .procedimientos-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }

        .procedimiento-card {
          background: #e5e7eb;
          border-radius: 20px;
          padding: 25px;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .procedimiento-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .procedimiento-subtitle {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 20px;
          text-align: center;
        }

        .procedimiento-image {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
          border-radius: 15px;
          margin-bottom: 25px;
        }

        .procedimiento-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .procedimiento-image:hover .image-overlay {
          opacity: 1;
        }

        .click-text {
          color: white;
          font-weight: 600;
          font-size: 1.1rem;
        }

        .procedimiento-content {
          text-align: center;
        }

        .procedimiento-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: #3b82f6;
          margin-bottom: 15px;
        }

        .procedimiento-text {
          font-size: 1rem;
          line-height: 1.6;
          color: #64748b;
          margin-bottom: 25px;
        }

        .procedimiento-btn {
          background: #3b82f6;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .procedimiento-btn:hover {
          background: #1d4ed8;
          transform: translateY(-2px);
        }

        /* Estilos del Modal */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .modal-content {
          background: white;
          border-radius: 20px;
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 30px 30px 20px;
          border-bottom: 1px solid #e5e7eb;
        }

        .modal-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0;
        }

        .modal-close {
          background: none;
          border: none;
          cursor: pointer;
          color: #64748b;
          transition: color 0.3s ease;
        }

        .modal-close:hover {
          color: #1e293b;
        }

        .modal-body {
          padding: 30px;
        }

        .before-after-container {
          margin-bottom: 30px;
        }

        .image-comparison {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 20px;
          align-items: center;
        }

        .before-image, .after-image {
          position: relative;
          text-align: center;
        }

        .before-image img, .after-image img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          border-radius: 12px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .image-label {
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 700;
          color: white;
        }

        .before-label {
          background: #ef4444;
        }

        .after-label {
          background: #10b981;
        }

        .arrow-separator {
          color: #3b82f6;
          display: flex;
          justify-content: center;
        }

        .modal-description {
          margin-bottom: 30px;
          text-align: center;
        }

        .modal-description h4 {
          font-size: 1.3rem;
          font-weight: 600;
          color: #3b82f6;
          margin-bottom: 15px;
        }

        .modal-description p {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #64748b;
        }

        .modal-actions {
          display: flex;
          gap: 15px;
          justify-content: center;
        }

        .modal-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          min-width: 160px;
          justify-content: center;
        }

        .gallery-btn {
          background: #64748b;
          color: white;
        }

        .gallery-btn:hover {
          background: #475569;
          transform: translateY(-2px);
        }

        .appointment-btn {
          background: #3b82f6;
          color: white;
        }

        .appointment-btn:hover {
          background: #1d4ed8;
          transform: translateY(-2px);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .procedimientos-grid {
            grid-template-columns: 1fr;
          }
          
          .image-comparison {
            grid-template-columns: 1fr;
            gap: 15px;
          }
          
          .arrow-separator {
            transform: rotate(90deg);
          }
          
          .modal-actions {
            flex-direction: column;
          }
          
          .modal-content {
            margin: 10px;
          }
          
          .before-image img, .after-image img {
            height: 200px;
          }
        }
      `}</style>
    </>
  );
};

export default ProcedimientosConModal;