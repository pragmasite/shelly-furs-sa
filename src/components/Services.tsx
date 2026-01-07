import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="servizi" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.services.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-2">
            {t.services.title}
          </h2>
          <p className="text-lg text-foreground/70 mt-4 max-w-2xl mx-auto">
            {t.services.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-background rounded-xl p-8 border border-border hover:border-primary hover:shadow-soft transition-all"
            >
              <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-accent/10 transition-colors">
                <Sparkles className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
