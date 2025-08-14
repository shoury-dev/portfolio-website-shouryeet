import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, TrendingUp, Zap, Target, BarChart3, Lightbulb } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

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

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(59,130,246,0.05)_50%,transparent_70%)]" />
          
          {/* Floating Elements */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-md mx-auto px-6">
          {/* Logo/Brand */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold text-white mb-2">
              Shouryjeet Gupta
            </h1>
            <p className="text-blue-200 text-lg font-medium">
              Tech Strategy Consultant
            </p>
          </motion.div>

          {/* Animated Icon */}
          <motion.div
            className="mb-8 relative"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="relative w-24 h-24 mx-auto">
              {/* Rotating Ring */}
              <motion.div
                className="absolute inset-0 border-4 border-blue-400/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Icon Container */}
              <div 
                className="absolute inset-2 rounded-full flex items-center justify-center"
                style={{ backgroundColor: loadingSteps[currentStep]?.color || "#3B82F6" }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    {loadingSteps[currentStep] && (
                      React.createElement(loadingSteps[currentStep].icon, {
                        className: "w-8 h-8 text-white"
                      })
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Loading Text */}
          <motion.div
            className="mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={currentStep}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-white text-lg font-medium"
              >
                {loadingSteps[currentStep]?.text || "Loading..."}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            className="w-full max-w-xs mx-auto"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <div className="h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
            <motion.p
              className="text-blue-200 text-sm mt-2 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {Math.round(progress)}%
            </motion.p>
          </motion.div>

          {/* Business Keywords Animation */}
          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {["Strategy", "Innovation", "Growth", "Technology", "Leadership"].map((keyword, i) => (
              <motion.span
                key={keyword}
                className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-blue-200 text-sm font-medium"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.4 + i * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                {keyword}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Corner Accents */}
        <div className="absolute top-4 left-4">
          <motion.div
            className="w-16 h-16 border-l-2 border-t-2 border-blue-400/50"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          />
        </div>
        <div className="absolute bottom-4 right-4">
          <motion.div
            className="w-16 h-16 border-r-2 border-b-2 border-blue-400/50"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
