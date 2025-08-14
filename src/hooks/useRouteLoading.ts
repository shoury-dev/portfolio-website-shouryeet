import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useRouteLoading = (minLoadingTime: number = 500) => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Start loading when route changes
    setIsLoading(true);

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, minLoadingTime);

    return () => clearTimeout(timer);
  }, [location.pathname, minLoadingTime]);

  return isLoading;
};

export default useRouteLoading;
