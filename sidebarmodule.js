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
        { type: 'doc', id: 'modules/Apachekafka'},
        { type: 'doc', id: 'modules/AmazonS3'},
        { type: 'doc', id: 'modules/AmazonRDS'},
        { type: 'doc', id: 'modules/AmazonCloudfront'},
        { type: 'doc', id: 'modules/KMS'},
        { type: 'doc', id: 'modules/AmazonCloudwatch'},
        { type: 'doc', id: 'modules/AWSSecretsmanager'},
        { type: 'doc', id: 'modules/AmazonEC2'},
        { type: 'doc', id: 'modules/AWSAutoscaling'},
        { type: 'doc', id: 'modules/AmazonEKS'},
        { type: 'doc', id: 'modules/Network'},
      ],
    },
  ],
};

module.exports = sidebars;




