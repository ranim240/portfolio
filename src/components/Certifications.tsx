import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DataCampLogo = () => (
  <svg viewBox="0 0 110 110" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="110" height="110" rx="20" fill="#05192D" />
    <path
      d="M34 26L62 42.5V58.5L34 75V26ZM62 58.5L84 71.5V84L54 66.5L62 58.5Z"
      stroke="#03EF62"
      strokeWidth="7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IbmdLogo = () => (
  <svg viewBox="0 0 100 50" className="w-10 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="5" y="38" fill="#05204A" className="dark:fill-white" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="36">
      IBM
    </text>
  </svg>
);

const GoogleLogo = () => (
  <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.03-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
    <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
    <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z" />
    <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" />
  </svg>
);

const AwsLogo = () => (
  <svg viewBox="0 0 120 80" className="w-9 h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="15" y="42" fill="#232F3E" className="dark:fill-white" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="34">
      aws
    </text>
    <path d="M18 54C36 66 78 66 98 52" stroke="#FF9900" strokeWidth="5" strokeLinecap="round" />
  </svg>
);

const CiscoLogo = () => (
  <svg viewBox="0 0 100 50" className="w-10 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="5" y="38" fill="#049fd9" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="30">
      CISCO
    </text>
  </svg>
);

const GomycodeLogo = () => (
  <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="20" fill="#000000" />
    <text x="20" y="60" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="45">
      G
    </text>
  </svg>
);

