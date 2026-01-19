import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faArrowUp, 
    faExclamationTriangle,
    faEyeSlash,
    faPills
} from '@fortawesome/free-solid-svg-icons';

import logoAtakadao from '../resources/images/logos_empresas_parceiras/atacadao-seeklogo.png';
import logoAtakarejo from '../resources/images/logos_empresas_parceiras/atakarejo_logo.jpeg';
import logoAssaiAtacadista from '../resources/images/logos_empresas_parceiras/assai-atacadista-logo.png';

export const Home = () => {
    return (
        <div id="page-home" className="page-content active">
            <section className="hero-gradient py-28 md:pt-8 md:pb-50 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20"></div>
                <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10">
                    <div className="md:w-3/5 text-white">
                        <span className="inline-block bg-accent/20 text-accent px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-accent/30">
                            +1100 municípios — Bahia e interior de SP
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-8">
                            Sua marca não pode ser apenas <span className="text-accent italic">mais uma</span> na prateleira.
                        </h1>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl font-light leading-relaxed">
                            Pare de perder vendas por ruptura ou má exposição. A Cooperkall entrega inteligência de dados e execução de campo que garantem o <strong className="text-white">ROI do seu Trade Marketing.</strong>
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                            <button 
                                // onclick="navigateTo('servicos')" 
                                className="btn-gold px-10 py-5 rounded-xl font-bold text-lg"
                            >
                                    Impulsionar Minhas Vendas
                                </button>
                            <div className="flex items-center space-x-3 text-white/80">
                                <div className="flex -space-x-2">
                                    <div className="w-10 h-10 rounded-full border-2 border-primary bg-white overflow-hidden p-1">
                                        <img 
                                            src={logoAtakadao} 
                                            alt="logo Atakadão"
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                    <div className="w-10 h-10 rounded-full border-2 border-primary bg-gray-400 overflow-hidden">
                                        <img 
                                            src={logoAtakarejo} 
                                            alt="logo atakarejo"
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                    <div className="w-10 h-10 rounded-full border-2 border-primary bg-gray-500 overflow-hidden">
                                        <img 
                                            src={logoAssaiAtacadista} 
                                            alt="logo assaí atacadista"
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                    <div className="w-4 h-4 rounded-full ">
                                        <p className="font-medium ml-3 mt-1">...</p>
                                    </div>
                                </div>
                                <p className="text-sm font-medium">As maiores indústrias confiam</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-2/5 mt-16 md:mt-0 relative">
                        <div className="floating">
                            <img 
                                src="https://images.unsplash.com/photo-1580674271209-40b49a5a0571?auto=format&fit=crop&q=80&w=800" 
                                className="rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] border-4 border-white/10" 
                                alt="Trade Marketing" 
                            />
                        </div>
                        <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-2xl hidden lg:block">
                            <div className="flex items-center space-x-4">
                                <div className="text-green-500 bg-green-100 p-3 rounded-full">
                                    <FontAwesomeIcon icon={faArrowUp} />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs font-bold uppercase tracking-tighter">Aumento de Visibilidade</p>
                                    <p className="text-primary text-2xl font-black">+72% em 90 dias</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white px-6">
                <div className="container mx-auto">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-black text-primary mb-8 leading-tight">O "buraco negro" do PDV está engolindo sua margem de lucro?</h2>
                        <p className="text-gray-600 text-lg mb-12">Você investe milhões em marketing, mas o produto falta na gôndola, o preço está errado ou o material de merchandising nunca foi instalado. <strong>Nós resolvemos isso.</strong></p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 border border-gray-100 rounded-2xl hover:bg-red-50 transition group">
                            <div className="text-red-500 mb-4 text-3xl">
                                <FontAwesomeIcon icon={faExclamationTriangle} />                                
                            </div>
                            <h4 className="font-bold text-xl mb-3 text-primary">Ruptura Invisível</h4>
                            <p className="text-gray-500 text-sm">O estoque existe, mas o produto não está na área de venda. Perda direta de faturamento.</p>
                        </div>
                        <div className="p-8 border border-gray-100 rounded-2xl hover:bg-red-50 transition group">
                            <div className="text-red-500 mb-4 text-3xl">
                                <FontAwesomeIcon icon={faEyeSlash} />                                
                            </div>
                            <h4 className="font-bold text-xl mb-3 text-primary">Baixa Visibilidade</h4>
                            <p className="text-gray-500 text-sm">Sua marca escondida no "pé" da gôndola enquanto a concorrência brilha no campo de visão.</p>
                        </div>
                        <div className="p-8 border border-gray-100 rounded-2xl hover:bg-red-50 transition group">
                            <div className="text-red-500 mb-4 text-3xl">
                                <FontAwesomeIcon icon={faPills} />                                
                            </div>
                            <h4 className="font-bold text-xl mb-3 text-primary">MPDV Desperdiçado</h4>
                            <p className="text-gray-500 text-sm">Displays caros que ficam no depósito do supermercado e nunca chegam ao consumidor.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-primary px-6">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-0">Quer saber como está sua execução hoje?</h3>
                    <button 
                        // onclick="navigateTo('contato')" 
                        className="btn-gold px-10 py-4 rounded-xl font-bold text-lg"
                    >
                        Solicitar Auditoria
                    </button>
                </div>
            </section>
        </div>
    );
};