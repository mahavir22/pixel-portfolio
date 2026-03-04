import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = ["About", "Education", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-card py-3" : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold tracking-tight"
        >
          <span className="text-gradient-primary">MJ</span>
          <span className="text-muted-foreground">.</span>
        </motion.button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.button
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              onClick={() => scrollTo(item)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wide uppercase font-medium"
            >
              {item}
            </motion.button>
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card mt-2 mx-4 rounded-lg overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left uppercase tracking-wide"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
