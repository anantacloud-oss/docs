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
      type: 'category',
      label: 'Ananta Cloud Library',
      items: [
                    'Library/AnantaCloud-Library', 
                    'Library/Servicecatalog' ,
                 ],
    },

         
  ],
};

module.exports = sidebars;
