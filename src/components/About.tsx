import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const highlights = [
    {
      icon: "fas fa-server",
      title: "HPC & Big Data",
      description: "Spécialisée en calcul haute performance, traitement de données à grande échelle et architectures distribuées."
    },
    {
      icon: "fas fa-cloud",
      title: "Cloud Data Engineering",
      description: "Conception de pipelines ETL serverless, de data lakes et de flux cloud évolutifs (AWS Glue, PySpark)."
    },
    {
      icon: "fas fa-brain",
      title: "IA & Machine Learning",
      description: "Développement de modèles prédictifs, intégration de LLM et applications intelligentes guidées par les données."
    },
    {
      icon: "fas fa-code",
      title: "Développement Full-Stack",
      description: "Création de solutions web et mobiles robustes avec les technologies modernes (React, Next.js, Node.js)."
    }
  ];

  const stats = [
    { number: "5+", label: "Projets Avancés" },
    { number: "20+", label: "Certifications & Badges" },
    { number: "100%", label: "Engagement & Rigueur" }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background" role="region" aria-label="About section">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              À propos de moi
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Passionnée par l'ingénierie des données, le calcul haute performance et l'intelligence artificielle
          </p>
        </div>
        
        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto">
          {/* Introduction Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="flex gap-2 flex-wrap">
                <Badge variant="secondary" className="text-sm">
                  <i className="fas fa-graduation-cap mr-2"></i>
                  Élève-ingénieure ENSIT & ENSEEIHT
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  Toulouse, France
                </Badge>
              </div>
              
              <h3 className="text-3xl font-bold text-foreground">
                Allier HPC, Big Data & Ingénierie Cloud
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Actuellement en échange académique à l'ENSEEIHT – Toulouse INP en spécialité HPC & Big Data, 
                et inscrite en parallèle en Master 2 Informatique (PSMSC), je conçois des solutions logicielles 
                et des architectures de données robustes adaptées aux enjeux technologiques actuels.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mon parcours combine une solide formation en informatique (ENSIT) avec une expertise pratique 
                en pipelines ETL cloud, traitement à grande échelle et applications web full-stack, dans la perspective 
                de mon stage de fin d'études (PFE) de 6 mois à partir de février 2027.
              </p>
              
              {/* Contact Info - Modern Style */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <a 
                  href="tel:+33676439806"
                  className="relative flex items-center gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 group border border-border hover:border-primary/30 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 relative z-10">
                    <i className="fas fa-phone text-primary"></i>
                  </div>
                  <div className="text-left relative z-10">
                    <p className="text-xs text-muted-foreground">Téléphone</p>
                    <p className="text-sm font-medium group-hover:text-primary transition-colors">+33 6 76 43 98 06</p>
                  </div>
                </a>
                
                <a 
                  href="mailto:ranim.khairallah@etu.toulouse-inp.fr"
                  className="relative flex items-center gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 group border border-border hover:border-primary/30 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 relative z-10">
                    <i className="fas fa-envelope text-primary"></i>
                  </div>
                  <div className="text-left relative z-10">
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-medium group-hover:text-primary transition-colors truncate max-w-[180px]">ranim.khairallah@etu.toulouse-inp.fr</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/ranim-khairallah-0b340831a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 group border border-border hover:border-primary/30 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 relative z-10">
                    <i className="fab fa-linkedin text-primary"></i>
                  </div>
                  <div className="text-left relative z-10">
                    <p className="text-xs text-muted-foreground">LinkedIn</p>
                    <p className="text-sm font-medium group-hover:text-primary transition-colors">ranim-khairallah</p>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/ranim240"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 group border border-border hover:border-primary/30 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 relative z-10">
                    <i className="fab fa-github text-primary"></i>
                  </div>
                  <div className="text-left relative z-10">
                    <p className="text-xs text-muted-foreground">GitHub</p>
                    <p className="text-sm font-medium group-hover:text-primary transition-colors">ranim240</p>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Stats Section */}
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <Card key={index} className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:border-primary/40 transition-all">
                    <CardContent className="p-6 text-center">
                      <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</p>
                      <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Profile Image Placeholder with decorative elements */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl blur-2xl"></div>
                <Card className="relative bg-card/50 backdrop-blur border-border overflow-hidden">
                  <CardContent className="p-8">
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-xl flex items-center justify-center overflow-hidden">
  <img 
    src="/me.png" 
    alt="Ranim Khairallah" 
    className="w-full h-full object-cover object-top rounded-xl"
  />
</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="relative bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow group overflow-hidden"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
                </div>
                
                <CardContent className="p-6 space-y-4 relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <i className={`${highlight.icon} text-2xl text-primary group-hover:scale-110 transition-transform`}></i>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
                
                {/* Corner decoration */}
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/20 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;