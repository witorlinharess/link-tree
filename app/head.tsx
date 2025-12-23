export default function Head() {
  const siteUrl = process.env.SITE_URL || 'https://witorlinhares.com'
  const ld = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Witor Linhares",
    "url": siteUrl,
    "sameAs": [
      "https://www.linkedin.com/",
      "https://github.com/",
      "https://instagram.com/"
    ],
    "jobTitle": "Dev Full Stack",
    "image": `${siteUrl}/witor-linhares.webp`
  }

  return (
    <>
      {/* Google site verification: replace the content value with the value from Google Search Console to verify ownership */}
      <meta name="google-site-verification" content="" />

      {/* JSON-LD structured data */}
      <script type="application/ld+json">{JSON.stringify(ld)}</script>

      {/* Canonical link (metadata also sets alternates/canonical) */}
      <link rel="canonical" href={siteUrl} />

      {/* Favicons & theme */}
      {/* Primary svg favicon (cache-busted for testing) */}
      <link rel="icon" href="/favicon.svg?v=2" type="image/svg+xml" sizes="any" />
      <link rel="shortcut icon" href="/favicon.svg?v=2" />

      {/* PNG/ICO fallbacks (optional) */}
      <link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png" />
      <link rel="icon" href="/favicon.ico" sizes="16x16 32x32" />

      <link rel="apple-touch-icon" href="/favicon-180.png" />
      <meta name="msapplication-TileImage" content="/favicon.svg?v=2" />
    </>
  )
}
