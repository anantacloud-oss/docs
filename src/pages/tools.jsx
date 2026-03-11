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
          <li>Trustary</li>
          <li>IdentiQ</li>
          <li>Axio</li>
        </ul>
 
        <div className={styles.grid}>
          <div
            className={styles.card}
            onClick={() => (window.location.href = '/VulneralQ/overview')}
            style={{ cursor: 'pointer' }}
          >
            <img src="/img/vulneralq.png" alt="VulneralQ" className={styles.vulneralQLogo}/>
            <h3>VulneralQ</h3>
            <p>
              Cloud security and compliance platform for continuous risk detection and
              remediation.
            </p>
          </div>
 
          <div
            className={styles.card}
            onClick={() => (window.location.href = '/Trustary/overview')}
            style={{ cursor: 'pointer' }}
          >
            <img src="/img/trustary.png" alt="Trustary" className={styles.trustaryLogo}/>
            <h3>Trustary</h3>
            <p>
              Cloud-native container registry with built-in security, vulnerability scanning, and policy
              enforcement.
            </p>
          </div>


         <div
            className={styles.card}
            onClick={() => (window.location.href = '/IdentiQ/overview')}
            style={{ cursor: 'pointer' }}
          >
            <img src="/img/identiq.png" alt="IdentiQ" className={styles.identiqLogo}/>
            <h3>IdentiQ</h3>
            <p>IdentiQ is an IAM platform for centralized authentication and access control.</p>
          </div>


          <div
            className={styles.card}
            onClick={() => (window.location.href = '/Axio/overview')}
            style={{ cursor: 'pointer' }}
          >
            <img src="/img/axio.png" alt="Axio" className={styles.axioLogo}/>
            <h3>Axio</h3>
            <p>
              Axio is an identity and authentication platform that provides centralized user authentication, identity management, 
              and secure access control for applications and services.
            </p>          
          </div>
         
        </div>
      </main>
    </Layout>
  );
}
