import React from "react";

export default function TechnicalBlogsPage() {
  // Blog data
  const blogs = [
    {
      title: "What Trivy and Hadolint Taught Me About Writing Better Dockerfiles",
      desc: "How Trivy and Hadolint helped me identify hidden vulnerabilities, misconfigurations, and best practices in Dockerfiles — and how these tools             improved my container security and build quality",
      link: "https://medium.com/@ishik9280/what-trivy-and-hadolint-taught-me-about-writing-better-dockerfiles-effc7ae7cc17",
      tag: "DevOps",
    },

    {
      title: "How VulneralQ Solves Modern Cloud Security Challenges",
      desc: "An in-depth look at how VulneralQ addresses modern cloud security challenges by continuously detecting vulnerabilities, misconfigurations, and          compliance gaps across cloud-native environments with actionable remediation insights.",
      link: "https://medium.com/@ishik9280/how-vulneralq-solves-modern-cloud-security-challenges-829781dbcab3",
      tag: "Cloud Security",
   },

   {
     title: "Harbor Container Registry: A Secure DevOps Registry for Kubernetes and Cloud-Native Workloads",
     desc: "Explore how Harbor provides a trusted, secure container registry for DevOps teams, offering vulnerability scanning, image signing, role-based          access control, and replication across cloud-native and Kubernetes environments.",
     link: "https://medium.com/@ishik9280/harbor-container-registry-a-secure-devops-registry-for-kubernetes-and-cloud-native-workloads-3000dff66f03",
     tag: "Cloud Security",
  },
];

  return (
    <div>
      {/* Blog Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginTop: "2rem",
        }}
      >
        {blogs.map((blog, idx) => (
          <a
            key={idx}
            href={blog.link}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                border: "1px solid var(--ifm-color-emphasis-300)",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                background: "var(--ifm-background-surface-color)",
                color: "var(--ifm-font-color-base)",
                height: "100%",
                cursor: "pointer",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(0,0,0,0.12)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.boxShadow =
                  "0 2px 8px rgba(0,0,0,0.08)";
              }}
            >
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
                {blog.title}
              </h3>

              <p
                style={{
                  fontSize: "14px",
                  color: "var(--ifm-color-emphasis-700)",
                  marginBottom: "20px",
                  display: "-webkit-box",
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  minHeight: "70px",
                }}
              >
                {blog.desc}
              </p>

              <div
                style={{
                  display: "inline-block",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  background: "#0033A0",
                  color: "#fff",
                  textDecoration: "none",
                  textAlign: "center",
                  fontSize: "13px",
                  width: "fit-content",
                }}
              >
                {blog.tag}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
