type Favicon = {
  rel: string
  href: string
  sizes?: string
  type?: string
}

export const favicons: Favicon[] = [
  {
    rel: 'icon',
    href: '/static/favicons/favicon.ico',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/static/favicons/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/static/favicons/favicon-16x16.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/static/favicons/favicon-32x32.png',
  },
  {
    rel: 'manifest',
    href: '/static/favicons/site.webmanifest',
  },
]
