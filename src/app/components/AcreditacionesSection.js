import React from 'react';
import styles from './Acreditaciones.module.css';

const AcreditacionesSection = () => {
  const acreditaciones = [
    {
      id: 1,
      name: "ISAPS",
      image: "/images/acreditaciones/isaps-logo.png",
      url: "https://www.isaps.org/",
      alt: "International Society of Aesthetic Plastic Surgery"
    },
    {
      id: 2,
      name: "ASPS",
      image: "/images/acreditaciones/asps-logo.png", 
      url: "https://www.plasticsurgery.org/",
      alt: "American Society of Plastic Surgeons"
    },
    {
      id: 3,
      name: "SCCP",
      image: "/images/acreditaciones/sccp-logo.png",
      url: "https://www.cirugiaplastica.org.co/",
      alt: "Sociedad Colombiana de Cirugía Plástica"
    },
    {
      id: 4,
      name: "FILACP",
      image: "/images/acreditaciones/filacp-logo.png",
      url: "https://www.filacp.org/",
      alt: "Federación Ibero Latinoamericana de Cirugía Plástica"
    }
  ];

  return (
    <section className={styles.acreditaciones}>
      <div className="container">
        <div className={styles.acreditacionesContent}>
          <div className={styles.acreditacionesTitle}>Acreditaciones</div>
          
          <div className={styles.logos}>
            {/* Logo 1 */}
            <a
              href={acreditaciones[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.logoLink}
              title={acreditaciones[0].alt}
            >
              <img
                src={acreditaciones[0].image}
                alt={acreditaciones[0].alt}
                className={styles.logoImage}
              />
            </a>
            
            {/* Línea 1 */}
            <div className={styles.dividerLine}></div>
            
            {/* Logo 2 */}
            <a
              href={acreditaciones[1].url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.logoLink}
              title={acreditaciones[1].alt}
            >
              <img
                src={acreditaciones[1].image}
                alt={acreditaciones[1].alt}
                className={styles.logoImage}
              />
            </a>
            
            {/* Línea 2 */}
            <div className={styles.dividerLine}></div>
            
            {/* Logo 3 */}
            <a
              href={acreditaciones[2].url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.logoLink}
              title={acreditaciones[2].alt}
            >
              <img
                src={acreditaciones[2].image}
                alt={acreditaciones[2].alt}
                className={styles.logoImage}
              />
            </a>
            
            {/* Línea 3 */}
            <div className={styles.dividerLine}></div>
            
            {/* Logo 4 */}
            <a
              href={acreditaciones[3].url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.logoLink}
              title={acreditaciones[3].alt}
            >
              <img
                src={acreditaciones[3].image}
                alt={acreditaciones[3].alt}
                className={styles.logoImage}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcreditacionesSection;