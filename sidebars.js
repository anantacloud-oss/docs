/**
 * Sidebar configuration for Gruntwork-style Docs.
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'html',
      value: '<strong>Welcome to Ananta Cloud</strong>',
      defaultStyle: true,
    },
  {
  type: 'category',
  label: 'Getting Started',
  items: ['getting-started'],
},
    {
      type: 'doc',
      label: 'DevOps Foundations',
      id: 'devops-foundations',
    },

   


    {
      type: 'category',
      label: 'Infrastructure As Code (IAC)',
      items: [
                    'iac/IaC-Overview', 
                    'iac/Module-Catalog',
                    'iac/Service-Catalog',

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
      type: 'doc',
      label: 'Security',
      id: 'Security',
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
      {
      type: 'doc',
      label: 'Need Help!',
      id: 'Need-Help',
    },

         
  ],
};

module.exports = sidebars;
