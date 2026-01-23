import { faHeadset, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import type { pages } from '../types/Pages';


interface ContactsProps {
    setActivePage: (page: pages) => void;
}

export const Contacts = ({setActivePage}: ContactsProps) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        company: '',
        challenge: '',
    });
    const phoneNumber = import.meta.env.VITE_WHATSAPP_PHONE;

    useEffect(() => {
        setActivePage('contacts');
    }, [setActivePage]);

    const isFormValid =
        form.name.trim() !== '' &&
        form.email.trim() !== '' &&
        form.company.trim() !== '' &&
        form.challenge.trim() !== '';

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const buildPartMessage = () => {
        switch (form.challenge) {
            case 'Reduzir Ruptura de Estoque':
                return 'Ruptura de Estoque';
            case 'Montar Time de Promotores':
                return 'erros ao Montar Time de Promotores';
            case 'Logística de MPDV / Brindes':
                return 'falta de Logística de MPDV / Brindes';
            case 'Auditoria e Inteligência de Dados': 
                return 'falta de Auditoria e Inteligência de Dados';
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if(!isFormValid) return;

        const phone = phoneNumber;
        
        const message = `*SOLICITAÇÃO DE DIAGNÓSTICO ESTRATÉGICO*
            
Olá, time Cooperkall!

Meu nome é *${form.name}* (${form.email}) e falo em nome da *${form.company}*.

Estava navegando no site de vocês e decidi que não podemos mais aceitar perdas por *${buildPartMessage()}*. 

Gostaria de agendar um diagnóstico para entender como a inteligência de campo de vocês pode transformar nossa execução em vendas reais. 

Podem me ajudar a elevar o nível da nossa marca na gôndola?`

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(url, '_blank');
    };


    return (
        <div id="page-contato" className="page-content">
            <section className="py-12 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-20"></div>
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-5xl font-black text-primary mb-8 leading-tight">Chega de deixar dinheiro na mesa.</h2>
                            <p className="text-xl text-gray-600 mb-12">Estamos prontos para fazer seu produto brilhar. Preencha os dados e um de nossos especialistas em Trade fará um diagnóstico da sua marca.</p>
                            
                            <div className="space-y-8">
                                <div className="flex items-start space-x-6">
                                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-xl">
                                        <FontAwesomeIcon icon={faMapMarkedAlt} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary">Presença Nacional</h4>
                                        <p className="text-gray-500">Centros de Distribuição em BA e SP.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-6">
                                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent text-xl">
                                        <FontAwesomeIcon icon={faHeadset} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary">Canal Comercial</h4>
                                        <p className="text-gray-500">Atendimento consultivo especializado em indústrias.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-12 rounded-3xl shadow-[0_40px_80px_rgba(0,0,0,0.1)] border border-gray-50">
                            <h3 className="text-2xl font-bold text-primary mb-8">Comece agora</h3>
                            <form 
                                className="space-y-6"
                                onSubmit={handleSubmit}
                            >
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-400 uppercase">Nome Completo</label>
                                        <input
                                            name="name"
                                            type="text" 
                                            placeholder="Ex: João Silva" 
                                            className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none transition"
                                            value={form.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-400 uppercase">E-mail Corporativo</label>
                                        <input 
                                            name="email"
                                            type="email" 
                                            placeholder="joao@empresa.com" 
                                            className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none transition"
                                            value={form.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400 uppercase">Sua Indústria / Marca</label>
                                    <input 
                                        name="company"
                                        type="text" 
                                        placeholder="Nome da sua empresa" 
                                        className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none transition"
                                        value={form.company}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400 uppercase">Qual o principal desafio hoje?</label>
                                    <select 
                                        name="challenge"
                                        value={form.challenge}
                                        onChange={handleChange}
                                        className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none transition"
                                    >
                                        <option value={''}>Selecionar</option>
                                        <option>Reduzir Ruptura de Estoque</option>
                                        <option>Montar Time de Promotores</option>
                                        <option>Logística de MPDV / Brindes</option>
                                        <option>Auditoria e Inteligência de Dados</option>
                                    </select>
                                </div>

                                {!isFormValid && (
                                    <p className="text-xs text-primary text-center">
                                        Preencha todos os campos para continuar
                                    </p>
                                )}

                                <button type="submit" className={`btn-gold w-full py-5 rounded-xl font-bold text-lg uppercase tracking-widest mt-4  ${!isFormValid ? 'opacity-50 cursor-not-allowed' : 'hover:brightness-110'}`}>Falar com um Especialista</button>
                                <p className="text-center text-xs text-gray-400 mt-4">Garantimos a privacidade dos seus dados corporativos.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};