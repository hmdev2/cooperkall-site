import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faArrowRight,
    faBoxes,
    faChartPie,
    faCheck,
    faUserTie
} from '@fortawesome/free-solid-svg-icons';

type pages = 'home' | 'about' | 'services' | 'blog' | 'contacts';

interface ServicesProps {
    setActivePage: (page: pages) => void;
};

export const Services = ({
    setActivePage,
}: ServicesProps) => {
    const navigate = useNavigate();

    return (

        <div id="page-servicos" className="page-content">
            <section className="py-14 px-6">
                <div className="container mx-auto">
                    <div className="max-w-4xl mb-16">
                        <h2 className="section-title text-4xl font-black text-primary">Domine o varejo com soluções 360º</h2>
                        <p className="text-gray-600 text-xl leading-relaxed">Não importa o tamanho do seu desafio, nós temos a estrutura para escalar sua marca.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div className="glass-card p-10 rounded-3xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full transition-all group-hover:scale-150"></div>
                            <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-8 text-2xl">
                                <FontAwesomeIcon 
                                    icon={faBoxes} 
                                />
                            </div>
                            <h3 className="text-2xl font-black text-primary mb-4">Logística Promocional</h3>
                            <p className="text-gray-600 mb-6">Chega de brindes perdidos. Gerenciamos seu estoque com sistema WMS de ponta e entrega fracionada para cada loja do roteiro.</p>
                            <ul className="text-sm text-gray-500 space-y-3 mb-8">
                                <li>
                                    <FontAwesomeIcon 
                                        className=" text-accent"
                                        icon={faCheck} 
                                    /> Armazenagem e distribuição
                                </li>
                                <li>
                                    <FontAwesomeIcon 
                                        className=" text-accent"
                                        icon={faCheck} 
                                    /> Cobertura nacional
                                </li>
                                <li>
                                    <FontAwesomeIcon 
                                        className=" text-accent "
                                        icon={faCheck} 
                                    /> Preparação de materiais para execução no PDV
                                </li>
                            </ul>
                            <button 
                                onClick={() => {
                                    navigate('contacts');
                                    setActivePage('contacts');
                                }} 
                                className="text-primary font-black flex items-center group-hover:translate-x-2 transition"
                            >
                                Saber Mais 
                                <FontAwesomeIcon 
                                    className="ml-2"
                                    icon={faArrowRight}
                                />
                            </button>
                        </div>

                        <div className="glass-card p-10 rounded-3xl relative overflow-hidden group">
                            <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-8 text-2xl">
                                <FontAwesomeIcon 
                                    icon={faUserTie} 
                                />
                                <i className="fas fa-user-tie"></i>
                            </div>
                            <h3 className="text-2xl font-black text-primary mb-4">Shared vs Dedicated</h3>
                            <p className="text-gray-600 mb-6">Equipes sob medida. Desde o promotor focado em reposição até o embaixador de marca dedicado ao engajamento.</p>
                            <ul className="text-sm text-gray-500 space-y-3 mb-8">
                                <li>
                                    <FontAwesomeIcon 
                                        className=" text-accent"
                                        icon={faCheck} 
                                    /> Recrutamento Especializado
                                </li>
                                <li>
                                    <FontAwesomeIcon 
                                        className=" text-accent"
                                        icon={faCheck} 
                                    /> Treinamento Técnico de Produto
                                </li>
                                <li>
                                    <FontAwesomeIcon 
                                        className=" text-accent"
                                        icon={faCheck} 
                                    /> Menor Turn-over
                                </li>
                            </ul>
                            <button 
                                onClick={() => {
                                    navigate('contacts');
                                    setActivePage('contacts');
                                }} 
                                className="text-primary font-black flex items-center group-hover:translate-x-2 transition"
                            >
                                Saber Mais 
                                <FontAwesomeIcon 
                                    className="ml-2"
                                    icon={faArrowRight}
                                />
                            </button>
                        </div>

                        <div className="glass-card p-10 rounded-3xl relative overflow-hidden group">
                            <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-8 text-2xl">
                                <FontAwesomeIcon 
                                    icon={faChartPie} 
                                />
                            </div>
                            <h3 className="text-2xl font-black text-primary mb-4">Auditoria de Preço e Share</h3>
                            <p className="text-gray-600 mb-6">O que não é medido não é gerenciado. Tenha visibilidade real da sua gôndola e da agressividade da concorrência.</p>
                            <ul className="text-sm text-gray-500 space-y-3 mb-8">
                                <li>
                                    <FontAwesomeIcon 
                                        className=" text-accent"
                                        icon={faCheck} 
                                    /> Monitoramento em campo
                                </li>
                                <li>
                                    <FontAwesomeIcon 
                                        className=" text-accent"
                                        icon={faCheck} 
                                    /> Relatórios de Ruptura Crítica
                                </li>
                                <li>
                                    <FontAwesomeIcon 
                                        className=" text-accent"
                                        icon={faCheck} 
                                    /> Mapa de Calor da Gôndola
                                </li>
                            </ul>
                            <button 
                                onClick={() => {
                                    navigate('contacts');
                                    setActivePage('contacts');
                                }} 
                                className="text-primary font-black flex items-center group-hover:translate-x-2 transition"
                            >
                                Saber Mais 
                                <FontAwesomeIcon 
                                    className="ml-2"
                                    icon={faArrowRight}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-primary text-white px-6">
                <div className="container mx-auto text-center max-w-4xl">
                    <i className="fas fa-quote-left text-accent text-5xl mb-8"></i>
                    <p className="text-2xl md:text-3xl font-light italic leading-relaxed mb-10">
                        "Depois que integramos a nossa logística com a execução da Cooperkall, nossa ruptura caiu de 14% para 2.8% em menos de um trimestre. É a agência mais focada em dados que já trabalhamos."
                    </p>
                    <div className="flex items-center justify-center space-x-4">
                        <div className="w-16 h-16 rounded-full bg-gray-400"></div>
                        <div className="text-left">
                            <p className="font-bold text-xl">Diretor de Trade Marketing</p>
                            <p className="text-blue-300 text-sm italic">Gigante do Setor de Bebidas</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};