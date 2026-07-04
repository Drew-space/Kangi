// import { defineField, defineType } from "sanity";

// export const siteSettingsType = defineType({
//   name: "siteSettings",
//   title: "Site Settings",
//   type: "document",
//   fields: [
//     defineField({
//       name: "title",
//       title: "Internal Title",
//       type: "string",
//       initialValue: "KĀNGI Site Settings",
//       readOnly: true,
//     }),
//     defineField({
//       name: "whatsappNumber",
//       title: "WhatsApp Checkout Number",
//       description: "Include country code, e.g. 2347061673695",
//       type: "string",
//     }),
//     defineField({
//       name: "instagram",
//       title: "Instagram URL",
//       type: "url",
//     }),
//     defineField({
//       name: "tiktok",
//       title: "TikTok URL",
//       type: "url",
//     }),
//     defineField({
//       name: "twitter",
//       title: "X (Twitter) URL",
//       type: "url",
//     }),
//   ],
//   preview: {
//     prepare() {
//       return { title: "Site Settings" };
//     },
//   },
// });

import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Internal Title",
      type: "string",
      initialValue: "SOFIA ATELIER Site Settings",
      readOnly: true,
    }),
    defineField({
      name: "whatsappNumber",
      title: "WhatsApp Checkout Number",
      description: "Include country code, e.g. 2347061673695",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Contact Email",
      type: "string",
    }),
    defineField({
      name: "telegramUsername",
      title: "Telegram Username",
      description: "Include the @, e.g. @sofia08500",
      type: "string",
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      description:
        "Add any social platform here — the site automatically matches the right icon by platform name.",
      type: "array",
      of: [
        {
          type: "object",
          name: "socialLink",
          fields: [
            defineField({
              name: "platform",
              title: "Platform",
              type: "string",
              options: {
                list: [
                  "Instagram",
                  "Facebook",
                  "TikTok",
                  "Pinterest",
                  "X",
                  "Threads",
                  "YouTube",
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: "platform", subtitle: "url" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
