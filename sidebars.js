const sidebars = {
  tutorialSidebar: [
    {
      type: 'html',
      value: '<strong>Ananta Cloud: Where Ideas Take Flight</strong>',
      defaultStyle: true,
    },
    {
      type: 'doc',
      label: 'Getting Started',
      id: 'getting-started',
    },
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'introduction/welcome',
        'introduction/how-to-use',
        'introduction/target-audience',
        'introduction/support-guidelines',
      ]
    },
    {
      type: 'category',
      label: 'DevOps Foundations',
      items: [
        'devops/overview',
        'devops/gitops-and-cicd',
        'devops/environment-management',
        {
          type: 'category',
          label: 'GitHub Actions',
          link: {
            type: 'doc',
            id: 'devops/cicd/github-actions',
          },
          items: [
            'devops/cicd/iac',
            'devops/cicd/security',
            'devops/cicd/source-control',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'IaC Best Practices',
      items: [
        'iac/overview',
        'iac/folder-structure',
        'iac/tagging-and-naming-conventions',
        'iac/prebuilt-iac-modules',
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
        'landing-zone/deploying-to-azure',
      ],
    },
    {
      type: 'category',
      label: 'Security & Compliance',
      items: [
        'security/overview',
        'security/cis-benchmark',
        'security/secret-and-key-management',
      ],
    },
    {
      type: 'doc',
      label: 'Support',
      id: 'Support',
    },
  ],
};

module.exports = sidebars;
