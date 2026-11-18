export const metadata = {
  title: 'SoukNova – Shop locally. Delivered fast.',
  description: 'A modern marketplace built for Djibouti and the Horn of Africa.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
