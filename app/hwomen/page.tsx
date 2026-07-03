import AnnouncementBar from "@/components/kangi/AnnouncementBar";
import Navbar from "@/components/kangi/Navbar";
import Footer from "@/components/kangi/Footer";
import CategoryGrid from "@/components/kangi/CategoryGrid";
import { getProductsByCategory } from "@/lib/mock";

export const metadata = {
  title: "Women —SOFIA ATELIER",
};

export default function WomenPage() {
  const products = getProductsByCategory("women");

  return (
    <main style={{ background: "var(--white)", color: "var(--black)" }}>
      <AnnouncementBar />
      <Navbar />

      {/* Hero banner */}
      <div
        className="relative h-[40vh] flex items-end px-6 md:px-12 pb-10 overflow-hidden"
        style={{ background: "var(--charcoal)" }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
          }}
        />
        <div className="relative z-10">
          <p
            className="font-display text-xs tracking-[0.4em] uppercase mb-2"
            style={{ color: "var(--stone)" }}
          >
            SOFIA ATELIER / Women
          </p>
          <h1
            className="font-display text-6xl md:text-8xl tracking-wide leading-none"
            style={{ color: "var(--white)" }}
          >
            Women
          </h1>
        </div>
      </div>

      {/* Filter bar */}
      <div
        className="px-6 md:px-12 py-5 flex items-center justify-between border-b"
        style={{ borderColor: "rgba(0,0,0,0.1)" }}
      >
        <p
          className="font-display text-xs tracking-widest uppercase"
          style={{ color: "var(--muted)" }}
        >
          {products.length} Products
        </p>
        <div
          className="flex gap-6 font-display text-xs tracking-widest uppercase"
          style={{ color: "var(--muted)" }}
        >
          {["All", "Tops", "Bottoms", "Outerwear", "Bags"].map((f) => (
            <button key={f} className="hover:text-black transition-colors">
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="px-6 md:px-12 py-14">
        <CategoryGrid products={products} />
      </section>

      <Footer />
    </main>
  );
}
