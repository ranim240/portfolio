import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Ranim Khairallah";
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      role="banner"
    >
      {/* Advanced Animated Background with Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-background"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
      
      {/* Mouse-following spotlight effect */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none transition-all duration-500 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(214,31,105,0.15) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }}
      ></div>
      
      {/* Animated Gradient Orbs - Enhanced */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Particle-like dots */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${4 + Math.random() * 4}s`
          }}
        ></div>
      ))}
      
      {/* Floating Geometric Shapes - Enhanced */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-primary/30 rounded-lg animate-float backdrop-blur-sm" style={{ animationDelay: '0s' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-lg"></div>
      </div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-purple-500/30 rounded-full animate-float backdrop-blur-sm" style={{ animationDelay: '1s' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full"></div>
      </div>
      <div className="absolute bottom-1/4 left-1/3 w-12 h-12 border-2 border-primary/30 rotate-45 animate-float backdrop-blur-sm" style={{ animationDelay: '2s' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
      </div>
      <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border-2 border-purple-500/30 rounded-lg animate-float backdrop-blur-sm" style={{ animationDelay: '1.5s' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-lg"></div>
      </div>
      
      {/* Hexagon patterns */}
      <div className="absolute top-10 right-1/4 w-16 h-16 border border-primary/20 animate-spin-slow">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full border border-primary/20 rotate-60"></div>
        </div>
      </div>
      <div className="absolute bottom-20 left-1/4 w-20 h-20 border border-purple-500/20 animate-spin-slow" style={{ animationDelay: '1s' }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full border border-purple-500/20 rotate-60"></div>
        </div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
      
      {/* Scanning line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-scan"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Typing Animation Text with Advanced Effects */}
          <div className="min-h-[200px] flex items-center justify-center">
            <div className="relative group">
              {/* Multiple glow layers for depth */}
              <div className="absolute inset-0 blur-3xl opacity-40 animate-pulse">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-roboto">
                  <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
                    {displayedText}
                  </span>
                </h1>
              </div>
              
              <div className="absolute inset-0 blur-xl opacity-60">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-roboto">
                  <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
                    {displayedText}
                  </span>
                </h1>
              </div>
              
              {/* Animated border glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity animate-gradient bg-[length:200%_auto]"></div>
              
              {/* Main text with enhanced styling */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-roboto relative">
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] drop-shadow-[0_0_30px_rgba(214,31,105,0.3)]">
                    {displayedText}
                  </span>
                  {!isTypingComplete && (
                    <span className="inline-block w-1 h-[0.8em] bg-primary animate-pulse ml-1 align-middle"></span>
                  )}
                  
                  {/* Sparkle effects */}
                  {isTypingComplete && (
                    <>
                      <span className="absolute -top-4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping"></span>
                      <span className="absolute -top-2 right-1/4 w-1.5 h-1.5 bg-purple-500 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></span>
                      <span className="absolute -bottom-4 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-ping" style={{ animationDelay: '1s' }}></span>
                    </>
                  )}
                </span>
              </h1>
              
              {/* Underline effect */}
              {isTypingComplete && (
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 animate-pulse"></div>
              )}
            </div>
          </div>
          
          {/* Content appears after typing with staggered animations */}
          <div className={`transition-all duration-1000 space-y-6 ${isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className={`text-base md:text-xl font-medium text-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
              Élève-ingénieure en informatique | HPC, Big Data (ENSIT / ENSEEIHT - M2 PSMSC)
            </p>
            
            <p className={`text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-700 ${isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '400ms' }}>
              À la recherche d'un stage de fin d'études (PFE) de 6 mois à partir de février 2027.
            </p>
            
            {/* Buttons with stagger */}
            <div className={`flex flex-wrap gap-4 justify-center transition-all duration-700 ${isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '600ms' }}>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 text-primary-foreground shadow-xl hover:shadow-glow hover:scale-105 transition-all duration-300 group"
                size="lg"
                aria-label="Get in touch"
              >
                <i className="fas fa-envelope mr-2 group-hover:rotate-12 transition-transform"></i>
                Get In Touch
              </Button>
              
              <Button
                onClick={() => scrollToSection("projects")}
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                aria-label="View my work"
              >
                <i className="fas fa-code mr-2 group-hover:scale-110 transition-transform"></i>
                View My Work
              </Button>
            </div>
            
            {/* Social links with stagger and enhanced hover effects */}
            <div className={`flex gap-4 justify-center transition-all duration-700 ${isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '800ms' }}>
              <a 
                href="mailto:ranim.khairallah@etu.toulouse-inp.fr"
                className="w-12 h-12 rounded-full bg-secondary/50 hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all hover:scale-110 hover:rotate-6 border border-transparent hover:border-primary/30 group"
                aria-label="Envoyer un email à Ranim Khairallah"
              >
                <i className="fas fa-envelope text-xl group-hover:scale-110 transition-transform"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/ranim-khairallah-0b340831a"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary/50 hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all hover:scale-110 hover:rotate-6 border border-transparent hover:border-primary/30 group"
                aria-label="Profil LinkedIn de Ranim Khairallah"
              >
                <i className="fab fa-linkedin text-xl group-hover:scale-110 transition-transform"></i>
              </a>
              <a 
                href="https://github.com/ranim240"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary/50 hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all hover:scale-110 hover:rotate-6 border border-transparent hover:border-primary/30 group"
                aria-label="Profil GitHub de Ranim Khairallah"
              >
                <i className="fab fa-github text-xl group-hover:scale-110 transition-transform"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '1000ms' }}>
        <button
          onClick={() => scrollToSection("about")}
          className="flex flex-col items-center gap-2 text-primary hover:text-primary/80 transition-all group animate-bounce"
          aria-label="Scroll down to learn more"
        >
          <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors uppercase tracking-wider">Scroll Down</span>
          <div className="relative">
            <div className="absolute inset-0 blur-md bg-primary/50 group-hover:bg-primary/70 transition-all"></div>
            <i className="fas fa-chevron-down text-2xl relative"></i>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
