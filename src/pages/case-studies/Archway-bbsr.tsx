import { ArrowLeft, Users, TrendingUp, Award, Code, Database, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingSocialLinks from '@/components/FloatingSocialLinks';

const ArchwayBbsr = () => {
  const achievements = [
    { metric: "300+", description: "Web3 Developers Onboarded" },
    { metric: "40", description: "Days to Build Core Community" },
    { metric: "5+", description: "University Partnerships Established" },
    { metric: "10+", description: "Expert Knowledge Sessions Conducted" }
  ];

  const technologies = [
    { name: "Blockchain Technology", description: "Archway.io platform for decentralized applications" },
    { name: "Community Management", description: "Discord, Telegram, and social media engagement tools" },
    { name: "Content Creation", description: "Educational materials and developer resources" },
    { name: "Event Management", description: "Workshops, hackathons, and knowledge sharing sessions" }
  ];

  const challenges = [
    "Limited awareness of Web3 and blockchain technology in the Indian market",
    "Scarcity of experienced Web3 and DAO developers in the region",
    "Need to educate developers about emerging opportunities in decentralized technologies",
    "Building trust and credibility for a new international platform in local markets",
    "Creating sustainable engagement in an unsaturated but resource-limited market"
  ];

  const solutions = [
    "Built a diverse foundational team with expertise in social media, design, partnerships, and marketing",
    "Organized expert-led knowledge sharing sessions featuring both company and external specialists",
    "Developed a scalable community building model that could be replicated across universities",
    "Created educational content to bridge the knowledge gap in Web3 development",
    "Established strategic partnerships with universities and local tech communities"
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
              <Globe className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Archway Bhubaneswar</h1>
              <p className="text-xl text-primary font-medium">Building India's First Web3 Developer Community for Archway.io</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-accent-green/10 text-accent-green">Community Leadership</Badge>
            <Badge variant="outline">Web3</Badge>
            <Badge variant="outline">Blockchain</Badge>
            <Badge variant="outline">Developer Community</Badge>
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
              <h2 className="heading-section mb-6">The Challenge</h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                Archway.io, a leading blockchain and Web3 company, wanted to expand into the Indian market, specifically targeting the eastern and southeastern regions. The challenge was to build a thriving Web3 developer community in a market where blockchain technology awareness was limited.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                Starting from Bhubaneswar, we needed to educate developers about Web3 opportunities, build trust in a new platform, and create a sustainable community that could serve as a model for expansion across India.
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
                  Community Manager
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground font-body">
                  <li>• Led the Archway Bhubaneswar community as the primary community manager</li>
                  <li>• Built and managed a diverse team with expertise in social media, design, and partnerships</li>
                  <li>• Coordinated with senior leadership to execute regional expansion strategy</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  Growth & Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground font-body">
                  <li>• Organized expert knowledge sharing sessions and educational workshops</li>
                  <li>• Developed scalable community building models for university expansion</li>
                  <li>• Facilitated developer onboarding and platform adoption initiatives</li>
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
                We recognized that Web3 represented an unsaturated market with immense opportunities but limited resources. Our strategy focused on education-first community building, bringing together experts to share knowledge and demonstrate the real-world potential of decentralized technologies.
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
                      {tech.name.includes('Blockchain') && <Code className="h-4 w-4 mr-2 text-primary" />}
                      {tech.name.includes('Community') && <Users className="h-4 w-4 mr-2 text-primary" />}
                      {tech.name.includes('Content') && <Database className="h-4 w-4 mr-2 text-primary" />}
                      {tech.name.includes('Event') && <Globe className="h-4 w-4 mr-2 text-primary" />}
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
          <h2 className="heading-section text-center mb-12">Community Impact</h2>
          
          <Card className="card-feature p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-4">Quantifiable Results</h3>
                <ul className="space-y-3 text-muted-foreground font-body">
                  <li>• Built a <strong>300+ developer community</strong> in just 40 days</li>
                  <li>• Successfully onboarded developers to the <strong>Archway.io platform</strong></li>
                  <li>• Established <strong>sustainable engagement</strong> and platform adoption</li>
                  <li>• Created a <strong>replicable model</strong> for expansion across multiple universities</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-4">Strategic Outcomes</h3>
                <ul className="space-y-3 text-muted-foreground font-body">
                  <li>• Positioned Archway.io as a leading Web3 platform in the Indian market</li>
                  <li>• Demonstrated the viability of Web3 education and community building in India</li>
                  <li>• Created a foundation for regional expansion across eastern and southeastern India</li>
                  <li>• Bridged the knowledge gap between global Web3 opportunities and local talent</li>
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
              <h3 className="text-lg font-heading font-semibold mb-3">Education-First Approach</h3>
              <p className="text-primary-foreground/90 font-body">
                In emerging tech markets, knowledge sharing and expert sessions are crucial for building trust and adoption.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-heading font-semibold mb-3">Team Diversity</h3>
              <p className="text-primary-foreground/90 font-body">
                Building a strong foundational team with diverse skills creates the foundation for rapid community growth.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-heading font-semibold mb-3">Scalable Models</h3>
              <p className="text-primary-foreground/90 font-body">
                Creating replicable processes enables successful expansion across different regions and institutions.
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

const ArchwayBbsrCaseStudy = ArchwayBbsr;

export default ArchwayBbsrCaseStudy;