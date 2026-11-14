import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExtracurricularActivities = () => {
  const activities = [
    {
      role: "Secrétaire Générale",
      organization: "SecuriNets ENSIT Club",
      period: "2025 ",
      description: "Gestion des activités du club, organisation d'événements de cybersécurité, de challenges et coordination des équipes techniques.",
      icon: "fas fa-shield-alt",
      color: "text-red-500",
      bgColor: "from-red-500/20 to-red-500/10"
    },
    {
      role: "Membre du Pôle Project & Cellule Qualité",
      organization: "Junior Entreprise ENSIT (Dev Addict)",
      period: "2025 ",
      description: "Participation au pôle projets et à la cellule qualité, accompagnement sur des prestations de développement et respect des normes de qualité logicielle.",
      icon: "fas fa-briefcase",
      color: "text-blue-500",
      bgColor: "from-blue-500/20 to-blue-500/10"
    },
    {
      role: "Membre Actif",
      organization: "Geeks ENSIT Club & Club Nerdata",
      period: "2024 - 2025 ",
      description: "Implication dans la communauté technique, participation aux ateliers de programmation, data science et échange de connaissances.",
      icon: "fas fa-users",
      color: "text-purple-500",
      bgColor: "from-purple-500/20 to-purple-500/10"
    }
  ];

  return (
    <section 
      id="extracurricular" 
      className="py-20 relative overflow-hidden bg-secondary/30" 
      role="region" 
      aria-label="Extracurricular Activities section"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Activités associatives
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Leadership, engagement associatif et implication dans la vie étudiante et technique
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <Card 
              key={index}
              className="relative bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow group overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${activity.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
              </div>
              
              <CardContent className="p-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${activity.bgColor} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg border border-white/10 flex-shrink-0`}>
                    <i className={`${activity.icon} text-2xl ${activity.color} group-hover:scale-110 transition-transform`}></i>
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="font-semibold text-foreground mb-1 leading-tight group-hover:text-primary transition-colors duration-300">
                      {activity.role}
                    </h3>
                    <p className="text-sm font-medium text-primary/80">
                      {activity.organization}
                    </p>
                    <div className="pt-1">
                      <Badge variant="outline" className="text-xs text-muted-foreground mb-2">
                        <i className="fas fa-calendar-alt mr-1"></i>
                        {activity.period}
                      </Badge>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              
              {/* Corner decoration */}
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/20 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtracurricularActivities;