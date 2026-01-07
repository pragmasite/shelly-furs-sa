import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t, lang } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Gallery images with descriptions in Italian and English
  const images = [
    {
      src: "/images/img-1.jpg",
      it: "Cappotto marrone",
      en: "Brown coat",
    },
    {
      src: "/images/img-2.jpg",
      it: "Giacca azzurra",
      en: "Light blue coat",
    },
    {
      src: "/images/img-3.jpg",
      it: "Mantello crema",
      en: "Cream white coat",
    },
    {
      src: "/images/img-4.jpg",
      it: "Giacca nera",
      en: "Black striped coat",
    },
    {
      src: "/images/img-6.jpg",
      it: "Cappotto verde",
      en: "Vibrant green coat",
    },
    {
      src: "/images/img-7.jpg",
      it: "Gilet marrone",
      en: "Brown fur vest",
    },
  ];

  const getDescription = (image: typeof images[0]) => {
    return lang === "it" ? image.it : image.en;
  };

  return (
    <section id="galleria" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.gallery.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-2">
            {t.gallery.title}
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={image.src}
                alt={getDescription(image)}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm font-medium text-white">
                  {getDescription(image)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl relative"
            >
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute -top-10 right-0 text-white hover:text-accent transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              <img
                src={images[selectedIndex].src}
                alt={getDescription(images[selectedIndex])}
                className="w-full rounded-xl"
              />

              <div className="absolute inset-0 flex items-center justify-between px-4 rounded-xl">
                <button
                  onClick={() =>
                    setSelectedIndex((selectedIndex - 1 + images.length) % images.length)
                  }
                  className="bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>
                <button
                  onClick={() =>
                    setSelectedIndex((selectedIndex + 1) % images.length)
                  }
                  className="bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors"
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>
              </div>

              <p className="text-white text-center mt-4">
                {getDescription(images[selectedIndex])}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
