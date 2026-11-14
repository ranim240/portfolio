import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      // Using FormSubmit to send emails
      const response = await fetch("https://formsubmit.co/ajax/khairallahranim24@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _captcha: "false"
        })
      });

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again or email me directly.");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-secondary/30" role="region" aria-label="Contact section">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50"></div>
      <div className="absolute top-20 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Get In Touch
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Let's discuss your next project or opportunity
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="relative bg-card border-border hover:border-primary/50 transition-all duration-500 group overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
            </div>
            
            <CardHeader className="relative z-10">
              <CardTitle className="text-2xl flex items-center gap-2">
                <i className="fas fa-envelope-open-text text-primary"></i>
                Send Me a Message
              </CardTitle>
              <CardDescription>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <i className="fas fa-user text-primary text-sm"></i>
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-secondary/50 border-border focus:border-primary hover:border-primary/50 transition-all"
                    aria-required="true"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <i className="fas fa-envelope text-primary text-sm"></i>
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="bg-secondary/50 border-border focus:border-primary hover:border-primary/50 transition-all"
                    aria-required="true"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2">
                    <i className="fas fa-comment-dots text-primary text-sm"></i>
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={5}
                    className="bg-secondary/50 border-border focus:border-primary hover:border-primary/50 transition-all resize-none"
                    aria-required="true"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 text-primary-foreground shadow-lg hover:shadow-glow hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2" aria-hidden="true"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2 group-hover:translate-x-1 transition-transform" aria-hidden="true"></i>
                      Send Message
                    </>
                  )}
                </Button>
              </form>
              
              <div className="mt-8 pt-8 border-t border-border/50">
                <p className="text-center text-muted-foreground mb-4 flex items-center justify-center gap-2">
                  <i className="fas fa-info-circle text-primary"></i>
                  Or reach out directly:
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a 
                    href="mailto:khairallahranim24@gmail.com"
                    className="flex items-center justify-center gap-3 px-4 py-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary border border-border hover:border-primary/30 transition-all duration-300 group"
                  >
                    <i className="fas fa-envelope group-hover:scale-110 transition-transform" aria-hidden="true"></i>
                    ranim.khairallah@etu.toulouse-inp.fr
                  </a>
                  <a 
                    href="tel:+33676439806"
                    className="flex items-center justify-center gap-3 px-4 py-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary border border-border hover:border-primary/30 transition-all duration-300 group"
                  >
                    <i className="fas fa-phone group-hover:scale-110 transition-transform" aria-hidden="true"></i>
                    +33 6 76 43 98 06
                  </a>
                </div>
              </div>
            </CardContent>
            
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/20 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/20 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;