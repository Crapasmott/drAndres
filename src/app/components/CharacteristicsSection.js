'use client';

import React from 'react';
import { User, Lightbulb, Star, Globe } from 'lucide-react';

const CharacteristicsSection = () => {
  const characteristics = [
    {
      icon: User,
      title: 'Dr. Pérez',
      description: 'Especialista en técnicas avanzadas de rejuvenecimiento facial con resultados naturales.'
    },
    {
      icon: Lightbulb,
      title: 'Innovación',
      description: 'Tecnología de vanguardia y procedimientos menos invasivos con resultados superiores.'
    },
    {
      icon: Star,
      title: 'Experiencia',
      description: 'Más de 15 años de experiencia y formación en centros médicos de prestigio internacional.'
    },
    {
      icon: Globe,
      title: 'Trayectoria Internacional',
      description: 'Reconocido por sociedades médicas internacionales y conferencista en congresos mundiales.'
    }
  ];

  return (
    <section className="py-16 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {characteristics.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                className="bg-gray-300 rounded-3xl p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                {/* Ícono */}
                <div className="bg-slate-800 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                {/* Título */}
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  {item.title}
                </h3>
                
                {/* Descripción */}
                <p className="text-slate-700 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CharacteristicsSection;