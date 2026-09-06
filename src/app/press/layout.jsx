const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://saraahcreations.com';

export const metadata = {
  title: 'Press & Media Coverage | Sarrah Creation',
  description:
    'Read national press articles, news features, and media coverage of Sarrah Creation and "Aarti: The Unknown Love Story" across Hindustan Times, Scroll.in, Mid-Day, Filmfare, and more.',
  keywords: [
    'Sarrah Creation Press',
    'Aarti Movie News',
    'Sarika Mahesh Mene News',
    'Hindustan Times Aarti Movie',
    'Scroll.in Sarika Mene',
    'Filmfare Marathi Cinema',
    'Sarrah Creation Media Coverage',
  ],
  alternates: {
    canonical: '/press',
  },
  openGraph: {
    title: 'Press & Media Coverage | Sarrah Creation',
    description:
      'National media recognition and news articles covering the films and milestones of Sarrah Creation.',
    url: `${siteUrl}/press`,
    images: [
      {
        url: '/images/aarti-poster.png',
        width: 480,
        height: 600,
        alt: 'Sarrah Creation Media and Press Coverage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Press & Media Coverage | Sarrah Creation',
    description:
      'National media recognition and news articles covering the films and milestones of Sarrah Creation.',
    images: ['/images/aarti-poster.png'],
  },
};

export default function PressLayout({ children }) {
  const pressSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${siteUrl}/press/#webpage`,
        url: `${siteUrl}/press`,
        name: 'Press & Media Articles — Sarrah Creation',
        description: 'National press coverage for Aarti: The Unknown Love Story and Sarrah Creation.',
        publisher: {
          '@type': 'Organization',
          name: 'Sarrah Creation',
        },
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
            name: 'Press & Media',
            item: `${siteUrl}/press`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pressSchema) }}
      />
      {children}
    </>
  );
}
