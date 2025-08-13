import { ArrowLeft, Users, TrendingUp, Award, Code, Database, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingSocialLinks from '@/components/FloatingSocialLinks';

const Lifeverse = () => {
  const achievements = [
    { metric: "500+", description: "Volunteer Donors Onboarded" },
    { metric: "150+", description: "Successful Emergency Matches" },
    { metric: "1", description: "City Initially Impacted" },
    { metric: "3", description: "Months from Concept to Launch" }
  ];

  const technologies = [
    { name: "React", description: "Frontend user interface for seamless donor search" },
    { name: "Node.js", description: "Backend APIs for donor data and matching" },
    { name: "MongoDB", description: "Database to store donor and recipient information" },
    { name: "Agile Methodology", description: "Iterative development based on user feedback" },
    { name: "Cloud Hosting", description: "Secure and reliable platform deployment" }
  ];

  const challenges = [
    "Lack of a centralized platform for emergency blood donation",
    "Difficulty in finding specific blood types or plasma in a timely manner",
    "Building a community of volunteers without a commercial incentive",
    "Ensuring data accuracy and trustworthiness for emergency use",
    "Scaling a hyper-local platform to serve a wider geographical area"
  ];

  const solutions = [
    "Developed a community-driven platform for direct donor-recipient connections",
    "Implemented a search feature to find donors by blood type and location",
    "Partnered with a university club (YRC KIIT) to build an initial volunteer base",
    "Created an open platform where people could voluntarily register to help others",
    "Fostered community goodwill and a sense of shared responsibility"
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
              <Users className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">LifeVerse</h1>
              <p className="text-xl text-primary font-medium">A Community Platform for Emergency Blood Donors</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-accent-green/10 text-accent-green">Featured Project</Badge>
            <Badge variant="outline">Social Impact</Badge>
            <Badge variant="outline">HealthTech</Badge>
            <Badge variant="outline">Community</Badge>
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
                In medical emergencies, finding a specific blood type, platelets, or plasma donor can be a critical and time-consuming challenge. Existing blood banks may not always have the required supply, and the process of finding a willing donor is often a fragmented and stressful manual effort.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                Traditional systems lack the speed and community-driven approach needed for emergency situations, leaving patients and families scrambling to find help when every minute counts.
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
                  <Code className="h-5 w-5 mr-2 text-primary" />
                  Technical Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground font-body">
                  <li>• Conceptualized and designed the platform for LifeVerse</li>
                  <li>• Developed the platform to allow direct donor-recipient contact</li>
                  <li>• Implemented a search functionality for specific blood types</li>
                  <li>• Guided the technical stack and architecture decisions</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  Community Building
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground font-body">
                  <li>• Partnered with YRC KIIT to scale and promote the platform</li>
                  <li>• Onboarded the initial base of volunteer donors</li>
                  <li>• Fostered a sense of community to encourage open volunteering</li>
                  <li>• Built trust and credibility within the local healthcare ecosystem</li>
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
                The strategy was to build a simple, direct, and local community platform that could act as a bridge between people in need and willing donors. By creating a transparent and open system, we empowered individuals to help each other in emergencies without relying solely on traditional blood banks.
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
                      {tech.name === 'React' && <Code className="h-4 w-4 mr-2 text-primary" />}
                      {tech.name === 'Node.js' && <Code className="h-4 w-4 mr-2 text-primary" />}
                      {tech.name === 'MongoDB' && <Database className="h-4 w-4 mr-2 text-primary" />}
                      {tech.name === 'Agile Methodology' && <Users className="h-4 w-4 mr-2 text-primary" />}
                      {tech.name.includes('Cloud') && <Cloud className="h-4 w-4 mr-2 text-primary" />}
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
          <h2 className="heading-section text-center mb-12">Social Impact</h2>
          
          <Card className="card-feature p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-4">Quantifiable Results</h3>
                <ul className="space-y-3 text-muted-foreground font-body">
                  <li>• Onboarded over <strong>500 volunteer donors</strong> from the community</li>
                  <li>• Facilitated <strong>150+ emergency donations</strong> for people in need</li>
                  <li>• Successfully helped a user from Balasore find a donor in Bhubaneswar</li>
                  <li>• Received consistently positive feedback for its real-world utility</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-4">Strategic Outcomes</h3>
                <ul className="space-y-3 text-muted-foreground font-body">
                  <li>• Created a vital emergency resource for the local community</li>
                  <li>• Fostered a culture of voluntary donation and community support</li>
                  <li>• Solved a genuine problem that traditional systems often couldn't address</li>
                  <li>• Built lasting partnerships with healthcare organizations</li>
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
              <h3 className="text-lg font-heading font-semibold mb-3">Purpose-Driven Innovation</h3>
              <p className="text-primary-foreground/90 font-body">
                Solving a genuine community problem can create a highly valuable and impactful platform.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-heading font-semibold mb-3">Community Building</h3>
              <p className="text-primary-foreground/90 font-body">
                Leveraging existing organizations is a powerful way to build trust and a user base.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-heading font-semibold mb-3">Simplicity is Key</h3>
              <p className="text-primary-foreground/90 font-body">
                For an emergency-use platform, a straightforward UX is more important than complex features.
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

export default Lifeverse;