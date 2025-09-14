const sidebars = {
  tutorialSidebar: [
    {
      type: 'html',
      value: '<strong>Ananta Cloud: Where Ideas Take Flight</strong>',
      defaultStyle: true,
    },
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'introduction/welcome',
        'introduction/how-to-use',
        'introduction/target-audience',
        'introduction/support-guidelines'
      ]
    },
    {
      type: 'category',
      label: 'DevOps Foundations',
      items: [
        'devops/overview',
        'devops/gitops-and-cicd',
        'devops/environment-management',
        'devops/github-actions',
        'devops/monitoring-and-observability'
      ],
    },
    {
      type: 'category',
      label: 'IaC Best Practices',
      items: [
        'iac/overview',
        'iac/tagging-and-naming-conventions',
        'iac/developer-self-service-patterns',
        'iac/choosing-iac-platform',
        'iac/prebuilt-iac-modules',
        'iac/testing-and-validation'
      ],
    },
    {
      type: 'doc',
      label: 'Cloud Computing',
      id: 'supported-clouds', 
    },
    {
      type: 'category',
      label: 'Landing Zone Deployment',
      items: [
        'landing-zone/overview',
        'landing-zone/deployment-strategy',
        'landing-zone/deploying-to-aws',
        'landing-zone/deploying-to-gcp',
        'landing-zone/deploying-to-azure'
      ],
    },
    {
      type: 'category',
      label: 'Security & Compliance',
      items: [
        'security/overview',
        'security/cis-benchmark',
        'security/compliance-architecture',
        'security/audit-logging',
        'security/secret-and-key-management'
      ],
    },
  ],
};

module.exports = sidebars;
