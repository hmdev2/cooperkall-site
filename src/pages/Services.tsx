import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faArrowRight,
    faBoxes,
    faChartPie,
    faCheck,
    faUserTie
} from '@fortawesome/free-solid-svg-icons';
import { useEffect } from "react";
import type { pages } from '../types/Pages';


interface ServicesProps {
    setActivePage: (page: pages) => void;
};

export const Services = ({
    setActivePage,
}: ServicesProps) => {
    const navigate = useNavigate();

    useEffect(() => {
        setActivePage('services');
    }, [setActivePage]);

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
                                    navigate('/contacts');
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
                                    navigate('/contacts');
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
                                    navigate('/contacts');
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

            <section className="py-24 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-[3rem] p-12 md:p-20 text-center">
                        <span className="inline-block bg-accent text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-8 shadow-lg">Nossa Promessa Inegociável</span>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-10 leading-[1.1]">Onde a sua estratégia encontra a <span className="text-accent">perfeição da gôndola.</span></h2>
                        <p className="text-blue-100 text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto leading-relaxed">
                            Não entregamos apenas promotores. Entregamos a certeza de que seu produto estará <strong className="text-white">disponível, precificado e destacado</strong> exatamente onde o seu cliente decide comprar. 
                        </p>
                        <div className="grid md:grid-cols-3 gap-8 text-white">
                            <div className="p-6">
                                <p className="text-accent font-black text-4xl mb-2">Zéro</p>
                                <p className="text-gray-300 text-xs uppercase tracking-tighter">Complacência com Ruptura</p>
                            </div>
                            <div className="p-6 border-x border-white/10">
                                <p className="text-accent font-black text-4xl mb-2">100%</p>
                                <p className="text-gray-300 text-xs uppercase tracking-tighter">Foco em Sell-out Real</p>
                            </div>
                            <div className="p-6">
                                <p className="text-accent font-black text-4xl mb-2">Total</p>
                                <p className="text-gray-300 text-xs uppercase tracking-tighter">Transparência em Dados</p>
                            </div>
                        </div>
                        <button
                            onClick={() => {
                                navigate('/contacts');
                                setActivePage('contacts');
                            }}
                            className="btn-gold mt-16 px-12 py-5 rounded-2xl font-black text-xl shadow-2xl"
                        >
                            Assumir o Controle do PDV
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};