import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Code, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingSocialLinks from '@/components/FloatingSocialLinks';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: "digipharm",
      title: "digiPharm",
      subtitle: "Streamlining Pharmacy Procurement Systems",
      description: "Led a team of 50+ engineers to develop a comprehensive MERN stack solution that revolutionized pharmacy supply chain management, resulting in 20% efficiency improvement.",
      role: "Technical Lead & Business Analyst",
      duration: "18 months",
      teamSize: "50+ engineers",
      impact: "20% supply chain efficiency improvement",
      technologies: ["MERN Stack", "AWS", "MongoDB", "Node.js", "React"],
      businessMetrics: ["Supply Chain Optimization", "Cost Reduction", "Process Automation"],
      icon: <TrendingUp className="h-6 w-6" />,
      featured: true
    },
    {
      id: "lifeverse",
      title: "LifeVerse",
      subtitle: "Bridging Healthcare Accessibility Gaps",
      description: "Developed a comprehensive health platform that combines strategic technology implementation with healthcare domain expertise to improve patient outcomes and system efficiency.",
      role: "Full-Stack Developer & Strategy Consultant",
      duration: "12 months",
      teamSize: "15 developers",
      impact: "Healthcare accessibility improvement",
      technologies: ["React", "Node.js", "Healthcare APIs", "Data Analytics"],
      businessMetrics: ["Patient Satisfaction", "Operational Efficiency", "Cost Optimization"],
      icon: <Users className="h-6 w-6" />,
      featured: true
    },
    {
      id: "loop-me",
      title: "Loop Me",
      subtitle: "Innovative Networking Solutions",
      description: "Designed and implemented a networking platform that combines technical excellence with business development insights, enhancing professional connectivity and collaboration.",
      role: "Technical Architect & Business Developer",
      duration: "10 months",
      teamSize: "8 developers",
      impact: "Enhanced networking efficiency",
      technologies: ["Full-Stack Development", "API Design", "Business Intelligence"],
      businessMetrics: ["User Engagement", "Network Growth", "Platform Efficiency"],
      icon: <Code className="h-6 w-6" />,
      featured: true
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-hero mb-6">Case Studies</h1>
          <p className="text-lead">
            Real-world examples of bridging technology and business strategy to deliver measurable impact
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={study.id} className="card-feature overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Content Column */}
                  <div className="lg:col-span-2 p-8">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg text-primary">
                          {study.icon}
                        </div>
                        {study.featured && (
                          <Badge variant="secondary" className="bg-accent-green/10 text-accent-green">
                            Featured Project
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-2xl font-heading mb-2">{study.title}</CardTitle>
                      <CardDescription className="text-lg text-primary font-medium">
                        {study.subtitle}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="p-0">
                      <p className="text-muted-foreground font-body leading-relaxed mb-6">
                        {study.description}
                      </p>
                      
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="font-heading font-semibold text-primary mb-2">My Role</h4>
                          <p className="text-muted-foreground font-body">{study.role}</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <h5 className="font-body font-medium text-foreground mb-1">Duration</h5>
                            <p className="text-sm text-muted-foreground">{study.duration}</p>
                          </div>
                          <div>
                            <h5 className="font-body font-medium text-foreground mb-1">Team Size</h5>
                            <p className="text-sm text-muted-foreground">{study.teamSize}</p>
                          </div>
                          <div>
                            <h5 className="font-body font-medium text-foreground mb-1">Key Impact</h5>
                            <p className="text-sm text-muted-foreground">{study.impact}</p>
                          </div>
                        </div>
                      </div>
                      
                      <Button asChild className="btn-primary">
                        <Link to={`/case-studies/${study.id}`}>
                          Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                  
                  {/* Details Sidebar */}
                  <div className="bg-muted/50 p-8 lg:border-l border-border">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-heading font-semibold text-primary mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-heading font-semibold text-primary mb-3">Business Metrics</h4>
                        <div className="space-y-2">
                          {study.businessMetrics.map((metric, metricIndex) => (
                            <div key={metricIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                              <span className="text-sm text-muted-foreground font-body">{metric}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t border-border">
                        <Link 
                          to={`/case-studies/${study.id}`}
                          className="flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors"
                        >
                          <span className="font-body font-medium">View Details</span>
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-section mb-4">My Case Study Approach</h2>
            <p className="text-lead">
              How I structure every project to ensure both technical excellence and business impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-heading font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="font-heading font-semibold text-primary mb-2">Problem Analysis</h3>
              <p className="text-sm text-muted-foreground font-body">
                Identify business challenges and technical constraints
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-heading font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="font-heading font-semibold text-primary mb-2">Role Definition</h3>
              <p className="text-sm text-muted-foreground font-body">
                Clarify responsibilities and leadership approach
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-heading font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="font-heading font-semibold text-primary mb-2">Solution Design</h3>
              <p className="text-sm text-muted-foreground font-body">
                Architect technical solutions aligned with business goals
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-heading font-bold text-xl mx-auto mb-4">
                4
              </div>
              <h3 className="font-heading font-semibold text-primary mb-2">Impact Measurement</h3>
              <p className="text-sm text-muted-foreground font-body">
                Quantify results and business value delivered
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

export default CaseStudies;