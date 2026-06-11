module.exports = {
  axioSidebar: [
    {
      type: 'html',
      value: '<strong>Getting started</strong>',
      defaultStyle: true,
    },
    {
      type: 'category',
      label: 'Axio',
      collapsible: true,
      collapsed: false,
      items: [
        'overview',
        'how-it-works',
        'key-capabilities',
        'login',
        'projects',
        'registry',
        'stack',
        {
          type: 'category',
          label: 'Credentials',
          collapsible: true,
          collapsed: true,
          items: [
            'credentials/access-keys-authentication',
            'credentials/iam-role-arn-authentication',
          ],
        },
      ],
    },
  ],
};
