export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: "men" | "women";
  tag?: string;
  description: string;
  details: string[];
  sizes: string[];
  images: string[];
};

export const PRODUCTS: Product[] = [
  // ── MEN ──
  {
    id: "m1",
    slug: "kangi-oversized-tee-sand",
    name: "Kāngi Oversized Tee — Sand",
    price: 1900,
    category: "men",
    tag: "New",
    description:
      "A relaxed silhouette cut from 100% heavyweight cotton. Dropped shoulders, raw-hem finish, and tonal Kāngi embroidery at the chest.",
    details: [
      "100% 320gsm heavyweight cotton",
      "Dropped shoulder construction",
      "Raw-hem finish",
      "Tonal chest embroidery",
      "Made in Portugal",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=900&q=85",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=85",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=900&q=85",
    ],
  },
  {
    id: "m2",
    slug: "kangi-longsleeve-charcoal",
    name: "Kāngi Longsleeve — Charcoal",
    price: 2400,
    category: "men",
    description:
      "Relaxed-fit longsleeve in brushed cotton jersey. A clean, everyday essential with subtle Kāngi branding.",
    details: [
      "280gsm brushed cotton jersey",
      "Relaxed fit",
      "Ribbed cuffs and hem",
      "Subtle woven label",
      "Made in Portugal",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=900&q=85",
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=900&q=85",
      "https://images.unsplash.com/photo-1618354691438-25bc04584c23?w=900&q=85",
    ],
  },
  {
    id: "m3",
    slug: "kangi-cargo-pant-ecru",
    name: "Kāngi Cargo Pant — Ecru",
    price: 3800,
    category: "men",
    tag: "New",
    description:
      "Six-pocket cargo silhouette with a mid-rise, tapered leg. Heavy-duty canvas with a soft wash finish.",
    details: [
      "100% washed canvas",
      "Mid-rise, tapered leg",
      "Six-pocket utility design",
      "Adjustable ankle drawcord",
      "Made in Italy",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=900&q=85",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=900&q=85",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=900&q=85",
    ],
  },
  {
    id: "m4",
    slug: "kangi-coach-jacket-olive",
    name: "Kāngi Coach Jacket — Olive",
    price: 5200,
    category: "men",
    description:
      "Lightweight nylon coach jacket with a snap-button placket and utility pockets. Wears as a shell or a layer.",
    details: [
      "100% recycled nylon shell",
      "Snap-button front placket",
      "Chest and hip pockets",
      "Embroidered back graphic",
      "Made in Japan",
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=900&q=85",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=900&q=85",
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=900&q=85",
    ],
  },
  {
    id: "m5",
    slug: "kangi-five-panel-cap",
    name: "Kāngi Five-Panel Cap",
    price: 1200,
    category: "men",
    description:
      "Structured five-panel cap in washed canvas. Embroidered Kāngi wordmark at front.",
    details: [
      "Washed cotton canvas",
      "Structured front panel",
      "Embroidered wordmark",
      "Adjustable snapback closure",
      "One size fits most",
    ],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=900&q=85",
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=900&q=85",
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=900&q=85",
    ],
  },
  {
    id: "m6",
    slug: "kangi-zip-hoodie-stone",
    name: "Kāngi Zip Hoodie — Stone",
    price: 3200,
    category: "men",
    description:
      "Full-zip hoodie in a mid-weight fleece. Clean panelling, minimal branding, built for every season.",
    details: [
      "350gsm cotton fleece",
      "YKK zip hardware",
      "Kangaroo zip pockets",
      "Tonal cord and toggles",
      "Made in Portugal",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=900&q=85",
      "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=900&q=85",
      "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=900&q=85",
    ],
  },

  // ── WOMEN ──
  {
    id: "w1",
    slug: "kangi-relaxed-tee-cream",
    name: "Kāngi Relaxed Tee — Cream",
    price: 1700,
    category: "women",
    tag: "New",
    description:
      "Boxy relaxed tee in premium cotton. Clean seams, minimal branding, effortlessly versatile.",
    details: [
      "100% 280gsm cotton",
      "Boxy, relaxed fit",
      "Clean interior seaming",
      "Subtle woven tab at hem",
      "Made in Portugal",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&q=85",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=85",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=85",
    ],
  },
  {
    id: "w2",
    slug: "kangi-wide-leg-trouser-black",
    name: "Kāngi Wide-Leg Trouser — Black",
    price: 3600,
    category: "women",
    description:
      "High-waisted wide-leg trouser in a fluid crepe fabric. Elegant and architectural.",
    details: [
      "Viscose-blend crepe",
      "High-rise waistband",
      "Wide-leg silhouette",
      "Side zip closure",
      "Made in Italy",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=85",
      "https://images.unsplash.com/photo-1544441893-675973e31985?w=900&q=85",
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=900&q=85",
    ],
  },
  {
    id: "w3",
    slug: "kangi-knit-vest-camel",
    name: "Kāngi Knit Vest — Camel",
    price: 2800,
    category: "women",
    tag: "New",
    description:
      "A ribbed knit vest with a deep V-neck and relaxed drape. Layer it or wear it alone.",
    details: [
      "Merino-blend ribbed knit",
      "Deep V-neck",
      "Relaxed drape",
      "Tonal rib trim",
      "Made in Scotland",
    ],
    sizes: ["XS", "S", "M", "L"],
    images: [
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=900&q=85",
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=900&q=85",
      "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=900&q=85",
    ],
  },
  {
    id: "w4",
    slug: "kangi-maxi-skirt-ivory",
    name: "Kāngi Maxi Skirt — Ivory",
    price: 2900,
    category: "women",
    description:
      "Floor-length maxi skirt in a lightweight satin. A-line silhouette with an elasticated waistband.",
    details: [
      "Recycled satin",
      "A-line silhouette",
      "Elasticated waistband",
      "Subtle sheen finish",
      "Made in Italy",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=900&q=85",
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=900&q=85",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&q=85",
    ],
  },
  {
    id: "w5",
    slug: "kangi-blazer-oatmeal",
    name: "Kāngi Blazer — Oatmeal",
    price: 5800,
    category: "women",
    description:
      "Single-button blazer in a textured boucle. Structured shoulders, relaxed body.",
    details: [
      "Wool-blend boucle",
      "Single-button closure",
      "Structured shoulders",
      "Welt chest pocket",
      "Made in France",
    ],
    sizes: ["XS", "S", "M", "L"],
    images: [
      "https://images.unsplash.com/photo-1566479179817-53bc9e0b0c07?w=900&q=85",
      "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=900&q=85",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=900&q=85",
    ],
  },
  {
    id: "w6",
    slug: "kangi-crossbody-bag-tan",
    name: "Kāngi Crossbody Bag — Tan",
    price: 4200,
    category: "women",
    description:
      "Structured crossbody in full-grain leather. Adjustable strap, interior zip pocket.",
    details: [
      "Full-grain vegetable-tanned leather",
      "Adjustable crossbody strap",
      "Interior zip pocket",
      "Magnetic closure",
      "Made in Spain",
    ],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=900&q=85",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=900&q=85",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=900&q=85",
    ],
  },
];

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug) ?? null;
}

export function getProductsByCategory(category: "men" | "women") {
  return PRODUCTS.filter((p) => p.category === category);
}
