import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { GraduationCap } from "lucide-react";

const education = [
  { degree: "MBA - Human Resource Management", school: "Loyola College (Correspondence)", period: "2022 - 2024", grade: "7.1 CGPA" },
  { degree: "B.Tech - Information Technology", school: "Misirimal Navajee Munoth Jain Engineering College, Chennai", period: "2018 - 2022", grade: "8.05 CGPA" },
  { degree: "Higher Secondary (HSLC)", school: "Kamaraj Matriculation HSS, Chidambaram", period: "2017 - 2018", grade: "75%" },
  { degree: "Secondary School (SSLC)", school: "St. Joseph's HSS, Cuddalore", period: "2015 - 2016", grade: "85%" },
];

const EducationSection = () => (
  <section id="education" className="section-padding">
    <div className="max-w-4xl mx-auto">
      <SectionHeading title="Education" subtitle="My academic journey" />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative flex items-start mb-10 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } flex-row`}
          >
            {/* Dot */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_hsl(175_80%_50%/0.5)] z-10" />

            <div className={`ml-14 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
              <div className="glass-card rounded-lg p-5 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2 justify-start">
                  <GraduationCap size={16} className="text-primary" />
                  <span className="text-xs font-mono text-primary">{edu.period}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-1">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground mb-2">{edu.school}</p>
                <span className="inline-block text-xs font-mono bg-primary/10 text-primary px-2 py-1 rounded">
                  {edu.grade}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
