import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { useLoading } from '../contexts/LoadingContext';

const RouteLoading = () => {
  const { isRouteLoading } = useLoading();

  if (!isRouteLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm"
    >
      <div className="bg-white rounded-lg shadow-2xl p-8 flex flex-col items-center min-w-[200px]">
        {/* Animated Icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="mb-4"
        >
          <div className="relative">
            <div className="w-12 h-12 border-4 border-blue-200 rounded-full"></div>
            <div className="absolute inset-0 w-12 h-12 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
            <div className="absolute inset-3 flex items-center justify-center">
              <Zap className="w-4 h-4 text-blue-600" />
            </div>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-700 font-medium text-center">Loading...</p>
          <p className="text-gray-500 text-sm text-center mt-1">Please wait</p>
        </motion.div>

        {/* Progress dots */}
        <div className="flex space-x-1 mt-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-blue-600 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default RouteLoading;
