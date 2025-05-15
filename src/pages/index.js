import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import { MdTravelExplore } from 'react-icons/md';
import { FaBook, FaUserPlus } from 'react-icons/fa';
import Link from '@docusaurus/Link';

export default function Home() {
return (
<Layout description="Ananta Cloud provides a comprehensive library of pre-built modules, tools, and frameworks.">



  <header className={styles.heroCustom}>
    <div className="container">
      <h1>Getting Started</h1>
      <p className={styles.subtitle}>
        Ananta Cloud provides a comprehensive library of pre-built modules, tools, and frameworks designed to accelerate the implementation of        robust and scalable infrastructure solutions.
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
            Discover how Ananta Cloud's DevOps Foundations can guide you in building and deploying top-tier infrastructure.
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
            Discover and locate specific modules within the Ananta Cloud Library to enhance your infrastructure and development process.
          </p>
        </Link>
      </div>

      <div className="col col--4">
        <Link
          to="/docs/getting-started/Createaccount"
          className={styles.card}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <FaUserPlus className={styles.cardIcon} />
          <h3 className={styles.cardTitle}>Getting Started with Ananta Cloud Account</h3>
          <p className={styles.cardText}>
            Create your account in the Ananta Cloud Developer Portal and invite your team members to collaborate.
          </p>
        </Link>
      </div>
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
            Ananta Cloud helps developers deploy secure, scalable infrastructure quickly using Gruntwork's proven tools and frameworks.
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
          <p>Email: support@anantacloud.com</p>
          <p>Phone: +1 (800) 123-4567</p>
          <p>Location: San Francisco, CA</p>
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






















