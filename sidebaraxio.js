module.exports = {
  axioSidebar: [
    {
      type: 'category',
      label: 'Axio',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Introduction',
          items: [
            'overview',
            'why-axio',
            'challenges',
          ],
        },
        {
          type: 'category',
          label: 'Platform',
          items: [
            'key-capabilities',
            'platform-architecture',
            'self-service-infrastructure',
          ],
        },
        {
          type: 'category',
          label: 'Governance',
          items: [
            'governance-security',
            'identity-access-management',
            'cost-management',
          ],
        },
      ],
    },
  ],
};