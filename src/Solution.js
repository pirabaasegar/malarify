import './App.css';
import React, { useEffect } from 'react';

import Header from './components/header';
import Footer from './components/footer';

function App() {
    useEffect(() => {
        document.title = "Solution - Malarify";
    }, []);

    return (
        <>
            <Header />
            <div className="hero">
                <div className="hero-text" data-aos="fade-up">
                    <h1>Our Solution</h1>
                    <p>
                        Malarify Drones revolutionizes healthcare access in Nigeria by deploying a fleet of precision-guided UAVs to swiftly deliver life-saving treatments to remote areas lacking nearby healthcare services.
                    </p>
                </div>
            </div>
            <section id="overview" className="overview" data-aos="fade-up">
                <div className="section-title pb-0">
                    <span>Overview</span>
                    <h2>Innovating Healthcare Delivery with Malarify Drones</h2>
                </div>
                <div className="container">
                    <div className="row justify-content-center row-gap-5">
                        <div className="row justify-content-center gap-5 flex-row-reverse">
                            <div className="col-lg-3 col-md-6">
                                <img
                                    src="/drones.svg"
                                    alt="Delivery"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <p>
                                    Malarify Drones introduce a paradigm shift in healthcare delivery, stationed strategically at every health facility in Nigeria. Equipped with cutting-edge technology, our UAV fleet ensures swift and precise delivery of life-saving treatments to remote areas. By bridging the resource gap, we empower underserved communities with timely access to essential medications, contributing to a healthier nation.
                                </p>
                            </div>
                        </div>
                        <hr className='divider' />
                        <div className="row justify-content-center gap-5 flex-lg-row">
                            <div className="col-lg-3 col-md-6">
                                <img
                                    src="/analytics.svg"
                                    alt="Delivery"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <p className="text-lg-end text-start">
                                    Malarify Drones optimize healthcare expenditure through cost-effective delivery systems. By directly reaching remote areas, we minimize infrastructure costs and enhance resource allocation efficiency. This economic viability not only reduces long-term healthcare expenses but also fosters economic sustainability, driving equitable access to healthcare resources across diverse communities.
                                </p>
                            </div>
                        </div>
                        <hr className='divider' />
                        <div className="row justify-content-center gap-5  flex-row-reverse">
                            <div className="col-lg-4 col-md-6">
                                <img
                                    src="/positive.svg"
                                    alt="Delivery"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <p>
                                    Malarify Drones revolutionize healthcare accessibility in Nigeria, significantly reducing delays in treatment delivery and saving lives. By overcoming geographical barriers, we promote equity and empower underserved communities towards a healthier future. Our innovative approach not only addresses the immediate healthcare crisis but also lays the foundation for a more resilient healthcare system nationwide.
                                </p>
                            </div>
                        </div>
                        <hr className='divider' />
                        <div className="row justify-content-center gap-5">
                            <div className="col-lg-3 col-md-6">
                                <img
                                    src="/map.svg"
                                    alt="Delivery"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <p className="text-lg-end text-start">
                                    Malarify Drones operate on a systematic dispatch schedule, ensuring timely delivery of essential medical supplies from major hospitals to local healthcare facilities. This process guarantees equitable access to healthcare resources across diverse communities, regardless of geographical constraints. By leveraging technology and strategic planning, we streamline the distribution process, maximizing the impact of our life-saving interventions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default App;
