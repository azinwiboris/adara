import './globals.scss';
import { Providers } from './providers';

export const metadata = {
  title: 'Adara Institue',
  description: 'The Official Website of the Adara Institue',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
