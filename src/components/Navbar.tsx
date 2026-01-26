import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../resources/images/logos_cooperkall/logo_cooperkall_sem_nome-transparentbg.png';

type pages = 'home' | 'about' | 'services' | 'blog' | 'contacts';

interface NavbarProps {
    activePage: pages;
    setActivePage: (page: pages) => void;
}

export const Navbar = ({ activePage, setActivePage }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    }, [isOpen]);

    const navLinks: { label: string; path: pages; url: string }[] = [
        { label: 'Home', path: 'home', url: '/' },
        { label: 'A Agência', path: 'about', url: '/about' },
        { label: 'O que fazemos', path: 'services', url: '/services' },
        { label: 'Contato', path: 'contacts', url: '/contacts' },
    ];

    const handleNavigation = (path: pages, url: string) => {
        setActivePage(path);
        navigate(url);
        setIsOpen(false);
    };

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm py-5">
                <div className="container mx-auto px-6 flex justify-between items-center relative">
                    
                    <div 
                        className="flex items-center space-x-2 cursor-pointer z-10" 
                        onClick={() => handleNavigation('home', '/')}
                    >
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg">
                            <img src={logo} className='w-full h-full object-contain' alt="Logo Cooperkall" />
                        </div>
                        <span className="text-2xl font-black tracking-tighter text-primary uppercase">COOPERKALL</span>
                    </div>

                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-10 lg:space-x-14 items-center">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.path}
                                onClick={() => setActivePage(link.path)}
                                to={link.url}
                            >
                                <span className={`nav-link text-gray-700 text-base lg:text-lg font-bold ${activePage === link.path ? 'active' : ''}`}>
                                    {link.label}
                                </span>
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:block z-10">
                        <button 
                            onClick={() => handleNavigation('contacts', '/contacts')}
                            className="btn-gold px-7 py-2.5 rounded-full font-bold text-sm lg:text-base uppercase tracking-wide transition-transform hover:scale-105"
                        >
                            Solicitar Diagnóstico
                        </button>
                    </div>

                    <button 
                        className="md:hidden p-2 text-primary z-10"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-45 bg-white pt-24 px-6 md:hidden flex flex-col justify-between pb-12"
                    >
                        <div className="flex flex-col space-y-8 mt-10">
                            {navLinks.map((link, index) => (
                                <motion.button
                                    key={link.path}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => handleNavigation(link.path, link.url)}
                                    className={`text-4xl font-black text-left uppercase tracking-tighter ${
                                        activePage === link.path ? 'text-primary' : 'text-gray-300'
                                    }`}
                                >
                                    {link.label}
                                </motion.button>
                            ))}
                        </div>
                        
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            onClick={() => handleNavigation('contacts', '/contacts')}
                            className="w-full btn-gold py-5 rounded-2xl font-black text-xl uppercase shadow-2xl"
                        >
                            Solicitar Diagnóstico
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};