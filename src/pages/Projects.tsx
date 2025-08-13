import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github, Globe, Code, Database, Cloud, Smartphone, TrendingUp, Users, Zap, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingSocialLinks from '@/components/FloatingSocialLinks';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "digiPharm",
      subtitle: "Pharmacy Procurement Management System",
      description: "A comprehensive MERN stack solution that revolutionized pharmacy supply chain management. Led a team of 50+ engineers to develop an enterprise-grade platform with real-time inventory tracking, automated procurement workflows, and advanced analytics.",
      category: "Enterprise Solution",
      role: "Technical Lead & Business Analyst",
      duration: "18 months",
      teamSize: "50+",
      status: "Live",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "AWS", "Docker", "Redis"],
      features: [
        "Real-time inventory management",
        "Automated procurement workflows", 
        "Advanced analytics dashboard",
        "Multi-vendor integration",
        "Compliance tracking"
      ],
      impact: {
        efficiency: "20% improvement in supply chain efficiency",
        cost: "15% reduction in procurement costs",
        time: "40% faster order processing"
      },
      links: {
        demo: "/case-studies/digipharm",
        github: null
      },
      icon: <TrendingUp className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
      featured: true
    },
    {
      id: 2,
      title: "LifeVerse",
      subtitle: "Comprehensive Health Platform",
      description: "A healthcare technology platform designed to bridge accessibility gaps through strategic implementation. Developed patient management systems, telemedicine capabilities, and health analytics to improve patient outcomes.",
      category: "Healthcare Tech",
      role: "Full-Stack Developer & Strategy Consultant",
      duration: "12 months",
      teamSize: "15",
      status: "Live",
      technologies: ["React", "Node.js", "PostgreSQL", "Healthcare APIs", "Socket.io", "AWS"],
      features: [
        "Patient management system",
        "Telemedicine integration",
        "Health data analytics",
        "Appointment scheduling",
        "Medical records management"
      ],
      impact: {
        accessibility: "Improved healthcare accessibility for rural areas",
        satisfaction: "85% patient satisfaction rate",
        efficiency: "30% reduction in administrative tasks"
      },
      links: {
        demo: "/case-studies/lifeverse",
        github: null
      },
      icon: <Users className="h-6 w-6" />,
      color: "from-green-500 to-emerald-500",
      featured: true
    },
    {
      id: 3,
      title: "Anant Enterprises",
      subtitle: "Medicine Wholesaler Transformation",
      description: "Transformed a small medicine wholesaler from Lucknow into a national player through strategic supply chain expansion and business development. Achieved 125% increase in annual turnover and 500%+ growth in customer base.",
      category: "Business Development",
      role: "Business Development & Strategy Consultant",
      duration: "12 months",
      teamSize: "Small core team",
      status: "Live",
      technologies: ["MERN Stack", "React", "Node.js", "Python", "Azure", "WhatsApp Automation"],
      features: [
        "Supply chain network expansion",
        "Automated business processes",
        "Distributor relationship management",
        "Market penetration strategy",
        "Revenue optimization systems"
      ],
      impact: {
        revenue: "125% increase in annual turnover to ₹4.5 Crores",
        customers: "500%+ growth in customer base to 300+ clients",
        suppliers: "1200%+ expansion from 15 to 200+ suppliers"
      },
      links: {
        demo: "/case-studies/anant-enterprises",
        github: null
      },
      icon: <TrendingUp className="h-6 w-6" />,
      color: "from-emerald-500 to-green-500",
      featured: false
    },
    {
      id: 4,
      title: "Loop Me",
      subtitle: "Professional Networking Platform",
      description: "An innovative networking solution that combines technical excellence with business development insights. Built to enhance professional connectivity and collaboration with intelligent matching algorithms and business intelligence features.",
      category: "Social Platform",
      role: "Technical Architect & Business Developer",
      duration: "10 months",
      teamSize: "8",
      status: "Live",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Machine Learning", "AWS"],
      features: [
        "Intelligent matching algorithms",
        "Real-time messaging",
        "Business intelligence dashboard",
        "Event management system",
        "Professional portfolio showcase"
      ],
      impact: {
        engagement: "75% user engagement rate",
        connections: "10,000+ professional connections made",
        growth: "200% month-over-month user growth"
      },
      links: {
        demo: "/case-studies/loop-me",
        github: null
      },
      icon: <Code className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
      featured: false
    },
    {
      id: 5,
      title: "EcoTrack Analytics",
      subtitle: "Environmental Data Management System",
      description: "A data-driven platform for environmental monitoring and sustainability tracking. Developed advanced analytics capabilities for carbon footprint analysis, resource optimization, and compliance reporting.",
      category: "Analytics Platform",
      role: "Data Architect & Full-Stack Developer",
      duration: "8 months",
      teamSize: "6",
      status: "Live",
      technologies: ["Python", "Django", "React", "PostgreSQL", "D3.js", "Machine Learning"],
      features: [
        "Carbon footprint tracking",
        "Resource optimization algorithms",
        "Compliance reporting",
        "Interactive data visualizations",
        "Predictive analytics"
      ],
      impact: {
        reduction: "25% reduction in operational carbon footprint",
        efficiency: "18% improvement in resource utilization",
        compliance: "100% regulatory compliance achieved"
      },
      links: {
        demo: "#",
        github: "#"
      },
      icon: <Database className="h-6 w-6" />,
      color: "from-emerald-500 to-teal-500",
      featured: false
    },
    {
      id: 6,
      title: "CloudOps Manager",
      subtitle: "DevOps Automation Platform",
      description: "A comprehensive DevOps automation platform that streamlines deployment pipelines, infrastructure management, and monitoring. Built to reduce deployment time and improve system reliability.",
      category: "DevOps Tool",
      role: "DevOps Engineer & System Architect",
      duration: "14 months",
      teamSize: "12",
      status: "Live",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "React", "Python"],
      features: [
        "Automated CI/CD pipelines",
        "Infrastructure as Code",
        "Real-time monitoring",
        "Auto-scaling capabilities",
        "Cost optimization tools"
      ],
      impact: {
        deployment: "80% faster deployment times",
        uptime: "99.9% system uptime achieved",
        cost: "30% reduction in infrastructure costs"
      },
      links: {
        demo: "#",
        github: "#"
      },
      icon: <Cloud className="h-6 w-6" />,
      color: "from-orange-500 to-red-500",
      featured: false
    },
    {
      id: 7,
      title: "SmartFinance Mobile",
      subtitle: "Personal Finance Management App",
      description: "A mobile-first personal finance application with AI-powered insights, budget tracking, and investment recommendations. Focused on making financial planning accessible and intuitive for everyday users.",
      category: "Mobile App",
      role: "Mobile Developer & UX Designer",
      duration: "6 months",
      teamSize: "4",
      status: "Development",
      technologies: ["React Native", "Node.js", "MongoDB", "AI/ML", "Stripe API"],
      features: [
        "AI-powered financial insights",
        "Budget tracking and alerts",
        "Investment recommendations",
        "Expense categorization",
        "Goal setting and tracking"
      ],
      impact: {
        users: "5,000+ beta users",
        savings: "Average 15% increase in user savings",
        engagement: "Daily active user rate of 60%"
      },
      links: {
        demo: "#",
        github: "#"
      },
      icon: <Smartphone className="h-6 w-6" />,
      color: "from-indigo-500 to-blue-500",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Live':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Live</Badge>;
      case 'Development':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">In Development</Badge>;
      case 'Planning':
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Planning</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const ProjectCard = ({ project, featured = false }: { project: any, featured?: boolean }) => (
    <Card className="card-feature group h-full">
      <CardHeader>
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} text-white`}>
            {project.icon}
          </div>
          <div className="flex items-center gap-2">
            {getStatusBadge(project.status)}
            <div className="flex items-center gap-1">
              {project.links.github && (
                <Button variant="ghost" size="sm" asChild className="h-8 w-8 p-0">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              )}
              <Button variant="ghost" size="sm" asChild className="h-8 w-8 p-0">
                <Link to={project.links.demo}>
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <CardTitle className="text-xl font-heading">{project.title}</CardTitle>
            <Badge variant="outline" className="text-xs">{project.category}</Badge>
          </div>
          <CardDescription className="text-primary font-medium">
            {project.subtitle}
          </CardDescription>
          <CardDescription className="text-base leading-relaxed">
            {project.description}
          </CardDescription>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Project Details */}
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <p className="font-medium text-primary mb-1">Role</p>
            <p className="text-muted-foreground">{project.role}</p>
          </div>
          <div>
            <p className="font-medium text-primary mb-1">Duration</p>
            <p className="text-muted-foreground">{project.duration}</p>
          </div>
          <div>
            <p className="font-medium text-primary mb-1">Team Size</p>
            <p className="text-muted-foreground">{project.teamSize} people</p>
          </div>
        </div>

        {/* Technologies */}
        <div>
          <p className="font-medium text-primary mb-3">Technologies Used</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div>
          <p className="font-medium text-primary mb-3">Key Features</p>
          <ul className="space-y-2">
            {project.features.slice(0, featured ? 5 : 3).map((feature: string, index: number) => (
              <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Impact Metrics */}
        <div>
          <p className="font-medium text-primary mb-3">Key Impact</p>
          <div className="space-y-2">
            {Object.entries(project.impact).map(([key, value], index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <Award className="h-4 w-4 text-accent-green flex-shrink-0" />
                <span className="text-muted-foreground">{String(value)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <Button asChild className="w-full btn-outline">
            <Link to={project.links.demo}>
              {project.links.demo.startsWith('/case-studies') ? 'View Case Study' : 'View Project'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="heading-hero mb-6">Projects Portfolio</h1>
            <p className="text-lead max-w-4xl mx-auto">
              Explore my technical projects where strategic thinking meets innovative development. 
              Each project demonstrates my ability to deliver scalable solutions that drive business value 
              and solve real-world challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="heading-section mb-4 flex items-center gap-3">
              <Zap className="h-8 w-8 text-primary" />
              Featured Tech Projects
            </h2>
            <p className="text-lead">
              Core technology projects that showcase full-stack development expertise and innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="heading-section mb-4">Additional Projects</h2>
            <p className="text-lead">
              A diverse collection of business development, consulting, and technical projects demonstrating various skills and problem-solving approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-primary-foreground/90 font-body leading-relaxed mb-8">
            Have a project idea or looking for a technical partner who combines strategic thinking with hands-on development? 
            I'd love to discuss how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
              <a href="mailto:shouryjeet@example.com">
                Start a Conversation <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4">
              <Link to="/case-studies">
                View Detailed Case Studies
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

export default Projects;