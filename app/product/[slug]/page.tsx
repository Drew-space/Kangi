// import { notFound } from "next/navigation";
// import { getProductBySlug, PRODUCTS } from "@/lib/products";
// import AnnouncementBar from "@/components/kangi/AnnouncementBar";
// import Navbar from "@/components/kangi/Navbar";
// import Footer from "@/components/kangi/Footer";
// import ProductDetail from "@/components/kangi/ProductDetail";

// export async function generateStaticParams() {
//   return PRODUCTS.map((p) => ({ slug: p.slug }));
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const product = getProductBySlug(slug);
//   return { title: product ? `${product.name} —SOFIA ATELIER` : "KĀNGI" };
// }

// export default async function ProductPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const product = getProductBySlug(slug);
//   if (!product) notFound();

//   return (
//     <main style={{ background: "var(--white)", color: "var(--black)" }}>
//       <AnnouncementBar />
//       <Navbar />
//       <ProductDetail product={product} />
//       <Footer />
//     </main>
//   );
// }

import { notFound } from "next/navigation";
import { getAllProducts, getProductBySlug } from "@/sanity/lib/queries";
import AnnouncementBar from "@/components/kangi/AnnouncementBar";
import Navbar from "@/components/kangi/Navbar";
import Footer from "@/components/kangi/Footer";
import ProductDetail from "@/components/kangi/ProductDetail";

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  return {
    title: product ? `${product.name} — SOFIA ATELIER` : "SOFIA ATELIER",
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  return (
    <main style={{ background: "var(--white)", color: "var(--black)" }}>
      <AnnouncementBar />
      <Navbar />
      <ProductDetail product={product} />
      <Footer />
    </main>
  );
}
