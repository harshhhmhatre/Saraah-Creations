const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://saraahcreations.com';

export const metadata = {
  title: 'About Saraah Creation & Founder Sarika Mahesh Mene',
  description:
    'Learn about Saraah Creation and founder Sarika Mahesh Mene — visionary film director, producer, and creative strategist blending cinematic storytelling, branding, and growth marketing.',
  keywords: [
    'About Saraah Creation',
    'Sarika Mahesh Mene',
    'Sarika Mene Film Director',
    'Creative Agency Founder Mumbai',
    'Filmmaking Philosophy',
    'Marathi Cinema Director',
    'Brand Strategy Leadership',
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Saraah Creation & Founder Sarika Mahesh Mene',
    description:
      'Where cinematic storytelling meets business strategy. Meet founder and film director Sarika Mahesh Mene.',
    url: `${siteUrl}/about`,
    images: [
      {
        url: '/images/founder-sarika.png',
        width: 500,
        height: 650,
        alt: 'Sarika Mahesh Mene - Founder & Creative Director of Saraah Creation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Saraah Creation & Founder Sarika Mahesh Mene',
    description:
      'Where cinematic storytelling meets business strategy. Meet founder and film director Sarika Mahesh Mene.',
    images: ['/images/founder-sarika.png'],
  },
};

export default function AboutLayout({ children }) {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': `${siteUrl}/about/#webpage`,
        url: `${siteUrl}/about`,
        name: 'About Saraah Creation & Sarika Mahesh Mene',
        description:
          'A premium creative agency and production house uniting cinematic storytelling, design excellence, and business-focused marketing.',
        mainEntity: {
          '@type': 'Person',
          name: 'Sarika Mahesh Mene',
          jobTitle: 'Founder, Film Director & Producer',
          worksFor: {
            '@type': 'Organization',
            name: 'Saraah Creation',
          },
          image: `${siteUrl}/images/founder-sarika.png`,
          sameAs: [
            'https://www.imdb.com/name/nm8922883/',
            'https://www.linkedin.com/in/sarika-mene',
          ],
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
            name: 'About Us',
            item: `${siteUrl}/about`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {children}
    </>
  );
}
