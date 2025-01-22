import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fabie Plus Detergent - Eco-Friendly Stain Removal',
  description: 'Experience superior cleaning power with our eco-friendly detergent that cares for your clothes and the environment.',
  openGraph: {
    title: 'Fabie Plus Detergent - Eco-Friendly Stain Removal',
    description: 'Experience superior cleaning power with our eco-friendly detergent that cares for your clothes and the environment.',
    images: ['https://images.unsplash.com/photo-1582735689369-4fe89db7114c'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
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