export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '60b08ca24ecc0095bcbbf3f7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-p77zubz3',
                  apiId: '7b26b2c8-1f31-45fc-aaa5-5f651ffed9a3'
                },
                {
                  buildHookId: '60b08ca397acf77e8eb05fb1',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-sk211okb',
                  apiId: '19acda85-7bab-4241-9af8-da317bcd0f0a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RustyDev/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-sk211okb.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
