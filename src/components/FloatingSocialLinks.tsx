import { MessageCircle, Linkedin, Github, Instagram, Phone, Mail, HeadphonesIcon, MessageCirclePlus } from 'lucide-react';

const FloatingSocialLinks = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://linkedin.com/in/shouryjeet",
      color: "bg-blue-600 hover:bg-blue-700",
      description: "Let's Connect on Linkedin"
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/shoury-dev",
      color: "bg-gray-800 hover:bg-gray-900",
      description: "View my code"
    },
    {
      name: "WhatsApp",
      icon: <MessageCirclePlus className="h-5 w-5" />,
      url: "https://wa.me/+917800044192",
      color: "bg-green-500 hover:bg-green-600",
      description: "Whatsapp Me"
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      url: "https://instagram.com/shouryjeet",
      color: "bg-pink-500 hover:bg-pink-600",
      description: "Follow my journey"
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      url: "mailto:shouryjeet.udyog@gmail.com",
      color: "bg-red-500 hover:bg-red-600",
      description: "Send an email"
    },
    {
      name: "Schedule Call",
      icon: <Phone className="h-5 w-5" />,
      url: "https://calendly.com/shouryjeet",
      color: "bg-purple-500 hover:bg-purple-600",
      description: "Book a consultation"
    }
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50 group">
      {/* Social Links - Hidden by default, shown on hover */}
      <div className="absolute bottom-16 right-0 flex flex-col gap-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
        {socialLinks.map((link, index) => (
          <div
            key={link.name}
            className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-8 group-hover:translate-x-0"
            style={{ 
              transitionDelay: `${index * 80}ms`
            }}
          >
            {/* Tooltip */}
            <div className="bg-gray-900/95 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-sm whitespace-nowrap shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 border border-gray-700">
              <div className="font-medium text-white">{link.name}</div>
              <div className="text-xs text-gray-300 mt-0.5">{link.description}</div>
              {/* Arrow pointing to button */}
              <div className="absolute right-0 top-1/2 transform translate-x-2 -translate-y-1/2 w-0 h-0 border-l-6 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
            </div>
            
            {/* Social Link Button */}
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.color} text-white p-3 rounded-full shadow-xl transform transition-all duration-300 hover:scale-125 hover:shadow-2xl hover:-translate-y-1 active:scale-95`}
              title={link.name}
            >
              {link.icon}
            </a>
          </div>
        ))}
      </div>

      {/* Main FAB Button */}
    <div className="relative animate-float">
      {/* Multiple Pulse Rings for better effect */}
      <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping"></div>
      <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      
      {/* Main Button */}
      <button className="relative bg-gradient-to-r from-primary via-primary-light to-primary text-white p-4 rounded-full shadow-2xl transform transition-all duration-500 hover:scale-110 hover:shadow-3xl active:scale-95 bg-animate">
        <div className="relative z-10">
          <img
            src="/profile.png"
            alt="Shouryjeet Gupta"
            className="h-10 w-10 rounded-full object-cover transition-all duration-300 group-hover:scale-110 border-2 border-white shadow"
          />
        </div>
        
        {/* Gradient overlay for better visual effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
      
      {/* Help Text with better styling */}
      <div className="absolute -top-16 right-0 bg-gray-900/95 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-sm whitespace-nowrap opacity-100 group-hover:opacity-0 transition-all duration-300 transform translate-y-0 group-hover:translate-y-2 shadow-2xl border border-gray-700">
        <div className="flex items-center gap-2">
        <HeadphonesIcon className="h-4 w-4 text-accent-green-light" />
        <span className="font-medium">How can I help you?</span>
        </div>
        <div className="text-xs text-gray-300 mt-1">Click to connect with me</div>
        <div className="absolute bottom-0 right-6 transform translate-y-2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-6 border-t-gray-900"></div>
      </div>
    </div>
      
      {/* Backdrop blur effect when hovered */}
      <div className="fixed inset-0 bg-black/5 backdrop-blur-[0.5px] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none -z-10"></div>
    </div>
  );
};

export default FloatingSocialLinks;
