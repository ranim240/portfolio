import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Projet long (Laboratoire IRIT) : Analyse de données qualitatives en SHS par IA",
      description: "État de l'art et analyse comparative des méthodes manuelles et outils numériques (MAXQDA, NVivo, Taguette) vs solutions d'IA générative pour le codage thématique d'entretiens. Conception d'un plan d'expérimentation et analyse critique comparative des traitements sur un même corpus.",
      keywords: ["Python", "LLM", "IA générative", "Analyse textuelle & qualitative"],
    },
    {
      title: "Projet ENM : Diagnostic cutané & fiabilité des étiquettes (HAM10000)",
      description: "Traitement d'un jeu de données médical fortement déséquilibré, découpage rigoureux par lésion (anti-data leakage) et analyse de l'impact du biais de sélection et du bruit d'étiquetage sur la classification.",
      keywords: ["Python", "Scikit-learn", "PyTorch", "Pandas", "Machine Learning médical"],
      
    },
    {
      title: "PFA 2 — CyberDash : Plateforme d'apprentissage gamifiée en cybersécurité",
      description: "Développement full-stack d'une architecture modulaire avec tableau de bord gamifié (XP, niveaux, badges). Intégration d'un assistant LLM pour l'accompagnement pédagogique et d'un modèle prédictif pour l'adaptation dynamique de la difficulté.",
      keywords: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Mistral AI", "Ollama", "XGBoost"],
      github: "https://github.com/ranim240/CyberDash.git"
    },
    {
      title: "Système de gestion de pharmacie (Architecture MVC)",
      description: "Développement d'une application de bureau structurée selon le design pattern MVC, assurant la persistance des données. Automatisation de la gestion des stocks, des dossiers patients/clients et implémentation d'alertes en temps réel sur les péremptions.",
      keywords: ["Java", "JavaFX", "JDBC", "MySQL", "Architecture MVC"],
      github: "https://github.com/ranim240/pharmacy-management-java.git"
    },
    {
      title: "Application Web de Gestion de Films (Angular)",
      description: "Conception et développement d'une application front-end sous Angular permettant de consulter, filtrer par genre et gérer une collection de films (authentification et opérations CRUD).",
      keywords: ["Angular", "TypeScript", "HTML/CSS", "Git"],
      github: "https://canva.link/nsae069xm0np493"
    },
    {
      title: "FreelanceHub : Application mobile de freelancing",
      description: "Développement full-stack d'une plateforme hybride avec authentification multi-rôles, gestion des contrats/livrables et livraison APK. Intégration de paiements sécurisés avec mécanisme d'escrow et messagerie instantanée temps réel.",
      keywords: ["Angular", "Ionic", "TypeScript", "Flask", "Python", "MongoDB", "Stripe", "Socket.IO"],
      github: "https://github.com/ranim240/FreelanceHub.git"
    },
    {
      title: "PFA 1 — Plateforme web « SportPulse »",
      description: "Conception et modélisation relationnelle en 3FN sous PowerAMC, génération des scripts DDL/DML et déploiement sous Oracle SQL Developer et MySQL. Développement full-stack d'une plateforme centralisée de suivi statistique.",
      keywords: ["PHP", "JavaScript", "Oracle Database", "MySQL", "PowerAMC"],
      github: "https://drive.google.com/file/d/1OuxwRxh0btAM1DyT2kqygyZ16ec1ZdRf/view?usp=drive_link"
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden" role="region" aria-label="Projects section">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
      <div className="absolute top-40 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Projets académiques et techniques en Intelligence Artificielle, Data Science et Développement Full-Stack
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="relative bg-card border-border hover:border-primary/50 transition-all duration-500 flex flex-col group overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
              </div>
              
              {/* Project number badge */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm z-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-xl leading-tight pr-12 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col justify-between space-y-4 relative z-10">
                <div className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed line-clamp-4 group-hover:text-foreground/80 transition-colors duration-300">
                    {project.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.keywords.map((keyword, keyIndex) => (
                      <Badge 
                        key={keyIndex}
                        variant="secondary"
                        className="text-xs bg-secondary/80 backdrop-blur-sm hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
                      >
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button
                  variant="outline"
                  className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-glow transition-all duration-300 mt-auto group/btn"
                  onClick={() => window.open(project.github, '_blank')}
                  aria-label={`Voir ${project.title}`}
                >
                  <i className="fas fa-external-link-alt mr-2 group-hover/btn:rotate-12 transition-transform duration-300" aria-hidden="true"></i>
                  Consulter le projet
                  <i className="fas fa-arrow-right ml-2 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all duration-300" aria-hidden="true"></i>
                </Button>
              </CardContent>
              
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;