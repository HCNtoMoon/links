import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

import { favicons } from '@/lib/favicons'

import Footer from './Footer'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  const { children } = props
  const { asPath } = useRouter()

  return (
    <>
      <NextSeo
        titleTemplate='%s | HCNtoMoon Links'
        defaultTitle='HCNtoMoon Links'
        description='喜币上月球'
        canonical={`https://hcntomoon.github.io${asPath}`}
        twitter={{
          cardType: 'summary_large_image',
          site: '@HCNtoMoon',
          handle: '@HCNtoMoon',
        }}
        openGraph={{
          url: `https://hcntomoon.github.io${asPath}`,
          type: 'website',
          title: 'HCNtoMoon Links',
          description: '喜币上月球',
          images: [
            {
              url: 'https://avatars.githubusercontent.com/u/104186567',
              width: 300,
              height: 300,
              alt: '喜币上月球',
            },
          ],
        }}
        additionalLinkTags={[...favicons]}
      />
      {children}
      <Footer />
    </>
  )
}

export default Layout
