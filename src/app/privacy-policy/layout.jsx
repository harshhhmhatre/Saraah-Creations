const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://saraahcreations.com';

export const metadata = {
  title: 'Privacy Policy | Sarrah Creation',
  description:
    'Read the Privacy Policy of Sarrah Creation. Learn how we collect, use, and protect your personal information when you interact with our website and services.',
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | Sarrah Creation',
    description:
      'How Sarrah Creation handles your data and protects your privacy.',
    url: `${siteUrl}/privacy-policy`,
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy | Sarrah Creation',
    description:
      'How Sarrah Creation handles your data and protects your privacy.',
  },
};

export default function PrivacyPolicyLayout({ children }) {
  return <>{children}</>;
}
