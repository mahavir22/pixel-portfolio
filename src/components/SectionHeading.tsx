import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16"
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-3">
      <span className="text-gradient-primary">{title}</span>
    </h2>
    {subtitle && <p className="text-muted-foreground text-sm max-w-md mx-auto">{subtitle}</p>}
    <div className="mt-4 mx-auto w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
  </motion.div>
);

export default SectionHeading;
