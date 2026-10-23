import { type SchemaTypeDefinition } from 'sanity'
import { testimonials } from './schemas/testmonials'
import { product } from './schemas/product'
import { conditions } from './schemas/condtions'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [testimonials,
    conditions,
    product
  ],
}
