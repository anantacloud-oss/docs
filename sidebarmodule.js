const sidebars = {
  tutorialSidebar: [
    {
      type: 'html',
      value: '<strong>IAC Modules Library</strong>',
      defaultStyle: true,
    },
    {
      type: 'doc',
      label: 'Search Module',
      id: 'searchmodule',
    },
    {
      type: 'html',
      value: '<strong>Module Hub</strong>',
      defaultStyle: true,
    },
    {
      type: 'category',
      label: 'Discover Modules',
      items: [
        { type: 'doc', id: 'modules/kafka', label: 'kafka' },
      ],
    },
  ],
};

module.exports = sidebars;




