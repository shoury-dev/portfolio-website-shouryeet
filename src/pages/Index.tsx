import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, TrendingUp, Users, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingSocialLinks from '@/components/FloatingSocialLinks';
import heroImage from '@/assets/hero-bg.jpg';

const Index = () => {
  const featuredProjects = [
    {
      title: "digiPharm",
      description: "Streamlined pharmacy procurement system with MERN stack, improving supply chain efficiency by 20%",
      role: "Technical Lead & Business Analyst",
      impact: "50+ engineers managed, supply chain optimization",
      link: "/case-studies/digipharm",
      icon: <TrendingUp className="h-6 w-6" />,
      tech: ["MERN Stack", "AWS", "Supply Chain"]
    },
    {
      title: "Anant Enterprises",
      description: "Transformed a local medicine wholesaler into a pan-India venture with 125% revenue growth and 500%+ customer base expansion",
      role: "Business Development & Strategy Consultant",
      impact: "₹4.5 Crores turnover, 200+ suppliers onboarded",
      link: "/case-studies/anant-enterprises",
      icon: <TrendingUp className="h-6 w-6" />,
      tech: ["Business Strategy", "Supply Chain", "Market Expansion"]
    },
    {
      title: "LifeVerse",
      description: "Comprehensive health platform bridging healthcare gaps through strategic technology implementation",
      role: "Full-Stack Developer & Strategy Consultant",
      impact: "Healthcare accessibility improvement",
      link: "/case-studies/lifeverse",
      icon: <Users className="h-6 w-6" />,
      tech: ["React", "Node.js", "Healthcare Tech"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/60"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Fresh Ideas. Fast Learning.
            <span className="block text-accent-green-light">Ready to Build & Grow Together!</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 font-body leading-relaxed mb-8 max-w-3xl mx-auto">
            I'm a passionate fresher eager to turn challenges into opportunities. Let's create something awesome—your next big project starts here!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-primary text-lg px-8 py-4">
              <Link to="/case-studies">
                View Case Studies <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              <Link to="/about">
                Learn About Me
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-section mb-4">Featured Case Studies</h2>
            <p className="text-lead max-w-3xl mx-auto">
              Explore how I've helped organizations solve complex challenges by combining technical expertise 
              with strategic business analysis to deliver measurable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="card-feature group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {project.icon}
                    </div>
                    <Link to={project.link} className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  </div>
                  <CardTitle className="text-xl font-heading">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-primary mb-1">My Role</p>
                      <p className="text-sm text-muted-foreground">{project.role}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-primary mb-1">Key Impact</p>
                      <p className="text-sm text-muted-foreground">{project.impact}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-primary mb-2">Technologies</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Button asChild className="w-full mt-4 btn-outline">
                      <Link to={project.link}>
                        Read Full Case Study
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Transform Your Business Strategy?
          </h2>
          <p className="text-xl text-primary-foreground/90 font-body leading-relaxed mb-8">
            Let's discuss how strategic technology implementation can drive your business forward. 
            I bring both technical expertise and business acumen to every collaboration.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
            <a href="mailto:shouryjeet@example.com">
              Let's Connect <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
      
      {/* Floating Social Links */}
      <FloatingSocialLinks />
    </div>
  );
};

export default Index;
