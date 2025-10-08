import { Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    "Ética",
    "Responsabilidade social",
    "Autoresponsabilidade",
    "Praticidade",
    "Economia",
    "Rapidez",
    "Precisão",
    "Eficácia",
    "Integridade",
    "Família e bem-estar",
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Sobre nós
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça nossa missão, visão e os valores que guiam nosso trabalho
            </p>
          </div>

          {/* Mission, Vision, Values Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Mission */}
            <Card className="shadow-soft border-border hover:shadow-medium transition-smooth">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Missão</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Ajudar as empresas a crescerem oferecendo um serviço contábil de qualidade. A
                  PH Contabilidade valoriza e prioriza a segurança contábil das empresas, o sigilo
                  das informações dos clientes, atender as necessidades dos clientes, assessorando
                  na melhor tomada de decisão para o crescimento do seu negócio.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="shadow-soft border-border hover:shadow-medium transition-smooth">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Visão</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Buscar soluções rápidas e seguras para atender as necessidades dos clientes. A
                  PH Contabilidade acredita que o sucesso é a busca constante do aperfeiçoamento e
                  da satisfação total de nossas parcerias - colaboradores e clientes. Entendemos
                  que a contabilidade vai muito além de manter as conformidades com a legislação.
                  Devemos sempre ajudar as empresas a manter o negócio em rota prevista onde o
                  lucro é consequência.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <Card className="shadow-soft border-border hover:shadow-medium transition-smooth">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Valores</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg transition-smooth hover:bg-secondary"
                  >
                    <div className="h-2 w-2 bg-primary rounded-full" />
                    <span className="text-foreground">{value}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mt-6">
                A PH Contabilidade valoriza o ser humano e as relações entre as pessoas,
                incentivando a colaboração e o bom convívio entre colaboradores, clientes,
                fornecedores e a sociedade em geral. Acreditamos que a transparência fiscal é
                fundamental para o sucesso de um negócio e que a transparência, além de ser a
                chave, nos permite uma visão mais precisa da saúde financeira da empresa.
              </p>
            </CardContent>
          </Card>

          {/* History */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">Fundada em 01 de fevereiro de 2017</span>,
              a PH Contabilidade nasceu com o propósito de oferecer proximidade e cuidado aos nossos clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
