export default {
  name: 'tratamientos',
  type: 'document',
	title: 'Tratamientos',
  fields: [
    {
      name:'treatmentName',
      type:'string',
      title:'Nombre de Tratamiento'
    },
    {
      name:'slug',
      type:'slug',
      title:'Slug',
      options:{
        source:'treatmentName'
      }
    },
    {
      name:'shortTreatmentDesc',
      type:'string',
      title:'Una breve descripción del tratamiento'
    },
    {
      title: 'Una larga explicación del tratamiento',
      name: 'longTreatmentDesc',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      title:'Lista de Beneficios',
      name:'benefits',  
      type: 'array',
      of: [
        {
          title: 'Beneficio',
          type: 'object',
          fields: [
            {
              title: 'Título de beneficio',
              name: 'benefitTitle',
              type: 'string'
            },
            {
              title:'Descripción del beneficio',
              name:'benefitDesc',
              type:'string'
            }
          ]
        }
      ],
    },
    {
      title: 'Imagenes de Tratamiento',
      name: 'treatmentImages',
      type: 'object',
      fields:[
        {
          name:'treatmentImage1',
          title:'Primer Imagen',
          type:'image',
          options: {
            hotspot: true // <-- Defaults to false
          },
          fields:[
            {
              // Editing this field will be hidden behind an "Edit"-button
              name: 'alt',
              type: 'string',
              title: 'Breve descripción de la imagen para los usuarios que usan el lector de pantalla',
              options:{
                isHighlighted:true,
              }
            },
          ]
        },
        {
          name:'treatmentImage2',
          title:'Siguente imagen',
          type:'image',
          options: {
            hotspot: true // <-- Defaults to false
          },
          fields:[
            {
              // Editing this field will be hidden behind an "Edit"-button
              name: 'alt',
              type: 'string',
              title: 'Breve descripción de la imagen para los usuarios que usan el lector de pantalla',
              options:{
                isHighlighted:true,
              }
            },
          ]
        },
      ]
    },
  ]
}