import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua Estância, 57",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(21) 98675-5810",
      link: "https://wa.me/5521986755810",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "grupophcontabilidade@gmail.com",
      link: "mailto:grupophcontabilidade@gmail.com",
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Segunda a sexta: 08:00 às 18:00",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Entre em contato
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estamos prontos para ajudar sua empresa a crescer
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Informações de contato
              </h3>
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <span className="text-muted-foreground">{info.content}</span>
                  );

                  return (
                    <Card key={index} className="shadow-soft border-border">
                      <CardContent className="p-4 flex items-start gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                          {content}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* WhatsApp CTA */}
              <Card className="shadow-soft border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-2">
                    Prefere conversar pelo WhatsApp?
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    Clique no botão abaixo e fale diretamente conosco.
                  </p>
                  <a
                    href="https://wa.me/5521986755810"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary-dark shadow-medium transition-smooth"
                  >
                    Abrir WhatsApp
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Envie uma mensagem</h3>
              <Card className="shadow-soft border-border">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Nome completo
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Seu nome"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        E-mail
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="seu@email.com"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Telefone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="(00) 00000-0000"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Mensagem
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Como podemos ajudar?"
                        rows={5}
                        className="w-full"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary-dark transition-smooth"
                    >
                      {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
