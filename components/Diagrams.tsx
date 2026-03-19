/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, Zap, TrendingUp, Settings, Briefcase, GraduationCap } from 'lucide-react';

// --- STATS DIAGRAM ---
export const ResultsStatsDiagram: React.FC = () => {
  const stats = [
    { label: "Redução de tempo em tarefas repetitivas", value: 75, unit: "%", icon: Clock },
    { label: "Redução da equipe de atendimento", value: 50, unit: "%", icon: Users },
    { label: "Aumento na produtividade", value: 50, unit: "%", icon: TrendingUp },
  ];

  return (
    <div className="flex flex-col gap-8 w-full">
        {stats.map((stat, index) => (
            <div key={index} className="relative">
                <div className="flex justify-between items-end mb-2">
                    <span className="text-sm font-medium text-stone-300 uppercase tracking-wider flex items-center gap-2">
                        <stat.icon size={16} className="text-ellos-gold"/>
                        {stat.label}
                    </span>
                    <span className="text-2xl font-serif font-bold text-ellos-gold">{stat.value}{stat.unit}</span>
                </div>
                <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
                        className="h-full bg-ellos-gold rounded-full relative"
                    >
                         <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </motion.div>
                </div>
            </div>
        ))}
        
        <div className="mt-4 p-4 border border-ellos-gold/30 rounded-lg bg-ellos-gold/5">
            <p className="text-sm italic text-stone-300 text-center">
                "Organize os fluxos da sua empresa e tenha todo o seu planejamento estrutural e financeiro sob controle."
            </p>
        </div>
    </div>
  );
};

// --- TIMELINE DIAGRAM ---
export const ImplementationTimeline: React.FC = () => {
    const steps = [
        { days: "5 Dias", title: "Diagnóstico Técnico", desc: "Análise profunda da estrutura atual." },
        { days: "10 Dias", title: "Customização", desc: "Personalização de acordo com seu modelo de negócio." },
        { days: "15 Dias", title: "Integração", desc: "Conexão de sistemas e automações." },
        { days: "15 Dias", title: "Treinamento", desc: "Capacitação da equipe de gestão e vendas." },
    ];

    return (
        <div className="relative py-8">
            {/* Mobile Vertical / Desktop Horizontal */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative gap-8 md:gap-0">
                
                {/* Connecting Line */}
                <div className="absolute left-4 top-0 bottom-0 w-1 bg-stone-200 md:w-full md:h-1 md:left-0 md:top-6 md:bottom-auto"></div>

                {steps.map((step, i) => (
                    <motion.div 
                        key={i}
                        className="relative z-10 pl-12 md:pl-0 md:w-1/4 flex flex-col md:items-center text-left md:text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                    >
                        {/* Circle Point */}
                        <div className="absolute left-1.5 top-0 md:left-1/2 md:-ml-3 md:top-3 w-6 h-6 rounded-full bg-ellos-green border-4 border-ellos-gold shadow-sm"></div>
                        
                        <div className="md:mt-12 bg-white p-6 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow md:w-11/12">
                            <span className="inline-block px-3 py-1 bg-ellos-green text-ellos-gold text-xs font-bold rounded mb-3">
                                {step.days}
                            </span>
                            <h4 className="text-lg font-bold text-ellos-green mb-2 leading-tight">{step.title}</h4>
                            <p className="text-sm text-stone-500">{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

// --- SERVICES CARDS ---
export const ServiceCards: React.FC = () => {
    const cards = [
        {
            title: "Gestão",
            icon: Settings,
            features: ["Organize a gestão e fluxos", "Controle estrutural e financeiro", "Planejamento estratégico"]
        },
        {
            title: "Automação",
            icon: Zap,
            features: ["Atendimento rápido e preciso", "Diminuição de custos operacionais", "Automação inteligente"]
        },
        {
            title: "Treinamento",
            icon: GraduationCap,
            features: ["Uso de Inteligência Artificial", "Vendas em alto nível", "Equipe preparada para o futuro"]
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, idx) => (
                <div key={idx} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-ellos-gold relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                        <card.icon size={100} className="text-ellos-green"/>
                    </div>
                    
                    <div className="w-14 h-14 bg-ellos-green rounded-xl flex items-center justify-center text-ellos-gold mb-6 shadow-md group-hover:scale-110 transition-transform">
                        <card.icon size={28} />
                    </div>
                    
                    <h3 className="text-2xl font-serif font-bold text-ellos-green mb-6">{card.title}</h3>
                    
                    <ul className="space-y-3">
                        {card.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-3 text-stone-600 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-ellos-gold mt-1.5 shrink-0"></span>
                                {feat}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}
