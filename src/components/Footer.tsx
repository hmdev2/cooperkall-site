import { Link } from 'react-router-dom';
import logo from '../resources/images/logos_cooperkall/logo_cooperkall_sem_nome-transparentbg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faLinkedin,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';

type pages = 'home' | 'about' | 'services' | 'blog' | 'contacts';

interface FooterProps {
    setActivePage: (page: pages) => void;
};

export const Footer = ({
    setActivePage
}: FooterProps) => {
    return (
        <footer className="bg-[#0f111a] text-white pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-16 mb-20">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-2 mb-8">
                            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                                <img 
                                    src={logo} 
                                    className='w-full h-full object-contain' 
                                    alt="Logo Cooperkall" 
                                />
                            </div>
                            <span className="text-2xl font-black tracking-tighter uppercase">COOPERKALL</span>
                        </div>
                        <p className="text-gray-400 max-w-sm text-lg font-light leading-relaxed">
                            Transformando pontos de venda em centros de lucro através de tecnologia, logística e pessoas apaixonadas por execução.
                        </p>
                        <div className="flex space-x-6 mt-10">
                            <a 
                                href="http://linkedin.com/in/cooperkall-merchandising-83a612374" className="text-gray-500 hover:text-accent transition text-2xl"
                            >
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a 
                                href="https://www.instagram.com/cooperkall/" 
                                className="text-gray-500 hover:text-accent transition text-2xl"
                            >
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-8 text-xl">Navegação</h4>
                        <ul className="text-gray-500 space-y-4">
                            <li className="hover:text-accent cursor-pointer transition">
                                <Link
                                    to={'/'}
                                    onClick={() => {
                                        setActivePage('home');
                                    }}
                                >
                                    Início
                                </Link>
                            </li>
                            <li className="hover:text-accent cursor-pointer transition">
                                <Link
                                    to={'/about'}
                                    onClick={() => {
                                        setActivePage('about');
                                    }}
                                >
                                    A Agência
                                </Link>
                            </li>
                            <li className="hover:text-accent cursor-pointer transition">
                                <Link
                                    to={'/services'}
                                    onClick={() => {
                                        setActivePage('services');
                                    }}
                                >
                                    Nossos Serviços
                                </Link>
                            </li>
                            <li className="hover:text-accent cursor-pointer transition">
                                <Link
                                    to={'/blog'}
                                    onClick={() => {
                                        setActivePage('blog');
                                    }}
                                >
                                    Blog & Insights
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* <div>
                        <h4 className="text-white font-bold mb-8 text-xl">Recursos</h4>
                        <ul className="text-gray-500 space-y-4">
                            <li className="hover:text-accent cursor-pointer transition">Trabalhe Conosco</li>
                            <li className="hover:text-accent cursor-pointer transition">Portal do Cliente</li>
                            <li className="hover:text-accent cursor-pointer transition">Compliance</li>
                            <li className="hover:text-accent cursor-pointer transition">Privacidade</li>
                        </ul>
                    </div> */}
                </div>
                <div 
                    className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm"
                >
                    <p>&copy; 2026 Cooperkall. {/* CNPJ: 00.000.000/0001-00 */}</p>
                    <p className="mt-4 md:mt-0 italic">Criado para Alta Performance no Varejo.</p>
                </div>
            </div>
        </footer>
    );
};