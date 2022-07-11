export default {
  name: 'sobre',
  type: 'document',
	title: 'Sobre Nosotras',
  fields: [
    {
      name:'shortDesc',
      type:'string',
      title:'Una breve descripción sobre Nüwa.'
    },
    {
      name:'mission',
      type:'object',
      title:'Nuestra misión',
      fields:[
        {
          name:'missionTitle',
          type:'string',
          title:'Misión titulo',
        },
        {
          name:'missionDesc',
          type:'array',
          title:'Misión descripción',
          of:[{type:'block'}]
        }
      ]
    },
    {
      name:'story',
      type:'object',
      title:'Nuestra historia',
      fields:[
        {
          name:'storyTitle',
          type:'string',
          title:'Historia titulo',
        },
        {
          name:'storyDesc',
          type:'array',
          title:'Historia descripción',
          of:[{type:'block'}]
        }
      ]
    },
    {
      name:'values',
      type:'object',
      title:'Valores',
      fields:[
        {
          name:'valuesPreheading',
          type:'string',
          title:'Texto de valores '
        },
        {
          title:'Lista de valores (Mínimo 3)',
          name:'values',  
          type: 'array',
          of: [
            {
              title: 'Valor',
              type: 'object',
              fields: [
                {
                  title: 'Título de valor',
                  name: 'benefitTitle',
                  type: 'string'
                },
                {
                  title:'Descripción del valor',
                  name:'benefitDesc',
                  type:'string'
                }
              ]
            }
          ],
        },
      ]
    },
  ]
}