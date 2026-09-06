'use client';

import ScrollReveal from '@/components/animations/ScrollReveal';
import styles from './legal.module.css';

export default function PrivacyPolicy() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <ScrollReveal variant="fadeUp">
            <span className="gold-line-center"></span>
            <h1 className={styles.heroHeading}>Privacy Policy</h1>
            <p className={styles.heroSub}>
              Your privacy is important to us. This policy outlines how Sarrah Creation collects, uses, and safeguards your information.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className={styles.legalContent}>
        <ScrollReveal variant="fadeUp">
          <span className={styles.lastUpdated}>Last Updated: September 2026</span>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.05}>
          <div className={styles.section}>
            <h2>1. Introduction</h2>
            <p>
              Sarrah Creation (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect, how we use it, and what rights you have in relation to it when you visit our website or engage with our services.
            </p>
            <p>
              By accessing or using our website and services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.05}>
          <div className={styles.section}>
            <h2>2. Information We Collect</h2>

            <h3>Personal Information</h3>
            <p>We may collect personally identifiable information when you voluntarily provide it, including:</p>
            <ul>
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company or organization name</li>
              <li>Project details and messages submitted through our contact form</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect certain information, including:</p>
            <ul>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited, time spent on pages, and navigation paths</li>
              <li>IP address (anonymized where possible)</li>
              <li>Referring website or source</li>
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.05}>
          <div className={styles.section}>
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul>
              <li>To respond to your inquiries and provide the services you request</li>
              <li>To communicate with you about projects, updates, and promotional materials (with your consent)</li>
              <li>To improve our website, services, and overall user experience</li>
              <li>To analyze website usage and trends for internal business purposes</li>
              <li>To comply with applicable legal obligations</li>
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.05}>
          <div className={styles.section}>
            <h2>4. Cookies & Tracking Technologies</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small data files placed on your device that help us understand how you interact with our site.
            </p>
            <p>You can manage cookie preferences through your browser settings. Disabling cookies may affect certain features of our website.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.05}>
          <div className={styles.section}>
            <h2>5. Data Sharing & Third Parties</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul>
              <li><strong>Service Providers:</strong> Trusted third-party vendors who assist us in operating our website and delivering services (e.g., hosting, analytics), bound by confidentiality obligations.</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.05}>
          <div className={styles.section}>
            <h2>6. Data Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.05}>
          <div className={styles.section}>
            <h2>7. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes described in this policy, or as required by applicable law. Once your information is no longer needed, we will securely delete or anonymize it.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.05}>
          <div className={styles.section}>
            <h2>8. Your Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Correction:</strong> Request correction of any inaccurate or incomplete data.</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data, subject to legal exceptions.</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time.</li>
            </ul>
            <p>To exercise any of these rights, please contact us using the details below.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.05}>
          <div className={styles.section}>
            <h2>9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites (e.g., YouTube, LinkedIn, IMDb). We are not responsible for the privacy practices or content of these external sites. We encourage you to read their privacy policies before providing any personal information.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.05}>
          <div className={styles.section}>
            <h2>10. Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us and we will promptly delete it.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.05}>
          <div className={styles.section}>
            <h2>11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically to stay informed about how we protect your information.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.05}>
          <div className={styles.contactCard}>
            <h3>Questions About Privacy?</h3>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at{' '}
              <a href="mailto:sarrahcreation.2025@gmail.com">sarrahcreation.2025@gmail.com</a>{' '}
              or call us at <a href="tel:+919867741226">+91 98677 41226</a>.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </>
  );
}
