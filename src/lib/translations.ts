export type Language = "it" | "en";

export const translations = {
  it: {
    nav: {
      services: "Servizi",
      aboutUs: "Chi Siamo",
      gallery: "Galleria",
      hours: "Orari",
      contact: "Contatti",
      call: "Chiama",
      profession: "PELLICCERIA",
    },
    hero: {
      badge: "Cinque generazioni di eccellenza",
      title1: "Pellicce",
      title2: "Artigianali",
      description: "Servizi di pellicceria di alta qualità con laboratorio artigianale nel centro di Lugano da 30 anni",
      sendEmail: "Invia email",
      location: "Lugano, Svizzera",
    },
    about: {
      label: "Chi Siamo",
      title1: "ShellyFurs SA",
      title2: "Tradizione e Qualità",
      p1: "ShellyFurs SA è una pellicceria con cinque generazioni di tradizione artigianale, situata nel cuore di Lugano da 30 anni. Con un laboratorio artigianale annesso, offriamo servizi di pellicceria di alta qualità.",
      p2: "La nostra esperienza decennale garantisce il massimo livello di professionalità e cura nel trattamento dei vostri capi.",
      stat1: "Anni di esperienza",
      stat2: "Generazioni",
      stat3: "Clienti soddisfatti",
      features: [
        { title: "Artigianalità", description: "Laboratorio artigianale con esperienza consolidata" },
        { title: "Qualità", description: "Materiali e servizi di alta qualità" },
        { title: "Esperienza", description: "30 anni nel centro di Lugano" },
        { title: "Professionalità", description: "Servizi professionali e personalizzati" },
      ],
    },
    services: {
      label: "Servizi",
      title: "I Nostri Servizi",
      description: "Offriamo una gamma completa di servizi di pellicceria artigianale",
      items: [
        { title: "Restauro", description: "Restauro e riparazione di pellicce danneggiate" },
        { title: "Modifica", description: "Modifiche e adattamenti personalizzati" },
        { title: "Pulizia", description: "Pulizia professionale e manutenzione" },
        { title: "Consulting", description: "Consulenza su cura e conservazione" },
      ],
    },
    gallery: {
      label: "Galleria",
      title: "Le Nostre Realizzazioni",
      description: "Una selezione delle nostre opere artigianali",
    },
    hours: {
      label: "Orari",
      title: "Orari di Apertura",
      header: "Orari d'Apertura",
      today: "Oggi",
      closed: "Chiuso",
      days: ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"],
    },
    contact: {
      label: "Contatti",
      title1: "Contattaci",
      title2: "Saremo felici di aiutarti",
      description: "Raggiungi il nostro laboratorio artigianale nel centro di Lugano",
      phone: "Telefono",
      email: "Email",
      address: "Indirizzo",
      cta: "Contattaci per una consulenza",
      callNow: "Chiama ora",
    },
    footer: {
      tagline: "Pellicceria",
      description: "ShellyFurs SA - Pellicceria artigianale nel cuore di Lugano",
      navigation: "Navigazione",
      about: "Chi Siamo",
      copyright: "Tutti i diritti riservati.",
    },
    disclaimer: {
      title: "Anteprima del Sito",
      items: [
        "Questo sito web è una bozza di anteprima",
        "Non è indicizzato su Google",
        "Potrebbe contenere errori o imprecisioni",
      ],
      button: "Ho Capito",
    },
  },
  en: {
    nav: {
      services: "Services",
      aboutUs: "About Us",
      gallery: "Gallery",
      hours: "Hours",
      contact: "Contact",
      call: "Call",
      profession: "FUR DESIGNER",
    },
    hero: {
      badge: "Five generations of excellence",
      title1: "Artisan",
      title2: "Furs",
      description: "High-quality furrier services with adjoining artisan workshop in the heart of Lugano for 30 years",
      sendEmail: "Send Email",
      location: "Lugano, Switzerland",
    },
    about: {
      label: "About Us",
      title1: "ShellyFurs SA",
      title2: "Tradition & Excellence",
      p1: "ShellyFurs SA is a fur atelier with five generations of artisan tradition, located in the heart of Lugano for 30 years. With an adjoining artisan workshop, we offer high-quality furrier services.",
      p2: "Our decades of experience guarantee the highest level of professionalism and care in handling your precious garments.",
      stat1: "Years of Experience",
      stat2: "Generations",
      stat3: "Satisfied Clients",
      features: [
        { title: "Craftsmanship", description: "Artisan workshop with established expertise" },
        { title: "Quality", description: "High-quality materials and services" },
        { title: "Experience", description: "30 years in the heart of Lugano" },
        { title: "Professionalism", description: "Professional and personalized services" },
      ],
    },
    services: {
      label: "Services",
      title: "Our Services",
      description: "We offer a complete range of artisan fur services",
      items: [
        { title: "Restoration", description: "Restoration and repair of damaged furs" },
        { title: "Modification", description: "Custom modifications and alterations" },
        { title: "Cleaning", description: "Professional cleaning and maintenance" },
        { title: "Consulting", description: "Expert advice on care and preservation" },
      ],
    },
    gallery: {
      label: "Gallery",
      title: "Our Work",
      description: "A selection of our finest artisan creations",
    },
    hours: {
      label: "Hours",
      title: "Opening Hours",
      header: "Opening Hours",
      today: "Today",
      closed: "Closed",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
    contact: {
      label: "Contact",
      title1: "Get in Touch",
      title2: "We'd love to help you",
      description: "Visit our artisan workshop in the heart of Lugano",
      phone: "Phone",
      email: "Email",
      address: "Address",
      cta: "Contact us for a consultation",
      callNow: "Call Now",
    },
    footer: {
      tagline: "Fur Designer",
      description: "ShellyFurs SA - Artisan fur atelier in the heart of Lugano",
      navigation: "Navigation",
      about: "About Us",
      copyright: "All rights reserved.",
    },
    disclaimer: {
      title: "Website Preview",
      items: [
        "This website is a draft preview",
        "It is not indexed on Google",
        "It may contain errors or inaccuracies",
      ],
      button: "I Understand",
    },
  },
};

export interface TranslationsType {
  nav: {
    services: string;
    aboutUs: string;
    gallery: string;
    hours: string;
    contact: string;
    call: string;
    profession: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    description: string;
    sendEmail: string;
    location: string;
  };
  about: {
    label: string;
    title1: string;
    title2: string;
    p1: string;
    p2: string;
    stat1: string;
    stat2: string;
    stat3: string;
    features: Array<{ title: string; description: string }>;
  };
  services: {
    label: string;
    title: string;
    description: string;
    items: Array<{ title: string; description: string }>;
  };
  gallery: {
    label: string;
    title: string;
    description: string;
  };
  hours: {
    label: string;
    title: string;
    header: string;
    today: string;
    closed: string;
    days: string[];
  };
  contact: {
    label: string;
    title1: string;
    title2: string;
    description: string;
    phone: string;
    email: string;
    address: string;
    cta: string;
    callNow: string;
  };
  footer: {
    tagline: string;
    description: string;
    navigation: string;
    about: string;
    copyright: string;
  };
  disclaimer: {
    title: string;
    items: string[];
    button: string;
  };
}
