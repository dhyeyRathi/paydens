import { type SchemaTypeDefinition } from 'sanity'
import { testimonials } from './schemas/testmonials'
import { product } from './schemas/product'
import { conditions } from './schemas/condtions'
import { faqs } from './schemas/faq'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [testimonials,
    conditions,
    product,
    faqs
  ],
}
