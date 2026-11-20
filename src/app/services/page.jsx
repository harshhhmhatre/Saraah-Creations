'use client';

import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animations/ScrollReveal';
import Button from '@/components/ui/Button';
import { servicesData } from '@/data/services';
import styles from './services.module.css';

export default function Services() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <ScrollReveal variant="fadeUp">
            <span className="gold-line-center"></span>
            <h1 className={styles.heroHeading}>Comprehensive Creative Services</h1>
            <p className={styles.heroSub}>
              From script to silver screen, logo to full brand identity, strategy to lead generation — explore our complete spectrum of solutions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {servicesData.map((service, index) => (
            <div key={service.id} id={service.id} className={styles.serviceBlock}>
              <ScrollReveal variant="fadeUp">
                <div className={styles.serviceHeader}>
                  <span className={styles.serviceIcon}>{service.icon}</span>
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}#enquiry`}
                    className={styles.serviceTitleLink}
                  >
                    <h2 className={styles.serviceTitle}>{service.title}</h2>
                  </Link>
                </div>
                <p className={styles.serviceDesc}>{service.description}</p>

                <h4 style={{ marginBottom: '1rem', color: 'var(--gold)', letterSpacing: '1px', fontSize: 'var(--text-xs)', textTransform: 'uppercase' }}>
                  KEY CAPABILITIES & OFFERINGS (CLICK TO ENQUIRE)
                </h4>
                <div className={styles.subGrid}>
                  {service.subCategories.map((sub, i) => (
                    <Link
                      key={i}
                      href={`/contact?service=${encodeURIComponent(sub)}#enquiry`}
                      className={styles.subItem}
                    >
                      <span>{sub}</span>
                    </Link>
                  ))}
                </div>

                <div className={styles.serviceBlockFooter}>
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}#enquiry`}
                    className={styles.serviceEnquireBtn}
                  >
                    <span>Enquire About {service.title}</span>
                    <span>→</span>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          ))}

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <SectionHeading
              title="Need a Customized Package?"
              subtitle="We tailor our production, branding, and marketing solutions to fit your specific scope and business targets."
              align="center"
            />
            <Button href="/contact" variant="primary" size="lg" icon>
              Discuss Your Project
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
