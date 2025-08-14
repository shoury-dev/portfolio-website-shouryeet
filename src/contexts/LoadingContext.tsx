import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LoadingContextType {
  isRouteLoading: boolean;
  setRouteLoading: (loading: boolean) => void;
  startRouteTransition: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [isRouteLoading, setIsRouteLoading] = useState(false);

  const setRouteLoading = (loading: boolean) => {
    setIsRouteLoading(loading);
  };

  const startRouteTransition = () => {
    setIsRouteLoading(true);
    // Auto-hide after maximum loading time
    setTimeout(() => {
      setIsRouteLoading(false);
    }, 1500);
  };

  return (
    <LoadingContext.Provider value={{ 
      isRouteLoading, 
      setRouteLoading, 
      startRouteTransition 
    }}>
      {children}
    </LoadingContext.Provider>
  );
};
