import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Mail, Phone, MapPin, Globe, Blocks } from "lucide-react";

const interests = [
  { name: "Web3", icon: Globe },
  { name: "Blockchain", icon: Blocks },
  { name: "Crypto", icon: Blocks },
];

const ContactSection = () => (
  <section id="contact" className="section-padding">
    <div className="max-w-4xl mx-auto">
      <SectionHeading title="Get In Touch" subtitle="Let's connect and build something great" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <a
            href="mailto:mahavirbtech2000@gmail.com"
            className="glass-card rounded-lg p-5 flex items-center gap-4 group hover:border-primary/30 transition-all block"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mail size={18} className="text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm text-foreground">mahavirbtech2000@gmail.com</p>
            </div>
          </a>

          <div className="glass-card rounded-lg p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Phone size={18} className="text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Phone</p>
              <p className="text-sm text-foreground">+91 7904018893</p>
            </div>
          </div>

          <div className="glass-card rounded-lg p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <MapPin size={18} className="text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Location</p>
              <p className="text-sm text-foreground">Chennai, India</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-sm uppercase tracking-widest text-primary font-mono mb-6">Interests</h3>
          <div className="flex flex-wrap gap-3 mb-8">
            {interests.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                className="glass-card rounded-lg px-5 py-3 flex items-center gap-2 cursor-default"
              >
                <item.icon size={16} className="text-primary" />
                <span className="text-sm text-foreground">{item.name}</span>
              </motion.div>
            ))}
          </div>

          <h3 className="text-sm uppercase tracking-widest text-primary font-mono mb-4">Languages</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>🇮🇳 Tamil — Full Professional</p>
            <p>🇬🇧 English — Full Professional</p>
            <p>🇮🇳 Hindi — Native / Bilingual</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
