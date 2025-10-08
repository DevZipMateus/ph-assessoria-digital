import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="PH Assessoria Contábil Logo" className="h-10 w-auto brightness-0 invert" />
                <span className="font-semibold text-lg">PH Assessoria Contábil</span>
              </div>
              <p className="text-background/80 text-sm leading-relaxed">
                Transformando números em conquistas desde 2017.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Links rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#hero" className="text-background/80 hover:text-background transition-smooth">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-background/80 hover:text-background transition-smooth">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-background/80 hover:text-background transition-smooth">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-background/80 hover:text-background transition-smooth">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>Rua Estância, 57</li>
                <li>
                  <a
                    href="https://wa.me/5521986755810"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-background transition-smooth"
                  >
                    (21) 98675-5810
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:grupophcontabilidade@gmail.com"
                    className="hover:text-background transition-smooth"
                  >
                    grupophcontabilidade@gmail.com
                  </a>
                </li>
                <li>Segunda a sexta: 08:00 às 18:00</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-background/20 pt-8 text-center">
            <p className="text-sm text-background/80">
              © {currentYear} PH Assessoria Contábil e Gestão Empresarial LTDA. CNPJ: 54.752.136/0001-87.
              Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
