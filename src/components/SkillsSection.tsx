import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skills = [
  { name: "Python", level: 60 },
  { name: "Java", level: 70 },
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "SQL", level: 75 },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="max-w-4xl mx-auto">
      <SectionHeading title="Skills" subtitle="Technologies I work with" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-card rounded-lg p-5"
          >
            <div className="flex justify-between mb-3">
              <span className="font-medium text-foreground">{skill.name}</span>
              <span className="text-xs font-mono text-primary">{skill.level}%</span>
            </div>
            <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary to-glow-accent"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 + i * 0.08, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
