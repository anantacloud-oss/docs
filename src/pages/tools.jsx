import React from 'react';
import Layout from '@theme/Layout';
import styles from './tools.module.css';
 
export default function ToolsPage() {
  return (
    <Layout title="Toolkit">
      <main className="container margin-vert--lg">
        <h1>Toolkit Overview</h1>
        <p>
          The Toolkit is designed to empower our teams by providing a comprehensive suite of internal tools
          that streamline cloud-native development, enhance security practices, and ensure compliance across
          projects. It enables faster workflows, better collaboration, and more reliable operational standards.
        </p>
        <ul>
          <li>VulneralQ</li>
          <li>Harbor</li>
        </ul>
 
        <div className={styles.grid}>
          <div
            className={styles.card}
            onClick={() => (window.location.href = '/VulneralQ/overview')}
            style={{ cursor: 'pointer' }}
          >
            <img src="/img/vulneralq.svg" alt="VulneralQ" />
            <h3>VulneralQ</h3>
            <p>
              Open-source cloud security and compliance platform for continuous risk detection and
              remediation.
            </p>
          </div>
 
          <div
            className={styles.card}
            onClick={() => (window.location.href = '/Harbor/overview')}
            style={{ cursor: 'pointer' }}
          >
            <img src="/img/harbor.svg" alt="Harbor" />
            <h3>Harbor</h3>
            <p>
              Cloud-native container registry with built-in security, vulnerability scanning, and policy
              enforcement.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
