import { ArrowLeft, Users, TrendingUp, Award, Code, Database, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingSocialLinks from '@/components/FloatingSocialLinks';

const AnantEnterprises = () => {
  const achievements = [
    { metric: "125%", description: "Increase in Annual Turnover" },
    { metric: "500%+", description: "Increase in Customer Base" },
    { metric: "1200%+", description: "Increase in Supplier Network" },
    { metric: "3%", description: "Jump in EBITDA" }
  ];

  const technologies = [
    { name: "MERN Stack", description: "Full-stack development for the core platform" },
    { name: "React", description: "Frontend user interface development" },
    { name: "Node.js", description: "Backend API and server-side development" },
    { name: "Python", description: "Scripts for data processing, regular updates, and automation" },
    { name: "WhatsApp Automation", description: "Marketing tools for customer engagement and communication" },
    { name: "Azure", description: "Cloud infrastructure for reliable hosting and deployment" }
  ];

  const challenges = [
    "Fragmented supplier base leading to procurement inefficiencies",
    "Zero brand recognition outside of Lucknow",
    "Limited customer base of around 50 small retailers and clinics",
    "Lack of a scalable value proposition for large-scale distributors",
    "Manual workflows hindering rapid expansion"
  ];

  const solutions = [
    "Unified Procurement Platform: We became a single point of contact for distributors, allowing them to manage all their procurement needs through one partner instead of dealing with 100+ individual suppliers",
    "Supplier Network Expansion: I built a robust supplier base of over 200 manufacturers, companies, and individual suppliers in just three months",
    "Automated Operations: Implemented systems to streamline inventory, sales, and distribution, allowing a small team to manage nationwide operations",
    "New Distribution Arm: Created a new business vertical to target and supply goods to small, local distributors, further increasing market penetration"
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
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Anant Enterprises</h1>
              <p className="text-xl text-primary font-medium">Scaling a Local Medicine Wholesaler into a Pan-India Venture</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-accent-green/10 text-accent-green">Featured Project</Badge>
            <Badge variant="outline">Supply Chain</Badge>
            <Badge variant="outline">Business Development</Badge>
            <Badge variant="outline">MERN Stack</Badge>
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
                Anant Enterprises, a small medicine wholesaler in Lucknow, was limited by a weak brand presence and a small, localized customer base. Despite offering high-quality, competitive products, their business was confined to a small region and a handful of buyers.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                The fragmented supply chain, with just 15 suppliers, was a major bottleneck preventing them from meeting the demands of a larger market.
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
                  Business Development & Strategy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground font-body">
                  <li>• Analyzed market gaps and developed a nationwide expansion strategy</li>
                  <li>• Personally reached out to major distribution firms and secured new partnerships</li>
                  <li>• Crafted and pitched a unique value proposition to key clients</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  Supply Chain Transformation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground font-body">
                  <li>• Expanded the supplier network from 15 to over 200 in a 3-month period</li>
                  <li>• Established the company as a single, consolidated procurement point for major distributors</li>
                  <li>• Automated key business processes to support rapid scaling</li>
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
                I transformed Anant Enterprises from a local business into a national player by strategically overhauling their supply chain and developing a new, compelling value proposition. The solution focused on eliminating procurement friction for major distribution firms and creating a robust, scalable operational model.
              </p>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground font-body text-sm leading-relaxed">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <Card key={index} className="card-elevated">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base font-heading flex items-center">
                      {tech.name.includes('MERN') && <Code className="h-4 w-4 mr-2 text-primary" />}
                      {tech.name === 'React' && <Code className="h-4 w-4 mr-2 text-primary" />}
                      {tech.name === 'Node.js' && <Code className="h-4 w-4 mr-2 text-primary" />}
                      {tech.name === 'Python' && <Code className="h-4 w-4 mr-2 text-primary" />}
                      {tech.name === 'Azure' && <Cloud className="h-4 w-4 mr-2 text-primary" />}
                      {tech.name.includes('WhatsApp') && <Users className="h-4 w-4 mr-2 text-primary" />}
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
                  <li>• <strong>125% increase</strong> in annual revenue, reaching ₹4.5 Crores</li>
                  <li>• <strong>500%+ growth</strong> in regular customer base to over 300 clients</li>
                  <li>• <strong>3% increase</strong> in EBITDA, leading to significant profit growth</li>
                  <li>• <strong>1200%+ expansion</strong> of the supplier network</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-4">Strategic Outcomes</h3>
                <ul className="space-y-3 text-muted-foreground font-body">
                  <li>• Transformed into a nationally recognized brand with strong goodwill</li>
                  <li>• Secured a sustainable, automated business model with a lean team</li>
                  <li>• Established a scalable platform for future growth and expansion</li>
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
              <h3 className="text-lg font-heading font-semibold mb-3">Domain Expertise is King</h3>
              <p className="text-primary-foreground/90 font-body">
                Understanding a business's core challenges is essential for creating a truly valuable and scalable solution.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-heading font-semibold mb-3">Supply Chain as a Product</h3>
              <p className="text-primary-foreground/90 font-body">
                In a fragmented industry, a well-managed and consolidated supply chain can be the primary value proposition.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-heading font-semibold mb-3">Relationship-Driven Growth</h3>
              <p className="text-primary-foreground/90 font-body">
                Building personal relationships with key clients and suppliers is crucial for accelerating growth and building a strong foundation.
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

export default AnantEnterprises;