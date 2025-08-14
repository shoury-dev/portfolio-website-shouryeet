import { Mail, Linkedin, Github, MapPin, PhoneCallIcon, X, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Site Navigation */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Explore</h3>
            <div className="space-y-3">
              <Link 
                to="/" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-body"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-body"
              >
                About Me
              </Link>
              <Link 
                to="/skills" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-body"
              >
                Skills & Expertise
              </Link>
              <Link 
                to="/case-studies" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-body"
              >
                Case Studies
              </Link>
              <Link 
                to="/contact" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-body"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <a href="mailto:shouryjeet.udyog@gmail.com" className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Mail className="h-4 w-4" />
                <span className="font-body">shouryjeet.udyog@gmail.com</span>
              </a>
              <a href="tel:+917800044192" className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <div className="flex items-center space-x-2 text-primary-foreground/80">
                  <PhoneCallIcon className="h-4 w-4" />
                  <span className="font-body">+91-7800044192</span>
                </div>
              </a>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span className="font-body">Available for remote consulting</span>
              </div>
            </div>
          </div>

          {/* Professional Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Professional Links</h3>
            <div className="space-y-3">
              <a 
                href="https://linkedin.com/in/shouryjeetgupta" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span className="font-body">LinkedIn</span>
              </a>
              <a 
                href="https://github.com/shoury-dev/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Github className="h-4 w-4" />
                <span className="font-body">GitHub</span>
              </a>
              <a 
                href="https://x.com/shouryjeetgupta" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <X className="h-4 w-4" />
                <span className="font-body">X</span>
              </a>
              <a 
                href="https://instagram.com/shouryjeetgupta" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-4 w-4" />
                <span className="font-body">Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Contact */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Let's Collaborate</h3>
            <p className="text-primary-foreground/80 font-body mb-4">
              Ready to discuss your next project? I'd love to help bridge the gap between technology and business strategy.
            </p>
            <Button 
              variant="secondary" 
              asChild
              className="w-full md:w-auto"
            >
              <a href="mailto:shouryjeet.udyog@gmail.com">
                Start a Conversation
              </a>
            </Button>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 font-body text-sm">
              © 2025 Shouryjeet Gupta. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 font-body text-sm mt-2 md:mt-0">
              Technical Consulting • Business Analysis • Strategic Solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;