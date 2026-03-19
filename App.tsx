/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { HeroScene } from './components/QuantumScene';
import { ResultsStatsDiagram, ServiceCards } from './components/Diagrams';
import { PlanCards } from './components/Plans';
import { ArrowDown, Menu, X, Phone, CheckCircle, MessageCircle } from 'lucide-react';

const TeamCard = ({ name, role, phone, area, delay }: { name: string, role: string, phone: string, area: string, delay: string }) => {
  // Format phone for WhatsApp link (remove spaces/dashes)
  const waLink = `https://wa.me/55${phone.replace(/\D/g, '')}`;

  return (
    <div className="flex flex-col group animate-fade-in-up items-center p-8 bg-white rounded-xl border border-ellos-green/10 shadow-sm hover:shadow-xl hover:border-ellos-gold transition-all duration-300 w-full max-w-xs relative overflow-hidden" style={{ animationDelay: delay }}>
      <div className="absolute top-0 left-0 w-full h-1 bg-ellos-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      
      <h3 className="font-serif text-2xl text-ellos-green text-center mb-1 font-bold">{name}</h3>
      <p className="text-xs text-ellos-gold font-bold uppercase tracking-widest text-center mb-4">{role}</p>
      
      <div className="w-12 h-0.5 bg-ellos-green/20 mb-4"></div>
      
      <p className="text-sm text-stone-600 text-center mb-6 h-10">{area}</p>
      
      <a 
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-ellos-green text-white rounded-full text-sm font-medium hover:bg-ellos-gold hover:text-ellos-green transition-colors"
      >
        <MessageCircle size={16} />
        {phone}
      </a>
    </div>
  );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-ellos-light text-ellos-green selection:bg-ellos-gold selection:text-ellos-green font-sans">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-ellos-green shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
             {/* Logo representation */}
             <img src="/logo.png" alt="ELLOS Logo" className="h-8 md:h-10 object-contain" />
          </div>
          
          <div className={`hidden md:flex items-center gap-8 text-sm font-medium tracking-wide ${scrolled ? 'text-white/90' : 'text-white'}`}>
            <a href="#solucoes" onClick={scrollToSection('solucoes')} className="hover:text-ellos-gold transition-colors cursor-pointer uppercase">Soluções</a>
            <a href="#planos" onClick={scrollToSection('planos')} className="hover:text-ellos-gold transition-colors cursor-pointer uppercase">Planos</a>
            <a href="#resultados" onClick={scrollToSection('resultados')} className="hover:text-ellos-gold transition-colors cursor-pointer uppercase">Resultados</a>

            <a href="#contato" onClick={scrollToSection('contato')} className="px-5 py-2 bg-ellos-gold text-ellos-green rounded-full hover:bg-white transition-colors shadow-sm cursor-pointer font-bold">
              Fale Conosco
            </a>
          </div>

          <button className={`md:hidden p-2 ${scrolled ? 'text-white' : 'text-white'}`} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-ellos-green flex flex-col items-center justify-center gap-8 text-xl font-serif animate-fade-in text-white">
            <a href="#solucoes" onClick={scrollToSection('solucoes')} className="hover:text-ellos-gold transition-colors uppercase">Soluções</a>
            <a href="#planos" onClick={scrollToSection('planos')} className="hover:text-ellos-gold transition-colors uppercase">Planos</a>
            <a href="#resultados" onClick={scrollToSection('resultados')} className="hover:text-ellos-gold transition-colors uppercase">Resultados</a>

            <a href="#contato" onClick={scrollToSection('contato')} className="px-8 py-3 bg-ellos-gold text-ellos-green rounded-full font-bold">
              Contato
            </a>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden bg-ellos-green">
        <HeroScene />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(18,51,46,0.4)_0%,rgba(18,51,46,0.8)_60%,rgba(18,51,46,1)_100%)]" />

        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <div className="inline-block mb-6 px-4 py-1 border border-ellos-gold/50 text-ellos-gold text-xs tracking-[0.3em] uppercase font-bold rounded-full backdrop-blur-md bg-ellos-green/30">
            Gestão • Automação • Treinamento
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-tight mb-8 drop-shadow-lg">
            Sua conexão com <br/>
            <span className="text-ellos-gold italic">os melhores resultados</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-300 font-light leading-relaxed mb-12">
            Transforme de uma vez por todas a sua empresa e alavanque as suas vendas. Temos um plano para você.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4">
             <a href="#solucoes" onClick={scrollToSection('solucoes')} className="px-8 py-3 bg-ellos-gold text-ellos-green font-bold rounded-full hover:bg-white transition-all shadow-lg hover:shadow-ellos-gold/50">
                Conheça Nossos Planos
             </a>
          </div>
          
          <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
            <ArrowDown className="text-ellos-gold opacity-70" />
          </div>
        </div>
      </header>

      <main>
        {/* Intro / Problem Statement */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif text-ellos-green mb-8 leading-tight">
                Equipe ineficaz em vendas e atendimentos?
                <br />
                <span className="text-stone-500 text-2xl md:text-3xl mt-4 block font-normal">Metas pouco claras e recursos mal gerenciados para alcançar seus objetivos?</span>
                <span className="text-stone-500 text-2xl md:text-3xl mt-4 block font-normal">Procura tecnologias e automação para otimizar o funcionamento da sua empresa?</span>
              </h2>
              <div className="w-24 h-1 bg-ellos-gold mx-auto mb-8"></div>
              <h3 className="font-serif text-3xl font-bold text-ellos-green mt-8">A Ellos tem um plano para você!</h3>
              <p className="text-xl text-ellos-green font-medium mt-4">
                 A Ellos representa a aliança perfeita entre <span className="font-bold text-ellos-gold">GESTÃO, AUTOMAÇÃO E TREINAMENTO</span>
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
                <div className="bg-ellos-light p-6 rounded-2xl border border-stone-200 shadow-sm">
                   <h4 className="font-bold text-ellos-green mb-2 uppercase tracking-wide">Gestão</h4>
                   <p className="text-stone-600 text-sm">Organize a GESTÃO e os fluxos da sua empresa e tenha todo o seu planejamento estrutural e financeiro sob controle.</p>
                </div>
                <div className="bg-ellos-light p-6 rounded-2xl border border-stone-200 shadow-sm">
                   <h4 className="font-bold text-ellos-green mb-2 uppercase tracking-wide">Automação</h4>
                   <p className="text-stone-600 text-sm">Estruture uma AUTOMAÇÃO perfeita, inteligente, e diminua os custos operacionais, oferecendo atendimento rápido, preciso e satisfação aos clientes.</p>
                </div>
                <div className="bg-ellos-light p-6 rounded-2xl border border-stone-200 shadow-sm">
                   <h4 className="font-bold text-ellos-green mb-2 uppercase tracking-wide">Treinamento</h4>
                   <p className="text-stone-600 text-sm">Prepare a sua equipe para o futuro, com TREINAMENTO em atendimento, uso de I.A. e vendas em alto nível.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services (GAT) */}
        <section id="solucoes" className="py-24 bg-ellos-light relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-ellos-gold/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-xs font-bold tracking-widest text-stone-500 uppercase">NOSSOS PILARES</span>
                    <h2 className="font-serif text-4xl text-ellos-green mt-2">Diferenciais Competitivos</h2>
                </div>
                
                <ServiceCards />
            </div>
        </section>

        {/* Planos */}
        <section id="planos" className="py-24 bg-stone-100 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-xs font-bold tracking-widest text-ellos-gold uppercase py-1 px-3 bg-ellos-green rounded-full">PLANOS EXCLUSIVOS</span>
                    <h2 className="font-serif text-4xl text-ellos-green mt-6 mb-4">Conheça nossos planos para revolucionar <br className="hidden md:block"/> o funcionamento da sua empresa</h2>
                </div>
                
                <PlanCards />
            </div>
        </section>

        {/* Metrics & Results */}
        <section id="resultados" className="py-24 bg-ellos-green text-white relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-ellos-gold text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-white/10">
                            IMPACTO REAL
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl mb-6">Resultados para a sua empresa</h2>
                        <div className="space-y-4 text-stone-300 text-lg pr-4">
                            <div className="flex items-start gap-4">
                                <CheckCircle className="text-ellos-gold shrink-0 mt-1 w-5 h-5" />
                                <p className="text-base border-b border-white/10 pb-3">Reduza em até <span className="text-white font-bold">75%</span> o tempo gasto pela sua equipe com tarefas repetitivas</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <CheckCircle className="text-ellos-gold shrink-0 mt-1 w-5 h-5" />
                                <p className="text-base border-b border-white/10 pb-3">Reduza pela metade a equipe de atendimento ao cliente</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <CheckCircle className="text-ellos-gold shrink-0 mt-1 w-5 h-5" />
                                <p className="text-base border-b border-white/10 pb-3">Aumente em <span className="text-white font-bold">50%</span> a produtividade e nível de informatividade ao seu público</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <CheckCircle className="text-ellos-gold shrink-0 mt-1 w-5 h-5" />
                                <p className="text-base border-b border-white/10 pb-3">Crie o seu pacote de recursos e serviços tecnológicos para atender com eficiência</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <CheckCircle className="text-ellos-gold shrink-0 mt-1 w-5 h-5" />
                                <p className="text-base border-b border-white/10 pb-3">Capacite gestores, diretores e colaboradores com maior eficiência</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <CheckCircle className="text-ellos-gold shrink-0 mt-1 w-5 h-5" />
                                <p className="text-base border-b border-white/10 pb-3">Trabalhe como se estivesse com uma equipe, mesmo controlando sozinho o seu negócio</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <CheckCircle className="text-ellos-gold shrink-0 mt-1 w-5 h-5" />
                                <p className="text-base">Treine sua equipe com tecnologia, sem perder tempo de trabalho do restante da equipe</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                        <ResultsStatsDiagram />
                    </div>
                </div>
            </div>
        </section>

        {/* Team / Contact */}
        <section id="contato" className="py-24 bg-stone-100 border-t border-stone-200">
           <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl text-ellos-green mt-4 mb-2">EQUIPE ELLOS 2026</h2>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 justify-center items-center flex-wrap">
                    <TeamCard 
                        name="Alysson Luiz Freitas" 
                        role="Sócio-Diretor"
                        area="Gestão, Administração e Fluxos"
                        phone="38 99957-3075"
                        delay="0s" 
                    />
                    <TeamCard 
                        name="Hamilton Vinícius" 
                        role="Sócio-Diretor"
                        area="Gestor de Tráfego e Soluções Digitais"
                        phone="38 99153-8392"
                        delay="0.1s" 
                    />
                    <TeamCard 
                        name="Ludmila Gomes" 
                        role="Sócia-Diretora"
                        area="Estrategista de Negócios"
                        phone="38 98804-1692"
                        delay="0.2s" 
                    />
                    <TeamCard 
                        name="Vitória Tupinambá" 
                        role="Operação Comercial"
                        area="Operação Comercial e Vendas"
                        phone="38 98429-6852"
                        delay="0.3s" 
                    />
                </div>
           </div>
        </section>

      </main>

      <footer className="bg-ellos-green text-stone-400 py-12 border-t border-white/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <img src="/logo.png" alt="ELLOS Logo" className="h-12 mb-4 mx-auto md:mx-0 object-contain" />
                <p className="text-sm">Gestão, Automação e Treinamento</p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2">
                <a href="https://instagram.com/ellos.gat" target="_blank" rel="noreferrer" className="text-white hover:text-ellos-gold transition-colors font-medium flex items-center gap-2">
                    @ellos.gat
                </a>
                <p className="text-xs text-stone-500">© 2024 ELLOS. Todos os direitos reservados.</p>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;