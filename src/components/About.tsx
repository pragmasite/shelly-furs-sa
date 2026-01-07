import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();

  const features = t.about.features;

  return (
    <section id="chi-siamo" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.about.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-2">
            {t.about.title1}
          </h2>
          <p className="text-xl text-primary font-serif mt-2">{t.about.title2}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              {t.about.p1}
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t.about.p2}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-4"
          >
            <div className="bg-primary/10 rounded-xl p-6 text-center">
              <div className="text-3xl font-serif text-primary mb-2">30</div>
              <p className="text-sm text-foreground/70">{t.about.stat1}</p>
            </div>
            <div className="bg-accent/10 rounded-xl p-6 text-center">
              <div className="text-3xl font-serif text-accent mb-2">5</div>
              <p className="text-sm text-foreground/70">{t.about.stat2}</p>
            </div>
            <div className="bg-primary/10 rounded-xl p-6 text-center">
              <div className="text-3xl font-serif text-primary mb-2">5.0</div>
              <p className="text-sm text-foreground/70">{t.about.stat3}</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 border border-border"
            >
              <h3 className="font-serif text-lg text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
