import { ArrowLeft, Users, TrendingUp, Award, Code, Database, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingSocialLinks from '@/components/FloatingSocialLinks';

const DigiPharm = () => {
  const achievements = [
    { metric: "20%", description: "Supply chain efficiency improvement" },
    { metric: "50+", description: "Engineers successfully managed" },
    { metric: "18", description: "Months of strategic leadership" },
    { metric: "100%", description: "On-time project delivery" }
  ];

  const technologies = [
    { name: "MongoDB", description: "Database design and optimization" },
    { name: "Express.js", description: "Backend API development" },
    { name: "React", description: "Frontend user interface" },
    { name: "Node.js", description: "Server-side development" },
    { name: "AWS", description: "Cloud infrastructure and deployment" },
    { name: "Agile", description: "Project management methodology" }
  ];

  const challenges = [
    "Fragmented procurement processes across multiple pharmacy locations",
    "Lack of real-time inventory visibility and demand forecasting",
    "Manual workflows leading to errors and inefficiencies",
    "Complex vendor management and pricing optimization needs",
    "Need for scalable architecture supporting 50+ concurrent users"
  ];

  const solutions = [
    "Implemented comprehensive MERN stack architecture for scalability",
    "Designed real-time inventory tracking with automated reorder points",
    "Created automated procurement workflows with approval hierarchies",
    "Built vendor management system with price comparison algorithms",
    "Established AWS cloud infrastructure for reliability and performance"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="py-12 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/case-studies" className="inline-flex items-center text-primary hover:text-primary-hover transition-colors mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Case Studies
          </Link>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-4 bg-primary/10 rounded-xl text-primary">
              <TrendingUp className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">digiPharm</h1>
              <p className="text-xl text-primary font-medium">Streamlining Pharmacy Procurement Systems</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-accent-green/10 text-accent-green">Featured Project</Badge>
            <Badge variant="outline">MERN Stack</Badge>
            <Badge variant="outline">AWS Cloud</Badge>
            <Badge variant="outline">Supply Chain</Badge>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                  {achievement.metric}
                </div>
                <p className="text-muted-foreground font-body">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-section mb-6">The Problem</h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                The pharmacy industry was struggling with fragmented procurement processes that led to 
                inefficiencies, increased costs, and poor inventory management. Multiple pharmacy locations 
                operated in silos, lacking visibility into supply chain optimization opportunities.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                As the market demanded more efficiency and cost-effectiveness, there was a critical need 
                for a unified platform that could streamline operations while maintaining the flexibility 
                required for different pharmacy workflows.
              </p>
            </div>
            
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-primary" />
                  Key Challenges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground font-body">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* My Role */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-section mb-8">My Role & Responsibilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  Technical Leadership
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground font-body">
                  <li>• Led cross-functional team of 50+ engineers</li>
                  <li>• Architected scalable MERN stack solution</li>
                  <li>• Implemented agile development methodologies</li>
                  <li>• Ensured code quality and technical standards</li>
                  <li>• Mentored junior developers and team leads</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  Business Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground font-body">
                  <li>• Analyzed procurement workflow inefficiencies</li>
                  <li>• Defined business requirements and KPIs</li>
                  <li>• Collaborated with pharmacy stakeholders</li>
                  <li>• Designed cost optimization strategies</li>
                  <li>• Measured and reported business impact</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-section text-center mb-12">The Solution</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-heading font-semibold text-primary mb-4">Strategic Approach</h3>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                I developed a comprehensive MERN stack platform that unified pharmacy procurement processes 
                while maintaining the flexibility needed for different operational models. The solution focused 
                on real-time visibility, automation, and data-driven decision making.
              </p>
              <div className="space-y-3">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground font-body">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <Card key={index} className="card-elevated">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base font-heading flex items-center">
                      {tech.name === 'MongoDB' && <Database className="h-4 w-4 mr-2 text-primary" />}
                      {(tech.name === 'Express.js' || tech.name === 'Node.js') && <Code className="h-4 w-4 mr-2 text-primary" />}
                      {tech.name === 'React' && <Code className="h-4 w-4 mr-2 text-primary" />}
                      {tech.name === 'AWS' && <Cloud className="h-4 w-4 mr-2 text-primary" />}
                      {tech.name === 'Agile' && <Users className="h-4 w-4 mr-2 text-primary" />}
                      {tech.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-sm">
                      {tech.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-section text-center mb-12">Business Impact</h2>
          
          <Card className="card-feature p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-4">Quantifiable Results</h3>
                <ul className="space-y-3 text-muted-foreground font-body">
                  <li>• <strong>20% improvement</strong> in supply chain efficiency</li>
                  <li>• <strong>35% reduction</strong> in manual processing time</li>
                  <li>• <strong>15% cost savings</strong> through vendor optimization</li>
                  <li>• <strong>98% accuracy</strong> in inventory tracking</li>
                  <li>• <strong>Zero downtime</strong> during deployment</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-4">Strategic Outcomes</h3>
                <ul className="space-y-3 text-muted-foreground font-body">
                  <li>• Unified procurement across multiple locations</li>
                  <li>• Real-time visibility into supply chain metrics</li>
                  <li>• Automated workflows reducing human error</li>
                  <li>• Scalable architecture supporting growth</li>
                  <li>• Enhanced vendor relationship management</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Key Learnings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-heading font-semibold mb-3">Technical Excellence</h3>
              <p className="text-primary-foreground/90 font-body">
                Scalable architecture is crucial for supporting large teams and complex workflows
              </p>
            </div>
            <div>
              <h3 className="text-lg font-heading font-semibold mb-3">Business Alignment</h3>
              <p className="text-primary-foreground/90 font-body">
                Understanding domain-specific challenges is essential for creating valuable solutions
              </p>
            </div>
            <div>
              <h3 className="text-lg font-heading font-semibold mb-3">Team Leadership</h3>
              <p className="text-primary-foreground/90 font-body">
                Clear communication and agile methodologies enable large teams to deliver results
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <Button asChild size="lg" variant="secondary">
              <Link to="/case-studies">
                <ArrowLeft className="mr-2 h-5 w-5" />
                View More Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Floating Social Links */}
      <FloatingSocialLinks />
    </div>
  );
};

export default DigiPharm;