import { FileText, Users, Building2, Calculator, TrendingUp, HeadphonesIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Contabilidade fiscal e tributária",
      description:
        "Cálculo e apuração de impostos, entrega de declarações fiscais e planejamento tributário para reduzir custos dentro da lei.",
    },
    {
      icon: Users,
      title: "Contabilidade trabalhista e folha de pagamento",
      description:
        "Registro e gestão de funcionários, emissão de folha de pagamento, férias, 13º salário e cumprimento de obrigações trabalhistas e previdenciárias.",
    },
    {
      icon: Building2,
      title: "Abertura, alteração e encerramento de empresas",
      description:
        "Orientação sobre o tipo jurídico e regime tributário ideal, elaboração de contratos sociais e alterações societárias e regularização e formalização da empresa.",
    },
    {
      icon: FileText,
      title: "Escrituração contábil e demonstrações financeiras",
      description:
        "Registro de todas as movimentações financeiras, elaboração de balancetes e balanços patrimoniais e relatórios contábeis para tomada de decisão.",
    },
    {
      icon: TrendingUp,
      title: "Consultoria e assessoria contábil",
      description:
        "Análise de resultados financeiros, apoio estratégico para crescimento da empresa e orientação sobre redução de custos e aumento da lucratividade.",
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte personalizado",
      description:
        "Atendimento próximo e dedicado, acompanhamento contínuo do seu negócio e soluções customizadas para cada tipo de empresa.",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Nossos serviços
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluções completas em contabilidade para o crescimento do seu negócio
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="shadow-soft border-border hover:shadow-medium transition-smooth group"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Simplifique a parte burocrática e foque no que realmente importa: fazer sua empresa crescer.
            </p>
            <a
              href="https://wa.me/5521986755810"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary-dark shadow-medium transition-smooth"
            >
              Fale com um especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
