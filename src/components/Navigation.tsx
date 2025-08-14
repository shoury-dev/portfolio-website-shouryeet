import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    // { name: 'Projects', href: '/projects' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const handleResumeDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Shouryjeet_Gupta_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
            <Link to="/" className="flex items-center">
            <span
              className="text-xl font-heading font-bold text-primary animate-fade-in"
              style={{
              animation: 'fadeIn 0.8s ease'
              }}
            >
              Shouryjeet Gupta
            </span>
            </Link>
            <style>
            {`
              @keyframes fadeIn {
              from { opacity: 0; transform: translateY(-10px);}
              to { opacity: 1; transform: translateY(0);}
              }
              .animate-fade-in {
              animation: fadeIn 0.8s ease;
              }
            `}
            </style>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                            style={{
              animation: 'fadeIn 0.8s ease'
              }}
                to={item.href}
                className={`font-body font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Resume Download Button */}
            <Button
              onClick={handleResumeDownload}
              variant="outline"
              size="sm"
              className="font-body font-medium transition-all duration-200 hover:bg-primary hover:text-primary-foreground border-primary/20 hover:border-primary"
              style={{
                animation: 'fadeIn 0.8s ease'
              }}
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md font-body font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-primary hover:bg-muted'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Resume Download Button */}
              <div className="px-3 py-2">
                <Button
                  onClick={() => {
                    handleResumeDownload();
                    setIsOpen(false);
                  }}
                  variant="outline"
                  size="sm"
                  className="w-full font-body font-medium transition-all duration-200 hover:bg-primary hover:text-primary-foreground border-primary/20 hover:border-primary"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;