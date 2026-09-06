const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://saraahcreations.com';

export const metadata = {
  title: 'Terms of Service | Sarrah Creation',
  description:
    'Review the Terms of Service for Sarrah Creation. Understand the terms and conditions governing your use of our website, services, and creative engagements.',
  alternates: {
    canonical: '/terms-of-service',
  },
  openGraph: {
    title: 'Terms of Service | Sarrah Creation',
    description:
      'Terms and conditions governing your use of Sarrah Creation services.',
    url: `${siteUrl}/terms-of-service`,
  },
  twitter: {
    card: 'summary',
    title: 'Terms of Service | Sarrah Creation',
    description:
      'Terms and conditions governing your use of Sarrah Creation services.',
  },
};

export default function TermsOfServiceLayout({ children }) {
  return <>{children}</>;
}
