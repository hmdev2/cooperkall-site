import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

type pages = 'home' | 'about' | 'services' | 'blog' | 'contacts';

interface DefaultLayoutProps {
  activePage: pages;
  setActivePage: (page: pages) => void;
};

function DefaultLayout({
  activePage,
  setActivePage,
}: DefaultLayoutProps) {
  return (
    <>
      <Navbar 
        activePage={activePage}
        setActivePage={setActivePage}
      />
      <main className='pt-16'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default DefaultLayout
