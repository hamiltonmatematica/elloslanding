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
             <img src="/logo2.png" alt="ELLOS Logo" className="h-8 md:h-10 object-contain" />
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
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] mb-6 md:mb-8 drop-shadow-lg [text-wrap:balance]">
            Sua conexão com <br/>
            <span className="text-ellos-gold italic">os melhores resultados</span>
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-2xl text-stone-200 font-light leading-relaxed mb-10 md:mb-12 [text-wrap:pretty]">
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
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-ellos-green mb-6 md:mb-10 leading-tight [text-wrap:balance]">
                Equipe ineficaz em vendas e atendimentos?
                <br />
                <span className="text-stone-500 text-lg sm:text-2xl md:text-3xl mt-4 md:mt-8 block font-normal leading-snug">Metas pouco claras e recursos mal gerenciados para alcançar seus objetivos?</span>
                <span className="text-stone-500 text-lg sm:text-2xl md:text-3xl mt-4 md:mt-6 block font-normal leading-snug">Procura tecnologias e automação para otimizar o funcionamento da sua empresa?</span>
              </h2>
              <div className="w-20 md:w-24 h-1 bg-ellos-gold mx-auto mb-6 md:mb-10 rounded-full"></div>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-ellos-green mt-8 md:mt-10">A Ellos tem um plano para você!</h3>
              <p className="text-lg sm:text-xl md:text-2xl text-ellos-green font-medium mt-4 md:mt-6 [text-wrap:balance]">
                 A Ellos representa a aliança perfeita entre <br className="md:hidden" /><span className="font-bold text-ellos-gold">GESTÃO, AUTOMAÇÃO E TREINAMENTO</span>
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mt-12 md:mt-20 text-left">
                <div className="bg-ellos-light p-8 md:p-10 rounded-[2rem] border border-stone-200/60 shadow-sm hover:shadow-xl transition-all duration-300">
                   <h4 className="font-bold text-ellos-green text-base md:text-lg mb-3 md:mb-4 uppercase tracking-wider">Gestão</h4>
                   <p className="text-stone-600 text-base leading-relaxed">Organize a GESTÃO e os fluxos da sua empresa e tenha todo o seu planejamento estrutural e financeiro sob controle.</p>
                </div>
                <div className="bg-ellos-light p-8 md:p-10 rounded-[2rem] border border-stone-200/60 shadow-sm hover:shadow-xl transition-all duration-300">
                   <h4 className="font-bold text-ellos-green text-base md:text-lg mb-3 md:mb-4 uppercase tracking-wider">Automação</h4>
                   <p className="text-stone-600 text-base leading-relaxed">Estruture uma AUTOMAÇÃO perfeita, inteligente, e diminua os custos operacionais, oferecendo atendimento rápido, preciso e satisfação aos clientes.</p>
                </div>
                <div className="bg-ellos-light p-8 md:p-10 rounded-[2rem] border border-stone-200/60 shadow-sm hover:shadow-xl transition-all duration-300">
                   <h4 className="font-bold text-ellos-green text-base md:text-lg mb-3 md:mb-4 uppercase tracking-wider">Treinamento</h4>
                   <p className="text-stone-600 text-base leading-relaxed">Prepare a sua equipe para o futuro, com TREINAMENTO em atendimento, uso de I.A. e vendas em alto nível.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services (GAT) */}
        <section id="solucoes" className="py-20 md:py-32 bg-ellos-light relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-ellos-gold/10 rounded-full blur-[80px] sm:blur-[100px] -mr-20 -mt-20 md:-mr-40 md:-mt-40"></div>
            <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-ellos-green/5 rounded-full blur-[80px] sm:blur-[100px] -ml-20 -mb-20 md:-ml-40 md:-mb-40"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12 md:mb-20">
                    <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-stone-500 uppercase">Nossos Pilares</span>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ellos-green mt-3 md:mt-4 [text-wrap:balance]">Diferenciais Competitivos</h2>
                </div>
                
                <ServiceCards />
            </div>
        </section>

        {/* Planos */}
        <section id="planos" className="py-20 md:py-32 bg-stone-50 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12 md:mb-20">
                    <span className="text-[10px] sm:text-xs font-bold tracking-widest text-ellos-gold uppercase py-2 px-4 sm:px-5 bg-ellos-green rounded-full shadow-md">Planos Exclusivos</span>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ellos-green mt-6 md:mt-8 mb-4 [text-wrap:balance]">
                        Conheça nossos planos para revolucionar o funcionamento da sua empresa
                    </h2>
                </div>
                
                <PlanCards />
                
                <div className="mt-12 md:mt-16 flex justify-center animate-fade-in-up">
                    <a 
                        href="https://wa.me/5538984366953" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 px-6 sm:px-8 py-4 sm:py-5 bg-ellos-gold text-ellos-green rounded-2xl sm:rounded-full hover:bg-ellos-green hover:text-white transition-all shadow-xl font-bold uppercase tracking-widest text-xs sm:text-sm text-center w-full md:w-auto"
                    >
                        <MessageCircle size={24} className="mb-1 sm:mb-0 shrink-0" />
                        <span><strong>Precisa de algo mais personalizado?</strong><br className="sm:hidden" /> Negocie diretamente com nosso comercial.</span>
                    </a>
                </div>
            </div>
        </section>

        {/* Metrics & Results */}
        <section id="resultados" className="py-20 md:py-32 bg-ellos-green text-white relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-ellos-gold/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 text-ellos-gold text-[10px] sm:text-xs font-bold tracking-widest uppercase rounded-full mb-6 md:mb-8 border border-white/10 backdrop-blur-sm">
                            Impacto Real
                        </div>
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl mb-6 md:mb-10 leading-tight [text-wrap:balance]">Resultados <br className="hidden sm:block"/> para a sua empresa</h2>
                        <div className="space-y-4 md:space-y-6 text-stone-300 text-base md:text-lg pr-0 md:pr-4 lg:pr-12">
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
                    <div className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-sm w-full overflow-hidden">
                        <ResultsStatsDiagram />
                    </div>
                </div>
            </div>
        </section>

        {/* Team / Contact */}
        <section id="contato" className="py-20 md:py-32 bg-stone-50 border-t border-stone-200">
           <div className="container mx-auto px-6">
                <div className="text-center mb-12 md:mb-20">
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ellos-green mt-4 mb-4">EQUIPE ELLOS 2026</h2>
                    <div className="w-16 md:w-24 h-1 bg-ellos-gold mx-auto rounded-full"></div>
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
                        phone="38 98436-6953"
                        delay="0.3s" 
                    />
                </div>

                <div className="mt-12 md:mt-16 flex justify-center animate-fade-in-up">
                    <a 
                        href="https://wa.me/5538984366953" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 px-6 sm:px-8 py-4 sm:py-5 bg-ellos-gold text-ellos-green rounded-2xl sm:rounded-full hover:bg-ellos-green hover:text-white transition-all shadow-xl font-bold uppercase tracking-widest text-xs sm:text-sm text-center w-full md:w-auto"
                    >
                        <MessageCircle size={24} className="mb-1 sm:mb-0 shrink-0" />
                        <span><strong>Precisa de algo mais personalizado?</strong><br className="sm:hidden" /> Negocie diretamente com nosso comercial.</span>
                    </a>
                </div>
           </div>
        </section>

      </main>

      <footer className="bg-ellos-green text-stone-400 py-12 border-t border-white/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <img src="/logo2.png" alt="ELLOS Logo" className="h-12 mb-4 mx-auto md:mx-0 object-contain" />
                <p className="text-sm">Gestão, Automação e Treinamento</p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2">
                <a href="https://instagram.com/ellos.gat" target="_blank" rel="noreferrer" className="text-white hover:text-ellos-gold transition-colors font-medium flex items-center gap-2">
                    @ellos.gat
                </a>
                <a href="https://wa.me/5538984366953" target="_blank" rel="noreferrer" className="text-white hover:text-ellos-gold transition-colors font-medium flex items-center gap-2">
                    +55 38 98436-6953
                </a>
                <p className="text-xs text-stone-500">© 2024 ELLOS. Todos os direitos reservados.</p>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;