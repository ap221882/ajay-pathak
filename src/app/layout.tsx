import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { CustomNavigationMenu } from '@/components/customComponents/navBar';
import { ThemeProvider } from '@/components/theme-provider';
import { Separator } from '@/components/ui/separator';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ajay Pathak",
  description: "Built with love from India!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-h-screen bg-[#e8e8e3]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
        <nav className='flex flex-row justify-center p-2'>
        <CustomNavigationMenu/>
        {/* <ModeToggle/> */}
        </nav>
          <Separator />
          {children}
          <footer className="py-6 md:px-8 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
           <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built in{" "}
          <a
            href={"https://maps.app.goo.gl/5xBWX3j8du3MVSew9"}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            India{" "}
          </a>
          with ❤️.
        </p>
      </div>
    </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
