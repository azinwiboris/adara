'use client';

import HeaderNav from '@/components/HeaderNav/HeaderNav';
import { Content } from '@carbon/react';
import Footer from './components/Footer/Footer';

export function Providers({ children }) {
  return (
    <div>
      <HeaderNav />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
}