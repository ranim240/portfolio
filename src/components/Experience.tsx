import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      company: "Smartovate",
      role: "Stagiaire Data Engineer & Machine Learning",
      period: "Juillet 2026",
      project: "Pipeline ETL et Machine Learning sur AWS",
      description: "Conception d'un pipeline ETL et Machine Learning sur AWS (Glue, Athena, Step Functions) pour la segmentation et la prédiction du churn client. Structuration de données massives sur Amazon S3 et préparation des variables (feature engineering) pour l'entraînement de modèles sur Amazon SageMaker.",
      keywords: ["AWS S3", "Glue", "Athena", "Step Functions", "SageMaker", "PySpark", "SQL", "Python"]
    },
    {
      company: "SWConsulting — « Live Shop »",
      role: "Stagiaire Développeuse Full-Stack",
      period: "Juin – Juil. 2025",
      project: "Plateforme e-commerce interactive",
      description: "Développement full-stack d'une plateforme e-commerce (Next.js, Tailwind CSS) avec une gestion d'état optimisée via React Query. Configuration d'un backend headless (Payload CMS, MongoDB Atlas) multi-rôles et intégration de Stripe Connect pour la sécurisation des paiements.",
      keywords: ["Next.js", "Tailwind CSS", "Payload CMS", "MongoDB Atlas", "Stripe Connect", "React Query"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-secondary/30" role="region" aria-label="Experience section">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Expériences professionnelles
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Stages en data engineering, machine learning et développement full-stack
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-8 relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-primary hidden md:block"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-8 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-glow transform -translate-x-1/2 z-20 hidden md:block"></div>
              
              <Card 
                className="relative bg-card border-border hover:border-primary/50 transition-all duration-500 group overflow-hidden md:ml-16"
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
                </div>
                
                {/* Company logo placeholder */}
                <div className="absolute top-6 right-6 w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center border border-primary/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 z-10">
                  <i className="fas fa-building text-2xl text-primary"></i>
                </div>
                
                <CardHeader className="relative z-10 pr-24">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <CardTitle className="text-2xl text-primary group-hover:scale-105 origin-left transition-transform duration-300">
                      {exp.company}
                    </CardTitle>
                    <Badge variant="secondary" className="bg-primary/10 border border-primary/30 w-fit">
                      <i className="fas fa-calendar mr-2"></i>
                      {exp.period}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">
                    <span className="font-semibold text-foreground">{exp.role}</span>
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4 relative z-10">
                  <div className="p-4 rounded-lg bg-secondary/50 backdrop-blur-sm border border-border/50">
                    <h4 className="font-semibold text-lg mb-3 text-primary flex items-start gap-2">
                      <i className="fas fa-project-diagram mt-1"></i>
                      <span>{exp.project}</span>
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.keywords.map((keyword, keyIndex) => (
                      <Badge 
                        key={keyIndex}
                        variant="outline"
                        className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-lg transition-all duration-300"
                      >
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                {/* Corner accents */}
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-primary/20 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
