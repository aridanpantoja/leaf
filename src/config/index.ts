const createSiteConfig = () => {
  const links = {
    github: 'https://github.com/aridanpantoja/leaf',
  }

  return {
    name: 'Website Name',
    url: 'https://leaf.com.br',
    description: 'Description of your website',
    ogImage: 'https://leaf.com.br/og.jpg',
    links,
  }
}

export const siteConfig = createSiteConfig()
