export default function sitemap() {
  const baseUrl = 'https://dbvfoundation.in'

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/moo-with-us`,
      lastModified: new Date(),
    },
  ]
}
