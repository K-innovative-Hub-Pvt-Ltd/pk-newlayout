import React from 'react';
import Header from './Header';
import Footer from './Footer';
import useSiteScroll from '@/lib/useSiteScroll';

/**
 * Shared chrome for every page: sticky header, page body, footer,
 * plus the site-wide smooth-scroll / reveal behaviour.
 */
export default function SiteLayout({ children }) {
  useSiteScroll();

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
