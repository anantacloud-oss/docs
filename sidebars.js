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
       label: 'DevOps Foundations',
       items: [
         'devops/overview',
         'devops/cicd'
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
