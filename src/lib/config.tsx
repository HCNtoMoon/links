import {
  SiDiscord,
  SiFacebook,
  SiGithub,
  SiPytorch,
  SiDatocms,
  SiReddit,
  SiTiktok,
  SiMastodon,
  SiApacherocketmq,
  SiTwitter,
  SiYoutube,
} from 'react-icons/si'

type Link = {
  icon: React.ReactNode
  title: string
  name: string
  url: string
  color: string
}

type Config = {
  links: Link[]
}

export const config: Config = {
  links: [
    {
      icon: <SiApacherocketmq color='#ffff00' />,
      title: 'Website',
      name: '喜币上月球(HCNtoMoon)网站',
      url: 'https://hcntomoon.github.io',
      color: '#ffff00',
    },
    {
      icon: <SiTwitter color='#1da1f2' />,
      title: 'Twitter',
      name: '@HCNtoMoon',
      url: 'https://twitter.com/hcntomoon',
      color: '#1da1f2',
    },
    {
      icon: <SiYoutube color='#ef4444' />,
      title: 'YouTube',
      name: 'HCNtoMoon',
      url: 'https://www.youtube.com/@hcntomoon',
      color: '#ef4444',
    },
    {
      icon: <SiPytorch color='#ef4444' />,
      title: 'Gettr',
      name: '@HCNtoMoon',
      url: 'https://gettr.com/user/hcntomoon',
      color: '#ef4444',
    },
    {
      icon: <SiMastodon color='#5f57ef' />,
      title: 'Mastodon',
      name: '@HCNtoMoon',
      url: 'https://mas.to/@hcntomoon',
      color: '#5f57ef',
    },
    {
      icon: <SiFacebook color='#1299f5' />,
      title: 'Facebook',
      name: '@HCNtoMoon',
      url: 'https://www.facebook.com/hcntomoon',
      color: '#1299f5',
    },
    {
      icon: <SiTiktok color='#c4c2bf' />,
      title: 'Tiktok',
      name: '@HCNtoMoon',
      url: 'https://www.tiktok.com/@hcntomoon',
      color: '#c4c2bf',
    },

    {
      icon: <SiGithub color='#f1f1f1' />,
      title: 'GitHub',
      name: 'HCNtoMoon',
      url: 'https://github.com/HCNtoMoon',
      color: '#f1f1f1',
    },
    {
      icon: <SiReddit color='#ff4500' />,
      title: 'Reddit',
      name: '@HCNtoMoon',
      url: 'https://www.reddit.com/user/HCNtoMoon',
      color: '#ff4500',
    },
    {
      icon: <SiDiscord color='#5662f6' />,
      title: 'Discord',
      name: '喜币上月球',
      url: 'https://discord.gg/HPR3Sfds3a',
      color: '#5662f6',
    },
    {
    icon: <SiDatocms color='#1da1f2' />,
    title: 'Damus',
    name: '@HCNtoMoon',
    url: '',
    color: '#1da1f2',
    },
  ],
}
