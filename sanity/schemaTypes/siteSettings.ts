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
      initialValue: "KĀNGI Site Settings",
      readOnly: true,
    }),
    defineField({
      name: "whatsappNumber",
      title: "WhatsApp Checkout Number",
      description: "Include country code, e.g. 2347061673695",
      type: "string",
    }),
    defineField({
      name: "instagram",
      title: "Instagram URL",
      type: "url",
    }),
    defineField({
      name: "tiktok",
      title: "TikTok URL",
      type: "url",
    }),
    defineField({
      name: "twitter",
      title: "X (Twitter) URL",
      type: "url",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
