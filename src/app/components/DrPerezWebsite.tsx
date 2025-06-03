'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, User, Calendar, Camera, Play, Phone, Mail, Award, Star, Users, Globe, ChevronDown, ArrowRight, CheckCircle } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide para el hero
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="text-3xl font-light italic">Andrés Pérez Nieto</div>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#inicio" className="text-blue-300 hover:text-white transition-colors">INICIO</a>
              <div className="relative group">
                <button className="flex items-center space-x-1 hover:text-blue-300 transition-colors">
                  <span>DR. PÉREZ</span>
                  <ChevronDown size={16} />
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center space-x-1 hover:text-blue-300 transition-colors">
                  <span>PROCEDIMIENTOS</span>
                  <ChevronDown size={16} />
                </button>
              </div>
              <a href="#galeria" className="hover:text-blue-300 transition-colors">GALERÍA</a>
              <a href="#extranjeros" className="hover:text-blue-300 transition-colors">PACIENTES EXTRANJEROS</a>
              <a href="#blog" className="hover:text-blue-300 transition-colors">BLOG</a>
              <div className="relative group">
                <button className="flex items-center space-x-1 hover:text-blue-300 transition-colors">
                  <span>RECURSOS</span>
                  <ChevronDown size={16} />
                </button>
              </div>
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-white space-y-6">
              <h1 className="text-5xl lg:text-6xl font-light leading-tight">
                <span className="block">Dr. Andrés Pérez Nieto</span>
              </h1>
              
              <p className="text-xl text-blue-200 font-light">
                International Plastic Surgeon
              </p>
              
              <p className="text-lg text-white/90 max-w-lg">
                La experiencia que hace la diferencia.
              </p>

              {/* Quick Access Buttons */}
              <div className="grid grid-cols-2 gap-4 max-w-md">
                <button className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center border border-white/20 hover:bg-white/20 transition-all">
                  <User size={24} className="mx-auto mb-2 text-blue-300" />
                  <div className="text-sm font-medium">Dr. Pérez</div>
                </button>
                <button className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center border border-white/20 hover:bg-white/20 transition-all">
                  <Calendar size={24} className="mx-auto mb-2 text-blue-300" />
                  <div className="text-sm font-medium">Consulta Virtual</div>
                </button>
                <button className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center border border-white/20 hover:bg-white/20 transition-all">
                  <Calendar size={24} className="mx-auto mb-2 text-blue-300" />
                  <div className="text-sm font-medium">Agenda tu cita</div>
                </button>
                <button className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center border border-white/20 hover:bg-white/20 transition-all">
                  <Camera size={24} className="mx-auto mb-2 text-blue-300" />
                  <div className="text-sm font-medium">Galería</div>
                </button>
              </div>
            </div>

            {/* Right Content - Doctor Image */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg flex items-center justify-center">
                  <div className="w-80 h-80 bg-slate-500 rounded-lg flex items-center justify-center text-white text-6xl">
                    Dr. Pérez
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acreditaciones Section */}
      <section className="py-4 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-600">Acreditaciones</div>
            <div className="flex items-center space-x-8">
              <div className="w-16 h-8 bg-slate-200 rounded flex items-center justify-center text-xs">LOGO</div>
              <div className="w-16 h-8 bg-slate-200 rounded flex items-center justify-center text-xs">LOGO</div>
              <div className="w-16 h-8 bg-slate-200 rounded flex items-center justify-center text-xs">LOGO</div>
              <div className="w-16 h-8 bg-slate-200 rounded flex items-center justify-center text-xs">LOGO</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bienvenidos Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left - Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-light text-slate-800">
                Bienvenidos
              </h2>
              
              <p className="text-slate-600 leading-relaxed">
                Gracias por visitar mi sitio web. Como especialista en cirugía plástica, estoy comprometido a ofrecer 
                los más altos estándares de atención y resultados excepcionales. Te invito a conocer más sobre mis 
                servicios y filosofía de trabajo.
              </p>

              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors">
                  Consulta Virtual
                </button>
                <button className="border border-slate-300 text-slate-700 px-6 py-3 rounded hover:bg-slate-50 transition-colors">
                  Agenda tu cita
                </button>
              </div>
            </div>

            {/* Right - Doctor Image */}
            <div className="flex justify-center">
              <div className="w-80 h-96 bg-slate-300 rounded-lg flex items-center justify-center">
                <div className="text-slate-600">Dr. Pérez Image</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Características Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="text-center p-6 bg-slate-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Dr. Pérez</h3>
              <p className="text-slate-600 text-sm">
                Especialista en técnicas avanzadas de rejuvenecimiento facial con resultados naturales.
              </p>
            </div>

            <div className="text-center p-6 bg-slate-50 rounded-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star size={28} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Innovación</h3>
              <p className="text-slate-600 text-sm">
                Tecnología de vanguardia y procedimientos menos invasivos con resultados superiores.
              </p>
            </div>

            <div className="text-center p-6 bg-slate-50 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={28} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Experiencia</h3>
              <p className="text-slate-600 text-sm">
                Más de 15 años de experiencia y formación en centros médicos de prestigio internacional.
              </p>
            </div>

            <div className="text-center p-6 bg-slate-50 rounded-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe size={28} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Trayectoria Internacional</h3>
              <p className="text-slate-600 text-sm">
                Reconocido por sociedades médicas internacionales y conferencista en congresos mundiales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* "Todos lo notarán" Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left - Content */}
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-light leading-tight">
                Todos lo notarán, pero nadie lo sabrá
              </h2>
              
              <p className="text-slate-300 leading-relaxed">
                Es un concepto que el Dr. Andrés Pérez, a través de su vasta experiencia, ha logrado incorporar en su forma de concebir y 
                practicar el arte de la cirugía plástica. Su compromiso con cada paciente es realzar su belleza natural, preservando la esencia que 
                los hace únicos. La experticia quirúrgica y un profundo sentido artístico se fusionan para lograr resultados que van más allá de la 
                excelencia. Con técnicas quirúrgicas propias y tecnología de punta, estarás EN LAS MEJORES MANOS.
              </p>

              <button className="bg-white text-slate-800 px-6 py-3 rounded hover:bg-slate-100 transition-colors">
                Más información
              </button>
            </div>

            {/* Right - Image */}
            <div className="flex justify-center">
              <div className="w-80 h-96 bg-slate-600 rounded-lg flex items-center justify-center">
                <div className="text-slate-400">Patient Image</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "Luce tan joven" Section */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-800 mb-8">
              Luce tan joven como te sientes
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Regeneración Celular */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <div className="w-full h-48 bg-slate-200 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-slate-500">Before/After Image</div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Regeneración Celular</h3>
                <h4 className="text-lg text-blue-600 mb-4">Lipofilling con Células Madre</h4>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  La inyección con células madres obtenidas de tu propia grasa es una excelente y confiable alternativa para 
                  restaurar el volumen de tu rostro y revitalizar tu piel. La utilidad de este procedimiento se ha expandido y se lleva 
                  a cabo para rejuvenecer el dorso de las manos y reducir las arrugas en ciertas áreas del rostro.
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
                  Más Información
                </button>
              </div>
            </div>

            {/* Rejuvenecimiento Facial */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <div className="w-full h-48 bg-slate-200 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-slate-500">Before/After Image</div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Rejuvenecimiento Facial</h3>
                <h4 className="text-lg text-blue-600 mb-4">Lifting Facial en Hamaca</h4>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Te brinda la posibilidad de rejuvenecer tu rostro de manera completamente natural y perdurable. 
                  En esencia, es una combinación de procedimientos quirúrgicos que logran revertir los signos del envejecimiento 
                  facial, devolviendo así la frescura y lozanía que te hacen lucir joven y bella.
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
                  Más Información
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-slate-800 text-white px-8 py-3 rounded hover:bg-slate-700 transition-colors">
              Ver galería de resultados
            </button>
          </div>
        </div>
      </section>

      {/* Procedimientos Quirúrgicos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left - Image */}
            <div className="flex justify-center">
              <div className="w-80 h-96 bg-slate-200 rounded-lg flex items-center justify-center">
                <div className="text-slate-500">Patient Image</div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-light text-slate-800">
                Procedimientos Quirúrgicos
              </h2>
              
              <p className="text-slate-600">
                Descubre el arte detrás de los resultados armónicos y naturales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Naturales */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-800 mb-4">
              Más de 5k
            </h2>
            <p className="text-xl text-slate-600">Resultados naturales</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Sandra', 'Nubia', 'Angelica', 'Angela'].map((name, index) => (
              <div key={index} className="text-center">
                <div className="w-full h-64 bg-slate-200 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-slate-500">{name}</div>
                </div>
                <h3 className="font-medium text-slate-800">{name}</h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition-colors">
              Ver galería de resultados
            </button>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-light text-slate-800 mb-16 text-center">Testimonios</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Google Reviews */}
            <div className="bg-slate-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-2xl font-bold text-slate-800">EXCELENTE</div>
                <div className="ml-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-amber-400 fill-current" />
                  ))}
                </div>
              </div>
              <div className="text-sm text-slate-600">Basado en 47 reseñas</div>
              <div className="mt-4 text-blue-600 font-semibold">Google</div>
            </div>

            {/* Video Testimonials */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-3 gap-4">
                {['Video Facial 1', 'Video Facial 2', 'Video Facial 3'].map((video, index) => (
                  <div key={index} className="relative">
                    <div className="w-full h-32 bg-slate-800 rounded-lg flex items-center justify-center text-white">
                      <Play size={24} />
                    </div>
                    <div className="text-center mt-2">
                      <div className="text-sm font-medium text-slate-800">{video}</div>
                      <div className="text-xs text-slate-500">Mira la experiencia completa de esta paciente</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dr Face Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left - Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-light">Dr Face</h2>
              <p className="text-slate-300">
                Considerado por sus pacientes como un artista de la cirugía facial.
              </p>
              <button className="bg-white text-slate-800 px-6 py-3 rounded hover:bg-slate-100 transition-colors">
                Conoce al Dr Face
              </button>
            </div>

            {/* Right - Doctor Portrait */}
            <div className="flex justify-center">
              <div className="w-80 h-96 bg-slate-600 rounded-lg flex items-center justify-center">
                <div className="text-slate-400">Dr. Pérez Portrait</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Left - Logo and Contact */}
            <div className="space-y-6">
              <div className="text-2xl font-light italic">Andrés Pérez Nieto</div>
              
              <div className="space-y-2 text-slate-300">
                <div className="text-sm">CONTÁCTANOS:</div>
                <div className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>(+57) 601 629 9551</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>(+57) 316 495 3755</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail size={16} />
                  <span>info@drandrespereznieto.com</span>
                </div>
                <div>Calle 119 # 7 – 14 Bogotá, Colombia</div>
              </div>
            </div>

            {/* Right - Navigation */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="font-semibold mb-4">Navegación</div>
                <div className="space-y-2 text-slate-300">
                  <div>Inicio</div>
                  <div>Dr. Pérez</div>
                  <div>Procedimientos</div>
                  <div>Galería</div>
                </div>
              </div>
              <div>
                <div className="font-semibold mb-4">Recursos</div>
                <div className="space-y-2 text-slate-300">
                  <div>Pacientes Extranjeros</div>
                  <div>Blog</div>
                  <div>Recursos</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400 text-sm">
            Copyright 2025 Andrés Pérez Nieto | Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}