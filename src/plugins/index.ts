import { seoPlugin } from '@payloadcms/plugin-seo'
import { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types'
import { Plugin } from 'payload'

import { Post } from '@/payload-types'
import { getServerSideURL } from '@/lib/utils'

const generateTitle: GenerateTitle<Post> = ({ doc }) => {
  return doc?.title
    ? `${doc.title} | Leaf Website Template`
    : 'Leaf Website Template'
}

const generateURL: GenerateURL<Post> = ({ doc }) => {
  const url = getServerSideURL()

  return doc?.slug ? `${url}/${doc.slug}` : url
}

export const plugins: Plugin[] = [
  seoPlugin({
    generateTitle,
    generateURL,
  }),
]
