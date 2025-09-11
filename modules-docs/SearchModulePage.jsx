import React, { useState } from 'react';

export default function SearchModulePage() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");

  const cards = [
    {
      title: "Apache Kafka",
      desc: "A distributed event streaming platform for high-throughput, fault-tolerant messaging.",
      link: "/modules-docs/modules/Apachekafka",
      category: "module",
    },
    {
      title: "Amazon S3",
      desc: "An object storage service that offers industry-leading scalability, data availability, security, and performance.",
      link: "/modules-docs/modules/AmazonS3",
      category: "module",
    },
    {
      title: "Amazon RDS",
      desc: "A managed relational database service that makes it easy to set up, operate, and scale databases in the cloud.",
      link: "/modules-docs/modules/AmazonRDS",
      category: "module",
    },
    {
      title: "Amazon CloudFront",
      desc: "A fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs globally with low latency.",
      link: "/modules-docs/modules/AmazonCloudFront",
      category: "module",
    },
    {
      title: "AWS Key Management Service (KMS)",
      desc: "A managed service that makes it easy to create and control the cryptographic keys used to protect your data.",
      link: "/modules-docs/modules/KMS",
      category: "module",
    },
    {
      title: "Amazon CloudWatch",
      desc: "A monitoring and observability service that provides actionable insights for applications and infrastructure performance.",
      link: "/modules-docs/modules/AmazonCloudwatch",
      category: "module",
    },
    {
      title: "AWS Secrets Manager",
      desc: "A service to securely store, rotate, and manage database credentials, API keys, and other secrets.",
      link: "/modules-docs/modules/AWSSecretsmanager",
      category: "module",
    },
    {
      title: "Amazon EC2 (Compute)",
      desc: "A resizable compute capacity in the cloud that provides secure, scalable virtual servers to run applications.",
      link: "/modules-docs/modules/AmazonEC2",
      category: "module",
    },
    {
      title: "AWS Auto Scaling",
      desc: "A service that helps you maintain application availability and scale Amazon EC2 capacity up or down automatically.",
      link: "/modules-docs/modules/AWSAutoscaling",
      category: "module",
    },
    {
      title: "Amazon Elastic Kubernetes Service (EKS)",
      desc: "A managed Kubernetes service that makes it easy to run Kubernetes on AWS without needing to install and operate your own control plane or nodes.",
      link: "/modules-docs/modules/AmazonEKS",
      category: "module",
    },
    {
      title: "AWS Networking",
      desc: "A module that provides networking resources such as VPC, subnets, route tables, and gateways to build secure and scalable infrastructure.",
      link: "/modules-docs/modules/Network",
      category: "module",
    },
  ];

  // Filtering logic
  const filteredCards = cards.filter((card) => {
    const matchesQuery = card.title.toLowerCase().includes(query.toLowerCase());
    const matchesType = type ? card.category === type : true;
    return matchesQuery && matchesType;
  });

  return (
    <div>
      {/* Search and Filter */}
      <div style={{ marginTop: "1.5rem", marginBottom: "2rem" }}>
        <input
          type="text"
          placeholder="Try searching for RDS, Kafka, S3..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            padding: "10px",
            width: "280px",
            marginRight: "15px",
            borderRadius: "6px",
            border: "1px solid var(--ifm-color-emphasis-300)",
            background: "var(--ifm-background-surface-color)",
            color: "var(--ifm-font-color-base)",
          }}
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={{
            padding: "10px",
            width: "180px",
            borderRadius: "6px",
            border: "1px solid var(--ifm-color-emphasis-300)",
            background: "var(--ifm-background-surface-color)",
            color: "var(--ifm-font-color-base)",
          }}
        >
          <option value="">Any</option>
          <option value="module">Module</option>
          <option value="service">Service</option>
        </select>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginTop: "2rem",
        }}
      >
        {filteredCards.map((card, idx) => (
          <div
            key={idx}
            style={{
              border: "1px solid var(--ifm-color-emphasis-300)",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              background: "var(--ifm-background-surface-color)",
              color: "var(--ifm-font-color-base)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%", // forces equal card height
            }}
          >
           <div style={{ flexGrow: 1 }}>
            <h3
              style={{
                marginBottom: "10px",
                fontSize: "18px",
                fontWeight: "600",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                minHeight: "45px",
              }}
            >
              {card.title}
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "var(--ifm-color-emphasis-700)",
                marginBottom: "15px",
                display: "-webkit-box",
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {card.desc}
            </p>
         </div>
            <a
              href={card.link}
              style={{
                display: "inline-block",
                padding: "8px 12px",
                borderRadius: "6px",
                background: "#0033A0",
                color: "#fff",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Category: {card.category.charAt(0).toUpperCase() + card.category.slice(1)}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}