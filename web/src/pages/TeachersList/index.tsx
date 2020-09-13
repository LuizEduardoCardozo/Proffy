import React from 'react';

import PageHeader from '../../components/PageHeader';

import WhatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import "./styles.css";

export default function TeachersList() {

    return (
        <div id="page-teacher-list">
            <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teachers" action="">
                    
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"/>
                    </div>

                </form>
            </PageHeader>
    
            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/44555995?s=460&u=eeac19c118b4447a9471911501b6affed7ee77fb&v=4" alt="Eduardo Cardozo"/>
                        <div>
                            <strong>Luiz Eduardo Cardozo</strong>
                            <span>Física</span>
                        </div>
                    </header>

                    <p>Um professor de física muito bom!</p>

                    <footer>
                        <p>Preço/Hora
                            <strong>R$10,00</strong></p>
                        <button>
                            <img src={WhatsAppIcon} />
                            Entrar em contato
                        </button>
                    </footer>
                </article>
            </main>
        </div> 
    );
} 
