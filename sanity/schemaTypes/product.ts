import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tag",
      title: "Tag",
      description:
        "Optional badge shown on product cards, e.g. New, Sale, Limited",
      type: "string",
      options: {
        list: ["New", "Sale", "Limited"],
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "details",
      title: "Details",
      description: "Bullet-point spec list, e.g. fabric, fit, origin",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "sizes",
      title: "Available Sizes",
      description: "e.g. XS, S, M, L, XL, XXL, or One Size",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: ["One Size", "XXS", "XS", "S", "M", "L", "XL", "XXL"],
      },
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "images",
      title: "Product Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category.name",
      media: "images.0",
    },
  },
});
