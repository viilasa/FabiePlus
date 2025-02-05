import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'SkyGlow Trading - Premium Detergent Distribution',
  description: 'SkyGlow Trading - Your trusted distributor of premium cleaning products in Dubai, featuring the innovative Fabie Plus detergent line.',
  openGraph: {
    title: 'SkyGlow Trading - Premium Detergent Distribution',
    description: 'Your trusted distributor of premium cleaning products in Dubai, featuring the innovative Fabie Plus detergent line.',
    images: ['https://i.ibb.co/8nczs4hw/lOGO.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}