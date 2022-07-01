export default {
  name: 'services',
  title: 'Servicios',
  type: 'document',
  fields: [
    // SERVICE 1
    {
      name:'serviceOneHeading',
      title:'Servicio',
      type:'string'
    },
    {
      name: 'serviceOneParagraph',
      title: 'Paragraph',
      type: 'string',
    },
    {
      title: 'Servicio Imagen',
      name: 'serviceOneImg',
      type: 'image',
      fields: [
        {
          name: 'serviceOneImgCaption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true // <-- make this field easily accessible
          }
        },
      ],
    },
  ]
}
