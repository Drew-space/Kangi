import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[90vh] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1600&q=85"
        alt="Hero"
        fill
        className="object-cover hero-img"
        priority
        style={{ objectPosition: "center 20%" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,10,10,0.25) 0%, rgba(10,10,10,0.55) 100%)",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1
          className="font-display text-[18vw] md:text-[14vw] leading-none tracking-wider text-white/90 fade-up fade-up-delay-1"
          style={{
            mixBlendMode: "overlay",
            textShadow: "0 0 80px rgba(255,255,255,0.3)",
          }}
        >
          KĀNGI
        </h1>
        <p className="text-white/70 tracking-[0.35em] uppercase text-xs md:text-sm mt-4 fade-up fade-up-delay-2">
          Autumn / Winter 2025
        </p>
        <a
          href="#products"
          className="mt-10 font-display tracking-widest text-sm uppercase px-10 py-3 border border-white/60 text-white hover:bg-white hover:text-black transition-all duration-300 fade-up fade-up-delay-3"
        >
          Explore Collection
        </a>
      </div>
    </section>
  );
}
