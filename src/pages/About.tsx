import { GraduationCap, Award, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingSocialLinks from '@/components/FloatingSocialLinks';
import { useEffect } from 'react';

const About = () => {
  // Set page title and meta description for SEO and sitelinks
  useEffect(() => {
    document.title = "About Shouryjeet Gupta - Tech Strategy Consultant & Business Developer";
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Shouryjeet Gupta - Tech Strategy Consultant & Business Developer with expertise in digital transformation, full-stack development, and scaling businesses. Computer Science graduate with proven leadership.');
    }
  }, []);

  const highlights = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Educational Foundation",
      description: "Computer Science major with Minor in Financial Economics, bridging technical and business domains"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Shark Tank India",
      description: "Successfully pitched innovative solutions, demonstrating entrepreneurial acumen and strategic thinking"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Leadership Experience",
      description: "Led teams of 50+ engineers across multiple projects, ensuring technical excellence and business alignment"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Business Impact",
      description: "Consistently delivered solutions that improve operational efficiency and drive measurable business outcomes"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="heading-hero mb-6">About Me</h1>
            <p className="text-lead">
              Where Technical Expertise Meets Strategic Business Thinking
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="heading-section mb-8 text-center">My Journey</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-4">
                  The Foundation: CS + Financial Economics
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  My educational journey began with a deep dive into Computer Science, where I mastered the technical foundations 
                  of software development, data structures, and system design. But I didn't stop there—recognizing the critical 
                  importance of understanding business dynamics, I pursued a Minor in Financial Economics.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed">
                  This unique combination gave me a rare perspective: the ability to see technology not just as code, but as a 
                  strategic business enabler. I learned to speak both languages—the precision of algorithms and the nuance of 
                  market dynamics.
                </p>
              </div>
              
              <div className="card-elevated p-8">
                <h4 className="font-heading font-semibold text-primary mb-4">Academic Highlights</h4>
                <ul className="space-y-2 text-muted-foreground font-body">
                  <li>• Computer Science Major - Technical Foundation</li>
                  <li>• Financial Economics Minor - Business Acumen</li>
                  <li>• Focus on Software Engineering & Systems</li>
                  <li>• Strategic Business Analysis & Market Dynamics</li>
                  <li>• Cross-functional Project Leadership</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 lg:order-1 card-elevated p-8">
                <h4 className="font-heading font-semibold text-primary mb-4">Shark Tank India Experience</h4>
                <ul className="space-y-2 text-muted-foreground font-body">
                  <li>• Successfully pitched innovative technology solutions</li>
                  <li>• Demonstrated market analysis and business strategy</li>
                  <li>• Showcased ability to communicate complex technical concepts</li>
                  <li>• Validated entrepreneurial and strategic thinking skills</li>
                </ul>
              </div>
              
              <div className="order-1 lg:order-2">
                <h3 className="text-xl font-heading font-semibold text-primary mb-4">
                  The Entrepreneurial Leap: Shark Tank India
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  Taking my ideas to Shark Tank India was a pivotal moment that tested everything I'd learned about combining 
                  technical innovation with business strategy. The experience taught me how to distill complex technical solutions 
                  into clear business value propositions.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Standing before successful entrepreneurs and investors, I learned the art of translating technical capabilities 
                  into market opportunities—a skill that now defines my approach to every consulting engagement.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-4">
                  Leading at Scale: 50+ Engineers
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  My leadership experience managing teams of 50+ engineers across multiple projects taught me that successful 
                  technology implementation isn't just about code—it's about aligning technical capabilities with business 
                  objectives while maintaining team cohesion and project momentum.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed">
                  From the MERN stack implementation in digiPharm to the healthcare innovations in LifeVerse, I've learned 
                  that the best technical solutions are those that solve real business problems while being scalable, 
                  maintainable, and aligned with organizational goals.
                </p>
              </div>
              
              <div className="card-elevated p-8">
                <h4 className="font-heading font-semibold text-primary mb-4">Leadership Philosophy</h4>
                <ul className="space-y-2 text-muted-foreground font-body">
                  <li>• Bridge technical teams with business stakeholders</li>
                  <li>• Translate complex requirements into actionable solutions</li>
                  <li>• Foster collaborative, cross-functional environments</li>
                  <li>• Ensure technical excellence serves business objectives</li>
                  <li>• Mentoring and developing technical talent</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-section text-center mb-12">What Sets Me Apart</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="card-elevated">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      {highlight.icon}
                    </div>
                    <CardTitle className="text-lg font-heading">{highlight.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {highlight.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-section mb-8">My Approach</h2>
          <p className="text-lead mb-8">
            I believe the best solutions emerge when technical excellence meets strategic business thinking.
          </p>
          <div className="card-elevated p-8 text-left">
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Every project I undertake starts with understanding the business context. What are the real challenges? 
              What outcomes matter most? How do technical decisions impact the bottom line? Only then do I dive into 
              the technical implementation.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              This dual perspective—seeing both the forest and the trees—allows me to design solutions that aren't 
              just technically sound, but strategically valuable. Whether it's optimizing supply chains at digiPharm 
              or improving healthcare accessibility through LifeVerse, I focus on delivering measurable business impact.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              My goal is always to be the bridge—helping technical teams understand business priorities, and helping 
              business stakeholders leverage technology as a strategic advantage.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Floating Social Links */}
      <FloatingSocialLinks />
    </div>
  );
};

export default About;