import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreenSimple";
import RouteLoading from "./components/RouteLoading";
import { LoadingProvider } from "./contexts/LoadingContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Skills from "./pages/Skills";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import DigiPharm from "./pages/case-studies/DigiPharm";
import AnantEnterprises from "./pages/case-studies/Anantenterprises";
import Lifeverse from "./pages/case-studies/Lifeverse";
import Riizz7 from "./pages/case-studies/Riizz7";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import ArchwayBbsrCaseStudy from "./pages/case-studies/Archway-bbsr";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has seen the loading screen before
    const hasSeenLoading = localStorage.getItem('hasSeenPortfolioLoading');
    
    if (hasSeenLoading) {
      // Skip loading screen for returning visitors
      setIsLoading(false);
      return;
    }

    // Show loading screen for first-time visitors
    const timer = setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem('hasSeenPortfolioLoading', 'true');
    }, 4000); // 4 seconds for first-time experience

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    localStorage.setItem('hasSeenPortfolioLoading', 'true');
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <LoadingProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <RouteLoading />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="/projects" element={<Projects />} /> */}
              <Route path="/skills" element={<Skills />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/case-studies/digipharm" element={<DigiPharm />} />
              <Route path="/case-studies/anant-enterprises" element={<AnantEnterprises />} />
              <Route path="/case-studies/lifeverse" element={<Lifeverse />} />
              <Route path="/case-studies/riizz7" element={<Riizz7 />} />
              <Route path="/case-studies/archway-bbsr" element={<ArchwayBbsrCaseStudy />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LoadingProvider>
    </QueryClientProvider>
  );
};

export default App;
