import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Code, ShieldCheck, Smartphone, Globe, Coins } from "lucide-react";

const projects = [
  {
    title: "End-to-End Encrypted Cloud Emails",
    desc: "Final year project implementing AES encryption for secure cloud-based email communication.",
    icon: ShieldCheck,
    tags: ["AES", "Security", "Cloud"],
    period: "Mar - Apr 2022",
  },
  {
    title: "E-Commerce Website",
    desc: "Full-featured e-commerce website with product listings, cart, and checkout functionality.",
    icon: Globe,
    tags: ["HTML", "CSS", "JavaScript"],
    period: "Jul - Aug 2021",
  },
  {
    title: "Currency Converter App",
    desc: "Real-time currency conversion application with live exchange rates.",
    icon: Coins,
    tags: ["JavaScript", "API"],
    period: "May - Jun 2021",
  },
  {
    title: "College Notes App",
    desc: "Mobile-friendly app for students to access and share college notes.",
    icon: Smartphone,
    tags: ["Android", "Java"],
    period: "Feb - Mar 2021",
  },
  {
    title: "Mobile Shop Website",
    desc: "Responsive website showcasing mobile devices with specifications and pricing.",
    icon: Code,
    tags: ["HTML", "CSS"],
    period: "Jul - Aug 2020",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <SectionHeading title="Projects" subtitle="Things I've built" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass-card rounded-xl p-6 group cursor-default flex flex-col"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <project.icon size={20} className="text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 flex-1">{project.desc}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag) => (
                <span key={tag} className="text-[10px] font-mono uppercase tracking-wider bg-primary/10 text-primary px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <span className="text-xs text-muted-foreground font-mono">{project.period}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