const certifications = [
  {
    name: "Data Engineer Associate",
    provider: "DataCamp",
    date: "Dec 2025 - Dec 2027",
    isExam: true,
    LogoComponent: DataCampLogo,
    borderColor: "border-[#03EF62]/60",
    bgColor: "bg-[#05192D]"
  },
  {
    name: "Python Data Associate",
    provider: "DataCamp",
    date: "Sep 2025 - Sep 2027",
    isExam: true,
    LogoComponent: DataCampLogo,
    borderColor: "border-[#03EF62]/60",
    bgColor: "bg-[#05192D]"
  },
  {
    name: "Associate Data Scientist in Python",
    provider: "DataCamp",
    date: "Nov 2025",
    isExam: false,
    LogoComponent: DataCampLogo,
    borderColor: "border-[#03EF62]/40",
    bgColor: "bg-[#05192D]"
  },
  {
    name: "Supervised Learning with scikit-learn",
    provider: "DataCamp",
    date: "Sep 2025",
    isExam: false,
    LogoComponent: DataCampLogo,
    borderColor: "border-[#03EF62]/40",
    bgColor: "bg-[#05192D]"
  },
  {
    name: "SQL Fundamentals",
    provider: "DataCamp",
    date: "Sep 2025",
    isExam: false,
    LogoComponent: DataCampLogo,
    borderColor: "border-[#03EF62]/40",
    bgColor: "bg-[#05192D]"
  },
  {
    name: "Associate Data Engineer in SQL",
    provider: "DataCamp",
    date: "Sep 2025",
    isExam: false,
    LogoComponent: DataCampLogo,
    borderColor: "border-[#03EF62]/40",
    bgColor: "bg-[#05192D]"
  },
  {
    name: "Data Analyst in Python",
    provider: "DataCamp",
    date: "Sep 2025",
    isExam: false,
    LogoComponent: DataCampLogo,
    borderColor: "border-[#03EF62]/40",
    bgColor: "bg-[#05192D]"
  },
  {
    name: "Associate Data Analyst in SQL",
    provider: "DataCamp",
    date: "Sep 2025",
    isExam: false,
    LogoComponent: DataCampLogo,
    borderColor: "border-[#03EF62]/40",
    bgColor: "bg-[#05192D]"
  },
  {
    name: "GitHub Foundations",
    provider: "DataCamp",
    date: "Aug 2025",
    isExam: false,
    LogoComponent: DataCampLogo,
    borderColor: "border-[#03EF62]/40",
    bgColor: "bg-[#05192D]"
  },
  {
    name: "Python Data Fundamentals",
    provider: "DataCamp",
    date: "Aug 2025",
    isExam: false,
    LogoComponent: DataCampLogo,
    borderColor: "border-[#03EF62]/40",
    bgColor: "bg-[#05192D]"
  },
  {
    name: "Introduction to Cloud Computing",
    provider: "IBM",
    date: "Apr 2026",
    isExam: false,
    LogoComponent: IbmdLogo,
    borderColor: "border-blue-500/40",
    bgColor: "bg-secondary/80"
  },
  {
    name: "IBM Full Stack Software Developer Professional Certificate",
    provider: "IBM",
    date: "Apr 2026",
    isExam: false,
    LogoComponent: IbmdLogo,
    borderColor: "border-blue-500/40",
    bgColor: "bg-secondary/80"
  },
  {
    name: "Delivering Quality Work with Agility",
    provider: "IBM",
    date: "Feb 2026",
    isExam: false,
    LogoComponent: IbmdLogo,
    borderColor: "border-blue-500/40",
    bgColor: "bg-secondary/80"
  },
  {
    name: "Python for Data Science, AI & Development",
    provider: "IBM",
    date: "Feb 2026",
    isExam: false,
    LogoComponent: IbmdLogo,
    borderColor: "border-blue-500/40",
    bgColor: "bg-secondary/80"
  },
  {
    name: "Getting Started with Git and GitHub",
    provider: "IBM",
    date: "Feb 2026",
    isExam: false,
    LogoComponent: IbmdLogo,
    borderColor: "border-blue-500/40",
    bgColor: "bg-secondary/80"
  },
  {
    name: "Introduction to Software Engineering",
    provider: "IBM",
    date: "Jan 2026",
    isExam: false,
    LogoComponent: IbmdLogo,
    borderColor: "border-blue-500/40",
    bgColor: "bg-secondary/80"
  },
  {
    name: "Google UX Design",
    provider: "Google",
    date: "Apr 2026",
    isExam: false,
    LogoComponent: GoogleLogo,
    borderColor: "border-yellow-500/40",
    bgColor: "bg-secondary/80"
  },
  {
    name: "Generative AI with Diffusion Models",
    provider: "NVIDIA",
    date: "Dec 2025",
    isExam: false,
    isImageLogo: true,
    imageSrc: "/logon.png",
    borderColor: "border-[#76B900]/40",
    bgColor: "bg-green-500/10"
  },
  {
    name: "AWS Academy Graduate - Machine Learning Foundations",
    provider: "Amazon Web Services (AWS)",
    date: "Apr 2026",
    isExam: false,
    LogoComponent: AwsLogo,
    borderColor: "border-[#FF9900]/40",
    bgColor: "bg-secondary/80"
  },
  {
    name: "CCNA: Introduction to Networks",
    provider: "Cisco",
    date: "Jan 2026",
    isExam: false,
    LogoComponent: CiscoLogo,
    borderColor: "border-cyan-500/40",
    bgColor: "bg-secondary/80"
  },
  {
    name: "Power BI",
    provider: "GOMYCODE",
    date: "2026",
    isExam: false,
    LogoComponent: GomycodeLogo,
    borderColor: "border-purple-500/40",
    bgColor: "bg-secondary/80"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 relative overflow-hidden" role="region" aria-label="Certifications section">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background"></div>
      <div className="absolute top-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Licences et certifications
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Retrouvez l'intégralité de mes certifications officielles, badges et parcours validés sur mon profil{" "}
            <a 
              href="https://www.linkedin.com/in/ranim-khairallah" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary/80 font-medium"
            >
              LinkedIn
            </a>.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => {
            const Logo = cert.LogoComponent;
            return (
              <Card 
                key={index}
                className={`relative bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow group overflow-hidden ${
                  cert.isExam ? 'ring-1 ring-emerald-500/30 bg-emerald-500/[0.01]' : ''
                }`}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
                </div>
                
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl ${cert.bgColor} flex items-center justify-center p-2 border ${cert.borderColor} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-md flex-shrink-0`}>
                      {cert.isImageLogo ? (
                        <img 
                          src={cert.imageSrc} 
                          alt="NVIDIA Logo" 
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        Logo && <Logo />
                      )}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-base leading-tight group-hover:text-primary transition-colors duration-300">
                          {cert.name}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2 items-center">
                        <Badge variant="secondary" className="text-xs bg-primary/10 border border-primary/30">
                          {cert.provider}
                        </Badge>
                        <Badge variant="outline" className="text-xs text-muted-foreground">
                          <i className="fas fa-calendar-alt mr-1"></i>
                          {cert.date}
                        </Badge>
                        {cert.isExam && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            <i className="fas fa-award text-xs"></i>
                            Certifié sur examen
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
                
                {/* Corner decoration */}
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/20 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;