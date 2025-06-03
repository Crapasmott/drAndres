// REEMPLAZA TU COMPONENTE Header EN page.tsx CON ESTE:

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

                    {/* Logo/Firma */}
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
                                    height: '12rem', /* Logo GRANDE como solicitaste */
                                    width: 'auto',
                                    maxWidth: '400px', /* Ancho máximo para logo grande */
                                    filter: 'brightness(0) invert(1)'
                                }}
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextElementSibling.style.display = 'block';
                                }}
                            />

                            {/* Fallback si no se encuentra la imagen */}
                            <div style={{
                                display: 'none',
                                color: 'white',
                                fontSize: '3rem', /* Texto fallback proporcional */
                                fontStyle: 'italic',
                                fontWeight: '300'
                            }}>
                                Andrés Pérez Nieto
                            </div>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="nav">

                        {/* INICIO */}
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

                        {/* DR.PÉREZ + */}
                        <div className="relative">
                            <button
                                onClick={() => toggleDropdown('doctor')}
                                className="nav-button"
                            >
                                DR. PÉREZ
                                <ChevronDown
                                    className={`ml-1 w-4 h-4 transition-transform duration-200 ${openDropdown === 'doctor' ? 'rotate-180' : ''
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

                        {/* PROCEDIMIENTOS + */}
                        <div className="relative">
                            <button
                                onClick={() => toggleDropdown('procedimientos')}
                                className="nav-button"
                            >
                                PROCEDIMIENTOS
                                <ChevronDown
                                    className={`ml-1 w-4 h-4 transition-transform duration-200 ${openDropdown === 'procedimientos' ? 'rotate-180' : ''
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

                        {/* GALERÍA + */}
                        <div className="relative">
                            <button
                                onClick={() => toggleDropdown('galeria')}
                                className="nav-button"
                            >
                                GALERÍA
                                <ChevronDown
                                    className={`ml-1 w-4 h-4 transition-transform duration-200 ${openDropdown === 'galeria' ? 'rotate-180' : ''
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

                        {/* PACIENTES EXTRANJEROS + */}
                        <div className="relative">
                            <button
                                onClick={() => toggleDropdown('extranjeros')}
                                className="nav-button"
                            >
                                PACIENTES EXTRANJEROS
                                <ChevronDown
                                    className={`ml-1 w-4 h-4 transition-transform duration-200 ${openDropdown === 'extranjeros' ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            <div className={`dropdown-menu ${openDropdown === 'extranjeros' ? 'show' : ''}`}>
                                <a
                                    href="#extranjeros"
                                    className="dropdown-link"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleLinkClick('#extranjeros');
                                    }}
                                >
                                    Información General
                                </a>
                                <a
                                    href="#servicios"
                                    className="dropdown-link"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleLinkClick('#servicios');
                                    }}
                                >
                                    Servicios Incluidos
                                </a>
                                <a
                                    href="#contacto"
                                    className="dropdown-link"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleLinkClick('#contacto');
                                    }}
                                >
                                    Contacto Internacional
                                </a>
                            </div>
                        </div>

                        {/* BLOG */}
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

                        {/* RECURSOS + */}
                        <div className="relative">
                            <button
                                onClick={() => toggleDropdown('recursos')}
                                className="nav-button"
                            >
                                RECURSOS
                                <ChevronDown
                                    className={`ml-1 w-4 h-4 transition-transform duration-200 ${openDropdown === 'recursos' ? 'rotate-180' : ''
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

                    {/* Mobile menu button */}
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
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

            {/* Overlay para cerrar dropdowns */}
            {openDropdown && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={closeDropdown}
                ></div>
            )}
        </header>
    );
};