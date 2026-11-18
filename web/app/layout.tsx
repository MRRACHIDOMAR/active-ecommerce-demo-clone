import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SoukNova – Shop locally. Delivered fast.',
  description: 'A modern marketplace built for Djibouti and the Horn of Africa.',
  themeColor: '#0F766E',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'SoukNova – Shop locally. Delivered fast.',
    description: 'A modern marketplace built for Djibouti and the Horn of Africa.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
