import Image from 'next/image';

import { CustomNavigationMenu } from '@/components/customComponents/navBar';
import { ModeToggle } from '@/components/customComponents/toggleTheme';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <main >
      <nav className='flex flex-row justify-between p-8 pb-4'>
        <CustomNavigationMenu/>
        <ModeToggle/>
      </nav>
      <Separator />
      <div className="py-36 px-40 flex justify-between items-center">
        <div>
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>{"I'm Ajay!"}</h1>
        <h3 className="py-4 text-2xl">A frontend geek and web/mobile developer.</h3>
        </div>
        <div className='flex h-full w-full select-none flex-col justify-end rounded-lg bg-gradient-to-b from-gray-300 to-gray-700 p-6 no-underline outline-none focus:shadow-md max-w-xs mt-4'>
          <div className="mb-2 mt-2 text-9xl font-medium font-domine">
        <Image src="/assets/chatbubble.svg" width={200} height={200} alt='Hi!'/>
        </div>
      </div>
      </div>
    </main>
  );
}
