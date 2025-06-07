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
       type: 'doc',
       label: 'DevOps Foundations',
       id: 'devops-foundations',
    },
    {
       type: 'category',
       label: 'IaC Best Practices',
       items: [
         'iac/IaC-Overview', 
         'iac/Recommended Folder Structure',
         'iac/Tagging Naming Convention',
         'iac/Supported IaC Platforms',
         'iac/Prebuilt IaC Modules'
       ],
    },
    {
       type: 'category',
       label: 'Cloud Providers',
       items: [
         'cloud-providers/AWS', 
         'cloud-providers/Azure',
         'cloud-providers/DigitalOcean',
         'cloud-providers/GCP',
         'cloud-providers/OCI',
       ],
    },
    {
       type: 'category',
       label: 'Security',
       items: [
         'security/CIS Benchmarking',
         'security/Shift Security Left'
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
