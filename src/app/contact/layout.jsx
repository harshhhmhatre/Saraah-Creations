const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://saraahcreations.com';

export const metadata = {
  title: 'Contact Us | Start a Project with Sarrah Creation',
  description:
    'Get in touch with Sarrah Creation for film production, advertising campaigns, brand identity design, and marketing inquiries. Collaborate with Sarika Mahesh Mene and our creative team.',
  keywords: [
    'Contact Sarrah Creation',
    'Hire Film Production House Mumbai',
    'Advertising Agency Contact',
    'Sarika Mahesh Mene Contact',
    'Brand Consultation Inquiry',
    'Film Producer Mumbai Inquiry',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Sarrah Creation | Let’s Create Cinema & Build Brands',
    description:
      'Ready to bring your creative vision to life? Connect with Sarrah Creation today.',
    url: `${siteUrl}/contact`,
    images: [
      {
        url: '/images/abcd.png',
        width: 1200,
        height: 630,
        alt: 'Contact Sarrah Creation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Sarrah Creation | Let’s Create Cinema & Build Brands',
    description:
      'Ready to bring your creative vision to life? Connect with Sarrah Creation today.',
    images: ['/images/abcd.png'],
  },
};

export default function ContactLayout({ children }) {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': `${siteUrl}/contact/#webpage`,
        url: `${siteUrl}/contact`,
        name: 'Contact Sarrah Creation',
        description: 'Get in touch with Sarrah Creation for film production, advertising, and marketing collaborations.',
        mainEntity: {
          '@type': 'Organization',
          name: 'Sarrah Creation',
          url: siteUrl,
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Business Inquiries',
            email: 'contact@saraahcreations.com',
            availableLanguage: ['English', 'Hindi', 'Marathi'],
          },
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
            name: 'Contact',
            item: `${siteUrl}/contact`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {children}
    </>
  );
}
