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
           label: 'CICD',
           items: [
               'devops/cicd/intro',
               'devops/cicd/iac',
               'devops/cicd/security',
               'devops/cicd/continuous-integration',
               'devops/cicd/version-control',
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
         'iac/tagging',
         'iac/iac-platforms',
         'iac/prebuilt-modules'
       ],
    },
    {
       type: 'category',
       label: 'Supported Clouds',
       items: [
         'cloud-providers/aws', 
         'cloud-providers/azure',
         'cloud-providers/digital-ocean',
         'cloud-providers/gcp',
         'cloud-providers/oci',
       ],
    },
    {
       type: 'category',
       label: 'Security',
       items: [
         'security/overview',
         'security/cis-benchmark',
         'security/security-left',
         'security/iam'
       ],
    },
    {
       type: 'doc',
       label: 'Support',
       id: 'Support',
    },
    {
       type: 'doc',
       label: 'Appendices',
       id: 'Appendices',
    },           
  ],
};

module.exports = sidebars;
