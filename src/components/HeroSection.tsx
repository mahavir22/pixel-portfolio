import { motion } from "framer-motion";
import { ArrowDown, Mail, Phone, MapPin, Laptop, Smartphone, Code, Globe, Brain, Cpu } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile-photo.png";

const floatingIcons = [
  { icon: Laptop, label: "Laptop", x: -90, y: -80, delay: 0 },
  { icon: Smartphone, label: "Android", x: 90, y: -70, delay: 0.3 },
  { icon: Code, label: "Java", x: -110, y: 30, delay: 0.6 },
  { icon: Globe, label: "HTML", x: 110, y: 40, delay: 0.9 },
  { icon: Brain, label: "AI & ML", x: -60, y: 110, delay: 1.2 },
  { icon: Cpu, label: "ML", x: 60, y: 110, delay: 1.5 },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{ y: [-20, 20, -20], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Profile image with floating icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Floating tech icons */}
          {floatingIcons.map((item, i) => (
            <motion.div
              key={item.label}
              className="absolute z-20 flex flex-col items-center gap-1"
              style={{ left: `calc(50% + ${item.x}px)`, top: `calc(50% + ${item.y}px)` }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + item.delay, type: "spring" }}
            >
              <motion.div
                className="w-10 h-10 rounded-xl bg-card/90 border border-border flex items-center justify-center shadow-lg backdrop-blur-sm"
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.2, borderColor: "hsl(43 90% 55%)" }}
              >
                <item.icon size={18} className="text-accent" />
              </motion.div>
              <span className="text-[9px] font-mono text-muted-foreground">{item.label}</span>
            </motion.div>
          ))}

          {/* Profile photo */}
          <div className="w-52 h-52 md:w-60 md:h-60 rounded-full overflow-hidden glow-border relative z-10">
            <img src={profileImg} alt="Mahavir Jain" className="w-full h-full object-cover" />
          </div>

          {/* Rotating ring */}
          <motion.div
            className="absolute -inset-4 rounded-full border border-primary/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -inset-8 rounded-full border border-accent/10"
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Text content */}
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-mono text-accent tracking-widest uppercase mb-3"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
          >
            <span className="text-gradient-primary neon-text">Mahavir</span>{" "}
            <span className="text-foreground">Jain</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground mb-2"
          >
            B.Tech IT & MBA - HRM
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-muted-foreground max-w-lg mb-8 leading-relaxed"
          >
            A highly organized and hard-working individual seeking to expand learnings,
            knowledge and skills in a reputable organization.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-muted-foreground"
          >
            <a href="mailto:mahavirbtech2000@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={14} /> mahavirbtech2000@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <Phone size={14} /> 7904018893
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={14} /> Chennai
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={20} className="text-primary/50" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
