const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://saraahcreations.com';

export const metadata = {
  title: 'Contact Us | Start a Project with Saraah Creation',
  description:
    'Get in touch with Saraah Creation for film production, advertising campaigns, brand identity design, and marketing inquiries. Collaborate with Sarika Mahesh Mene and our creative team.',
  keywords: [
    'Contact Saraah Creation',
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
    title: 'Contact Saraah Creation | Let’s Create Cinema & Build Brands',
    description:
      'Ready to bring your creative vision to life? Connect with Saraah Creation today.',
    url: `${siteUrl}/contact`,
    images: [
      {
        url: '/images/abcd.png',
        width: 1200,
        height: 630,
        alt: 'Contact Saraah Creation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Saraah Creation | Let’s Create Cinema & Build Brands',
    description:
      'Ready to bring your creative vision to life? Connect with Saraah Creation today.',
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
        name: 'Contact Saraah Creation',
        description: 'Get in touch with Saraah Creation for film production, advertising, and marketing collaborations.',
        mainEntity: {
          '@type': 'Organization',
          name: 'Saraah Creation',
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
