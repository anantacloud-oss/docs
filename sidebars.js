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
      type: 'doc',
      label: 'DevOps Foundations',
      id: 'devops-foundations',
    },
    {
      type: 'category',
      label: 'IaC Best Practices',
      items: [
                    'iac/infrastructure-live', 
                    'iac/iac-platform' ,
                 ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started/setup-checklist'],
      items: ['getting-started/Createaccount'],
    },

         
  ],
};

module.exports = sidebars;
