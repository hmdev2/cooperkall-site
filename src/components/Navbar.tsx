import { Link, useNavigate } from 'react-router-dom';
import logo from '../resources/images/logo_cooperkall_sem_nome-transparentbg.png';

export const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm py-4">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div 
                    className="flex items-center space-x-2 cursor-pointer" 
                    onClick={() => {
                        navigate('/');
                    }}
                >
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg">
                        <img 
                            src={logo} 
                            className='w-full h-full object-contain' 
                            alt="Logo Cooperkall" />
                    </div>
                    <span className="text-2xl font-black tracking-tighter text-primary uppercase">COOPERKALL</span>
                </div>
                
                <div className="hidden md:flex space-x-10">
                    <Link to={'/'}>
                        <span className="nav-link text-gray-700 active" id="nav-home">Home</span>
                    </Link>
                    <span className="nav-link text-gray-700" id="nav-sobre">A Agência</span>
                    <span className="nav-link text-gray-700" id="nav-servicos">O que fazemos</span>
                    <span className="nav-link text-gray-700" id="nav-blog">Insights</span>
                    <span className="nav-link text-gray-700" id="nav-contato">Contato</span>
                </div>

                <button className="btn-gold px-7 py-2.5 rounded-full font-bold text-sm uppercase tracking-wide">Solicitar Diagnóstico</button>
            </div>
        </nav>
    );
};