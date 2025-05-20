import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import { MdTravelExplore } from 'react-icons/md';
import { FaBook, FaUserPlus } from 'react-icons/fa';
import Link from '@docusaurus/Link';

export default function Home() {
return (
<Layout description="Ananta Cloud equips you with a comprehensive arsenal of pre-built modules, tools, and frameworks for faster, smarter deployment.">

  <header className={styles.heroCustom}>
    <div className="container">
      <h1>Getting Started</h1>
      <p className={styles.subtitle}>
        Accelerate the delivery of scalable, resilient infrastructure with Ananta Cloud’s extensive library of ready-to-use modules, tools, and frameworks.
      </p>
    </div>
  </header>

  <main className="container margin-vert--lg">
    <div className="row">
      <div className="col col--4">
        <Link
          to="/docs/devops-foundations"
          className={styles.card}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <MdTravelExplore className={styles.cardIcon} />
          <h3 className={styles.cardTitle}>Explore DevOps Fundamentals</h3>
          <p className={styles.cardText}>
            Let Ananta Cloud’s DevOps Foundations be your blueprint for creating and managing top-tier infrastructure.
          </p>
        </Link>
      </div>

      <div className="col col--4">
        <Link
          to="/developer-docs/findingmodule"
          className={styles.card}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <FaBook className={styles.cardIcon} />
          <h3 className={styles.cardTitle}>Explore the Ananta Cloud Library</h3>
          <p className={styles.cardText}>
            Harness the power of Ananta Cloud’s Library to find exactly the modules you need for building smarter, more efficient infrastructure.
          </p>
        </Link>
      </div>

  </main>

  <header className={styles.heroCustom}>
    <div className="container">
      <h1>Built on Trusted Open Source Tools</h1>
      <p className={styles.subtitle}>
        Ananta Cloud's products are powered by a reliable foundation of open source tools that we actively develop and maintain, ensuring                transparency, stability, and community-driven innovation.
      </p>
    </div>
  </header>

  <footer className={styles.footer}>
    <div className="container">
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <h4>About Ananta Cloud</h4>
          <p>
            Ananta Cloud simplifies the path to secure, scalable infrastructure using proven IaC tools trusted by the industry.
          </p>
        </div>

        <div className={styles.footerColumn}>
          <h4>Quick Links</h4>
          <ul className={styles.footerLinks}>
            <li><a href="/docs/devops-foundations">Docs</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/support">Support</a></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h4>Contact</h4>
          <p>Email: hello@anantacloud.com</p>
          <p>Phone: +91 8448765767</p>
          <p>Location: Gurgaon, Haryana</p>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} Ananta Cloud. All rights reserved.</p>
      </div>
    </div>
  </footer>
</Layout>
);
}
