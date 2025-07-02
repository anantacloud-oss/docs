const sidebars = {
  tutorialSidebar: [
    {
      type: 'html',
      value: '<strong>Ananta Cloud: Engineered for You</strong>',
      defaultStyle: true,
    },
    {
      type: 'doc',
      label: 'Getting Started',
      id: 'getting-started',
    },
    {
      type: 'category',
      label: 'DevOps',
      items: [
        'devops/overview',
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
           'devops/helm-chart',
           'devops/docker-images',
      ],
    },
    {
      type: 'category',
      label: 'IaC Best Practices',
      items: [
        'iac/overview',
        'iac/folder-structure',
        'iac/tagging',
        'iac/prebuilt-modules',
      ],
    },
    {
      type: 'doc',
      label: 'Supported Clouds',
      id: 'supported-clouds', 
    },
    {
      type: 'category',
      label: 'Security',
      items: [
        'security/overview',
        'security/cis-benchmark',
        'security/security-left',
        'security/iam',
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
