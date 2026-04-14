import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/ac836b24-d3d1-43b4-a5d0-664acf5cbac8/bucket/a8c9a159-0f50-4678-85c8-59b4962cf3ab.jpg"
          alt="Drone repair workshop"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          ДРОН 56
          <br />
          В ПОРЯДКЕ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90">
          Профессиональный ремонт и настройка квадрокоптеров DJI и Autel. Быстро, надёжно, с гарантией.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a
            href="mailto:rc-oren@mail.ru"
            className="inline-block bg-white text-black px-8 py-3 text-sm uppercase tracking-wide font-semibold hover:bg-neutral-200 transition-colors duration-300"
          >
            Оставить заявку
          </a>
          <a
            href="https://wa.me/79226253964"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-transparent text-white border border-white px-8 py-3 text-sm uppercase tracking-wide font-semibold hover:bg-white hover:text-black transition-colors duration-300"
          >
            WhatsApp
          </a>

        </div>
      </div>
    </div>
  );
}