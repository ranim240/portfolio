import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const education = [
    {
      institution: "ENSEEIHT – Toulouse INP & Université de Toulouse",
      degree: "Échange académique (Spécialité HPC & Big Data) & Master 2 Informatique (PSMSC)",
      period: "2026 - 2027",
      icon: "fa-graduation-cap",
      color: "from-primary/20 to-purple-500/20",
      status: "In Progress"
    },
    {
      institution: "National Higher Engineering School of Tunis - ENSIT",
      degree: "Cycle d'ingénieur en Génie Logiciel",
      period: "2024 - 2027",
      icon: "fa-laptop-code",
      color: "from-blue-500/20 to-cyan-500/20",
      status: "In Progress"
    },
    {
      institution: "IPEIM / Institut Préparatoire aux Études d'Ingénieur de Monastir",
      degree: "Cycle préparatoire aux études d'ingénieur (Physique - Mathématiques)",
      period: "2022 - 2024",
      icon: "fa-flask",
      color: "from-green-500/20 to-teal-500/20",
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden bg-secondary/30" role="region" aria-label="Education section">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50"></div>
      <div className="absolute top-40 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Education
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Parcours académique en génie logiciel, calcul haute performance (HPC) et Big Data
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card 
              key={index}
              className="relative bg-card border-border hover:border-primary/50 transition-all duration-500 group overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
              </div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg border border-primary/30`}>
                    <i className={`fas ${edu.icon} text-primary text-2xl group-hover:scale-110 transition-transform`} aria-hidden="true"></i>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{edu.institution}</CardTitle>
                      <Badge 
                        variant={edu.status === "Completed" ? "secondary" : "default"}
                        className={edu.status === "In Progress" ? "bg-primary/10 text-primary border border-primary/30" : ""}
                      >
                        {edu.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-base mb-3">
                      <span className="font-semibold text-foreground">{edu.degree}</span>
                    </CardDescription>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <i className="fas fa-calendar"></i>
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/20 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;