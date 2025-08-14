import React, { useState, useEffect } from 'react';
import { Briefcase, TrendingUp, Zap, Target, BarChart3, Lightbulb } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const loadingSteps = [
    { icon: Briefcase, text: "Loading Portfolio...", color: "#3B82F6" },
    { icon: TrendingUp, text: "Analyzing Business Data...", color: "#10B981" },
    { icon: Target, text: "Strategizing Solutions...", color: "#8B5CF6" },
    { icon: BarChart3, text: "Optimizing Performance...", color: "#F59E0B" },
    { icon: Lightbulb, text: "Finalizing Innovation...", color: "#EF4444" },
    { icon: Zap, text: "Ready to Consult!", color: "#06B6D4" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsExiting(true);
          setTimeout(onLoadingComplete, 800);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  useEffect(() => {
    const stepTimer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= loadingSteps.length - 1) {
          clearInterval(stepTimer);
          return prev;
        }
        return prev + 1;
      });
    }, 800);

    return () => clearInterval(stepTimer);
  }, []);

  const CurrentIcon = loadingSteps[currentStep]?.icon;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-800 ease-in-out ${
        isExiting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)'
      }}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(59,130,246,0.3), transparent 50%)'
          }}
        />
        
        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-loading-pulse"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-md mx-auto px-6">
        {/* Logo/Brand */}
        <div className="mb-8 animate-[fadeInUp_0.6s_ease-out]">
          <h1 className="text-4xl font-bold text-white mb-2">
            Shouryjeet Gupta
          </h1>
          <p className="text-blue-200 text-lg font-medium">
            Tech Strategy Consultant
          </p>
        </div>

        {/* Animated Icon */}
        <div className="mb-8 relative animate-[scaleIn_0.5s_ease-out_0.3s_both]">
          <div className="relative w-24 h-24 mx-auto">
            {/* Rotating Ring */}
            <div className="absolute inset-0 border-4 border-blue-400/30 rounded-full animate-spin" 
                 style={{ animationDuration: '3s' }} />
            
            {/* Icon Container */}
            <div 
              className="absolute inset-2 rounded-full flex items-center justify-center transition-all duration-300"
              style={{ backgroundColor: loadingSteps[currentStep]?.color || "#3B82F6" }}
            >
              <div 
                key={currentStep}
                className="animate-[iconSpin_0.3s_ease-in-out]"
              >
                {CurrentIcon && <CurrentIcon className="w-8 h-8 text-white" />}
              </div>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-8 animate-[fadeInUp_0.3s_ease-out_0.5s_both]">
          <p 
            key={currentStep}
            className="text-white text-lg font-medium animate-[textFade_0.3s_ease-in-out]"
          >
            {loadingSteps[currentStep]?.text || "Loading..."}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-xs mx-auto animate-[fadeInUp_0.5s_ease-out_0.7s_both]">
          <div className="h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-blue-200 text-sm mt-2 font-medium">
            {Math.round(progress)}%
          </p>
        </div>

        {/* Business Keywords Animation */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 animate-[fadeInUp_0.5s_ease-out_1.2s_both]">
          {["Strategy", "Innovation", "Growth", "Technology", "Leadership"].map((keyword, i) => (
            <span
              key={keyword}
              className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-blue-200 text-sm font-medium 
                         animate-[scaleIn_0.3s_ease-out_both] hover:scale-105 transition-transform cursor-default"
              style={{ animationDelay: `${1.4 + i * 0.1}s` }}
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-4 left-4">
        <div className="w-16 h-16 border-l-2 border-t-2 border-blue-400/50 animate-[drawBorder_1s_ease-out_0.8s_both]" />
      </div>
      <div className="absolute bottom-4 right-4">
        <div className="w-16 h-16 border-r-2 border-b-2 border-blue-400/50 animate-[drawBorder_1s_ease-out_0.8s_both]" />
      </div>

      {/* CSS Animations - moved to index.css or create a separate CSS file */}
    </div>
  );
};

export default LoadingScreen;
