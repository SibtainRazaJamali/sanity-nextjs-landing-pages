export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62ab2ab607095e0a0836b380',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-aemnyput',
                  apiId: '662db19c-003c-4ffe-9e98-55b8b9f77106'
                },
                {
                  buildHookId: '62ab2ab73e1dd308601e4ec0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-95fsee9x',
                  apiId: '46c8b6e8-c6f8-4d92-ab61-9243e7f421e5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SibtainRazaJamali/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-95fsee9x.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
