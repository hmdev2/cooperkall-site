import { Link, useNavigate } from 'react-router-dom';
import logo from '../resources/images/logos_cooperkall/logo_cooperkall_sem_nome-transparentbg.png';

type pages = 'home' | 'about' | 'services' | 'blog' | 'contacts';

interface NavbarProps {
    activePage: pages;
    setActivePage: (page: pages) => void;
}

export const Navbar = ({
    activePage,
    setActivePage,
}: NavbarProps) => {
    const navigate = useNavigate();

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm py-4">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div 
                    className="flex items-center space-x-2 cursor-pointer" 
                    onClick={() => {
                        navigate('/');
                        setActivePage('home');
                    }}
                >
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg">
                        <img 
                            src={logo} 
                            className='w-full h-full object-contain' 
                            alt="Logo Cooperkall" 
                        />
                    </div>
                    <span className="text-2xl font-black tracking-tighter text-primary uppercase">COOPERKALL</span>
                </div>
                
                <div className="hidden md:flex space-x-10">
                    <Link 
                        onClick={() => {
                            setActivePage('home');
                        }}
                        to={'/'}
                    >
                        <span 
                            className={`nav-link text-gray-700 ${activePage === 'home'? 'active' : ''}`} 
                        >
                            Home
                        </span>
                    </Link>
                    <Link 
                        onClick={() => {
                            setActivePage('about');
                        }} 
                        to={'/about'}
                    >
                        <span 
                            className={`nav-link text-gray-700 ${activePage === 'about'? 'active' : ''}`} 
                        >
                            A Agência
                        </span>
                    </Link>
                    <Link 
                        onClick={() => {
                            setActivePage('services');
                        }} 
                        to={'/services'}
                    >
                        <span 
                            className={`nav-link text-gray-700 ${activePage === 'services'? 'active' : ''}`} 
                        >
                            O que fazemos
                        </span>
                    </Link>
                    <Link 
                        onClick={() => {
                            setActivePage('blog');
                        }} 
                        to={'/blog'}
                    >
                        <span 
                            className={`nav-link text-gray-700 ${activePage === 'blog'? 'active' : ''}`} 
                        >
                            Insights
                        </span>
                    </Link>
                    <Link 
                        onClick={() => {
                            setActivePage('contacts');
                        }} 
                        to={'/contacts'}
                    >
                        <span 
                            className={`nav-link text-gray-700 ${activePage === 'contacts'? 'active' : ''}`} 
                        >
                            Contato
                        </span>
                    </Link>
                </div>

                <button 
                    onClick={() => {
                        navigate('contacts');
                        setActivePage('contacts');
                    }}
                    className="btn-gold px-7 py-2.5 rounded-full font-bold text-sm uppercase tracking-wide"
                >
                    Solicitar Diagnóstico
                </button>
            </div>
        </nav>
    );
};