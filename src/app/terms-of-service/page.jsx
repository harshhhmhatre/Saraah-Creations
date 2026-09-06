'use client';

import ScrollReveal from '@/components/animations/ScrollReveal';
import styles from './legal.module.css';

export default function TermsOfService() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <ScrollReveal variant="fadeUp">
            <span className="gold-line-center"></span>
            <h1 className={styles.heroHeading}>Terms of Service</h1>
            <p className={styles.heroSub}>
              Please read these terms carefully before using our website or engaging with Sarrah Creation&apos;s services.
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
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Sarrah Creation website and services, you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree with any part of these Terms, you must not use our website or services.
            </p>
            <p>
              These Terms apply to all visitors, users, and others who access or use our website and services, including but not limited to film production, advertising, graphic design, branding, and marketing services.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.05}>
          <div className={styles.section}>
            <h2>2. Our Services</h2>
            <p>Sarrah Creation provides a range of creative and commercial services, including:</p>
            <ul>
              <li>Film production (feature films, short films, documentaries, corporate films)</li>
              <li>Television and digital commercials</li>
              <li>Graphic design and brand identity development</li>
              <li>Advertising and media planning</li>
              <li>Performance marketing and sales strategy consulting</li>
            </ul>
            <p>
              All service engagements are subject to separate project agreements that will outline specific deliverables, timelines, payment terms, and intellectual property rights.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.05}>
          <div className={styles.section}>
            <h2>3. Intellectual Property Rights</h2>
            <p>
              All content on this website — including but not limited to text, images, logos, graphics, videos, design elements, and underlying code — is the intellectual property of Sarrah Creation or its licensors and is protected under applicable copyright, trademark, and intellectual property laws.
            </p>
            <p>You may not, without our prior written consent:</p>
            <ul>
              <li>Reproduce, distribute, or publicly display any content from this website</li>
              <li>Modify, create derivative works from, or reverse-engineer any materials</li>
              <li>Use our trademarks, logos, or branding in any manner that implies endorsement or affiliation</li>
              <li>Scrape, download, or harvest content for commercial or competitive purposes</li>
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.05}>
          <div className={styles.section}>
            <h2>4. User Conduct</h2>
            <p>When using our website, you agree not to:</p>
            <ul>
              <li>Violate any applicable local, state, national, or international laws</li>
              <li>Submit false, misleading, or fraudulent information through our contact forms</li>
              <li>Attempt to gain unauthorized access to our systems, servers, or data</li>
              <li>Introduce viruses, malware, or other harmful code to our website</li>
              <li>Interfere with or disrupt the operation of the website or its infrastructure</li>
              <li>Use automated tools (bots, scrapers) to access our website without authorization</li>
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.05}>
          <div className={styles.section}>
            <h2>5. Project Engagements & Payments</h2>
            <p>
              All client engagements are governed by individual project contracts or service agreements executed between Sarrah Creation and the client. These agreements will typically cover:
            </p>
            <ul>
              <li>Scope of work and deliverables</li>
              <li>Project timelines and milestones</li>
              <li>Payment terms and schedules</li>
              <li>Revision and approval processes</li>
              <li>Ownership and licensing of deliverables</li>
              <li>Cancellation and refund policies</li>
            </ul>
            <p>
              In the event of any conflict between these Terms and a specific project agreement, the project agreement shall prevail.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.05}>
          <div className={styles.section}>
            <h2>6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Sarrah Creation shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our website or services.
            </p>
            <p>
              Our total liability for any claim arising from these Terms or your use of our services shall not exceed the total amount paid by you for the specific service giving rise to the claim.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.05}>
          <div className={styles.section}>
            <h2>7. Disclaimer of Warranties</h2>
            <p>
              Our website and services are provided on an &quot;as is&quot; and &quot;as available&quot; basis without any warranties of any kind, either express or implied. We do not warrant that:
            </p>
            <ul>
              <li>The website will be uninterrupted, error-free, or secure</li>
              <li>Any defects will be corrected in a specific timeframe</li>
              <li>The results of using our services will meet your specific expectations</li>
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.05}>
          <div className={styles.section}>
            <h2>8. Third-Party Links & Content</h2>
            <p>
              Our website may contain links to third-party websites or services (such as YouTube, LinkedIn, IMDb, or social media platforms). These links are provided for convenience and do not imply endorsement. We are not responsible for the content, accuracy, or practices of any third-party sites.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.05}>
          <div className={styles.section}>
            <h2>9. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Sarrah Creation, its founder, employees, and affiliates from any claims, damages, losses, or expenses (including legal fees) arising from your violation of these Terms or your use of our website and services.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.05}>
          <div className={styles.section}>
            <h2>10. Governing Law & Jurisdiction</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra, India.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.05}>
          <div className={styles.section}>
            <h2>11. Modifications to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. Changes will be effective immediately upon posting on this page. Your continued use of our website or services after any changes constitutes acceptance of the revised Terms.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.05}>
          <div className={styles.section}>
            <h2>12. Severability</h2>
            <p>
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.05}>
          <div className={styles.contactCard}>
            <h3>Questions About These Terms?</h3>
            <p>
              If you have any questions regarding these Terms of Service, please reach out to us at{' '}
              <a href="mailto:sarrahcreation.2025@gmail.com">sarrahcreation.2025@gmail.com</a>{' '}
              or call us at <a href="tel:+919867741226">+91 98677 41226</a>.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </>
  );
}
