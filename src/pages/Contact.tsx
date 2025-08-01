import { Mail, Linkedin, Github, MapPin, Calendar, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingSocialLinks from '@/components/FloatingSocialLinks';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      description: "Best for detailed project discussions",
      contact: "shouryjeet@example.com",
      action: "Send Email",
      href: "mailto:shouryjeet@example.com"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      description: "Professional networking and quick questions",
      contact: "linkedin.com/in/shouryjeet-gupta",
      action: "Connect on LinkedIn",
      href: "https://linkedin.com/in/shouryjeet-gupta"
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      description: "Code reviews and technical discussions",
      contact: "github.com/shouryjeet",
      action: "View GitHub Profile",
      href: "https://github.com/shouryjeet"
    }
  ];

  const serviceAreas = [
    {
      title: "Technical Consulting",
      description: "Architecture design, technology strategy, and implementation guidance",
      icon: <MessageSquare className="h-5 w-5" />
    },
    {
      title: "Business Analysis",
      description: "Requirements gathering, process optimization, and strategic planning",
      icon: <Calendar className="h-5 w-5" />
    },
    {
      title: "Team Leadership",
      description: "Engineering management, agile coaching, and cross-functional coordination",
      icon: <MapPin className="h-5 w-5" />
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-hero mb-6">Let's Connect</h1>
          <p className="text-lead mb-8">
            Ready to discuss how strategic technology can drive your business forward? 
            I'd love to hear about your challenges and explore solutions together.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="card-feature text-center group">
                <CardHeader>
                  <div className="mx-auto p-4 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors w-fit mb-4">
                    {method.icon}
                  </div>
                  <CardTitle className="text-xl font-heading">{method.title}</CardTitle>
                  <CardDescription className="text-base">
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-body mb-6 break-words">
                    {method.contact}
                  </p>
                  <Button asChild className="btn-primary w-full">
                    <a href={method.href} target="_blank" rel="noopener noreferrer">
                      {method.action}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-section mb-4">How I Can Help</h2>
            <p className="text-lead">
              Areas where I bring the most value through my unique combination of technical and business expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceAreas.map((service, index) => (
              <Card key={index} className="card-elevated text-center">
                <CardHeader>
                  <div className="mx-auto p-3 bg-accent-green/10 rounded-lg text-accent-green w-fit mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg font-heading">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="card-elevated p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                  Current Availability
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  I'm currently available for consulting engagements and would love to discuss 
                  how my experience in technical leadership and business analysis can help 
                  accelerate your projects.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                    <span className="text-muted-foreground font-body">Remote collaboration worldwide</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                    <span className="text-muted-foreground font-body">Flexible engagement models</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                    <span className="text-muted-foreground font-body">Strategic consulting and hands-on development</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center lg:text-right">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
                  Ready to start a conversation?
                </h3>
                <p className="text-muted-foreground font-body mb-6">
                  Let's discuss your project goals and how I can help bridge the gap between 
                  technology and business strategy.
                </p>
                <Button asChild size="lg" className="btn-primary">
                  <a href="mailto:shouryjeet@example.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Get In Touch
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            What to Expect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-heading font-bold mb-2">24 hours</div>
              <p className="text-primary-foreground/90 font-body">
                Response time for initial inquiries
              </p>
            </div>
            <div>
              <div className="text-2xl font-heading font-bold mb-2">Free consultation</div>
              <p className="text-primary-foreground/90 font-body">
                30-minute discovery call to discuss your needs
              </p>
            </div>
            <div>
              <div className="text-2xl font-heading font-bold mb-2">Tailored approach</div>
              <p className="text-primary-foreground/90 font-body">
                Custom solutions designed for your specific challenges
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Floating Social Links */}
      <FloatingSocialLinks />
    </div>
  );
};

export default Contact;