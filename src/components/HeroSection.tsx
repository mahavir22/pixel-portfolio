import { motion } from "framer-motion";
import { ArrowDown, Mail, Phone, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile-placeholder.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/40"
          style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{ y: [-20, 20, -20], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden glow-border">
            <img src={profileImg} alt="Mahavir Jain" className="w-full h-full object-cover" />
          </div>
          <motion.div
            className="absolute -inset-3 rounded-full border border-primary/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Text content */}
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-mono text-primary tracking-widest uppercase mb-3"
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
