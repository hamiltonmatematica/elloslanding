import React from 'react';
import { Check, Star, Zap, Users, TrendingUp } from 'lucide-react';

const plans = [
  {
    title: "Tecnologia e Automação",
    name: "PLANO 1",
    icon: <Zap className="w-6 h-6 text-ellos-gold" />,
    description: "Um super pacote de serviços e recursos tecnológicos",
    features: [
      { name: "Atendimento ao cliente", desc: "Use tecnologia e IA para otimizar o seu atendimento" },
      { name: "Agenda", desc: "Otimize a marcação de serviços, reserva de produtos e vendas" },
      { name: "Estoque e fluxo de caixa", desc: "Organize o seu financeiro com tecnologias super fáceis de operar" },
      { name: "Banco de leads", desc: "Organizado para o seu setor empresarial em todo estado ou país" },
      { name: "Treinamento comercial", desc: "Treine quem opera diretamente em suas vendas" },
      { name: "Página de vendas", desc: "Organize uma página dinâmica e objetiva dos seus produtos/serviços" },
      { name: "Tráfego pago", desc: "Assumimos a sua operação de tráfego pago por 60 dias" },
      { name: "Plano sob medida", desc: "Após entrevista, criamos um Plano específico para sua atuação" }
    ],
    timeline: "Implementação em 30 dias",
    support: "Acompanhamento e assessoria: + 30 dias",
    price: "R$ 2.200,00",
    installments: "Ou 3x R$ 800,00",
    fee: "Taxa de suporte: R$ 197,00 ao mês (manutenção)",
    popular: false,
    color: "bg-white",
    textColor: "text-ellos-green",
  },
  {
    title: "Gestão, Comercial e Tecnologia",
    name: "PLANO 2",
    icon: <TrendingUp className="w-6 h-6 text-ellos-gold" />,
    description: "Além de todos os sistemas operacionais e tecnologia do Plano 1, tenha também:",
    features: [
      { name: "Treinamento de I.A", desc: "Atendimento, secretária, financeiro e comercial" },
      { name: "Treinamento de comunicação", desc: "Para vendas, imagem e estratégia empresarial" },
      { name: "Organização da gestão", desc: "Suporte na estrutura comercial e equipe de vendas" }
    ],
    timeline: "Implementação em 30 dias",
    support: "Acompanhamento e assessoria: + 60 dias",
    price: "R$ 3.200,00",
    installments: "Ou 3x R$ 1.200,00",
    fee: "Taxa de suporte: R$ 197,00 ao mês (manutenção)",
    popular: false,
    color: "bg-white",
    textColor: "text-ellos-green",
  },
  {
    title: "Treinamento Completo com Tecnologia",
    name: "PLANO 3",
    icon: <Users className="w-6 h-6 text-ellos-gold" />,
    description: "Sistema completo para treinamento da sua equipe, com Plataforma Personalizada",
    features: [
      { name: "Nunca mais perca tempo", desc: "Treinando funcionários novos! Defina processos." },
      { name: "Novos contratados", desc: "Sistema de integração eficiente" },
      { name: "Equipe de funcionários", desc: "Treinamento para equipe já consolidada" },
      { name: "Setor comercial", desc: "Estratégias avançadas de vendas" },
      { name: "Todos os setores", desc: "Atendimento padronizado e com qualidade" },
      { name: "Gestores e Diretores", desc: "Desenvolvimento de lideranças" }
    ],
    timeline: "Implementação em 60 dias",
    support: "",
    price: "R$ 3.200,00",
    installments: "Ou 3x R$ 1.200,00",
    fee: "Taxa de suporte: R$ 197,00 ao mês (manutenção)",
    popular: false,
    color: "bg-white",
    textColor: "text-ellos-green",
  },
  {
    title: "Pequenos Negócios, Grandes Objetivos",
    name: "PLANO 4",
    icon: <Star className="w-6 h-6 text-ellos-gold" />,
    description: "Recursos e tecnologias para pequeno negócio: venda como se tivesse uma equipe!",
    features: [
      { name: "Página de vendas", desc: "Estrutura pronta para conversão" },
      { name: "Portfólio de serviços", desc: "Apresentação profissional" },
      { name: "Automação em posts", desc: "Direct do Instagram e atendimento por WhatsApp" }
    ],
    timeline: "Implementação em 30 dias",
    support: "",
    price: "R$ 800,00",
    installments: "Ou 2x R$ 500,00",
    fee: "Taxa de suporte: R$ 50,00 ao mês (manutenção)",
    popular: false,
    color: "bg-white",
    textColor: "text-ellos-green",
  }
];

export const PlanCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
      {plans.map((plan, index) => (
        <div 
          key={index} 
          className={`relative rounded-[2rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col ${plan.color} ${plan.textColor} border ${plan.popular ? 'border-ellos-gold scale-105 z-10' : 'border-stone-200/50 hover:border-ellos-gold/40 transition-colors duration-300'}`}
        >
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-ellos-gold text-ellos-green text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
              Mais Recomendado
            </div>
          )}
          
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-2 ${plan.popular ? 'text-ellos-gold' : 'text-stone-500'}`}>
                {plan.name}
              </p>
              <h3 className="font-serif text-3xl font-bold leading-tight pr-2 [text-wrap:balance]">{plan.title}</h3>
            </div>
            <div className={`p-3 rounded-xl ml-4 shrink-0 ${plan.popular ? 'bg-white/10' : 'bg-ellos-green/5'}`}>
              {plan.icon}
            </div>
          </div>
          
          <p className={`text-base leading-relaxed mb-6 pb-6 border-b ${plan.popular ? 'border-white/10 text-stone-300' : 'border-stone-200 text-stone-500'}`}>
            {plan.description}
          </p>
          
          <div className="flex-grow space-y-4 mb-8">
            {plan.features.map((feature, i) => (
              <div key={i} className="flex gap-3">
                <Check className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-ellos-gold' : 'text-ellos-green'}`} />
                <div>
                  <p className="font-bold text-base leading-tight">{feature.name}</p>
                  <p className={`text-sm mt-1.5 leading-relaxed ${plan.popular ? 'text-stone-300' : 'text-stone-500'}`}>
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className={`mt-auto pt-6 border-t ${plan.popular ? 'border-white/10' : 'border-stone-200'}`}>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm font-medium">
                <span className={plan.popular ? 'text-ellos-gold' : 'text-ellos-green'}>•</span> 
                {plan.timeline}
              </div>
              {plan.support && (
                <div className="flex items-center gap-2 text-sm font-medium">
                  <span className={plan.popular ? 'text-ellos-gold' : 'text-ellos-green'}>•</span> 
                  {plan.support}
                </div>
              )}
            </div>
            
            <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-black/5 dark:bg-white/5">
              <span className="text-3xl font-serif font-bold mb-1">{plan.price}</span>
              <span className={`text-sm font-medium mb-3 ${plan.popular ? 'text-stone-300' : 'text-stone-600'}`}>
                {plan.installments}
              </span>
              <span className="text-[10px] text-center uppercase tracking-wider opacity-80">
                {plan.fee}
              </span>
            </div>
            
            <a 
              href="https://wa.me/5538984366953" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`mt-8 w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 text-center block shadow hover:shadow-lg ${
                plan.popular 
                  ? 'bg-ellos-gold text-ellos-green hover:bg-white' 
                  : 'bg-ellos-green text-white hover:bg-ellos-gold hover:text-ellos-green'
              }`}
            >
              Escolher Plano
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
