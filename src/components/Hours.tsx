import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();

  // Monday: 08:30-12:30; 13:30-18:00
  // Tuesday to Friday: same as Monday
  // Saturday: 08:00-12:00
  // Sunday: closed
  const schedule = [
    { hours: "08:30 - 12:30 / 13:30 - 18:00" }, // Monday
    { hours: "08:30 - 12:30 / 13:30 - 18:00" }, // Tuesday
    { hours: "08:30 - 12:30 / 13:30 - 18:00" }, // Wednesday
    { hours: "08:30 - 12:30 / 13:30 - 18:00" }, // Thursday
    { hours: "08:30 - 12:30 / 13:30 - 18:00" }, // Friday
    { hours: "08:00 - 12:00" }, // Saturday
    { hours: t.hours.closed }, // Sunday
  ];

  const todayIndex = new Date().getDay();
  // Convert JS day index (0=Sunday) to schedule index (0=Monday)
  const scheduleTodayIndex = todayIndex === 0 ? 6 : todayIndex - 1;

  return (
    <section id="orari" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl"
        >
          <div className="mb-8 text-center">
            <span className="text-sm uppercase tracking-widest text-primary">
              {t.hours.label}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-2">
              {t.hours.title}
            </h2>
          </div>

          <div className="rounded-2xl border bg-background shadow-soft overflow-hidden">
            <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-serif text-lg text-foreground">
                {t.hours.header}
              </span>
            </div>
            <div className="divide-y">
              {schedule.map((item, i) => {
                const isToday = i === scheduleTodayIndex;
                const isClosed = item.hours === t.hours.closed;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className={`px-6 py-4 flex justify-between items-center transition-colors ${
                      isToday ? "bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && <CheckCircle className="h-4 w-4 text-primary" />}
                      <span
                        className={
                          isToday
                            ? "font-medium text-primary"
                            : "text-foreground"
                        }
                      >
                        {t.hours.days[i]}
                      </span>
                      {isToday && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                          {t.hours.today}
                        </span>
                      )}
                    </div>
                    <span
                      className={
                        isClosed ? "text-muted-foreground" : "text-foreground"
                      }
                    >
                      {item.hours}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
