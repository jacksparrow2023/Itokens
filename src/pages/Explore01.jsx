import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import TodayPicks from '../components/layouts/explore-01/TodayPicks'
import todayPickData from '../assets/fake-data/data-today-pick';

const Explore01 = () => {
    return (
        <div>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Discover Digital Artworks & Collect Best NFTz</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <h3>Seu Texto Aqui</h3>
                            </div>
                        </div>
                    </div>
                </div>                    
            </section>
            <TodayPicks data={todayPickData} />
            <Footer />
        </div>
    );
}


export default Explore01;
