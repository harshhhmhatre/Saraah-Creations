const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://saraahcreations.com';

export const metadata = {
  title: 'Services | Film Production, Advertising, Graphic Design & Marketing',
  description:
    'Comprehensive creative solutions by Saraah Creation: Feature Films, TV Commercials, Corporate Films, Brand Identity, Graphic Design, Performance Marketing & Sales Strategy.',
  keywords: [
    'Film Production Services Mumbai',
    'TV Commercials Production India',
    'Graphic Design Agency',
    'Brand Identity Design',
    'Sales Strategy & Marketing Agency',
    'Corporate Video Makers',
    'Saraah Creation Services',
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Comprehensive Creative Services | Saraah Creation',
    description:
      'From script to silver screen, logo to full brand identity, strategy to revenue growth — explore our complete spectrum of creative services.',
    url: `${siteUrl}/services`,
    images: [
      {
        url: '/images/film-production.png',
        width: 800,
        height: 600,
        alt: 'Saraah Creation Production and Creative Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comprehensive Creative Services | Saraah Creation',
    description:
      'Film production, advertising, graphic design, and performance marketing by Saraah Creation.',
    images: ['/images/film-production.png'],
  },
};

export default function ServicesLayout({ children }) {
  const servicesSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        name: 'Saraah Creation Core Services',
        description: 'End-to-end creative and commercial services offered by Saraah Creation',
        itemListElement: [
          {
            '@type': 'Service',
            position: 1,
            name: 'Film & Ad Production',
            provider: {
              '@type': 'Organization',
              name: 'Saraah Creation',
            },
            serviceType: 'Film and Commercial Video Production',
            description: 'Feature films, TV commercials, OTT content, brand films, music videos, and post-production.',
          },
          {
            '@type': 'Service',
            position: 2,
            name: 'Graphic Design & Branding',
            provider: {
              '@type': 'Organization',
              name: 'Saraah Creation',
            },
            serviceType: 'Graphic Design and Brand Identity',
            description: 'Logo design, brand identity systems, marketing collateral, packaging, and UI/UX design.',
          },
          {
            '@type': 'Service',
            position: 3,
            name: 'Sales & Marketing Strategy',
            provider: {
              '@type': 'Organization',
              name: 'Saraah Creation',
            },
            serviceType: 'Marketing and Sales Strategy',
            description: 'Performance marketing, social media campaigns, GTM strategy, brand positioning, and conversion optimization.',
          },
        ],
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
            name: 'Services',
            item: `${siteUrl}/services`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      {children}
    </>
  );
}
