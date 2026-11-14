import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const skillCategories = [
    {
      title: "Développement Web & Logiciel",
      icon: "fa-code",
      color: "from-primary/20 to-purple-500/20",
      iconColor: "text-primary",
      skills: ["Python", "Java", "JavaScript", "TypeScript", "C / C++", "React.js", "Next.js", "Angular", "Ionic", "Node.js", "Express.js", "Flask", "PHP", "Tailwind CSS", "API REST"]
    },
    {
      title: "IA, Data Science & Visualisation",
      icon: "fa-brain",
      color: "from-purple-500/20 to-blue-500/20",
      iconColor: "text-purple-500",
      skills: ["Machine Learning", "LLM (Mistral AI, Ollama)", "PyTorch", "Scikit-learn", "XGBoost", "Pandas", "NumPy", "PySpark", "Power BI"]
    },
    {
      title: "HPC, Cloud, BDD & Outils",
      icon: "fa-cloud",
      color: "from-cyan-500/20 to-blue-500/20",
      iconColor: "text-cyan-500",
      skills: ["HPC & Big Data", "AWS (S3, Glue, Athena, Step Functions, QuickSight)", "PostgreSQL", "MongoDB", "Oracle", "PowerAMC", "Docker", "Git", "Agile Scrum", "Figma"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden" role="region" aria-label="Skills section">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Compétences techniques
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Développement web, calcul haute performance (HPC), intelligence artificielle, ingénierie des données et visualisation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative bg-card border-border hover:border-primary/50 transition-all duration-500 group overflow-hidden"
            >
              {/* Animated gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent blur-xl"></div>
              </div>
              
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <i className={`fas ${category.icon} ${category.iconColor} text-2xl group-hover:scale-110 transition-transform duration-300`} aria-hidden="true"></i>
                  </div>
                  <span className="group-hover:text-primary transition-colors duration-300">{category.title}</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1.5 bg-secondary/80 backdrop-blur-sm text-foreground text-sm rounded-full border border-border hover:border-primary hover:bg-primary/10 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-default"
                      style={{
                        animationDelay: `${skillIndex * 50}ms`,
                        animation: hoveredIndex === index ? 'fade-in 0.3s ease-out' : 'none'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/25 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-primary/25 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;