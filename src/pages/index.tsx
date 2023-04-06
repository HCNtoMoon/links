import { motion } from 'framer-motion'
import Image from 'next/image'

import { config } from '@/lib/config'

import Gradient from '@/components/Gradient'

const Home = () => {
  return (
    <>
      <div className='flex mx-auto flex-col items-center gap-4 my-16'>
        <Image
          src='/static/favicons/android-chrome-192x192.png'
          width={75}
          height={75}
          alt='Logo'
          className='rounded-full'
          priority
        />
        <h1 className='text-xl font-semibold'>HCNtoMoon</h1>
        <h2 className='text-gray-400 text-sm'>
        喜币上月球，绝顶名千秋！人生何所求，喜币上月球！
        </h2>
      </div>
      <div className='flex flex-col gap-4'>
        {config.links.map((link, i) => {
          const { color, icon, title, name, url } = link

          return (
            <motion.a
              whileHover={{
                scale: 1.1,
                
              }}
              whileTap={{
                scale: 0.95,
              }}
              key={i}
              href={url}
              className='h-14 w-full background-color: transparent; rounded-2xl border-4 py-4 px-8 relative flex items-center justify-center'
              target='_blank'
              rel='noopener, noreferrer'
              style={{
                borderColor: color,
              }}
            >
              <div className='absolute left-2'>{icon}</div>
              <div className='absolute left-8'>{title}</div>
              <div className='absolute center'>{name}</div>
            </motion.a>
          )
        })}
      </div>
      <Gradient />
    </>
  )
}

export default Home
