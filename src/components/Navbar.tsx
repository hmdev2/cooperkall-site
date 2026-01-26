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
            <nav className="fixed top-0 left-0 w-full z-60 bg-white/95 backdrop-blur-md shadow-sm py-4">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div 
                        className="flex items-center space-x-2 cursor-pointer" 
                        onClick={() => handleNavigation('home', '/')}
                    >
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg">
                            <img src={logo} className='w-full h-full object-contain' alt="Logo" />
                        </div>
                        <span className="text-2xl font-black tracking-tighter text-primary uppercase">COOPERKALL</span>
                    </div>

                    <div className="hidden md:flex space-x-10 items-center">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.path}
                                onClick={() => setActivePage(link.path)}
                                to={link.url}
                                className={`nav-link text-gray-700 transition-colors hover:text-primary ${activePage === link.path ? 'font-bold text-primary border-b-2 border-primary' : ''}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <button 
                            onClick={() => handleNavigation('contacts', '/contacts')}
                            className="btn-gold px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wide transition-transform hover:scale-105"
                        >
                            Solicitar Diagnóstico
                        </button>
                    </div>

                    <button 
                        className="md:hidden p-2 text-primary"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-55 bg-white pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col space-y-6">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <button
                                        onClick={() => handleNavigation(link.path, link.url)}
                                        className={`text-3xl font-bold ${activePage === link.path ? 'text-primary' : 'text-gray-400'}`}
                                    >
                                        {link.label}
                                    </button>
                                </motion.div>
                            ))}
                            
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                onClick={() => handleNavigation('contacts', '/contacts')}
                                className="w-full btn-gold py-4 rounded-xl font-bold text-lg uppercase"
                            >
                                Solicitar Diagnóstico
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};