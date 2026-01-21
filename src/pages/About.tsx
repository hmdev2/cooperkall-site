import imageAbout from '../resources/images/Images_cooperkall/image_page_about.jpeg';

export const About = () => {
    return (
        <div id="page-sobre" className="page-content">
            <section className="py-14 px-6 bg-white">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2">
                            <h2 className="section-title text-4xl font-black text-primary">Não somos apenas braços, somos a inteligência do seu campo.</h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                Fundada para romper o modelo arcaico de agenciamento de mão de obra, a Cooperkall nasceu tecnológica. Entendemos que um promotor sem dados é apenas um custo, mas um promotor com inteligência é um <b>gerador de receita.</b>
                            </p>
                            <p className="text-gray-600 text-lg mb-8">
                                Nossa metodologia proprietária de <b>Logística 360º</b> garante que desde o recebimento do brinde até a foto final da gôndola, tudo seja monitorado em tempo real.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent">
                                    <p className="text-primary font-black text-3xl mb-1">N%</p>
                                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">SLA de Entrega</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent">
                                    <p className="text-primary font-black text-3xl mb-1">+N</p>
                                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Pontos de Venda</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="relative p-4">
                                <div className="absolute inset-0 bg-accent rounded-3xl rotate-3"></div>
                                <img src={imageAbout} className="relative z-10 rounded-3xl shadow-2xl" alt="Time Cooperkall" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="py-20 bg-[#f8f8f9] px-6">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-primary mb-4">O Caminho da Execução Perfeita</h2>
                        <p className="text-gray-500">Como garantimos que sua estratégia saia do papel com precisão cirúrgica.</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-xl">1</div>
                            <h4 className="font-bold text-lg mb-2">Diagnóstico</h4>
                            <p className="text-gray-500 text-sm">Analisamos sua ruptura atual e mapeamos oportunidades de ganho rápido.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-xl">2</div>
                            <h4 className="font-bold text-lg mb-2">Engenharia de Rotas</h4>
                            <p className="text-gray-500 text-sm">Aplicamos inteligência geográfica com frequência de até 6x por semana e direcionamos o time aos PDVs com maior potencial de ganho.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-xl">3</div>
                            <h4 className="font-bold text-lg mb-2">Ação em Campo</h4>
                            <p className="text-gray-500 text-sm">Atuamos com foco em abastecimento e planograma, garantindo visibilidade e maior impacto no ponto de venda.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-xl">4</div>
                            <h4 className="font-bold text-lg mb-2">BI & ROI</h4>
                            <p className="text-gray-500 text-sm">Você recebe dashboards com indicadores reais de performance e sell-out.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};