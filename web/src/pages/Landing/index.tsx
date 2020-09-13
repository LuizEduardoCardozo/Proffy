import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo.svg';
import LandingImg from '../../assets/images/landing.svg';

import Study from '../../assets/images/icons/study.svg';
import GiveClasses from '../../assets/images/icons/give-classes.svg';

import PurpleHeart from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

function Landing() {
    return( 
        <div id="page-landing">
            <div id="page-landing-content" className="container">
 
                <div className="logo-container" >
                    <img src={Logo} alt="Proffy" />
                    <h2>A sua plataforma de estudos online</h2>
                </div>

                <img src={LandingImg} className="hero-image"/>

                <div className="buttons-container">
                    
                    <Link to="/study" className="study">
                        <img src={Study} alt="Estudar" />
                        Estudar
                    </Link>

                    <Link to="/give-lessions" className="give-lessions">
                        <img src={GiveClasses} alt="Dar aulas" />
                        Dar aulas
                    </Link>

                </div>

                <span className="total-connections">
                    Total de 200 conexões já feitas <img src={PurpleHeart} alt="<3" />
                </span>

            </div>
        </div>
    );
}

export default Landing
 