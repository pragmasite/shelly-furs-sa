import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contatti" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.contact.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-2">
            {t.contact.title1}
          </h2>
          <p className="text-xl text-primary font-serif mt-2">
            {t.contact.title2}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t.contact.description}
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-2">
                    {t.contact.phone}
                  </h3>
                  <div className="space-y-1">
                    <a
                      href="tel:+41919227525"
                      className="block text-foreground/70 hover:text-primary transition-colors"
                    >
                      +41 91 922 7525
                    </a>
                    <a
                      href="tel:+41765826073"
                      className="block text-foreground/70 hover:text-primary transition-colors"
                    >
                      +41 76 582 6073
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-2">
                    {t.contact.email}
                  </h3>
                  <a
                    href="mailto:shellyfurs@gmail.com"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    shellyfurs@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-2">
                    {t.contact.address}
                  </h3>
                  <address className="text-foreground/70 not-italic leading-relaxed">
                    Via Serafino Balestra 7<br />
                    6900 Lugano<br />
                    Svizzera
                  </address>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <Button asChild size="lg">
                <a href="tel:+41919227525">{t.contact.callNow}</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-border shadow-soft h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2754.6932886845344!2d8.954085!3d46.008091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4784a44a44a44a45%3A0x44a44a44a44a44a4!2sVia%20Serafino%20Balestra%207%2C%206900%20Lugano!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
