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
  title: 'SkyGlow Trading - Premium Products Distribution',
  description: 'SkyGlow Trading - Your trusted distributor of premium products in Dubai, featuring the innovative Fabie Plus detergent line.',
  
  openGraph: {
    title: 'SkyGlow Trading - Premium Product Distribution',
    description: 'Your trusted distributor of premium cleaning products in Dubai, featuring the innovative Fabie Plus detergent line.',
    images: ['https://res.cloudinary.com/ddhhlkyut/image/upload/v1739956200/Untitled_design_1_ohlec5.svg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://res.cloudinary.com/ddhhlkyut/image/upload/v1739956200/Untitled_design_1_ohlec5.svg" type="image/svg+xml" />
      </head>
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
