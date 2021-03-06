var tests = [
  {
    name: 'minimal',
    jsonform: {
      schema: {
        arr: {
          type: 'array',
          title: 'An array',
          items: {
            type: 'string',
            title: 'Array item'
          }
        }
      },
      form: [
        {
          type: 'tabarray',
          key: 'arr'
        }
      ]
    }
  },
  {
    name: 'Using index',
    jsonform: {
      schema: {
        arr: {
          type: 'array',
          title: 'An array',
          items: {
            type: 'string',
            title: 'Array item'
          }
        }
      },
      form: [
        {
          type: 'tabarray',
          items: [
            {
              type: 'fieldset',
              title: 'Number {{idx}}',
              items: [
                {
                  key: 'arr[]',
                  title: 'Item {{idx}}'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    name: 'Value as legend',
    jsonform: {
      schema: {
        arr: {
          type: 'array',
          title: 'An array',
          items: {
            type: 'string',
            title: 'Array item',
            'default': 'Hey dude'
          }
        }
      },
      form: [
        {
          type: 'tabarray',
          items: [
            {
              type: 'fieldset',
              title: 'Number {{idx}}',
              legend: '{{idx}}. {{value}}',
              items: [
                {
                  key: 'arr[]',
                  title: 'Item {{idx}}',
                  valueInLegend: true
                }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    name: 'Value as legend',
    jsonform: {
      schema: {
        arr: {
          type: 'array',
          title: 'An array',
          items: {
            type: 'string',
            title: 'Array item'
          }
        }
      },
      form: [
        {
          type: 'tabarray',
          items: [
            {
              type: 'fieldset',
              title: 'Number {{idx}}',
              legend: '{{idx}}. {{value}}',
              items: [
                {
                  key: 'arr[]',
                  title: 'Item {{idx}}',
                  value: 'Hello number {{idx}}',
                  valueInLegend: true
                }
              ]
            }
          ]
        }
      ]
    }
  }
];
