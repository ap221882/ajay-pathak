import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { ExternalLinkIcon } from '@radix-ui/react-icons';

export default function Home() {
  return (
    <main >
      <div className="py-36 px-40 flex justify-between items-center">
        <div>
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>{"I'm Ajay!"}</h1>
        <h3 className="py-4 text-2xl">A frontend geek and web/mobile developer.</h3>
        <div className="flex gap-4 mt-10">
        <Button asChild variant="default" className='rounded-full p-8 font-light text-lg'>
        <a href="https://www.linkedin.com/in/ajay-pathak-webdeveloper/" target='_blank' nonce='true'>
          <span className='inline-block pr-4'><ExternalLinkIcon /></span>LinkedIn
        </a>
        </Button>
        <Button variant="secondary" className='rounded-full p-8 font-light text-lg'>
          <a href="https://topmate.io/ajay_pathak_webdeveloper" target='_blank' nonce='true'>
          Book a call
          </a>
        </Button>
        </div>
        </div>
        <div className='relative flex h-full w-full select-none flex-col justify-end rounded-lg bg-gradient-to-b from-gray-300 to-gray-700 p-6 no-underline outline-none focus:shadow-md max-w-xs mt-4'>
          <div className="mb-2 mt-2 text-9xl font-medium font-domine h-52">
        <Image src="/assets/pic.jpeg" objectFit='cover' layout='fill' alt='Ajay' className='rounded-md'/>
        </div>
      </div>
      </div>
    </main>
  );
}
