const Footer = () => {
  return (
    <footer className="relative bg-secondary/50 backdrop-blur-lg py-12 overflow-hidden border-t border-border/50" role="contentinfo">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Logo/Name */}
          <div className="text-center">
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-primary blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <h3 className="relative text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                RK
              </h3>
            </div>
            <p className="text-muted-foreground mt-2 text-sm">
              Élève-ingénieure en informatique | HPC, Big Data
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4">
            <a 
              href="mailto:ranim.khairallah@etu.toulouse-inp.fr"
              className="w-12 h-12 rounded-full bg-secondary/80 backdrop-blur-sm hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all hover:scale-110 hover:rotate-6 border border-border hover:border-primary/30 group"
              aria-label="Send email"
            >
              <i className="fas fa-envelope text-xl group-hover:scale-110 transition-transform"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/ranim-khairallah-0b340831a"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary/80 backdrop-blur-sm hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all hover:scale-110 hover:rotate-6 border border-border hover:border-primary/30 group"
              aria-label="Visit LinkedIn profile"
            >
              <i className="fab fa-linkedin text-xl group-hover:scale-110 transition-transform"></i>
            </a>
            <a 
              href="https://github.com/ranim240"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary/80 backdrop-blur-sm hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all hover:scale-110 hover:rotate-6 border border-border hover:border-primary/30 group"
              aria-label="Visit GitHub profile"
            >
              <i className="fab fa-github text-xl group-hover:scale-110 transition-transform"></i>
            </a>
          </div>
          
          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          
          {/* Copyright & Credits */}
          <div className="text-center text-muted-foreground text-sm space-y-2">
            <p className="flex items-center justify-center gap-2">
              <i className="fas fa-copyright"></i>
              <span>{new Date().getFullYear()} Ranim Khairallah. All rights reserved.</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span>Built with</span>
              <span className="text-primary animate-pulse inline-block">♥</span>
              <span>using</span>
              <span className="text-primary font-semibold">React</span>
              <span>&</span>
              <span className="text-purple-500 font-semibold">TypeScript</span>
            </p>
          </div>
          
          {/* Back to top button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/60 transition-all hover:scale-105 text-primary"
            aria-label="Back to top"
          >
            <span className="text-sm font-medium">Back to Top</span>
            <i className="fas fa-arrow-up group-hover:-translate-y-1 transition-transform"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
