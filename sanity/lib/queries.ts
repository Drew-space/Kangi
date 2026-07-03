import { client } from "./client";

export interface Product {
  _id: string;
  slug: string;
  name: string;
  price: number;
  category: "men" | "women" | string;
  tag?: string;
  description: string;
  details: string[];
  sizes: string[];
  images: string[]; // resolved to URLs
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
}

export interface SiteSettings {
  whatsappNumber: string;
  instagram?: string;
  tiktok?: string;
  twitter?: string;
}

const productFields = /* groq */ `
  _id,
  name,
  "slug": slug.current,
  price,
  "category": category->slug.current,
  tag,
  description,
  details,
  sizes,
  "images": images[].asset->url
`;

// All products, newest first
const allProductsQuery = /* groq */ `
  *[_type == "product"] | order(_createdAt desc) { ${productFields} }
`;

// Single product by slug — for product detail pages
const productBySlugQuery = /* groq */ `
  *[_type == "product" && slug.current == $slug][0] { ${productFields} }
`;

// Products filtered by category slug ("men" | "women")
const productsByCategoryQuery = /* groq */ `
  *[_type == "product" && category->slug.current == $category] | order(_createdAt desc) { ${productFields} }
`;

const allCategoriesQuery = /* groq */ `
  *[_type == "category"] | order(name asc) {
    _id,
    name,
    "slug": slug.current
  }
`;

const siteSettingsQuery = /* groq */ `
  *[_type == "siteSettings"][0] {
    whatsappNumber,
    instagram,
    tiktok,
    twitter
  }
`;

export async function getAllProducts(): Promise<Product[]> {
  return client.fetch(allProductsQuery);
}

// Drop-in replacement for the old lib/products.ts getProductBySlug
export async function getProductBySlug(slug: string): Promise<Product | null> {
  return client.fetch(productBySlugQuery, { slug });
}

// Drop-in replacement for the old lib/products.ts getProductsByCategory
export async function getProductsByCategory(
  category: "men" | "women" | string,
): Promise<Product[]> {
  return client.fetch(productsByCategoryQuery, { category });
}

export async function getAllCategories(): Promise<Category[]> {
  return client.fetch(allCategoriesQuery);
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return client.fetch(siteSettingsQuery);
}
