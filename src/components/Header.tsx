import React from 'react';
import { Briefcase } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Briefcase className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900">Eventos B2B</h1>
            <p className="text-xs text-slate-500 font-medium tracking-wide">CAMPINAS & RMC</p>
          </div>
        </div>
        <div className="hidden md:block">
          <span className="text-sm text-slate-500">Inteligência Comercial para Corretores</span>
        </div>
      </div>
    </header>
  );
};
