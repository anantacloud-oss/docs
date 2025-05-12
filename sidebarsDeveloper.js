/**
 * Sidebar configuration for Gruntwork-style Docs.
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
      {
      type: 'html',
      value: '<strong>Developer Reference</strong>',
      defaultStyle: true,
    },
    {
      type: 'doc',
      label: 'Introduction',
      id: 'introduction',
    },



    {
      type: 'html',
      value: '<strong>Ananta Cloud Library</strong>',
      defaultStyle: true,
    },
    {
      type: 'doc',
      label: 'Find a Module',
      id: 'findingmodule',
    },

    {
      type: 'category',
      label: 'Service Catalog',
      items: [
         {
            type: 'category',
            label: 'App Orchestration',
            items: [
                          'App/Amazon-Cluster',
                       ],
         },
      ],
   },


            
  ],
};

module.exports = sidebars;
