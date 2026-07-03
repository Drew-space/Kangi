import { client } from "./client";

export interface SizeOption {
  size: "S" | "M" | "L" | "XL" | "XXL";
  inStock: boolean;
  stockCount: number;
}

export interface Product {
  _id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  category: string;
  images: string[]; // resolved to URLs
  sizes: SizeOption[];
  featured: boolean;
}

export interface Category {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  image?: string;
}

export interface SiteSettings {
  whatsappNumber: string;
  instagram?: string;
  tiktok?: string;
  twitter?: string;
}

// All products, newest first
const allProductsQuery = /* groq */ `
  *[_type == "product"] | order(_createdAt desc) {
    _id,
    name,
    "slug": slug.current,
    description,
    price,
    "category": category->title,
    "images": images[].asset->url,
    sizes,
    featured
  }
`;

// Single product by slug — for product detail pages
const productBySlugQuery = /* groq */ `
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    description,
    price,
    "category": category->title,
    "images": images[].asset->url,
    sizes,
    featured
  }
`;

// Products filtered by category ("Men" | "Women")
const productsByCategoryQuery = /* groq */ `
  *[_type == "product" && category->title == $category] | order(_createdAt desc) {
    _id,
    name,
    "slug": slug.current,
    description,
    price,
    "category": category->title,
    "images": images[].asset->url,
    sizes,
    featured
  }
`;

const featuredProductsQuery = /* groq */ `
  *[_type == "product" && featured == true] | order(_createdAt desc) {
    _id,
    name,
    "slug": slug.current,
    description,
    price,
    "category": category->title,
    "images": images[].asset->url,
    sizes,
    featured
  }
`;

const allCategoriesQuery = /* groq */ `
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    "image": image.asset->url
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

export async function getProductBySlug(slug: string): Promise<Product | null> {
  return client.fetch(productBySlugQuery, { slug });
}

export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  return client.fetch(productsByCategoryQuery, { category });
}

export async function getFeaturedProducts(): Promise<Product[]> {
  return client.fetch(featuredProductsQuery);
}

export async function getAllCategories(): Promise<Category[]> {
  return client.fetch(allCategoriesQuery);
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return client.fetch(siteSettingsQuery);
}
