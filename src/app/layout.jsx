import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://saraahcreations.com';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Saraah Creation | Film Production, Advertising & Creative Agency',
    template: '%s | Saraah Creation',
  },
  description:
    'Saraah Creation is a premier filmmaking, advertising, graphic design, branding, sales & marketing production house founded by Sarika Mahesh Mene. Directed the acclaimed Marathi feature film "Aarti: The Unknown Love Story".',
  keywords: [
    'Saraah Creation',
    'Sarika Mahesh Mene',
    'Aarti The Unknown Love Story',
    'Film Production House Mumbai',
    'Marathi Feature Film Production',
    'Film Director Sarika Mene',
    'Advertising Agency Mumbai',
    'Creative Agency',
    'Graphic Design Studio',
    'Brand Identity & Logo Design',
    'Commercial Video Production',
    'Digital Marketing & Sales Strategy',
    'Corporate Filmmaking India',
  ],
  authors: [{ name: 'Sarika Mahesh Mene', url: siteUrl }],
  creator: 'Sarika Mahesh Mene',
  publisher: 'Saraah Creation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Saraah Creation',
    title: 'Saraah Creation | Film Production, Advertising & Creative Agency',
    description:
      'Creating Cinema. Building Brands. Award-winning filmmaking, advertising, and marketing solutions by Sarika Mahesh Mene.',
    images: [
      {
        url: '/images/abcd.png',
        width: 1200,
        height: 630,
        alt: 'Saraah Creation — Film Production and Creative Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saraah Creation | Film Production, Advertising & Creative Agency',
    description:
      'Creating Cinema. Building Brands. Award-winning filmmaking, advertising, and marketing solutions by Sarika Mahesh Mene.',
    images: ['/images/abcd.png'],
    creator: '@SaraahCreation',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/icon.png',
    shortcut: '/images/icon.png',
    apple: '/images/icon.png',
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'Saraah Creation',
        url: siteUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}/images/icon.png`,
          caption: 'Saraah Creation Logo',
        },
        image: `${siteUrl}/images/abcd.png`,
        description:
          'Saraah Creation is a premier filmmaking, advertising, graphic design, and marketing production company founded by Sarika Mahesh Mene.',
        founder: {
          '@type': 'Person',
          '@id': `${siteUrl}/#founder`,
          name: 'Sarika Mahesh Mene',
          jobTitle: 'Film Director, Producer & Creative Director',
          url: `${siteUrl}/about`,
          image: `${siteUrl}/images/founder-sarika.png`,
          sameAs: [
            'https://www.imdb.com/name/nm8922883/',
            'https://www.linkedin.com/in/sarika-mene',
          ],
        },
        sameAs: [
          'https://www.youtube.com/@SaraahCreation',
          'https://www.linkedin.com/company/saraah-creation',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Support / Business Inquiries',
          email: 'contact@saraahcreations.com',
          availableLanguage: ['English', 'Hindi', 'Marathi'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Saraah Creation',
        publisher: {
          '@id': `${siteUrl}/#organization`,
        },
        inLanguage: 'en-US',
      },
    ],
  };

  return (
    <html lang="en" data-scroll-behavior="smooth" data-theme="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
