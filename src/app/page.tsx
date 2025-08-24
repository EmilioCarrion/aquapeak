"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import SocialProofSection from "@/components/SocialProofSection";
import ComparisonSection from "@/components/ComparisonSection";
import UrgencySection from "@/components/UrgencySection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import ExitIntentPopup from "@/components/ExitIntentPopup";

import {
  Star,
  Mountain,
  Droplets,
  Shield,
  Feather,
  Wrench,
  Users,
  CheckCircle,
  X,
} from "lucide-react";

export default function AquaPeakLanding() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 45,
  });

  const [showExitIntent, setShowExitIntent] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowExitIntent(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  const testimonials = [
    {
      name: "Carlos Mendoza",
      role: "Guía de Alta Montaña",
      image: "/mountain-guide-portrait.png",
      rating: 5,
      text: "Después de 15 años guiando en los Andes, puedo decir que AquaPeak es la única botella que realmente resiste las condiciones extremas.",
    },
    {
      name: "Ana Rodríguez",
      role: "Montañista Profesional",
      image: "/female-mountaineer-portrait.png",
      rating: 5,
      text: "Subí el Aconcagua con mi AquaPeak. Ni una sola fuga a 6,000m de altitud. Increíble calidad.",
    },
    {
      name: "Miguel Torres",
      role: "Aventurero",
      image: "/male-hiker-portrait.png",
      rating: 5,
      text: "La mejor inversión para mis aventuras. Ligera, resistente y mantiene el agua fría por horas.",
    },
  ];

  const features = [
    {
      icon: <Mountain className="h-8 w-8" />,
      title: "Anti-Altitud",
      description: "Sellado hermético hasta 4000m",
      detail:
        "Tecnología de válvula especial que mantiene la presión interna estable",
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Termo-Smart",
      description: "24h frío, 12h caliente",
      detail: "Doble pared de acero inoxidable con aislamiento al vacío",
    },
    {
      icon: <Feather className="h-8 w-8" />,
      title: "Ultra-Light",
      description: "Solo 180g, capacidad 750ml",
      detail: "Diseño optimizado sin comprometer la resistencia",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Titanium-Grade",
      description: "Resistente a caídas y golpes",
      detail: "Aleación especial que soporta impactos extremos",
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Easy-Clean",
      description: "Boca ancha, desmontable 100%",
      detail: "Limpieza profunda en segundos, sin rincones ocultos",
    },
  ];

  return (
    <div className="min-h-screen bg-hero-gradient">
      <Header />
      <HeroSection />
      <ProblemSolutionSection />
      <FeaturesSection features={features} />
      <SocialProofSection testimonials={testimonials} />
      <ComparisonSection />
      <UrgencySection timeLeft={timeLeft} />
      <GuaranteeSection />
      <FinalCTASection />
      <Footer />
      <ExitIntentPopup showExitIntent={showExitIntent} setShowExitIntent={setShowExitIntent} />
    </div>
  );
}