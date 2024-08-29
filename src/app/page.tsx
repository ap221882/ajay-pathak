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
      <Separator className="mx-6" />
      <div className="py-36 px-40">
      <div>
        <h1 className="text-7xl font-extrabold font-sans">Welcome!</h1>
      </div>
      <div>
        <div>
          <h3 className="py-4 text-2xl">This is Ajay Pathak.</h3>
        </div>
      </div>
      </div>
    </main>
  );
}
