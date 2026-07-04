import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "e.g. Male, Female, Kids, Accessories",
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
      name: "headerImage",
      title: "Header Image",
      description: "Banner shown at the top of this category's page",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: "name" },
  },
});
