import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cashforcars.example.com"

  return [
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          es: `${baseUrl}/es`,
        },
      },
    },
    {
      url: `${baseUrl}/es`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          es: `${baseUrl}/es`,
        },
      },
    },
    {
      url: `${baseUrl}/en/how-it-works`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en/how-it-works`,
          es: `${baseUrl}/es/how-it-works`,
        },
      },
    },
    {
      url: `${baseUrl}/es/how-it-works`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en/how-it-works`,
          es: `${baseUrl}/es/how-it-works`,
        },
      },
    },
  ]
}
