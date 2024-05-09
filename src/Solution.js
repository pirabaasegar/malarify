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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam.Maecenas at turpis vitae dui laoreet interdum. Nulla malesuada
                        efficitur massa sit amet cursus.
                    </p>
                </div>
            </div>
            <section id="overview" className="overview" data-aos="fade-up">
                <div className="section-title pb-0">
                    <h2>Overview</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam.Maecenas at turpis vitae dui laoreet interdum. Nulla malesuada
                        efficitur massa sit amet cursus.
                    </p>
                </div>
                <div className="container">
                    <div className="row justify-content-center row-gap-5">
                        <div className="row justify-content-center gap-5 flex-row-reverse">
                            <div className="col-lg-4 col-md-6">
                                <img
                                    src="/driver.svg"
                                    alt="Delivery"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="col-lg-5 col-md-6">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                                    rhoncus fermentum sem, eu mattis mi sollicitudin at. Nullam tempus
                                    erat in congue varius. Mauris vitae eros sagittis, porttitor metus
                                    vitae, egestas sapien. Nulla facilisi. Praesent eu congue libero,
                                    vel pharetra ligula. Suspendisse tempus laoreet est eget
                                    imperdiet. Integer laoreet lectus a enim tincidunt mattis.
                                </p>
                            </div>
                        </div>
                        <div className="row justify-content-center gap-5 flex-lg-row">
                            <div className="col-lg-4 col-md-6">
                                <img
                                    src="/driver.svg"
                                    alt="Delivery"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="col-lg-5 col-md-6">
                                <p className="text-lg-end text-start">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                                    rhoncus fermentum sem, eu mattis mi sollicitudin at. Nullam tempus
                                    erat in congue varius. Mauris vitae eros sagittis, porttitor metus
                                    vitae, egestas sapien. Nulla facilisi. Praesent eu congue libero,
                                    vel pharetra ligula. Suspendisse tempus laoreet est eget
                                    imperdiet. Integer laoreet lectus a enim tincidunt mattis.
                                </p>
                            </div>
                        </div>
                        <div className="row justify-content-center gap-5  flex-row-reverse">
                            <div className="col-lg-4 col-md-6">
                                <img
                                    src="/driver.svg"
                                    alt="Delivery"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="col-lg-5 col-md-6">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                                    rhoncus fermentum sem, eu mattis mi sollicitudin at. Nullam tempus
                                    erat in congue varius. Mauris vitae eros sagittis, porttitor metus
                                    vitae, egestas sapien. Nulla facilisi. Praesent eu congue libero,
                                    vel pharetra ligula. Suspendisse tempus laoreet est eget
                                    imperdiet. Integer laoreet lectus a enim tincidunt mattis.
                                </p>
                            </div>
                        </div>
                        <div className="row justify-content-center gap-5">
                            <div className="col-lg-4 col-md-6">
                                <img
                                    src="/driver.svg"
                                    alt="Delivery"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="col-lg-5 col-md-6">
                                <p className="text-lg-end text-start">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                                    rhoncus fermentum sem, eu mattis mi sollicitudin at. Nullam tempus
                                    erat in congue varius. Mauris vitae eros sagittis, porttitor metus
                                    vitae, egestas sapien. Nulla facilisi. Praesent eu congue libero,
                                    vel pharetra ligula. Suspendisse tempus laoreet est eget
                                    imperdiet. Integer laoreet lectus a enim tincidunt mattis.
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
