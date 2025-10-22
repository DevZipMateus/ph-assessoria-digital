import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logoHero from "@/assets/logo-hero.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img 
          src={heroBg} 
          alt="Profissional de contabilidade" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/85" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo acima do texto */}
          <div className="mb-8 animate-fade-in">
            <img 
              src={logoHero} 
              alt="PH Assessoria Contábil e Gestão Empresarial" 
              className="mx-auto w-64 md:w-80 lg:w-96"
            />
          </div>

          {/* H1 - Company Name */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            PH Assessoria Contábil e Gestão Empresarial
          </h1>

          {/* H2 - Company Description */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 animate-fade-in text-balance">
            Escritório de contabilidade que atua lado a lado com nossos clientes, oferecendo
            suporte próximo e personalizado em cada etapa do negócio
          </h2>

          {/* Slogan */}
          <p className="text-lg md:text-xl font-semibold text-primary mb-10 animate-fade-in">
            Transformando números em conquistas
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary text-primary-foreground hover:bg-primary-dark shadow-medium transition-smooth group"
            >
              Entre em contato
              <ArrowRight className="ml-2 h-5 w-5 transition-smooth group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById("services");
                if (element) {
                  const headerOffset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
              }}
              className="border-primary/60 text-primary hover:bg-secondary hover:border-primary transition-smooth"
            >
              Conheça nossos serviços
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">8+</div>
              <div className="text-sm text-muted-foreground">Anos de experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Foco no cliente</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
