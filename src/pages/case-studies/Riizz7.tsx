import { ArrowLeft, Users, TrendingUp, Award, Code, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingSocialLinks from '@/components/FloatingSocialLinks';

const Riizz7 = () => {
  const achievements = [
    { metric: "5+", description: "B2B & Corporate Partnerships" },
    { metric: "200%", description: "Estimated Brand Visibility Increase" },
    { metric: "1", description: "Stable Revenue Stream Established" },
    { metric: "10+", description: "Giveaway Campaigns Executed" }
  ];

  const technologies = [
    { name: "E-commerce Platform", description: "Website development for online t-shirt sales" },
    { name: "Social Media Marketing", description: "Tools for strategic campaigns and audience engagement" },
    { name: "Payment Gateway", description: "Secure system for processing B2C and B2B orders" },
    { name: "Analytics Tools", description: "Monitoring business stability and marketing performance" }
  ];

  const challenges = [
    "Low brand visibility and poor online presence in a competitive market",
    "Unstable and inconsistent revenue streams from a B2C-only model",
    "Vulnerability to market fluctuations due to over-reliance on a single channel",
    "Difficulty converting high-quality products into consistent sales",
    "Lack of a sustainable, long-term business strategy"
  ];

  const solutions = [
    "Pivoted the business to include B2B and corporate orders for stable revenue",
    "Initiated partnerships with major retail businesses like Ajio and Big Bazaar",
    "Developed and executed strategic marketing campaigns to boost brand visibility",
    "Organized multiple giveaways to generate brand recognition and community engagement",
    "Created a sustainable financial model with a clear runway for future growth"
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
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">riizz7</h1>
              <p className="text-xl text-primary font-medium">Stabilizing and Scaling an Anime T-shirt Business</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-accent-green/10 text-accent-green">Business Strategy</Badge>
            <Badge variant="outline">E-commerce</Badge>
            <Badge variant="outline">Fashion</Badge>
            <Badge variant="outline">B2B Sales</Badge>
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
                riizz7, an anime t-shirt e-commerce business, had high-quality products and designs but struggled with an unstable business model. Their revenue was inconsistent due to low brand visibility and an over-reliance on a single B2C market.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                The company needed a proper online presence and a strategy to create a constant, reliable revenue stream to ensure its long-term survival and growth.
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
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  Business Strategy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground font-body">
                  <li>• Identified the core problem of unstable revenue and low brand visibility</li>
                  <li>• Advised a strategic pivot from B2C to a B2B model for stability</li>
                  <li>• Coordinated outreach and secured initial B2B partnerships</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  Marketing & Growth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground font-body">
                  <li>• Devised and implemented a strategic marketing plan to boost brand recognition</li>
                  <li>• Organized and executed multiple giveaways to engage the community</li>
                  <li>• Helped establish a consistent revenue stream for a secure "runway"</li>
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
                The core of the solution was to create a stable financial foundation by diversifying revenue streams. We strategically pivoted the business to pursue B2B and corporate orders, while simultaneously boosting brand recognition to solidify the B2C side of the business.
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
                      {tech.name.includes('Platform') && <Code className="h-4 w-4 mr-2 text-primary" />}
                      {tech.name.includes('Marketing') && <Users className="h-4 w-4 mr-2 text-primary" />}
                      {tech.name.includes('Gateway') && <TrendingUp className="h-4 w-4 mr-2 text-primary" />}
                      {tech.name.includes('Analytics') && <Database className="h-4 w-4 mr-2 text-primary" />}
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
                  <li>• Secured <strong>5+ new B2B partnerships</strong> with major retailers</li>
                  <li>• Achieved <strong>stable and consistent revenue</strong> from B2B orders</li>
                  <li>• Significantly <strong>boosted brand recognition</strong> and online presence</li>
                  <li>• Established a solid foundation for future growth and expansion</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-4">Strategic Outcomes</h3>
                <ul className="space-y-3 text-muted-foreground font-body">
                  <li>• Created a diversified and resilient business model</li>
                  <li>• Positioned the brand as a reliable apparel supplier, not just a B2C store</li>
                  <li>• Built a strong runway for long-term growth and market expansion</li>
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
              <h3 className="text-lg font-heading font-semibold mb-3">Revenue Diversification</h3>
              <p className="text-primary-foreground/90 font-body">
                Relying on a single market segment is risky; multiple revenue streams create stability.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-heading font-semibold mb-3">Brand & Visibility</h3>
              <p className="text-primary-foreground/90 font-body">
                A great product is not enough; a strong online presence is crucial for e-commerce success.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-heading font-semibold mb-3">Strategic Pivot</h3>
              <p className="text-primary-foreground/90 font-body">
                True growth often comes from the courage to explore and implement new business models.
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

export default Riizz7;
