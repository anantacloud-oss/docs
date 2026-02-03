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
      type: 'category',
      label: 'GitHub Actions',
      items: [
         {
           type: 'category',
           label: 'IAC',
           items: [
              { type: 'doc', id: 'iac/terraform', label: 'Terraform' },
              { type: 'doc', id: 'iac/terragrunt', label: 'Terragrunt' },
              { type: 'doc', id: 'iac/pulumi', label: 'Pulumi' },
            ],
        },
        {
          type: 'category',
          label: 'Security Tools',
          items: [
            { type: 'doc', id: 'security/cosign', label: 'Cosign' },
            { type: 'doc', id: 'security/trivy', label: 'Trivy' },
            { type: 'doc', id: 'security/clair', label: 'Clair' },
            { type: 'doc', id: 'security/syft', label: 'Syft' },
            { type: 'doc', id: 'security/grype', label: 'Grype' },
            { type: 'doc', id: 'security/falco', label: 'Falco' },
            { type: 'doc', id: 'security/kube-bench', label: 'Kube-bench' },
            { type: 'doc', id: 'security/kube-hunter', label: 'Kube-hunter' },
            { type: 'doc', id: 'security/Checkov', label: 'Checkov' },
          ],
        },
        {
          type: 'category',
          label: 'Source Control',
          items: [
            { type: 'doc', id: 'version-control/git', label: 'Git' },
          ],
        },
      ],
    },
    {
       type: 'doc',
       label: 'Helm Chart',
       id: 'helm-chart', 
    },
  ],
};

module.exports = sidebars;


