import { Code, Database, Cloud, Users, BarChart, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingSocialLinks from '@/components/FloatingSocialLinks';

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Python", level: 90, description: "Data analysis, automation, backend development" },
        { name: "SQL", level: 85, description: "Database design, optimization, complex queries" },
        { name: "MERN Stack", level: 88, description: "Full-stack web development, modern JavaScript" },
        { name: "AWS", level: 80, description: "Cloud architecture, deployment, scaling solutions" },
        { name: "React/Node.js", level: 85, description: "Frontend frameworks, backend services" },
        { name: "Data Analysis", level: 82, description: "Business intelligence, statistical analysis" }
      ]
    },
    {
      title: "Project Management",
      icon: <Users className="h-6 w-6" />,
      skills: [
        { name: "Agile Methodologies", level: 92, description: "Scrum master, sprint planning, iterative development" },
        { name: "Jira & Project Tools", level: 88, description: "Workflow management, team coordination" },
        { name: "Cross-functional Leadership", level: 90, description: "Led 50+ engineers across multiple projects" },
        { name: "Stakeholder Management", level: 85, description: "Business alignment, requirement gathering" },
        { name: "Team Building", level: 87, description: "Mentoring, culture development, performance optimization" }
      ]
    },
    {
      title: "Business Analysis",
      icon: <BarChart className="h-6 w-6" />,
      skills: [
        { name: "Strategic Planning", level: 85, description: "Long-term vision, roadmap development" },
        { name: "Data-Driven Decision Making", level: 88, description: "Analytics, KPI tracking, insights generation" },
        { name: "Market Analysis", level: 80, description: "Competitive research, opportunity identification" },
        { name: "Financial Economics", level: 82, description: "Cost-benefit analysis, ROI optimization" },
        { name: "Process Optimization", level: 86, description: "Workflow improvement, efficiency gains" }
      ]
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      description: "Cloud architecture and scalable solutions design"
    },
    {
      title: "Certified Scrum Master (CSM)",
      issuer: "Scrum Alliance",
      year: "2022",
      description: "Agile project management and team leadership"
    },
    {
      title: "Google Analytics Certified",
      issuer: "Google",
      year: "2023",
      description: "Data analysis and business intelligence"
    }
  ];

  const tools = [
    "Git & GitHub", "Docker", "Kubernetes", "MongoDB", "PostgreSQL", 
    "Redis", "Jira", "Confluence", "Slack", "Figma", "Tableau", 
    "Google Analytics", "Postman", "VS Code", "IntelliJ IDEA"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-hero mb-6">Skills & Expertise</h1>
          <p className="text-lead">
            A comprehensive toolkit for bridging technology and business strategy
          </p>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-4 mb-8">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    {category.icon}
                  </div>
                  <h2 className="heading-section">{category.title}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.skills.map((skill, skillIndex) => (
                    <Card key={skillIndex} className="card-elevated">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg font-heading">{skill.name}</CardTitle>
                            <CardDescription className="mt-1">
                              {skill.description}
                            </CardDescription>
                          </div>
                          <span className="text-sm font-medium text-primary">
                            {skill.level}%
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Progress value={skill.level} className="h-2" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-section mb-4">Certifications & Credentials</h2>
            <p className="text-lead">
              Formally recognized expertise in key domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="card-feature text-center">
                <CardHeader>
                  <div className="mx-auto p-4 bg-accent-green/10 rounded-full text-accent-green w-fit mb-4">
                    <Lightbulb className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-lg font-heading">{cert.title}</CardTitle>
                  <CardDescription>
                    {cert.issuer} • {cert.year}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-section mb-4">Tools & Technologies</h2>
            <p className="text-lead">
              The practical toolkit I use daily to deliver results
            </p>
          </div>
          
          <div className="card-elevated p-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {tools.map((tool, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-body font-medium
                           hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
            My Methodology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Database className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-2">Analyze</h3>
              <p className="text-primary-foreground/90 font-body">
                Deep dive into business requirements and technical constraints
              </p>
            </div>
            <div className="text-center">
              <Code className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-2">Architect</h3>
              <p className="text-primary-foreground/90 font-body">
                Design scalable solutions that align with business objectives
              </p>
            </div>
            <div className="text-center">
              <BarChart className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-2">Optimize</h3>
              <p className="text-primary-foreground/90 font-body">
                Continuously improve performance and business impact
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

export default Skills;