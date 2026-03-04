import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Award, Briefcase } from "lucide-react";

const certificates = [
  { name: "Fundamentals of Digital Marketing", issuer: "Google", year: "2021" },
  { name: "Fundamentals of Java", issuer: "Great Learning", year: "2020" },
  { name: "ICT Academy Training", issuer: "ICT Academy", year: "2020" },
];

const internships = [
  { name: "NSIC - National Small Industries Corporation", period: "Apr 2021" },
  { name: "Android Development (15 Days)", period: "Jan 2021" },
];

const CertificatesSection = () => (
  <section className="section-padding">
    <div className="max-w-4xl mx-auto">
      <SectionHeading title="Certificates & Experience" subtitle="Credentials and professional experience" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-sm uppercase tracking-widest text-primary font-mono mb-6 flex items-center gap-2">
            <Award size={16} /> Certifications
          </h3>
          <div className="space-y-4">
            {certificates.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-lg p-4"
              >
                <h4 className="font-medium text-foreground text-sm">{cert.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{cert.issuer} · {cert.year}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-widest text-primary font-mono mb-6 flex items-center gap-2">
            <Briefcase size={16} /> Internships
          </h3>
          <div className="space-y-4">
            {internships.map((intern, i) => (
              <motion.div
                key={intern.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-lg p-4"
              >
                <h4 className="font-medium text-foreground text-sm">{intern.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{intern.period}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CertificatesSection;
