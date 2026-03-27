import { useState } from "react";
import { Compass, Facebook, Instagram, Twitter, Linkedin, Send } from "lucide-react";
import { useSubscribeNewsletter } from "@/hooks/use-newsletter";
import { useToast } from "@/hooks/use-toast";

export function Footer() {
  const [email, setEmail] = useState("");
  const { mutate, isPending } = useSubscribeNewsletter();
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(email, {
      onSuccess: (data) => {
        toast({ title: "Success", description: data.message });
        setEmail("");
      },
      onError: (err) => {
        toast({ variant: "destructive", title: "Error", description: err.message });
      }
    });
  };

  return (
    <footer className="bg-background pt-20 pb-10 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Compass className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold tracking-tighter text-foreground">
                AtlasVoyage
              </span>
            </a>
            <p className="text-muted-foreground mb-6">
              Crafting extraordinary journeys since 2016. The premier choice for discerning global travelers.
            </p>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Destinations</h4>
            <ul className="space-y-3">
              {['Europe', 'Asia', 'Maldives', 'Safaris', 'Cultural'].map(link => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-3">
              {['Trip Planning', 'Group Tours', 'Corporate', 'Visa', 'Insurance'].map(link => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect / Newsletter Col */}
          <div>
            <h4 className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                placeholder="Subscribe to newsletter"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-4 pr-12 py-3 rounded-xl bg-white border border-border focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              />
              <button 
                type="submit" 
                disabled={isPending}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; 2026 AtlasVoyage Travel. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
