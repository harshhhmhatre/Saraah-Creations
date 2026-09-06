const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://saraahcreations.com';

export const metadata = {
  title: 'Our Work & Film Showcase | Aarti: The Unknown Love Story',
  description:
    'Explore the cinematic portfolio of Sarrah Creation. Featured project: "Aarti: The Unknown Love Story", an acclaimed Marathi feature film written, produced & directed by Sarika Mahesh Mene (IMDb 8.0/10).',
  keywords: [
    'Aarti The Unknown Love Story',
    'Aarti Marathi Movie',
    'Sarika Mahesh Mene Director',
    'Sarrah Creation Portfolio',
    'Marathi Feature Film',
    'Sunny Pawar Aarti Makwana',
    'IMDb 8.0 Marathi Cinema',
    'Cinematic Portfolio Mumbai',
  ],
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    title: 'Aarti: The Unknown Love Story | Sarrah Creation Portfolio',
    description:
      'Explore the cinematic journey of Sarrah Creation. Directed by Sarika Mahesh Mene, rated 8.0/10 on IMDb.',
    url: `${siteUrl}/portfolio`,
    type: 'video.movie',
    images: [
      {
        url: '/images/aarti-poster.png',
        width: 480,
        height: 600,
        alt: 'Aarti: The Unknown Love Story Official Movie Poster',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aarti: The Unknown Love Story | Sarrah Creation Portfolio',
    description:
      'Acclaimed Marathi feature film written, produced & directed by Sarika Mahesh Mene. IMDb 8.0/10.',
    images: ['/images/aarti-poster.png'],
  },
};

export default function PortfolioLayout({ children }) {
  const movieSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Movie',
        name: 'Aarti: The Unknown Love Story',
        alternateName: 'Aarti',
        director: {
          '@type': 'Person',
          name: 'Sarika Mahesh Mene',
          sameAs: 'https://www.imdb.com/name/nm8922883/',
        },
        producer: {
          '@type': 'Person',
          name: 'Sarika Mahesh Mene',
        },
        productionCompany: {
          '@type': 'Organization',
          name: 'Sarrah Creation',
          url: siteUrl,
        },
        genre: ['Drama', 'Romance', 'Biography'],
        inLanguage: 'mr',
        datePublished: '2017-08-18',
        image: `${siteUrl}/images/aarti-poster.png`,
        description:
          'An emotionally resonant feature film based on the real-life story of Sunny Pawar and Aarti Makwana. A gripping narrative of courage, loyalty, and unconditional love.',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '8.0',
          bestRating: '10',
          worstRating: '1',
          ratingCount: '26',
          reviewCount: '26',
        },
        award: 'Official poster unveiled by former Maharashtra CM Manohar Joshi; Blessed by Waheeda Rehman',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Portfolio',
            item: `${siteUrl}/portfolio`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(movieSchema) }}
      />
      {children}
    </>
  );
}
